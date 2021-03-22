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
const headerName = document.querySelector(".header__wrapp-heading");
const mobileBnt = document.querySelector(".mobile__menu-btn");
const mobileBntClose = document.querySelector(".close");
const sidebarMobile = document.querySelector(".sidebar__wrapp--mobile");
const sideBarMobileOepen = document.querySelector(".sidebar__open");
const displayMenuText = document.querySelectorAll(".mobile__text");
const logoImg = document.querySelector(".sidebar__logo img");
const inputWraper = document.querySelector('.header__wrapp-input');
const headerWraper = document.querySelector('.header__wrapp');
const bodyWrapp = document.querySelector('.body__wrapp');

const width = window.innerWidth;

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

mobileBnt.addEventListener("click", function () {
  sidebarMobile.classList.toggle("sidebar__open");
  this.classList.toggle("close");
  displayMenuText.forEach((item) => {
    item.classList.toggle("mobile__text");
  });
});

const checkWidth = function () {
  if (width <= 901) {
   logoImg.setAttribute('src',`../assets/icons/sidebar/mobile/logo.svg`);
  }
};
checkWidth();


let scrollPos = 0;

const checkPosition =function(){
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    headerName.classList.remove('hidden');
    inputWraper.classList.remove('move__top');
    headerWraper.classList.remove('srink');
    bodyWrapp.classList.remove('mtop');
  } else {
    // Scrolling DOWN
    headerName.classList.add('hidden');
    inputWraper.classList.add('move__top');
    headerWraper.classList.add('srink');
    bodyWrapp.classList.add('mtop');
  }
  scrollPos = windowY;
}

window.addEventListener('scroll',checkPosition);

