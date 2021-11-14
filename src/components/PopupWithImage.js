import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(selector) {
      super(selector);
  }
  openPopup(src, name) {
      super.openPopup();
      this._popupElement.querySelector(".popup-image__image").setAttribute("src", src);
      this._popupElement.querySelector(".popup-image__image").setAttribute("alt", name);
      this._popupElement.querySelector(".popup-image__name").textContent = name;
  }
}