/* Exercise 9.3 – Modifying the DOM */
/* code goes here */
var first = document.getElementById("first");

// Bước 1: tạo nút text và thẻ <p> mới, rồi gắn vào cuối <div id="first">
var text = document.createTextNode("this is programmatically created");
var p = document.createElement("p");

p.appendChild(text);
first.appendChild(p);

// Bước 3: xóa một <li> khỏi danh sách (mục "24 chapters")
var icons = document.getElementById("iconList");
icons.removeChild( document.getElementById("deleteThisOne") );
