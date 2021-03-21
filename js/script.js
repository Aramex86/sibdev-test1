"use strict";

const cupons = [
  {
    tilte: "Пробка на мира",
    description: "Вечер для двоих",
    num: "-50%",
    label: "СКИДКА",
    image: "../assets/img/image1.png",
  },
  {
    tilte: "КИНО И НЕМЦЫ",
    description: "Бесплатный бокал пива",
    num: "ВАРВАР",
    label: "ПРОМОКОД",
    image: "../assets/img/image2.png",
  },
  {
    tilte: "valery cakes",
    description: "Торт",
    num: "30%",
    label: "СКИДКА",
    image: "../assets/img/image3.png",
  },
  {
    tilte: "sushi sell",
    description: "Набор “Праздник”",
    num: "45%",
    label: "СКИДКА",
    image: "../assets/img/image4.png",
  },
  {
    tilte: "mangosteen",
    description: "Фрукт в подарок",
    num: "J130",
    label: "купон",
    image: "../assets/img/image5.png",
  },
  {
    tilte: "теленок табака",
    description: "Стейк “Мачете”",
    num: "20% ",
    label: "СКИДКА",
    image: "../assets/img/image6.png",
  },
  {
    tilte: "fire food",
    description: "Вторая шаурма в подарок",
    num: "ОГОНЬ",
    label: "промокод",
    image: "../assets/img/image7.png",
  },
  {
    tilte: "aroma cremeria",
    description: "Джелато “Пармезан”",
    num: "20%",
    label: "Скидка",
    image: "../assets/img/image8.png",
  },
  {
    tilte: "Пробка на мира",
    description: "Вечер для двоих",
    num: "J130",
    label: "КУПОН",
    image: "../assets/img/image1.png",
  },
  {
    tilte: "КИНО И НЕМЦЫ",
    description: "Бесплатный бокал пива",
    num: "ВАРВАР",
    label: "ПРОМОКОД",
    image: "../assets/img/image2.png",
  },
  {
    tilte: "valery cakes",
    description: "Торт",
    num: "30%",
    label: "СКИДКА",
    image: "../assets/img/image3.png",
  },
  {
    tilte: "sushi sell",
    description: "Набор “Праздник”",
    num: "45%",
    label: "СКИДКА",
    image: "../assets/img/image7.png",
  },
];

const cardWrap = document.querySelector(".card__wrapp");
const menuItems = document.querySelectorAll(".sidebar__list-item");
const menuImg = document.querySelectorAll(".sidebar__list-item img");
const headerName = document.querySelector(".header__wrapp-heading");
const mobileBnt = document.querySelector('.mobile__menu-btn');

const displayCupons = function (cupon) {
  cupon.forEach(({ tilte, description, num, label, image }) => {
    const html = `
    <div class="card__wrapp-card">
    <span class='poligon_left'></span>
    <span class='poligon_right'></span>
        <div class="card__wrapp-card-left">
            <p class="card__wrapp-card-left-title">${tilte.toUpperCase()}</p>
            <p class="card__wrapp-card-left-subtitle">${description}</p>
            <p class="card__wrapp-card-left-num">${num}</p>
            <p class="card__wrapp-card-left-label">${label.toUpperCase()}</p>
        </div>
        <div class="card__wrapp-card-right">
            <img src=${image} alt="img" />
        </div>
    </div>
    
    `;
    cardWrap.insertAdjacentHTML("afterbegin", html);
  });
};

displayCupons(cupons);

const activeMenuItem = function (e) {
  menuItems.forEach((el) => el.classList.remove("active"));
  e.currentTarget.classList.add("active");
  const text = e.currentTarget.textContent;

  headerName.textContent = text;
};

menuItems.forEach((item) => {
  item.addEventListener("click", activeMenuItem);
});

mobileBnt.addEventListener('click',function(){
  console.log('click');
})