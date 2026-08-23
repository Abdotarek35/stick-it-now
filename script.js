// FAQ accordion
document.querySelectorAll(".faq-item__q").forEach(function (button) {
  button.addEventListener("click", function () {
    button.parentElement.classList.toggle("is-open");
  });
});

// Scroll-reveal for sections and cards
var revealEls = document.querySelectorAll(".reveal");
var revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach(function (el) {
  revealObserver.observe(el);
});

// Draggable demo note in the hero
var dragDemo = document.getElementById("dragDemo");
var isDragging = false;
var offsetX = 0;
var offsetY = 0;

function startDrag(clientX, clientY) {
  isDragging = true;
  var rect = dragDemo.getBoundingClientRect();
  offsetX = clientX - rect.left;
  offsetY = clientY - rect.top;
  dragDemo.style.position = "fixed";
  dragDemo.style.margin = "0";
  dragDemo.style.zIndex = "50";
  dragDemo.style.left = rect.left + "px";
  dragDemo.style.top = rect.top + "px";
}

function moveDrag(clientX, clientY) {
  if (!isDragging) return;
  dragDemo.style.left = clientX - offsetX + "px";
  dragDemo.style.top = clientY - offsetY + "px";
}

function endDrag() {
  isDragging = false;
}

dragDemo.addEventListener("mousedown", function (e) {
  startDrag(e.clientX, e.clientY);
});
window.addEventListener("mousemove", function (e) {
  moveDrag(e.clientX, e.clientY);
});
window.addEventListener("mouseup", endDrag);

dragDemo.addEventListener("touchstart", function (e) {
  var t = e.touches[0];
  startDrag(t.clientX, t.clientY);
});
window.addEventListener("touchmove", function (e) {
  if (!isDragging) return;
  var t = e.touches[0];
  moveDrag(t.clientX, t.clientY);
});
window.addEventListener("touchend", endDrag);
