import "../pages/index.css";
import { addCard, elements } from "./card";
import { enableValidation, toggleButtonState } from "./validate";
import {
  getInitialProfile,
  getInitialCards,
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

Promise.all([getInitialProfile(), getInitialCards()])
  .then(([userData, cardArray]) => {
    profileTextName.textContent = userData.name;
    profileTextProfession.textContent = userData.about;
    profileAvatar.src = userData.avatar;
    userId = userData._id;
    cardArray.reverse().forEach((item) => {
      addCard(item, elements);
    });
  })
  .catch((err) => {
    console.log(err);
  });

/*
  Обработка форм
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

const formAvatarElement = document.querySelector(".popup__form-avatar");
const linkAvatarInput = formAvatarElement.querySelector(".popup__link-avatar");
const buttonAvatar = formAvatarElement.querySelector(".popup__button-avatar");

function formProfileSubmitHandler() {
  buttonProfile.textContent = "Сохранение ...";
  setUserInfo(nameProfileInput.value, aboutProfileInput.value)
    .then(() => {
      profileTextName.textContent = nameProfileInput.value;
      profileTextProfession.textContent = aboutProfileInput.value;
      closePopup(popupProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonProfile.textContent = "Сохранение";
    });
}

function formPlaceSubmitHandler() {
  buttonPlace.textContent = "Сохранение ...";
  createCard(namePlaceInput.value, linkImagePlaceInput.value)
    .then((result) => {
      addCard(result, elements);
      formPlaceElement.reset();
      toggleButtonState([namePlaceInput, linkImagePlaceInput], buttonPlace, {
        inactiveButtonClass: "popup__button_disabled",
      });
      closePopup(popupPlace);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonPlace.textContent = "Сохранение";
    });
}

function formAvatarSubmitHandler() {
  buttonAvatar.textContent = "Сохранение ...";
  changeAvatar(linkAvatarInput.value)
    .then(() => {
      profileAvatar.src = linkAvatarInput.value;
      formAvatarElement.reset();
      toggleButtonState([linkAvatarInput], buttonAvatar, {
        inactiveButtonClass: "popup__button_disabled",
      });
      closePopup(popupAvatar);
    })
    .finally(() => {
      buttonAvatar.textContent = "Сохранение";
    });
}

formUserElement.addEventListener("submit", formProfileSubmitHandler);
formPlaceElement.addEventListener("submit", formPlaceSubmitHandler);
formAvatarElement.addEventListener("submit", formAvatarSubmitHandler);

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
const popupImage = document.querySelector(".popup-image");

const popupProfileClose = popupProfile.querySelector(".popup__btn-close");
const popupPlaceClose = popupPlace.querySelector(".popup__btn-close");
const popupAvatarClose = popupAvatar.querySelector(".popup__btn-close");
const popupImageClose = popupImage.querySelector(".popup__btn-close");

profileAddBtn.addEventListener("click", () => {
  openPopup(popupPlace);
});

profileEditBtn.addEventListener("click", () => {
  nameProfileInput.value = profileTextName.textContent;
  aboutProfileInput.value = profileTextProfession.textContent;
  openPopup(popupProfile);
});

avatarButton.addEventListener("click", () => {
  openPopup(popupAvatar);
});

popupProfileClose.addEventListener("click", () => {
  closePopup(popupProfile);
});

popupPlaceClose.addEventListener("click", () => {
  closePopup(popupPlace);
});

popupAvatarClose.addEventListener("click", () => {
  closePopup(popupAvatar);
});

popupImageClose.addEventListener("click", () => {
  closePopup(popupImage);
});

closePopupOnClickOverlay(".popup");
