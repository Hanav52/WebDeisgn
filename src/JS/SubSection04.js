document.addEventListener('DOMContentLoaded', () => {
    const progressCircle = document.querySelector(".autoplay-progress svg");
        const progressContent = document.querySelector(".autoplay-progress span");
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            centeredSlides: true,
            autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            },
            // spaceBetween: 30,
            freeMode: true,
            
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

            autoplayTimeLeft(swiper, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            },
            },
        });
})