/*
  Не уверен, что так стало лучше
*/

import {
  setUserInfo,
} from "../components/api.js";

import {
  closePopup,
} from "../components/modal.js";

export function formProfileSubmitHandler(btn, nameInput, aboutInput,  nameText, professionText, popup) {
  console.log(aboutInput.value)
  btn.textContent = "Сохранение ...";
  setUserInfo(nameInput.value, aboutInput.value)
    .then(() => {
      nameText.textContent = nameInput.value;
      professionText.textContent = aboutInput.value;
      closePopup(popup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      btn.textContent = "Сохранение";
    });
}