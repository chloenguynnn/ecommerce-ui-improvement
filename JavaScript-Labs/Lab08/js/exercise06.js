/* Exercise 8.6 – Using built-in JavaScript objects (String, Date, Math) */

// Bước 2: tạo đối tượng String và in ra trang
//var stringOne = new String("Test");
//document.write(stringOne);

// Bước 3: String object (new String) khác với string literal ("...")
var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");
document.write("<br>typeof stringOne=" + typeof stringOne);      // object
document.write("<br>typeof stringThree=" + typeof stringThree);  // string

// Bước 4: so sánh == (chỉ so giá trị) và === (so cả giá trị lẫn kiểu)
if (stringOne == stringTwo)
    document.write("<br>stringOne has = value to stringTwo");
if (stringOne == stringFour)      // hai object khác nhau nên KHÔNG bằng nhau
    document.write("<br>stringOne has = value to stringFour");
if (stringOne === stringTwo)      // khác kiểu (object và string) nên sai
    document.write("<br>stringOne has = value and = type to stringTwo");
if (stringTwo === stringThree)    // hai literal cùng giá trị, cùng kiểu nên đúng
    document.write("<br>stringTwo has = value and = type to stringThree");
if (stringTwo === stringFour)
    document.write("<br>stringTwo has = value and = type to stringThree");

// Bước 5: đối tượng Date – ngày giờ hiện tại
var dateOne = new Date();
document.write("<p>" + dateOne + "</p>");

// Bước 6: đối tượng Math
document.write(Math.PI + "<br/>");
document.write(Math.sqrt(4) + "<br/>");
document.write(Math.random() + "<br/>");
