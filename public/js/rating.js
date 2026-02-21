// public/js/rating.js

window.addEventListener("pageshow", () => {
  const ratingInputs = document.querySelectorAll(
    'input[name="review[rating]"]'
  );

  ratingInputs.forEach(input => {
    input.checked = false;   // force clear
  });
});