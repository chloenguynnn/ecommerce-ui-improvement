/* Exercise 8.5 – hello.js sau khi chuyển vào thư mục js/

   Bước 4: cố tình viết sai "document" thành "doccumment" để xem lỗi trong Console:
       doccumment.write("this text was written from JS");
   Console báo: Uncaught ReferenceError: doccumment is not defined
   Bước 7: sửa lại cho đúng như bên dưới. */
document.write("this text was written from JS");
var count = 1;
document.write(" Count = " + count);

count++;
var output = "<br>Count = " + count;
document.write(output);

/* Bước 9-12: gõ lần lượt trong Console để kiểm tra giá trị biến
       count                  -> 2
       output                 -> "<br>Count = 2"
       var temp = count * 7;  -> undefined (phép gán không trả về giá trị)
       temp                   -> 14 */
