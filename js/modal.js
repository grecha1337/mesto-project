const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileAddBtn = document.querySelector(".profile__add-btn");

const popupProfile = document.querySelector(".popup-profile");
const popupPlace = document.querySelector(".popup-place");

const popups = document.querySelectorAll(".popup");

const popupProfileClose = popupProfile.querySelector(".popup__btn-close");
const popupPlaceClose = popupPlace.querySelector(".popup__btn-close");

function openPopup(element) {
  element.classList.add("popup_opened");
  document.addEventListener("keydown", escapeKeyPopup(element));
}

function closePopup(element) {
  element.classList.remove("popup_opened");
  document.removeEventListener("keydown", escapeKeyPopup);
}

profileAddBtn.addEventListener("click", function (event) {
  openPopup(popupPlace);
});

profileEditBtn.addEventListener("click", function (event) {
  openPopup(popupProfile);
});

popupProfileClose.addEventListener("click", function (event) {
  closePopup(popupProfile);
});

popupPlaceClose.addEventListener("click", function (event) {
  closePopup(popupPlace);
});

function escapeKeyPopup(popupElement) {
  return function (e) {
    if (e.key === "Escape") {
      closePopup(popupElement);
    }
  };
}

function closePopupOnClickOverlay(popupSelector) {
  const popupList = Array.from(popupSelector);
  popupList.forEach((popup) => {
    popup.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup")) {
        closePopup(popup);
      }
    });
  });
}

closePopupOnClickOverlay(popups);
