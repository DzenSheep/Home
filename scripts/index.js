let like = document.querySelectorAll('.elements__like'); 
  like.forEach((like) => like.addEventListener('click', event =>{
    like.classList.toggle ('elements__like_value-active')
  })
  )


function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

// Определяем массив
var arr = [
  'Вместе смотрим "Редакцию"',
  'Обложиться вкусняшками и смотреть кино',
  'Новогоднее настроение: Смотрим новогодний фильм!',
  'Новогоднее настроение: Сделать новогоднее укрошение!',
  'Совместные воспоминания: Нарисуй события',
  'Совместные воспоминания: Смотрим фотьки',
  'Совместная прогулка',
  'Совместная игра в Mobile Legends',
  'Угадай мелодию: "Овощевоз"',
  '"Загадка дня"',
  'Сеанс тех.поддержки',
  '"Задание дня"',
  'Совместная доработка "Рандомайзера"',
  'Игра "Имя из шляпы"'
];

function Voice () {
alert(arrayRandElement(arr))};

const aarrr = document.querySelector('.button');
const center = document.querySelector('.center');
const text = document.querySelector('.center__picture_text');
const pictureClose = document.querySelector('.center__picture_close');
pictureClose.addEventListener('click', event =>{
  center.classList.toggle ('center__active');
})

aarrr.addEventListener('click', event => {
  center.classList.toggle ('center__active');
  text.textContent = arrayRandElement(arr);
});


const centerCats = document.querySelector('.center__cats');//Выбрали попап, где будет котик
const centerCat = document.querySelector('.center__cat');//Выбрали котика в попапе
const catImage = document.querySelectorAll('.cat__image');//Выбрали все фото котиков на странице

catImage.forEach((catImage) => catImage.addEventListener('click', event =>{
  centerCats.classList.toggle('center__cats_active')
  centerCat.src = catImage.src;
}))

const catClose = document.querySelector('.center__cat_close').addEventListener('click', event =>{
  centerCats.classList.remove('center__cats_active');

})

const anchors = document.querySelectorAll('a[href*="#"]') //Делаем переход по любой ссылке плавным

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}