// define functions in this file
/* Exercise 8.8 – JavaScript functions */

/* Bước 1: hàm tự in ra trang
function outputBox() {
   document.write("<div class='movingDiv' id='div1'>");
   document.write("This is div 1");
   document.write("</div>");
}
*/

/* Bước 4: hàm trả về chuỗi thay vì tự in
function outputBox() {
   var box = "<div class='movingDiv' id='div1'>";
   box += "This is div 1";
   box += "</div>";
   return box;
}
*/

// Bước 8: biến này có phạm vi toàn cục (global scope)
var boxClass = 'movingDiv';

// Bước 6: thêm tham số num cho hàm
function outputBox(num) {
   // Bước 10: bỏ từ khóa var để thấy biến box trở thành biến toàn cục.
   // Đây chỉ là minh họa theo yêu cầu của bài; khi viết code thật luôn phải khai báo bằng var.
   box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}
