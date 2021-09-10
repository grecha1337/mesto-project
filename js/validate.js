const showInputError = (
  formElement,
  inpuElement,
  errorMessage,
  { inputErrorClass, errorClass }
) => {
  const errorElement = formElement.querySelector(`.${inpuElement.id}-error`);
  inpuElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (
  formElement,
  inpuElement,
  { inputErrorClass, errorClass }
) => {
  const errorElement = formElement.querySelector(`.${inpuElement.id}-error`);
  inpuElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const toggleButtonState = (
  inputList,
  buttonElement,
  { inactiveButtonClass }
) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const checkInputValidity = (formElement, inpuElement, { ...rest }) => {
  if (!inpuElement.validity.valid) {
    showInputError(
      formElement,
      inpuElement,
      inpuElement.validationMessage,
      rest
    );
  } else {
    hideInputError(formElement, inpuElement, rest);
  }
};

const setEventListener = (
  formElement,
  { inputSelector, submitButtonSelector, ...rest }
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, rest);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement, rest);
    });
  });
};

export const enableValidation = ({ formSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("click", (e) => e.preventDefault());
    setEventListener(formElement, rest);
  });
};
