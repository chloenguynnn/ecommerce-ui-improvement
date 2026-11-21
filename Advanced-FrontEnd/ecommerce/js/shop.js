/* shop.js – các hàm dùng chung cho 3 trang của cửa hàng (danh sách, chi tiết, trạng thái đơn hàng) */

function formatVND(n) {
  return n.toLocaleString("vi-VN") + " ₫";
}

function salePrice(p) {
  return Math.round(p.price * (100 - p.discount) / 100 / 1000) * 1000;
}

function findProduct(id) {
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === id) { return PRODUCTS[i]; }
  }
  return null;
}

/* Thanh trạng thái kho bằng Bootstrap progress:
   còn nhiều (>50%) = xanh, còn vừa (20–50%) = vàng, sắp hết (<20%) = đỏ */
function stockBar(p) {
  var percent = Math.round(p.stock / p.capacity * 100);
  var cls = "progress-bar-success", label = "Còn hàng";
  if (percent < 20) { cls = "progress-bar-danger"; label = "Sắp hết hàng"; }
  else if (percent <= 50) { cls = "progress-bar-warning"; label = "Còn ít"; }
  return '<div class="stock">' +
           '<div class="stock-text"><span>' + label + '</span><span>Còn ' + p.stock + ' sản phẩm</span></div>' +
           '<div class="progress">' +
             '<div class="progress-bar ' + cls + (percent < 20 ? ' progress-bar-striped active' : '') + '" role="progressbar"' +
             ' aria-valuenow="' + percent + '" aria-valuemin="0" aria-valuemax="100" style="width:' + percent + '%">' +
               percent + '%' +
             '</div>' +
           '</div>' +
         '</div>';
}

/* Nhãn: % giảm giá ở góc trên bên trái, New / Best seller ở góc trên bên phải */
function badges(p) {
  var html = "";
  if (p.discount > 0) { html += '<span class="badge-sale">-' + p.discount + '%</span>'; }
  if (p.tag === "new") { html += '<span class="badge-tag badge-new">New</span>'; }
  if (p.tag === "best") { html += '<span class="badge-tag badge-best">Best seller</span>'; }
  return html;
}

function priceHtml(p) {
  if (p.discount > 0) {
    return '<span class="price-now">' + formatVND(salePrice(p)) + '</span> <del class="price-old">' + formatVND(p.price) + '</del>';
  }
  return '<span class="price-now">' + formatVND(p.price) + '</span>';
}

/* Ô đánh giá sao: dùng plugin bootstrap-star-rating thay cho glyphicon-star */
function ratingInput(value, size) {
  return '<input class="kv-rating rating-loading" value="' + value + '" data-size="' + (size || "xs") + '">';
}

function initRatings(context) {
  $(context || document).find("input.kv-rating").rating({
    theme: "krajee-svg",
    min: 0, max: 5, step: 0.5,
    displayOnly: true,          // chỉ hiển thị, không cho bấm
    showCaption: false
  });
}

/* Giỏ hàng đơn giản lưu trong localStorage để số trên icon giỏ hàng cập nhật giữa các trang */
function getCartCount() {
  try { return parseInt(localStorage.getItem("atelier-cart") || "0", 10); } catch (e) { return 0; }
}
function addToCart(qty) {
  var n = getCartCount() + (qty || 1);
  try { localStorage.setItem("atelier-cart", String(n)); } catch (e) { /* bỏ qua */ }
  $(".cart-count").text(n);
}

$(function () {
  $(".cart-count").text(getCartCount());
  $('[data-toggle="tooltip"]').tooltip();
});
