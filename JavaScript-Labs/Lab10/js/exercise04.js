/* Exercise 10.4 – jQuery listeners */
/* put your event code here */

/* Bước 2: dùng hàm tắt click()
$(".panel").click(function() {
    $("#message").html("You clicked in the panel");
});
*/

/* Bước 3: on() dùng được cho mọi loại sự kiện
$(".panel").on("click", function() {
    $("#message").html("You clicked in the panel");
});
*/

/* Bước 4: $(function(){...}) là cách viết tắt của sự kiện document ready
$(function () {
    $(".panel").on("click", function() {
        $("#message").html("You clicked in the panel");
    });
});
*/

// Bước 5: gắn nối tiếp nhiều sự kiện cho cùng một phần tử
$(function () {
    // chaining handlers
    $(".panel")
        .on("mousemove",function (e) {
            // báo tọa độ chuột khi di chuyển trong ô
            $("#message").html("x=" + e.pageX + " y=" + e.pageY);
        })
        .on("mouseleave",function (e) {
            $("#message").html("goodbye!");
        })
        .on("click",function () {
            // off() gỡ sự kiện mousemove nên không báo tọa độ nữa
            $("#message").html("stopped move reporting");
            $(".panel").off("mousemove");
        });
});
