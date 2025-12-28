
  document.addEventListener("DOMContentLoaded", () => {
  const section02 = document.querySelector("#section02");
  const left = section02.querySelector(".fade-left");
  const right = section02.querySelector(".fade-right");
  let timer;

  const swiper = new Swiper(".brandSwiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    speed: 800,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  observer.observe(section02);
});