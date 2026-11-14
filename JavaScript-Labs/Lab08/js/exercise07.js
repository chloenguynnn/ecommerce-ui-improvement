/* Exercise 8.7 – Arrays: dùng mảng, điều kiện và vòng lặp để vẽ bảng lịch */

// Bước 2: tạo mảng các ngày trong tuần
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
//document.write(daysOfWeek + "<br>");

// Bước 3: push() thêm phần tử vào CUỐI mảng
daysOfWeek.push("Sat");
//document.write(daysOfWeek + "<br/>");

// Bước 4: unshift() thêm phần tử vào ĐẦU mảng
daysOfWeek.unshift("Sun");
//document.write(daysOfWeek + "<br/>");   // Bước 5: đã comment lại

// Bước 6-7: duyệt mảng để in hàng tiêu đề của bảng
var i, day;
document.write("<table border=1>");
document.write("<tr>");
for (i = 0; i < daysOfWeek.length; i++) {
    // tên ngày dài hơn 3 ký tự (Tues, Thur) thì in nghiêng màu đỏ
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

// Bước 8: in các ngày 1..30, giả sử tháng bắt đầu vào Chủ nhật
var daysInMonth = 30;
var date = 1;
while (date <= daysInMonth) {
    document.write("<tr>");
    // mỗi hàng có đúng số ô bằng số ngày trong tuần
    for (i = 0; i < daysOfWeek.length; i++) {
        if (date <= daysInMonth) {
            document.write("<td>" + date + "</td>");
            date++;
        } else {
            document.write("<td></td>");   // ô trống sau ngày 30
        }
    }
    document.write("</tr>");
}
document.write("</table>");
