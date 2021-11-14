import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor({ selector, buttonSelector }) {
        super(selector);
        this._formElement = this._popupElement.querySelector(".popup__form");
        this._buttonSubmit = this._popupElement.querySelector(buttonSelector);
    }

    setSubmitAction(sendRequest) {
        this._sendRequest = sendRequest;
    }

    setEventListeners() {
        super.setEventListeners();
        this._buttonSubmit.addEventListener("click", () => {
            this._sendRequest();
        });
    }
}