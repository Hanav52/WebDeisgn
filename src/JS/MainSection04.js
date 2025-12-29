document.addEventListener("DOMContentLoaded", () => {
const swiper = new Swiper(".brand-swiper", {
  centeredSlides: true,
  slidesPerView: 5,
  loop: true,
  speed: 3000,   // 이동 애니메이션
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // }
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
});
let slideTimer;

function startAutoSlide() {
  slideTimer = setInterval(() => {
    // 1️⃣ 이미지 먼저 숨김
    swiper.el.classList.add("is-hiding");

    // 2️⃣ 숨김 애니메이션 끝난 후 슬라이드 이동
    setTimeout(() => {
      swiper.slideNext();

      // 3️⃣ 이동 시작과 동시에 숨김 상태 해제
      swiper.el.classList.remove("is-hiding");
    }, 300); // ← CSS transition 시간과 동일
  }, 4000); // 전체 슬라이드 간격
}

startAutoSlide();
document.querySelector(".swiper-button-next")
  .addEventListener("click", () => {
    swiper.el.classList.add("is-hiding");

    setTimeout(() => {
      swiper.slideNext();
      swiper.el.classList.remove("is-hiding");
    }, 500);
  });

document.querySelector(".swiper-button-prev")
  .addEventListener("click", () => {
    swiper.el.classList.add("is-hiding");

    setTimeout(() => {
      swiper.slidePrev();
      swiper.el.classList.remove("is-hiding");
    }, 500);
  });
/* 이동 시작 → 아직 애니메이션 금지 */
swiper.on("slideChangeTransitionStart", () => {
  swiper.el.classList.remove("is-arrived");
});

/* 이동 종료 → 이제 애니메이션 허용 */
swiper.on("slideChangeTransitionEnd", () => {
  swiper.el.classList.add("is-arrived");
});

/* 최초 로드 시에도 적용 */
swiper.on("init", () => {
  swiper.el.classList.add("is-arrived");
});



const currentEl = document.querySelector(".brand-pagination .current");
const totalEl = document.querySelector(".brand-pagination .total");

const totalSlides = swiper.slides.length - swiper.loopedSlides * 2;
totalEl.textContent = String(totalSlides).padStart(2, "0");

function updatePagination() {
  const realIndex = swiper.realIndex + 1;
  currentEl.textContent = String(realIndex).padStart(2, "0");
}

swiper.on("init", updatePagination);
swiper.on("slideChange", updatePagination);

document.querySelector(".brand-prev").addEventListener("click", () => {
  swiper.slidePrev();
});

document.querySelector(".brand-next").addEventListener("click", () => {
  swiper.slideNext();
});


});