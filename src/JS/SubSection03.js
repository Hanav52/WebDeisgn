document.addEventListener("DOMContentLoaded", () => {

  const rows = [...new Set(
    [...document.querySelectorAll(".research-card")]
      .map(card => card.dataset.row)
  )];

  rows.forEach(row => {
    const rowCards = document.querySelectorAll(
      `.research-card[data-row="${row}"]`
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            rowCards.forEach(card => card.classList.add("is-visible"));
          } else {
            rowCards.forEach(card => card.classList.remove("is-visible"));
          }
        });
      },
      {
        threshold: 0.3
      }
    );

    observer.observe(rowCards[0]); // 줄의 첫 카드만 관찰
  });

});
