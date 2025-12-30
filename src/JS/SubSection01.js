document.addEventListener("DOMContentLoaded", () => {
const section = document.querySelector(".rnd-section");
const image = document.querySelector(".rnd-image");

window.addEventListener("scroll", () => {
  const rect = section.getBoundingClientRect();
  const windowH = window.innerHeight;

  // 섹션이 화면 안에 있을 때만
  if (rect.top < windowH && rect.bottom > 0) {

    /*
      progress:
      - 섹션 상단이 화면 하단에 닿을 때 → 0
      - 섹션 하단이 화면 상단에 닿을 때 → 1
    */
    const progress =
      (windowH - rect.top) / (windowH + rect.height);

    // 이동 범위
    const maxMove = 500;

    // 속도 배수
    const speed = 2;

    // ⭐ clamp 제거 (왕복 핵심)
    const translateY = (progress - 0.5) * maxMove * speed;

    image.style.transform = `translateY(${-translateY}px)`;
  }
});

});