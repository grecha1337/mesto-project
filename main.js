(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.items,o=e.render;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._render=o,this._selector=document.querySelector(n)}var n,r;return n=t,(r=[{key:"addItem",value:function(e){this._selector.prepend(e)}},{key:"renderItem",value:function(){var e=this;this._items.forEach((function(t){e._render(t)}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,r;return t=e,(r=[{key:"likeAdding",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._checkResponse)}},{key:"likeRemoving",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"cardRemoving",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._checkResponse)}},{key:"userInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._checkResponse)}},{key:"profileInfoChanging",value:function(e,t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"newCard",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"avatarRefreshing",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_handleEscClose",(function(e){console.log(e),"Escape"===e.key&&n.close()})),i(this,"_closePopupOnClickOverlay",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__btn-close"))&&n.close()})),this._popupElement=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popupElement.addEventListener("mousedown",this._closePopupOnClickOverlay)}}])&&o(t.prototype,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e,t){this._popupElement.querySelector(".popup-image__image").src=e,this._popupElement.querySelector(".popup-image__image").alt=t,this._popupElement.querySelector(".popup-image__name").innerText=t,c(p(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),a}(a);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formElement=n._popupElement.querySelector(".popup__form"),n._buttonSubmit=n._popupElement.querySelector(".popup__button"),n._handleFormSubmit=t,n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;m(b(a.prototype),"setEventListeners",this).call(this),console.log(),this._formElement?this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})):this._buttonSubmit.addEventListener("click",(function(t){e._handleFormSubmit(t)}))}},{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._formElement.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){m(b(a.prototype),"close",this).call(this),this._formElement&&this._formElement.reset()}},{key:"loadingDisplaing",value:function(e){this._buttonSubmit.textContent=e?"Сохранение...":"Сохранить"}}])&&_(t.prototype,n),a}(a);function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.userNameSelector,r=t.userDescriptionSelector,o=t.userAvatarSelector,i=t.getUserData;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(".".concat(n)),this._userDescriptionElement=document.querySelector(".".concat(r)),this._userAvatarElement=document.querySelector(".".concat(o)),this._getUserData=i}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._getUserData()}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userDescription,r=e.userAvatar;this._userNameElement.textContent=null!=t?t:this._userNameElement.textContent,this._userDescriptionElement.textContent=null!=n?n:this._userDescriptionElement.textContent,this._userAvatarElement.src=null!=r?r:this._userAvatarElement.src}}])&&k(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputList=Array.from(n.querySelectorAll(t.inputSelector)),this._submitButton=n.querySelector(t.submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass,this.inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){e.classList.add(this._inputError),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e,t){e.classList.remove(this._inputError),t.textContent=""}},{key:"_isValid",value:function(e,t){e.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1):(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0)}},{key:"_hasInvalidInput",value:function(e){return e.every((function(e){return!0===e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){var t=this;this.toggleButtonState(),this._inputList.forEach((function(n){var r=e.querySelector(".".concat(n.id,"-error"));n.addEventListener("input",(function(){t.toggleButtonState(),t._isValid(n,r)}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._checkInputValidity(this._formElement)}}])&&S(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n,r){var o=t.data,i=t.handleCardClick,a=t.handleLikeClick,u=t.handleDeleteIconClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selector=n,this._link=o.link,this._name=o.name,this._id=o._id,this._owner=o.owner._id,this._likes=o.likes,this._handleLikeClick=a,this._handleDeleteIconClick=u,this._handleCardClick=i,this._userId=r}var t,n;return t=e,(n=[{key:"_getElement",value:function(){return document.querySelector(this._selector).content.querySelector(".element").cloneNode(!0)}},{key:"generate",value:function(){this.element=this._getElement(),this.element.id=this._id;var e=this.element.querySelector(".element__image");e.setAttribute("src",this._link),e.setAttribute("alt",this._name),e.setAttribute("id",this._id),this.element.querySelector(".element__title").textContent=this._name,this.element.querySelector(".element__like-quantity").textContent=this._likes.length;var t=this.element.querySelector(".element__trash");t.setAttribute("id",this._id);var n=this.element.querySelector(".element__btn-like");return this._searchLikeId(this._likes,n),this._searchDeleteButton(this._owner,t),this._setEventListeners(n,t,e),this.element}},{key:"_searchLikeId",value:function(e,t){var n=this;e.forEach((function(e){e._id===n._userId&&t.classList.add("element__btn-like_active")}))}},{key:"_searchDeleteButton",value:function(e,t){e!==this._userId&&(t.style.display="none")}},{key:"_setEventListeners",value:function(e,t,n){var r=this;e.addEventListener("click",(function(e){r._handleLikeClick(e)})),t.addEventListener("click",(function(){r._handleDeleteIconClick()})),n.addEventListener("click",(function(e){r._handleCardClick(e)}))}},{key:"updateLikesView",value:function(e,t){t.target.classList.toggle("element__btn-like_active"),t.target.closest(".element").querySelector(".element__like-quantity").textContent=e.likes.length}}])&&C(t.prototype,n),e}(),O=document.querySelector(".profile__edit-btn"),I=document.querySelector(".popup__name-profile"),j=document.querySelector(".popup__about-profile"),q=document.querySelector(".profile__add-btn"),D=document.querySelector(".popup__form-avatar"),R=document.querySelector(".profile__avatar-button"),P=document.querySelector(".popup__form-profile"),A=document.querySelector(".popup__form-place"),B=document.querySelector(".popup__confirm-button"),U={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x="",V=null,N=new r({baseUrl:"https://nomoreparties.co/v1/plus-cohort-2",headers:{authorization:"44636783-74cb-4589-8742-e9314e17f901","Content-Type":"application/json"}}),F=new E({userNameSelector:"profile__text-name",userDescriptionSelector:"profile__text-profession",userAvatarSelector:"profile__avatar",getUserData:function(){return N.userInfo()}});Promise.all([F.getUserInfo(),N.getInitialCards()]).then((function(e){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];F.setUserInfo({userName:i.name,userDescription:i.about,userAvatar:i.avatar}),x=i._id,(V=new t({items:a.reverse(),render:function(e){V.addItem(J(e))}},".elements")).renderItem()})).catch((function(e){console.log(e)}));var J=function(e){var t=new L({data:e,handleCardClick:function(e){$.open(e.target.src,e.target.alt)},handleLikeClick:function(n){n.target.classList.contains("element__btn-like_active")?N.likeRemoving(e._id).then((function(e){t.updateLikesView(e,n)})).catch((function(e){console.log(e)})):N.likeAdding(e._id).then((function(e){t.updateLikesView(e,n)})).catch((function(e){console.log(e)}))},handleDeleteIconClick:function(){G.open(),B.setAttribute("id",e._id)}},"#element",x);return t.generate()},H=new g(".popup-profile",(function(e){H.loadingDisplaing(!0),N.profileInfoChanging(e.username,e.userwork).then((function(t){F.setUserInfo({userName:e.username,userDescription:e.userwork}),H.close()})).catch((function(e){console.log(e)})).finally((function(){H.loadingDisplaing(!1)}))}));H.setEventListeners();var M=new g(".popup-place",(function(e){M.loadingDisplaing(!0),N.newCard(e.placename,e.placelink).then((function(e){V.addItem(J(e)),M.close()})).catch((function(e){console.log(e)})).finally((function(){M.loadingDisplaing(!1)}))}));M.setEventListeners();var z=new g(".popup-avatar",(function(e){z.loadingDisplaing(!0),N.avatarRefreshing(e.linkname).then((function(t){F.setUserInfo({userAvatar:e.linkname}),z.close()})).catch((function(e){console.log(e)})).finally((function(){z.loadingDisplaing(!1)}))}));z.setEventListeners();var $=new h(".popup-image");$.setEventListeners();var G=new g(".popup__delete-confirm",(function(e){N.cardRemoving(e.target.id).then((function(){document.getElementById(e.target.id).closest(".element").remove(),G.close()}))}));G.setEventListeners(),new w(U,P).enableValidation();var K=new w(U,D);K.enableValidation();var Q=new w(U,A);Q.enableValidation(),R.addEventListener("click",(function(){K.toggleButtonState(),z.open()})),O.addEventListener("click",(function(){F.getUserInfo().then((function(e){I.value=e.name,j.value=e.about})).catch((function(e){console.log(e)})),H.open()})),q.addEventListener("click",(function(){Q.toggleButtonState(),M.open()}))})();