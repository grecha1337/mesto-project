import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._buttonSubmit = this._popupElement.querySelector(".popup__button");
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    console.log();
    if (this._formElement) {
      this._formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        this._handleFormSubmit(this._getInputValues());
      });
    } else {
      this._buttonSubmit.addEventListener("click", (e) => {
        this._handleFormSubmit(e);
      });
    }
  }

  _getInputValues() {
    this._inputList = this._formElement.querySelectorAll(".popup__input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close() {
    super.close();
    if (this._formElement) {
      this._formElement.reset();
    }
  }

  loadingDisplaing(isLoading) {
    if (isLoading) {
      this._buttonSubmit.textContent = "Сохранение...";
    } else {
      this._buttonSubmit.textContent = "Сохранить";
    }
  }
}
