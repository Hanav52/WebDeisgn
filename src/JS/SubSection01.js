document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("rnd-image");
  const section = document.querySelector(".rnd-section");

  window.addEventListener("scroll", () => {
    const sectionRect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 섹션이 화면에 들어왔을 때만
    if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
      const progress =
        (windowHeight - sectionRect.top) /
        (windowHeight + sectionRect.height);

      const translateY = Math.max(
        Math.min(progress * 120, 120),
        0
      );

      image.style.transform = `translateY(${translateY}px)`;
    }
  });
});