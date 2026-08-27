// Show a QR code instead of the download button for non-Android visitors
var isAndroid = /Android/i.test(navigator.userAgent);
if (!isAndroid) {
  document.getElementById("downloadArea").style.display = "none";
  var qrArea = document.getElementById("qrArea");
  qrArea.style.display = "flex";
  var pageUrl = encodeURIComponent(window.location.href);
  document.getElementById("qrImage").src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + pageUrl;
}

// Share button - native share sheet where available, copy link otherwise
var shareBtn = document.getElementById("shareBtn");
shareBtn.addEventListener("click", function () {
  if (navigator.share) {
    navigator.share({
      title: "Stick It Fast",
      text: "حط ملاحظاتك عايمة فوق أي حاجة في موبايلك",
      url: window.location.href
    }).catch(function () {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href).then(function () {
      var original = shareBtn.textContent;
      shareBtn.textContent = "✅ اتنسخ اللينك";
      setTimeout(function () {
        shareBtn.textContent = original;
      }, 2000);
    });
  }
});

// FAQ accordion
document.querySelectorAll(".faq-item__q").forEach(function (button) {
  button.addEventListener("click", function () {
    var item = button.parentElement;
    var isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});

// Parallax drift for the decorative mini-notes as the page scrolls
var miniNotes = document.querySelectorAll(".mini-note");
window.addEventListener(
  "scroll",
  function () {
    var scrolled = window.scrollY;
    miniNotes.forEach(function (el, i) {
      var speed = 0.12 + i * 0.07;
      el.style.setProperty("--py", scrolled * speed + "px");
    });
  },
  { passive: true }
);

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

// Floating CTA - appears once the hero download button scrolls out of view
var heroBtn = document.querySelector(".btn-download");
var floatingCta = document.getElementById("floatingCta");
var ctaObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      floatingCta.classList.toggle("is-visible", !entry.isIntersecting && isAndroid);
    });
  },
  { threshold: 0 }
);
ctaObserver.observe(heroBtn);

// Draggable demo note, contained within the phone screen
var dragDemo = document.getElementById("dragDemo");
var phoneScreen = document.getElementById("phoneScreen");
var isDragging = false;
var offsetX = 0;
var offsetY = 0;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function startDrag(clientX, clientY) {
  isDragging = true;
  var noteRect = dragDemo.getBoundingClientRect();
  offsetX = clientX - noteRect.left;
  offsetY = clientY - noteRect.top;
  dragDemo.style.zIndex = "10";
}

function moveDrag(clientX, clientY) {
  if (!isDragging) return;
  var screenRect = phoneScreen.getBoundingClientRect();
  var noteRect = dragDemo.getBoundingClientRect();
  var newLeft = clamp(clientX - offsetX - screenRect.left, 0, screenRect.width - noteRect.width);
  var newTop = clamp(clientY - offsetY - screenRect.top, 0, screenRect.height - noteRect.height);
  dragDemo.style.left = newLeft + "px";
  dragDemo.style.top = newTop + "px";
}

function endDrag() {
  if (isDragging) {
    dragDemo.classList.remove("is-settling");
    void dragDemo.offsetWidth;
    dragDemo.classList.add("is-settling");
  }
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
