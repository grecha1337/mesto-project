import '../pages/index.css';
import {addCard,elements} from './card';
import { enableValidation } from "./validate";
import {
  getUser,
  setUserInfo,
  createCard,
  changeAvatar,
} from "./api.js";
import { closePopup, openPopup, closePopupOnClickOverlay } from "./modal.js";

const profileTextName = document.querySelector(".profile__text-name");
const profileTextProfession = document.querySelector(
  ".profile__text-profession"
);
const profileAvatar = document.querySelector(".profile__avatar");
export let userId = null;
getUser()
  .then((result) => {
    profileTextName.textContent = result.name;
    profileTextProfession.textContent = result.about;
    profileAvatar.src = result.avatar;
    userId = result._id;
  })
  .catch((err) => {
    console.log(err);
  });


/*
  Обработка форма
*/
const formUserElement = document.querySelector(".popup__form-profile");
const nameProfileInput = formUserElement.querySelector(".popup__name-profile");
const aboutProfileInput = formUserElement.querySelector(
  ".popup__about-profile"
);
const buttonProfile = formUserElement.querySelector(".popup__button-profile");

const formPlaceElement = document.querySelector(".popup__form-place");
const namePlaceInput = formPlaceElement.querySelector(".popup__name-place");
const linkImagePlaceInput =
  formPlaceElement.querySelector(".popup__link-place");
const buttonPlace = formPlaceElement.querySelector(".popup__button-place");

const formAvatarlement = document.querySelector(".popup__form-avatar");
const linkAvatarInput = formAvatarlement.querySelector(".popup__link-avatar");
const buttonAvatar = formAvatarlement.querySelector(".popup__button-avatar");

function formProfileSubmitHandler() {
  buttonProfile.textContent = "Сохранение ...";
  if (nameProfileInput.value && aboutProfileInput.value) {
    setUserInfo(nameProfileInput.value, aboutProfileInput.value)
      .then(() => {
        profileTextName.textContent = nameProfileInput.value;
        profileTextProfession.textContent = aboutProfileInput.value;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        buttonProfile.textContent = "Сохранение";
        closePopup(popupProfile);
      });
  }
}

function formPlaceSubmitHandler() {
  buttonPlace.textContent = "Сохранение ...";
  if (namePlaceInput.value && linkImagePlaceInput.value) {
    createCard(namePlaceInput.value, linkImagePlaceInput.value)
      .then((result) => {
        addCard(result, elements);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        buttonPlace.textContent = "Сохранение";
        closePopup(popupPlace);
      });
  }
}

function formAvatarSubmitHandler() {
  buttonAvatar.textContent = "Сохранение ...";
  if (linkAvatarInput.value) {
    changeAvatar(linkAvatarInput.value)
      .then(() => {
        profileAvatar.src = linkAvatarInput.value;
      })
      .finally(() => {
        buttonAvatar.textContent = "Сохранение";
        closePopup(popupAvatar);
      });
  }
}

formUserElement.addEventListener("submit", formProfileSubmitHandler);
formPlaceElement.addEventListener("submit", formPlaceSubmitHandler);
formAvatarlement.addEventListener("submit", formAvatarSubmitHandler);

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

/*
  Работа с модальными окнами
*/
const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileAddBtn = document.querySelector(".profile__add-btn");
const avatarButton = document.querySelector(".profile__avatar-button");

const popupProfile = document.querySelector(".popup-profile");
const popupPlace = document.querySelector(".popup-place");
const popupAvatar = document.querySelector(".popup-avatar");

const popupProfileClose = popupProfile.querySelector(".popup__btn-close");
const popupPlaceClose = popupPlace.querySelector(".popup__btn-close");
const popupAvatarClose = popupAvatar.querySelector(".popup__btn-close");

profileAddBtn.addEventListener("click", function (event) {
  openPopup(popupPlace);
});

profileEditBtn.addEventListener("click", function (event) {
  openPopup(popupProfile);
});

avatarButton.addEventListener("click", function (event) {
  openPopup(popupAvatar);
});

popupProfileClose.addEventListener("click", function (event) {
  closePopup(popupProfile);
});

popupPlaceClose.addEventListener("click", function (event) {
  closePopup(popupPlace);
});

popupAvatarClose.addEventListener("click", function (event) {
  closePopup(popupAvatar);
});

closePopupOnClickOverlay(".popup");
