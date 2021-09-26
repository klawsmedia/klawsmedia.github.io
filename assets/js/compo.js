var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 75,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1180: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });