import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }

  open(src, name) {
    this._popupElement.querySelector(".popup-image__image").src = src;
    this._popupElement.querySelector(".popup-image__image").alt = name;
    this._popupElement.querySelector(".popup-image__name").innerText = name;
    super.open();
  }
}
