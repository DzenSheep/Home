let formSubmit = document.querySelector('.popup__form'); // Находим всю форму
let nameInput = document.getElementById('name'); // Находим поле name формы в DOM
let jobInput = document.getElementById('about'); // Находим поле about формы в DOM
let profileName = document.querySelector('.profile__name'); // Выбираем то, что сейчас написано в Имени профиля
let profileAbout = document.querySelector('.profile__about'); // Выбираем то, что сейчас написано в О профиле
let popup = document.querySelector('.popup'); //Выбираем весь контейнер попапа
let profileEdit = document.querySelector('.profile__edit'); // Выбираем кнопку Редактировать профиль
let popupClose = document.querySelector('.popup__close'); //Выбираем кнопку закрыть

function popupOpen () {
  popup.classList.toggle('popup_value-active');
  nameInput.value = profileName.textContent
  jobInput.value = profileAbout.textContent
}

function popupCancel () {
  popup.classList.toggle('popup_value-active');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    popupCancel ()
}

profileEdit.addEventListener('click', popupOpen);
popupClose.addEventListener('click', popupCancel);
formSubmit.addEventListener('submit', formSubmitHandler);

let like = document.querySelectorAll('.elements__like'); 
  like.forEach((like) => like.addEventListener('click', event =>{
    like.classList.toggle ('elements__like_value-active')
  })
  )