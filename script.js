document.querySelectorAll(".faq-item__q").forEach(function (button) {
  button.addEventListener("click", function () {
    button.parentElement.classList.toggle("is-open");
  });
});
