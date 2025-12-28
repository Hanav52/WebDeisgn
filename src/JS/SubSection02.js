document.addEventListener("DOMContentLoaded", () => {
  const section02 = document.querySelector("#section02");
  const left = section02.querySelector(".fade-left");
  const right = section02.querySelector(".fade-right");
  let timer;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        left.classList.add("is-visible");
        timer = setTimeout(() => {
          right.classList.add("is-visible");
        }, 1000);
      } else {
        clearTimeout(timer);
        left.classList.remove("is-visible");
        right.classList.remove("is-visible");
      }
    },
    { threshold: 0.35 }
  );

  observer.observe(section02);
});