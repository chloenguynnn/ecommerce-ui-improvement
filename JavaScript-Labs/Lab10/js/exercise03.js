/* Exercise 10.3 – Advanced selectors */
/* try the different advanced selection calls here */

// Bước 2: chọn mọi ô mật khẩu và tô nền vàng (đã comment lại ở bước 3)
//$(':password').css('background-color', 'yellow');

// Bước 4: chọn phần tử con thứ 4, 8, 12... bên trong form
$('form :nth-child(4n)').css('background-color', 'yellow');

// Bước 5: chọn các <label> có chứa chữ "word" (Password, Password Again) và đổi chữ thành đen
$('label:contains("word")').css("color", "black");
