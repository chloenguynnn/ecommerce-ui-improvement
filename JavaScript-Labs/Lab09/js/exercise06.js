/* Exercise 9.6 – Debugging events
   Dùng tab Sources của DevTools: đặt breakpoint ở dòng alert(), rê chuột lên một ô
   rồi xem giá trị của biến e và e.target trong khung Scope. */

// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

// Bước 7: gắn sự kiện mouseover cho mọi phần tử có class movingDiv
window.addEventListener("load", function(){
    var divs = document.querySelectorAll(".movingDiv");
    for (var i=0; i<divs.length; i++)
    {
        divs[i].addEventListener("mouseover", function (e) {
            // e.target là phần tử đã phát ra sự kiện
            alert("triggered by " + e.target.id);
        });
    }
});
