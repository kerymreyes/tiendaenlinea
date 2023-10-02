const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "TRAJE TIPICO DE MUJER",
    price: 70.00,
    colors: [
      {
        code: "darkblue",
        img: "img/traje1.png",
      },
    ],
  },
  {
    id: 2,
    title: "TRAJE TIPICO DE HOMBRE",
    price: 70.00,
    colors: [
      {
        code: "lightgray",
        img: "img/traje2.png",
      },
    ],
  },
  {
    id: 3,
    title: "TRAJE TIPICO DE SAN SALVADOR",
    price: 70.00,
    colors: [      
      {
        code: "green",
        img: "img/traje3.png",
      },
    ],
  },
  {
    id: 4,
    title: "TRAJE TIPICO DE PANCHIMALCO",
    price: 70.00,
    colors: [
      {
        code: "red",
        img: "img/traje4.png",
      },
    ],
  },
  {
    id: 5,
    title: "TRAJE TIPICO DE SONSONATE",
    price: 70.00,
    colors: [
      {
        code: "gray",
        img: "img/traje5.png",
      },
    ],
  },
];

// CARRUSEL DE PRODUCTOS
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //CAMBIO DE SLIDE DE PRODUCTOS
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //CAMBIO DE PRODUCTOS
    choosenProduct = products[index];

    //CAMBIO DE TEXTOS
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

// PAGO DE PRODUCTOS
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
