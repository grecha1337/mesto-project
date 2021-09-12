import { getInitialCards, deleteCard, like, dislike } from "./api";
import { userId } from "./index";

getInitialCards()
  .then((result) => {
    result.forEach((item) => {
      addCard(item, elements);
    });
  })
  .catch((err) => {
    console.log(err);
  });

export const elements = document.querySelector(".elements");
function renderCard(cardData) {
  const cardTemplate = document.querySelector("#element").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardTitle = cardElement.querySelector(".element__title");
  const cardImage = cardElement.querySelector(".element__image");
  const cardTrash = cardElement.querySelector(".element__trash");
  const cardLikenQuantity = cardElement.querySelector(
    ".element__like-quantity"
  );
  const cardlikeElement = cardElement.querySelector(".element__btn-like");
  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  console.log(cardData);
  cardLikenQuantity.textContent = cardData.likes.length;
  if (!hasUserCard(userId, cardData.owner._id)) {
    cardTrash.style.display = "none";
  }
  if (isСontainsLikeByUser(userId, cardData.likes)) {
    cardlikeElement.classList.add("element__btn-like_active");
  }
  cardTrash.addEventListener("click", () => {
    removeMyCard(cardElement, cardData._id);
  });
  cardlikeElement.addEventListener("click", () => {
    likeHandler(cardlikeElement, cardData._id, cardLikenQuantity);
  });
  return cardElement;
}

export function addCard(cardElement, cardContainer) {
  const card = renderCard(cardElement);
  cardContainer.prepend(card);
}

function removeMyCard(cardElement, cardId) {
  deleteCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

function likeHandler(cardlikeElement, cardId, likenQuantity) {
  if (!cardlikeElement.classList.contains("element__btn-like_active")) {
    like(cardId)
      .then((result) => {
        cardlikeElement.classList.toggle("element__btn-like_active");
        likenQuantity.textContent = result.likes.length;
      })
      .catch((err) => console.log(err));
  } else {
    dislike(cardId)
      .then((result) => {
        cardlikeElement.classList.toggle("element__btn-like_active");
        likenQuantity.textContent = result.likes.length;
      })
      .catch((err) => console.log(err));
  }
}

/*
  Принадлежит ли карточка текущему пользователю
*/
function hasUserCard(userId, cardUserId) {
  return userId === cardUserId ? true : false;
}

/*
  Ставил ли пользователь раньше лайк
*/
function isСontainsLikeByUser(userId, likes) {
  const likesArray = Array.from(likes);
  return likesArray.some(function (el) {
    if (el._id === userId) {
      console.log(el._id + userId);
      return el._id === userId;
    }
    return false;
  });
}
