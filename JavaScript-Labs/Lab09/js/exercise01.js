/* Exercise 9.1 – Basic DOM selection
   Các bước chạy nối tiếp nhau nên trên trang chỉ thấy trạng thái cuối cùng.
   Mỗi bước được ghi thêm ra Console (F12) để xem lại kết quả từng bước. */
var i;

// Bước 2: chọn phần tử theo id và gán giá trị cho <textarea>
var msg = document.getElementById("msgArea");
msg.value = "here is some text";
console.log("Bước 2 - msgArea:", msg.value);

// Bước 3-4: đổi nội dung tiêu đề, không cần biến tạm
//var title = document.getElementById("pageTitle");
//title.innerHTML = "New Title";
document.getElementById("pageTitle").innerHTML = "Even newer title";
console.log("Bước 4 - pageTitle:", document.getElementById("pageTitle").innerHTML);

// Bước 5: innerHTML trả về toàn bộ HTML bên trong phần tử
//msg.value = document.getElementById("first").innerHTML;
// Bước 6: innerText chỉ trả về phần chữ, đã bỏ các thẻ
msg.value = document.getElementById("first").innerText;
console.log("Bước 6 - innerText của #first:", msg.value);

// Bước 7: getAttribute() đọc giá trị một thuộc tính
msg.value = "My class is " + msg.getAttribute("class");
console.log("Bước 7 -", msg.value);

// Bước 8: getElementsByTagName() trả về danh sách phần tử theo tên thẻ
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";
console.log("Bước 8 -", elem[0].value);

// Bước 9: lấy nội dung của mọi thẻ <span> đưa vào <textarea>
elem = document.getElementsByTagName("span");
for (i = 0; i < elem.length; i++) {
    document.getElementById("msgArea").value += "\n" + elem[i].innerText;
}
console.log("Bước 9 - các <span>:", msg.value);

// Bước 10: getElementsByClassName() chọn theo tên class
document.getElementById("msgArea").value = "";
var counts = document.getElementsByClassName("count-number");
for (i = 0; i < counts.length; i++) {
    document.getElementById("msgArea").value += "\n" + counts[i].innerText;
}
console.log("Bước 10 - các .count-number:", msg.value);

// Bước 11: querySelector() dùng bộ chọn CSS, chỉ trả về phần tử khớp ĐẦU TIÊN
var ps = document.querySelector("#first p");
document.getElementById("msgArea").value = ps.innerHTML;
console.log("Bước 11 - querySelector:", msg.value);

// Bước 12: querySelectorAll() trả về TẤT CẢ phần tử khớp
ps = document.querySelectorAll("#first p");
for (i = 0; i < ps.length; i++) {
    document.getElementById("msgArea").value += ps[i].innerHTML + "\n";
}
console.log("Bước 12 - querySelectorAll:", msg.value);

// Bước 13: setAttribute() đổi class thành "hidden" (class của Bootstrap) nên <textarea> bị ẩn
document.getElementById("msgArea").setAttribute("class", "hidden");
console.log("Bước 13 - class mới của msgArea:", msg.getAttribute("class"));

// Bước 14: đổi style trực tiếp bằng JavaScript
document.getElementById("features").style.backgroundColor = "green";
console.log("Bước 14 - nền của #features:", document.getElementById("features").style.backgroundColor);
