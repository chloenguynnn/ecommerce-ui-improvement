/* Exercise 9.4 – Simple event handling */
/* code goes here */

/* Bước 2: bản đầu tiên chỉ hiện hộp thoại
function simpleHandler(event) {
    alert("button was clicked");
}
*/

/* Bước 5: ẩn/hiện đoạn văn ngay lập tức
function simpleHandler(event) {
    var content = document.getElementById("content");
    if (btn.innerHTML == "Hide") {
        content.style.display = "none";
        btn.innerHTML = "Show";
    }
    else {
        content.style.display = "block";
        btn.innerHTML = "Hide";
    }
}
*/

// Bước 6: ẩn/hiện có hiệu ứng mờ dần nhờ CSS3 transition và setTimeout()
function simpleHandler(event) {
    var content = document.getElementById("content");
    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";
        // change the display mode after a 1000 millisecond delay
        setTimeout(function(){
            content.style.display = "none";
        },1000);
    }
    else {
        btn.innerHTML = "Hide";
        content.style.display = "block";

        // change the class after a 500 millisecond delay
        setTimeout(function(){
            content.className = "makeItNormal";
        },500);
    }
}

// gắn hàm xử lý cho sự kiện click của nút
var btn = document.getElementById("testButton");
btn.addEventListener("click", simpleHandler);

// Bước 3: dùng hàm ẩn danh làm hàm xử lý sự kiện
var img = document.getElementById("mainImage");
/* changes the style of the image when it is moused over */
img.addEventListener("mouseover", function (event) {
    img.className = "makeItGray";
});

// Bước 4
/* remove the styling when mouse leaves image */
img.addEventListener("mouseout", function (event) {
    img.className = "makeItNormal";
});
