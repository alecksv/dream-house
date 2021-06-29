const swiper = new Swiper(".header-slider ", {
  // Optional parameters
  // direction: "vertical",
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-uniq",
    prevEl: ".swiper-button-prev-uniq",
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
