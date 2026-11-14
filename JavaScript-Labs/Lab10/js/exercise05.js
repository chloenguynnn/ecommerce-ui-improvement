/* Exercise 10.5 – Inserting DOM elements */
/* put your DOM code here */

$(function () {
    // create a new DOM element
    var img = $('<img src="images/art/thumbs/13030.jpg" >');
    // and now add the new element relative to the panel
    var panel = $('.panel');

    // Các cách chèn đã thử lần lượt (mỗi lần chỉ bật một dòng):
    //panel.after(img);        // bước 2: sau panel
    //panel.before(img);       // bước 3: trước panel
    //panel.append(img);       // bước 4: cuối, bên trong panel
    //panel.prepend(img);      // bước 5: đầu, bên trong panel
    //img.appendTo(panel);     // bước 6: giống bước 4 nhưng viết ngược chiều
    //img.prependTo(panel);    // bước 7: giống bước 5
    img.insertBefore(panel);   // bước 8: giống bước 3
});
