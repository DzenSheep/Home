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
  'Первое предложение',
  'Второе предложение',
  'Третье предложение',
  'Четвертое предложение',
  'Пятое предложение',
  'Шестое предложение',
  'Седьмое предложение',
  'Восьмое предложение',
];

function Voice () {
alert(arrayRandElement(arr))};

const aarrr = document.querySelector('.button');
aarrr.addEventListener('click', Voice);