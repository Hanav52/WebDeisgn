
  document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    autoplay: { delay:3000, disableOnInteraction:false },
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});