/* Exercise 9.7 – Working with forms */
/* code goes here */

// Bước 2: hàm này được gọi mỗi khi một ô nhập nhận (focus) hoặc mất (blur) con trỏ
function setBackground(e) {
    if (e.type == "focus") {
        e.target.style.backgroundColor = "#FFE393";   // ô đang nhập: tô vàng
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";     // rời ô: trả lại màu trắng
    }
}

// Bước 3: khi trang tải xong, gắn hàm trên cho mọi ô text và password
window.addEventListener("load", function(){
    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    for (var i=0; i<fields.length; i++)
    {
        fields[i].addEventListener("focus", setBackground);
        fields[i].addEventListener("blur", setBackground);
    }
});
