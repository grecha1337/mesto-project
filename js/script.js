import { enableValidation } from "./validate.js";

// const popupImage = document.querySelector('.popup-image');
// const popupImageClose = popupImage.querySelector('.popup-image__btn-close');
// const popupImageName = popupImage.querySelector('.popup-image__name');
// const popupImageLink = popupImage.querySelector('.popup-image__image');

// const formElement = popup.querySelector('.popup__form');
// const nameInput = formElement.querySelectorAll('.popup__input')[0];
// const jobInput = formElement.querySelectorAll('.popup__input')[1];

// const formPlaceElement = popupPlace.querySelector('.popup__form');
// const namePlaceInput = formPlaceElement.querySelectorAll('.popup__input')[0];
// const linkImageInput = formPlaceElement.querySelectorAll('.popup__input')[1];

// const profileTextName = document.querySelector('.profile__text-name');
// const profileTextProfession = document.querySelector('.profile__text-profession');

// const elements = document.querySelector('.elements');
// const profileAddBtn = document.querySelector('.profile__add-btn');


// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ]; 


// function createCard(cardData) {
//   const cardTemplate = document.querySelector("#element").content;
//   const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
//   const cardTitle =  cardElement.querySelector('.element__title');
//   const cardImage = cardElement.querySelector('.element__image');
//   const cardTrash = cardElement.querySelector('.element__trash');
//   const elementLike = cardElement.querySelector('.element__btn-like');
//   cardTitle.textContent = cardData.name;
//   cardImage.src = cardData.link;
//   cardImage.alt = cardData.name;
//   cardImage.addEventListener('click',function(event){
//     popupImageLink.src = cardData.link;
//     popupImageName.textContent = cardData.name;
//     openPopup(popupImage);
//   })
//   cardTrash.addEventListener('click',function(event){
//     deleteCart(cardElement);
//   })
//   elementLike.addEventListener('click',function(event){
//     like(elementLike);
//   })
//   return cardElement;
// }

// function addCard(cardElement, cardContainer) {
//   const card = createCard(cardElement);
//   cardContainer.prepend(card);
// }

// function deleteCart(element) {
//   element.remove();
// }

// initialCards.forEach ((item) => {
//   addCard(item, elements);
// });

// function like(element) {
//   element.classList.toggle('element__btn-like_active');
// }

// function formProfileSubmitHandler (evt) {
//   evt.preventDefault(); 
//   if(nameInput.value && jobInput.value) {
//     profileTextName.textContent = nameInput.value;
//     profileTextProfession.textContent = jobInput.value;
//     closePopup(popup);
//   }
// }

// function formPlaceSubmitHandler (evt) {
//   evt.preventDefault(); 
//   if(namePlaceInput.value && linkImageInput.value) {
//     addCard({
//       name : namePlaceInput.value,
//       link : linkImageInput.value
//     }, elements)
//     closePopup(popupPlace);
//   }
// }

// profileEditBtn.addEventListener('click', function(event){
//   openPopup(popup);
// });



// profileAddBtn.addEventListener('click', function(event){
//   openPopup(popupPlace);
// });

// popupPlaceClose.addEventListener('click', function(event){
//   closePopup(popupPlace);
// });

// popupImageClose.addEventListener('click', function(event){
//   closePopup(popupImage);
// });

// formElement.addEventListener('submit', formProfileSubmitHandler); 
// formPlaceElement.addEventListener('submit', formPlaceSubmitHandler); 

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
