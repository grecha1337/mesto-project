export function openPopup(element) {
  element.classList.add("popup_opened");
  document.addEventListener("keydown", handleESC);
}

export function openPopupImage(popupImageSelector, linkImage, nameCard) {
  const popupImage = document.querySelector(popupImageSelector);
  const imageElement = popupImage.querySelector(".popup-image__image");
  const nameElement = popupImage.querySelector(".popup-image__name");
  imageElement.src = linkImage;
  imageElement.alr = nameCard;
  nameElement.textContent = nameCard;
  openPopup(popupImage)
}

export function closePopup(element) {
  element.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleESC);
}

function handleESC(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

export function closePopupOnClickOverlay(popupSelector) {
  const popupElements = document.querySelectorAll(popupSelector);
  const popupList = Array.from(popupElements);
  popupList.forEach((popup) => {
    popup.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("popup")) {
        closePopup(popup);
      }
    });
  });
}
