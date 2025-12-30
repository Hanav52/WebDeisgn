document.addEventListener("DOMContentLoaded", () => {
const swiper = new Swiper('.brand-swiper', {
  slidesPerView: 5,
  autoplay: {
            delay: 1500,
            disableOnInteraction: false,
  },
  loop: true,
  centeredSlides: true,
  speed: 700,
  breakpoints: {
            0: {
            slidesPerView: 1,
            centeredSlides: false,
            freeMode: false,
            },
            480: {
            slidesPerView: 2,
            centeredSlides: false,
            freeMode: false,
            },
            768: {
            slidesPerView: 3,
            centeredSlides: true,
            freeMode: false,
            },
            1024: {
            slidesPerView: 4,
            centeredSlides: true,
            freeMode: true,
            },
            1440: {
            slidesPerView: 5,
            centeredSlides: true,
            freeMode: true,
            },
            },
  on: {
    slideChangeTransitionStart() {
      this.el.classList.remove('is-arrived');
      this.el.classList.add('is-hiding');
    },

    slideChangeTransitionEnd() {
      this.el.classList.remove('is-hiding');

      // 🔥 핵심: 타이밍 보정
      setTimeout(() => {
        this.el.classList.add('is-arrived');
      }, 50);
    }
  }

  

});

const currentEl = document.querySelector(".brand-pagination .current");
const totalEl = document.querySelector(".brand-pagination .total");

const totalSlides = swiper.slides.filter(
  slide => !slide.classList.contains("swiper-slide-duplicate")
).length;

totalEl.textContent = String(totalSlides).padStart(2, "0");

function updatePagination() {
  const realIndex = swiper.realIndex + 1;
  currentEl.textContent = String(realIndex).padStart(2, "0");
}

swiper.on("slideChange", updatePagination);
updatePagination();

swiper.on("init", updatePagination);
swiper.on("slideChange", updatePagination);

document.querySelector(".brand-prev").addEventListener("click", () => {
  swiper.slidePrev();
});

document.querySelector(".brand-next").addEventListener("click", () => {
  swiper.slideNext();
});

});