/* Exercise 10.2 – Basic selectors */
/* try the different selection calls here */

// Bước 2: $() là hàm jQuery; chọn theo id rồi gán giá trị cho <textarea>
var msg = $('#msgArea');
msg.val("here is some new text");

// Bước 3: html() đọc hoặc ghi nội dung HTML của phần tử.
// Lệnh này thay toàn bộ nội dung của #first (kể cả <textarea>) bằng chữ "new Title".
$('#first').html("new Title");

// Bước 4: attr() đọc hoặc ghi một thuộc tính HTML.
// Vì bước 3 đã xóa <textarea> khỏi trang nên lệnh này không còn phần tử nào để tác động.
$('#msgArea').val("My class is " + $('#msgArea').attr("class") );
console.log("Số phần tử #msgArea còn lại sau bước 3:", $('#msgArea').length);

// Bước 5: chọn mọi <button> và đổi nền thành đỏ, không cần vòng lặp
var buttons = $('button');
buttons.css('background-color', 'red');

// Bước 6: tập kết quả chỉ có một phần tử thì css() vẫn dùng như cũ
var temp = $('body');
temp.css("background-color", "ivory");

// Bước 7: gọi nối tiếp (chaining) ngay sau bộ chọn, thêm class "selected"
$('.center-icons').addClass('selected');
