const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(1.2)";
    setTimeout(() => {
      card.style.transform = "";
    }, 200);
  });
});