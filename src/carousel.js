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

const next = function goToNextItem(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains("active")) {
      list[i].classList.remove("active");

      if (list[i + 1]) {
        list[i + 1].classList.add("active");
      } else {
        list[(i = 0)].classList.add("active");
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
      } else {
        list[(i = list.length - 1)].classList.add("active");
      }
      break;
    }
  }
};

const carousel = function getAllCarouselItemsSetIndexAndAttachEvents() {
  const imagesArr = [Image1, Image2, Image3];
  const nextButton = document.querySelector(".next");
  const previousButton = document.querySelector(".previous");
  const listItems = document.querySelectorAll(".carousel-item");
  listItems.forEach((item, idx) => {
    item.setAttribute("data-idx", idx);
    if (idx === 0) item.classList.add("active");
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
};

export default carousel;
