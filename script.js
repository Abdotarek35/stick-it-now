// ---------- كشف أندرويد وإظهار QR للأجهزة التانية ----------
var isAndroid = /Android/i.test(navigator.userAgent);
if (!isAndroid) {
  document.getElementById("downloadArea").style.display = "none";
  var qrArea = document.getElementById("qrArea");
  qrArea.style.display = "flex";
  var pageUrl = encodeURIComponent(window.location.href);
  document.getElementById("qrImage").src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + pageUrl;
}

// ---------- زرار المشاركة ----------
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

// ---------- أكورديون الأسئلة الشائعة ----------
document.querySelectorAll(".faq-item__q").forEach(function (button) {
  button.addEventListener("click", function () {
    var item = button.parentElement;
    var isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});

// ---------- حركة خفيفة لنوتات الهيرو الخلفية عند السكرول ----------
// ملحوظة: مقصودة بس على نوتات الهيرو (اللي جوه صندوق بيقص أي حركة زايدة).
// نوتات الفجوات بين الأقسام ليها حركة تمايل بسيطة بالـ CSS بس، من غير إزاحة
// متراكمة مع السكرول، عشان متفلتش وتنزل تحت في الصفحة.
var miniNotes = document.querySelectorAll(".hero__notes .mini-note");
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

// ---------- ظهور الأقسام تدريجيًا عند السكرول ----------
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

// ---------- زرار التحميل العائم ----------
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

// ---------- الديمو التفاعلي: نوتات حقيقية تقدر تسحبها وتلوّنها وتكتب فيها ----------
(function () {
  var phoneScreen = document.getElementById("phoneScreen");
  var toastEl = document.getElementById("demoToast");
  if (!phoneScreen || !toastEl) return;

  var DEMO_COLORS = ["#ffe066", "#a8d8b9", "#f7a1a1", "#a8c8e8"];
  var MAX_NOTES = 4;
  var noteCount = 0;
  var zCounter = 10;
  var toastTimer = null;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    toastEl.textContent = message;
    toastEl.classList.add("is-visible");
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("is-visible");
    }, 2200);
  }

  function bringToFront(el) {
    zCounter += 1;
    el.style.zIndex = zCounter;
  }

  function setupDrag(note, bar) {
    var dragging = false;
    var startLeft = 0;
    var startTop = 0;
    var startX = 0;
    var startY = 0;

    bar.addEventListener("pointerdown", function (e) {
      if (e.target.closest(".demo-note__icon")) return;
      if (note.dataset.locked === "true") return;
      dragging = true;
      bringToFront(note);
      note.classList.remove("is-settling");
      var screenRect = phoneScreen.getBoundingClientRect();
      var rect = note.getBoundingClientRect();
      startLeft = rect.left - screenRect.left;
      startTop = rect.top - screenRect.top;
      startX = e.clientX;
      startY = e.clientY;
      try { bar.setPointerCapture(e.pointerId); } catch (err) {}
    });

    bar.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var screenRect = phoneScreen.getBoundingClientRect();
      var noteRect = note.getBoundingClientRect();
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;
      var newLeft = clamp(startLeft + dx, 0, Math.max(0, screenRect.width - noteRect.width));
      var newTop = clamp(startTop + dy, 0, Math.max(0, screenRect.height - noteRect.height));
      note.style.left = newLeft + "px";
      note.style.top = newTop + "px";
    });

    function endDrag() {
      if (!dragging) return;
      dragging = false;
      note.classList.add("is-settling");
      note.addEventListener(
        "animationend",
        function handler() {
          note.classList.remove("is-settling");
          note.removeEventListener("animationend", handler);
        },
        { once: true }
      );
    }

    bar.addEventListener("pointerup", endDrag);
    bar.addEventListener("pointercancel", endDrag);
  }

  function makeIcon(className, label, glyph) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "demo-note__icon " + className;
    btn.setAttribute("aria-label", label);
    if (glyph) btn.textContent = glyph;
    return btn;
  }

  function createDemoNote(startColorIndex, originNote) {
    if (noteCount >= MAX_NOTES) {
      showToast("وصلت لأقصى عدد نوتات في الديمو - اقفل واحدة عشان تضيف تانية");
      return null;
    }

    var note = document.createElement("div");
    note.className = "demo-note";
    note.dataset.locked = "false";

    var bar = document.createElement("div");
    bar.className = "demo-note__bar";

    // الترتيب من الشمال زي التطبيق بالظبط: قفل (✕) + إضافة (+) + لون (●) + تصغير (•) + قفل الحركة (M)
    var close = makeIcon("demo-note__close", "اقفل النوتة", "✕");
    var add = makeIcon("demo-note__add", "زوّد نوتة جنب دي", "+");

    var dot = makeIcon("demo-note__dot", "غيّر لون النوتة", "");
    var dotSwatch = document.createElement("span");
    dot.appendChild(dotSwatch);

    var minBtn = makeIcon("demo-note__min", "صغّرها لنقطة", "");
    var minDot = document.createElement("span");
    minBtn.appendChild(minDot);

    var lockBtn = makeIcon("demo-note__lock", "اقفل حركة النوتة", "M");

    var drag = document.createElement("div");
    drag.className = "demo-note__drag";

    bar.appendChild(close);
    bar.appendChild(add);
    bar.appendChild(dot);
    bar.appendChild(minBtn);
    bar.appendChild(lockBtn);
    bar.appendChild(drag);

    var body = document.createElement("div");
    body.className = "demo-note__body";
    body.setAttribute("contenteditable", "true");
    body.setAttribute("data-placeholder", "اكتب حاجة...");

    note.appendChild(bar);
    note.appendChild(body);
    phoneScreen.appendChild(note);

    var colorIndex = startColorIndex % DEMO_COLORS.length;
    function applyColor() {
      var c = DEMO_COLORS[colorIndex];
      note.style.background = c;
      dotSwatch.style.background = c;
    }
    applyColor();

    var screenRect = phoneScreen.getBoundingClientRect();
    var noteRect = note.getBoundingClientRect();
    var left, top;
    if (originNote) {
      var originLeft = parseFloat(originNote.style.left) || 0;
      var originTop = parseFloat(originNote.style.top) || 0;
      left = clamp(originLeft + 28, 0, Math.max(0, screenRect.width - noteRect.width));
      top = clamp(originTop + 28, 0, Math.max(0, screenRect.height - noteRect.height));
    } else {
      left = clamp(20, 0, Math.max(0, screenRect.width - noteRect.width));
      top = clamp(90, 0, Math.max(0, screenRect.height - noteRect.height));
    }
    note.style.left = left + "px";
    note.style.top = top + "px";

    bringToFront(note);
    noteCount += 1;

    dot.addEventListener("click", function () {
      colorIndex = (colorIndex + 1) % DEMO_COLORS.length;
      applyColor();
      bringToFront(note);
    });

    add.addEventListener("click", function () {
      createDemoNote(noteCount, note);
    });

    minBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      note.classList.add("is-minimized");
      bringToFront(note);
    });

    note.addEventListener("click", function () {
      if (note.classList.contains("is-minimized")) {
        note.classList.remove("is-minimized");
        bringToFront(note);
      }
    });

    lockBtn.addEventListener("click", function () {
      var locked = note.dataset.locked === "true";
      note.dataset.locked = locked ? "false" : "true";
      lockBtn.classList.toggle("is-active", !locked);
    });

    close.addEventListener("click", function () {
      note.classList.add("is-closing");
      note.addEventListener(
        "transitionend",
        function () {
          note.remove();
          noteCount = Math.max(0, noteCount - 1);
        },
        { once: true }
      );
    });

    setupDrag(note, bar);
    return note;
  }

  // نوتة بداية جاهزة للتجربة
  createDemoNote(0);
})();
