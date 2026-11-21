/* labnav.js – thanh điều hướng nhỏ dùng chung cho mọi trang Exercise.
   Tự tạo một nút nổi ở góc dưới bên phải để quay lại danh sách Exercise của Lab
   và về trang chủ CSS-NangCao, nên không phải sửa markup gốc của từng bài. */
(function () {
  function addNav() {
    var bar = document.createElement("div");
    bar.id = "labnav";
    bar.style.cssText =
      "position:fixed;right:12px;bottom:12px;z-index:9999;display:flex;gap:6px;" +
      "font:600 13px/1 Arial,Helvetica,sans-serif;";
    var links = [
      { text: "← Danh sách Exercise", href: "index.html", bg: "#e3001b" },
      { text: "Trang chủ", href: "../index.html", bg: "#000000" }
    ];
    for (var i = 0; i < links.length; i++) {
      var a = document.createElement("a");
      a.href = links[i].href;
      a.textContent = links[i].text;
      a.style.cssText =
        "background:" + links[i].bg + ";color:#ffffff;text-decoration:none;" +
        "padding:9px 12px;border-radius:3px;box-shadow:0 2px 6px rgba(0,0,0,.35);";
      bar.appendChild(a);
    }
    document.body.appendChild(bar);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addNav);
  } else {
    addNav();
  }
})();
