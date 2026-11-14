/* Exercise 9.5 – Responding to load events */

// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* your code goes here */

/* Bước 2: chạy ngay khi file được nạp trong <head>. Lúc này DOM chưa có div1 nên
   Console báo lỗi: Cannot read properties of null (reading 'innerHTML')
var divToGet = document.getElementById("div1");
alert(divToGet.innerHTML);
*/

// Bước 4: đợi sự kiện load, tức là trang đã tải xong, rồi mới truy cập DOM
window.addEventListener("load", function(){
    var divToGet = document.getElementById("div1");
    alert(divToGet.innerHTML);
});
