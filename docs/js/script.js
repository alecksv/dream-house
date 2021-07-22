const header = new Swiper(".header-slider ", {
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-uniq",
    prevEl: ".swiper-button-prev-uniq",
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination-header",
    type: "bullets",
    clickable: true,
  },
});

const project = new Swiper(".projects-slider-container", {
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-uniq1",
    prevEl: ".swiper-button-prev-uniq1",
  },
  loop: true,
  slidesPerView: 4,
  spaceBetween: 0,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const team = new Swiper(".team-slider", {
  // Navigation arrows
  loop: true,

  slidesPerView: 3,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination-team",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    850: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

const client = new Swiper(".client-slider-container", {
  direction: "vertical",
  loop: "true",

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-uniq3",
    prevEl: ".swiper-button-prev-uniq3",
    disabledClass: ".swiper-button-disabled",
  },
  slidesPerView: 1,
  spaceBetween: 10,
});

document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("visual");
});
// document.querySelector(".burger2").addEventListener("click", () => {
//   document.querySelector(".projects-links").classList.toggle("visual");
// });
