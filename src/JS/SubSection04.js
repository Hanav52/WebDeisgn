document.addEventListener('DOMContentLoaded', () => {
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        // spaceBetween: 30,
        freeMode: true,

        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            },
        },
    });

})