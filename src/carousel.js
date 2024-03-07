import Image1 from "./image1.jpg";
import Image2 from "./image2.jpg";
import Image3 from "./image3.jpg";

// const cssStyle = function addCssStyle(element, styles) {
//   if (element instanceof NodeList) {
//     element.forEach((el) => Object.assign(el.style, styles));
//   } else {
//     Object.assign(element.style, styles);
//   }
// };

const attach = function attachClickEvent(el, func) {
  el.addEventListener("click", func);
};

const find = function findActiveIndicator(index) {
  const indicatorList = document.querySelectorAll(".indicator");
  const carouselItems = document.querySelectorAll(".carousel-item");

  for (let i = 0; i < indicatorList.length; i++) {
    if (indicatorList[i] === this) {
      carouselItems[i].classList.add("active");

      if (i === 0) {
        carouselItems[i + 1].classList.remove("active");
        carouselItems[i + 2].classList.remove("active");
        indicatorList[i].classList.add("indicator-active");
        indicatorList[i + 1].classList.remove("indicator-active");
        indicatorList[i + 2].classList.remove("indicator-active");
      } else if (i === 1) {
        carouselItems[i + 1].classList.remove("active");
        carouselItems[i - 1].classList.remove("active");
        indicatorList[i].classList.add("indicator-active");
        indicatorList[i + 1].classList.remove("indicator-active");
        indicatorList[i - 1].classList.remove("indicator-active");
      } else {
        carouselItems[i - 1].classList.remove("active");
        carouselItems[i - 2].classList.remove("active");
        indicatorList[i].classList.add("indicator-active");
        indicatorList[i - 1].classList.remove("indicator-active");
        indicatorList[i - 2].classList.remove("indicator-active");
      }
    } else if (indicatorList[index] === indicatorList[i]) {
      console.log("run");
      indicatorList[index].classList.add("indicator-active");
    } else {
      console.log("ruunning");
      indicatorList[i].classList.remove("indicator-active");
    }
  }
};

const next = function goToNextItem(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains("active")) {
      list[i].classList.remove("active");

      if (list[i + 1]) {
        list[i + 1].classList.add("active");
        find(i + 1);
      } else {
        list[(i = 0)].classList.add("active");
        find((i = 0));
      }
      break;
    }
  }
};

const previous = function goToPreviousItem(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains("active")) {
      list[i].classList.remove("active");

      if (list[i - 1]) {
        list[i - 1].classList.add("active");
        find(i - 1);
      } else {
        list[(i = list.length - 1)].classList.add("active");
        find((i = list.length - 1));
      }
      break;
    }
  }
};

const timer = function setIntervalForAutoRotation(list) {
  setInterval(next, 5000, list);
};

const carousel = function getAllCarouselItemsSetIndexAndAttachEvents() {
  const imagesArr = [Image1, Image2, Image3];
  const nextButton = document.querySelector(".next");
  const previousButton = document.querySelector(".previous");
  const listItems = document.querySelectorAll(".carousel-item");
  document
    .querySelectorAll(".indicator")
    .forEach((item) => item.addEventListener("click", find));
  listItems.forEach((item, idx) => {
    if (idx === 0) {
      find(idx);
      item.classList.add("active");
    }
    const imgEl = document.createElement("img");
    item.append(imgEl);
    imgEl.src = imagesArr[idx];
  });
  attach(nextButton, () => {
    next(listItems);
  });
  attach(previousButton, () => {
    previous(listItems);
  });

  timer(listItems);
};

export default carousel;
