import "./index.css";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserIfno.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {
  buttonEdit,
  nameInput,
  jobInput,
  addButton,
  linkForm,
  avatarConteiner,
  userForm,
  cardForm,
  objectForm,
  confirmButton
} from "../components/constant";
//import PopupWithConfirm from "../components/PopupWithConfirm.js";

export let userId = "";
let cardGallery = null;

export const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-2",
  headers: {
    authorization: "44636783-74cb-4589-8742-e9314e17f901",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  userNameSelector: "profile__text-name",
  userDescriptionSelector: "profile__text-profession",
  userAvatarSelector: "profile__avatar",
  getUserData: () => {
    return api.userInfo();
  },
});

//загрузка данных о пользователе и о карточках
const loadData = () => {
  Promise.all([userInfo.getUserInfo(), api.getInitialCards()])
    .then(([userData, cardArray]) => {
      userInfo.setUserInfo({
        userName: userData.name,
        userDescription: userData.about,
        userAvatar: userData.avatar,
      });
      userId = userData._id;
      cardGallery = new Section(
        {
          items: cardArray.reverse(),
          render: (item) => {
            cardGallery.addItem(createCard(item));
          },
        },
        ".elements"
      );
      cardGallery.renderItem();
    })
    .catch((err) => {
      console.log(err);
    });
};
loadData();

///функция создания карточки
const createCard = (cardData) => {
  const card = new Card(
    {
      data: cardData,
      handleCardClick: (evt) => {
        popupImage.open(evt.target.src, evt.target.alt);
      },
      handleLikeClick: (evt) => {
        if (!evt.target.classList.contains("element__btn-like_active")) {
          api
            .likeAdding(cardData._id)
            .then((res) => {
              card.updateLikesView(res, evt);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .likeRemoving(cardData._id)
            .then((res) => {
              card.updateLikesView(res, evt);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
      handleDeleteIconClick: () => {
        confirmPopup.open();
        confirmButton.setAttribute('id', cardData._id);
      },
    },
    "#element",
    userId
  );

  return card.generate();
};

// Попап - данные пользователя
const popupFormUser = new PopupWithForm(".popup-profile", (inputList) => {
  popupFormUser.loadingDisplaing(true);
  api
    .profileInfoChanging(inputList.username, inputList.userwork)
    .then((res) => {
      userInfo.setUserInfo({
        userName: inputList.username,
        userDescription: inputList.userwork,
      });
      popupFormUser.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupFormUser.loadingDisplaing(false);
    });
});
popupFormUser.setEventListeners();

// Попап - работа с карточками
const popupFormCard = new PopupWithForm(".popup-place", (inputList) => {
  popupFormCard.loadingDisplaing(true);
  api
    .newCard(inputList.placename, inputList.placelink)
    .then((res) => {
      cardGallery.addItem(createCard(res));
      popupFormCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(function () {
      popupFormCard.loadingDisplaing(false);
    });
});
popupFormCard.setEventListeners();

//Попап для аватарки
const popupFormAvatar = new PopupWithForm(".popup-avatar", (inputList) => {
  popupFormAvatar.loadingDisplaing(true);
  api
    .avatarRefreshing(inputList.linkname)
    .then((res) => {
      userInfo.setUserInfo({ userAvatar: inputList.linkname });
      popupFormAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupFormAvatar.loadingDisplaing(false);
    });
});

popupFormAvatar.setEventListeners();

//Попап для просмотр карточек
const popupImage = new PopupWithImage(".popup-image");
popupImage.setEventListeners();

//Попап для подтверждения удаления
const confirmPopup = new PopupWithForm(".popup__delete-confirm", (evt) => {
  api.cardRemoving(evt.target.id).then(() => {
    document.getElementById(evt.target.id).closest(".element").remove();
    confirmPopup.close();
  });
});
confirmPopup.setEventListeners();

//Валидация данных пользователя
const userFormValidator = new FormValidator(objectForm, userForm);
userFormValidator.enableValidation();

//Валидация аватарки
const avatarFormValidator = new FormValidator(objectForm, linkForm);
avatarFormValidator.enableValidation();

//Валидация карт
const cardFormValidator = new FormValidator(objectForm, cardForm);
cardFormValidator.enableValidation();

//Открытие попапа для изменения аватарки
avatarConteiner.addEventListener("click", function () {
  avatarFormValidator.toggleButtonState();
  popupFormAvatar.open();
});

//Открытие попапа профиля
buttonEdit.addEventListener("click", () => {
  userInfo
    .getUserInfo()
    .then((res) => {
      nameInput.value = res.name;
      jobInput.value = res.about;
    })
    .catch((err) => {
      console.log(err);
    });
  popupFormUser.open();
});

//Открытие попапа для добавления карточек
addButton.addEventListener("click", function () {
  cardFormValidator.toggleButtonState();
  popupFormCard.open();
});
