// Sauberer Neckar in Heilbronn durch KI: Menü, Einblenden, QR-Code. Keine Fremdserver, keine Cookies.
(function () {
  var doc = document.documentElement;
  doc.classList.add("js");

  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    });
  }

  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (list) {
      list.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  var qr = document.getElementById("qr");
  if (qr && window.qrcode) {
    var q = qrcode(0, "M");
    q.addData("https://nosz.github.io/sauberer-neckar-in-heilbronn-durch-ki/");
    q.make();
    qr.innerHTML = q.createSvgTag(4, 0, "QR-Code zur Projektseite", "QR-Code zur Projektseite");
  }
})();
