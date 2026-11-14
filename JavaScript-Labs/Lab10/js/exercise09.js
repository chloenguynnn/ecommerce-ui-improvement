/* Exercise 10.9 – GET requests

   Dịch vụ mẫu của giáo trình:
       http://www.randyconnolly.com/funwebdev/services/travel/cities.php
   chỉ chạy qua HTTP. GitHub Pages chạy HTTPS nên trình duyệt chặn lời gọi này
   (mixed content). Vì vậy bài dùng file JSON cùng cấu trúc đặt ngay trong repository:
   data/cities.json. Lời gọi vẫn là một GET request bất đồng bộ bằng $.get(). */
var url = "data/cities.json";

$(function() {
    /* Bước 3-4: duyệt dữ liệu JSON bằng vòng for, có kiểm tra biến status
    $("#consume").click(function() {
        $.get(url, function (data, status) {
            if (status == "success") {
                var list = "";
                // loop through JSON data and add each city to list
                for (var i=0; i < data.length; i++) {
                    list += data[i].name + "<br>";
                }
                $("#results").html(list);
            }
        });
    });
    */

    // Bước 5: duyệt dữ liệu bằng $.each() và tạo từng <li>
    $("#consume").click(function() {
        $("#results").html("<ul></ul>");
        $.get(url, function (data, status) {
            if (status == "success") {
                $.each(data, function(index,value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            }
        });
    });
});
