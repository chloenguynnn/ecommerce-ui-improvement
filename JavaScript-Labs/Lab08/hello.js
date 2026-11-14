/* Exercise 8.3 – file JavaScript bên ngoài, đặt cùng thư mục với trang HTML */
document.write("this text was written from JS");
var count = 1;
document.write(" Count = " + count);

count++;
var output = "<br>Count = " + count;
document.write(output);
