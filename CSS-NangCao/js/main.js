/* main.js – tương tác cho trang chủ JavaScript-Labs
   1. Mở/đóng menu trên điện thoại
   2. Chuyển tab ở mục "Kiến thức đã học"
   3. Tô sáng mục menu ứng với phần đang xem
   4. Nhân đôi dải chữ chạy để chạy liền mạch */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. Menu trên điện thoại ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Đóng" : "Menu";
    });

    // bấm vào một mục thì đóng menu lại
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }

  /* ---------- 2. Tab kiến thức ---------- */
  var tabs = document.querySelectorAll(".tab");
  var panels = document.querySelectorAll(".panel");

  function showTab(tab) {
    var i;
    for (i = 0; i < tabs.length; i++) {
      tabs[i].setAttribute("aria-selected", tabs[i] === tab ? "true" : "false");
      tabs[i].tabIndex = tabs[i] === tab ? 0 : -1;
    }
    for (i = 0; i < panels.length; i++) {
      panels[i].hidden = panels[i].id !== tab.getAttribute("aria-controls");
    }
  }

  for (var t = 0; t < tabs.length; t++) {
    tabs[t].addEventListener("click", function (e) {
      showTab(e.currentTarget);
    });

    // phím mũi tên trái/phải để đổi tab
    tabs[t].addEventListener("keydown", function (e) {
      var list = Array.prototype.slice.call(tabs);
      var index = list.indexOf(e.currentTarget);
      if (e.key === "ArrowRight") { index = (index + 1) % list.length; }
      else if (e.key === "ArrowLeft") { index = (index - 1 + list.length) % list.length; }
      else { return; }
      showTab(list[index]);
      list[index].focus();
    });
  }

  /* ---------- 3. Tô sáng mục menu đang xem ---------- */
  var links = document.querySelectorAll(".menu a[href^='#']");
  var sections = [];
  for (var k = 0; k < links.length; k++) {
    var target = document.querySelector(links[k].getAttribute("href"));
    if (target) { sections.push({ link: links[k], el: target }); }
  }

  function markCurrent() {
    var current = null;
    for (var s = 0; s < sections.length; s++) {
      // phần nào có mép trên đã vượt qua 1/3 màn hình thì coi là đang xem
      if (sections[s].el.getBoundingClientRect().top <= window.innerHeight / 3) {
        current = sections[s];
      }
    }
    for (var m = 0; m < sections.length; m++) {
      sections[m].link.classList.toggle("is-current", sections[m] === current);
    }
  }

  if (sections.length > 0) {
    window.addEventListener("scroll", markCurrent, { passive: true });
    markCurrent();
  }

  /* ---------- 4. Dải chữ chạy ---------- */
  var track = document.querySelector(".strip-track");
  if (track) {
    // nhân đôi nội dung để khi trượt hết nửa đầu thì nửa sau nối tiếp liền mạch
    track.innerHTML = track.innerHTML + track.innerHTML;
  }
});
