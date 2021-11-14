import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Api from "../components/Api.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserIfno";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithConfirm from "../components/PopupWithConfirm";
import {
  avatarConteiner,
  buttonEdit,
  addButton,
  nameInput,
  jobInput,
  objectForm,
  profileObject,
} from "../components/constant"

let userId = "";
let cardGallery = null;

/**
 * экземпляр класса Api
 */
const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-2",
  headers: {
    authorization: "44636783-74cb-4589-8742-e9314e17f901",
    "Content-Type": "application/json",
  },
});

///экземпляр класса UserInfo
const userData = new UserInfo({
  data: profileObject,
});

///создаем экземпляр класса для попапа с картинкой и вызываем все его слушатели
const popupWithImage = new PopupWithImage(".popup-image");
popupWithImage.setEventListeners();

///создаем экземпляр класса для попапа с изменением аватарки
const popupLinkAvatar = new PopupWithForm({
  selector: ".popup-avatar",
  buttonSelector: ".popup__button-avatar",
  handleFormSubmit: (objectInput) => {
    popupLinkAvatar.loadingDisplaing(true);
    api
      .refreshAvatar(objectInput.linkname)
      .then((res) => {
        userData.setUserAvatar({ avatar: res.avatar });
        popupLinkAvatar.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupLinkAvatar.loadingDisplaing(false);
      });
  },
});
popupLinkAvatar.setEventListeners();
avatarConteiner.addEventListener("click", () => {
  linkFormValidation.setButtonState();
  popupLinkAvatar.openPopup();
});

///создаем экземпляр класса для попапа создания новой карточки
const popupCard = new PopupWithForm({
  selector: ".popup-place",
  buttonSelector: ".popup__button-place",
  handleFormSubmit: (objectInput) => {
    popupCard.loadingDisplaing(true);
    api
      .pushNewCard(objectInput.placename, objectInput.placelink)
      .then((res) => {
        const userCard = createCard(res);
        cardGallery.addItem(userCard);
        popupCard.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupCard.loadingDisplaing(false);
      });
  },
});
popupCard.setEventListeners();
addButton.addEventListener("click", () => {
  placeFormValidation.setButtonState();
  popupCard.openPopup();
});

///создаем экземпляр класса для попапа с инфо
const popupUser = new PopupWithForm({
  selector: ".popup-profile",
  buttonSelector: ".popup__button-profile",
  handleFormSubmit: (objectInput) => {
    popupUser.loadingDisplaing(true);
    api
      .changeProfileInfo(objectInput.username, objectInput.userwork)
      .then((res) => {
        userData.setUserInfo({ name: res.name, about: res.about });
        popupUser.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupUser.loadingDisplaing(false);
      });
  },
});
popupUser.setEventListeners();
buttonEdit.addEventListener("click", () => {
  popupUser.openPopup();
  nameInput.value = userData.getUserInfo().userName;
  jobInput.value = userData.getUserInfo().userDescription;
  userFormValidation.setButtonState();
});

///экземпляр класса для попапа подтверждения удаления картинки
const confirmPopup = new PopupWithConfirm({
  selector: ".popup-confirm",
  buttonSelector: ".popup__confirm-button",
});
confirmPopup.setEventListeners();

///запускаем валидацию формы данные пользователя
const userFormValidation = new FormValidator(objectForm, ".popup__form-profile");
userFormValidation.enableValidation();

///запускаем валидацию формы созжание новой карточки
const placeFormValidation = new FormValidator(objectForm, ".popup__form-place");
placeFormValidation.enableValidation();

//запускаем валидацию формы Аватарки
const linkFormValidation = new FormValidator(objectForm, ".popup__form-avatar");
linkFormValidation.enableValidation();

///функция создания карточки
const createCard = (cardData) => {
  const card = new Card(
    {
      data: cardData,
      handleCardClick: () => {
        popupWithImage.openPopup(cardData.link, cardData.name);
      },
      handleLikeClick: (evt) => {
        if (!evt.target.classList.contains("element__btn-like_active")) {
          api
            .addLike(cardData._id)
            .then((res) => {
              console.log(res);
              card.updateLikesView(res);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .removeLike(cardData._id)
            .then((res) => {
              card.updateLikesView(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
      handleDeleteIconClick: () => {
        confirmPopup.setSubmitAction(() => {
          api.removeCard(cardData._id).then(() => {
            card.removeElement();
            confirmPopup.closePopup();
          });
        });
        confirmPopup.openPopup();
      },
    },
    "#element",
    userId
  );

  return card.generate();
};

///начальная загрузка информации с сервера
const loadData = () => {
  Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userObject, cardArray]) => {
      userData.setUserInfo({
        name: userObject.name,
        about: userObject.about,
      });
      userData.setUserAvatar({ avatar: userObject.avatar });
      userId = userObject._id;
      cardGallery = new Section(
        {
          items: cardArray.reverse(),
          renderer: (item) => {
            cardGallery.addItem(createCard(item));
          },
        },
        ".elements"
      );
      cardGallery.renderItems();
    })
    .catch((err) => {
      console.log(err);
    });
};
loadData();
