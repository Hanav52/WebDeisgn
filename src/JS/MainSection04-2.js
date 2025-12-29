
document.addEventListener("DOMContentLoaded", () => {
const swiper = new Swiper(".brand-swiper", {
  centeredSlides: true,
  loop: true,
  speed: 900,
  slidesPerView: 5,
});

/* ===== 가운데 도착 후 애니메이션 ===== */
swiper.on("slideChangeTransitionStart", () => {
  swiper.el.classList.remove("is-arrived");
});

swiper.on("slideChangeTransitionEnd", () => {
  swiper.el.classList.add("is-arrived");
});

swiper.on("init", () => {
  swiper.el.classList.add("is-arrived");
});

/* ===== Pagination ===== */
const pagination = document.querySelector(".brand-pagination");
const currentEl = pagination.querySelector(".current");
const totalEl = pagination.querySelector(".total");

const totalSlides = swiper.slides.length - swiper.loopedSlides * 2;
totalEl.textContent = String(totalSlides).padStart(2, "0");

function updatePagination() {
  pagination.classList.add("is-changing");

  setTimeout(() => {
    const index = swiper.realIndex + 1;
    currentEl.textContent = String(index).padStart(2, "0");
    pagination.classList.remove("is-changing");
  }, 250);
}

swiper.on("init", updatePagination);
swiper.on("slideChange", updatePagination);

/* ===== Controls ===== */
document.querySelector(".brand-prev").addEventListener("click", () => {
  swiper.slidePrev();
});

document.querySelector(".brand-next").addEventListener("click", () => {
  swiper.slideNext();
});


});