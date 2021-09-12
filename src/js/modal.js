export function openPopup(element) {
  element.classList.add("popup_opened");
  document.addEventListener("keydown", escapeKeyPopup(element));
}

export function closePopup(element) {
  element.classList.remove("popup_opened");
  document.removeEventListener("keydown", escapeKeyPopup);
}

function escapeKeyPopup(popupElement) {
  return function (e) {
    if (e.key === "Escape") {
      closePopup(popupElement);
    }
  };
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
