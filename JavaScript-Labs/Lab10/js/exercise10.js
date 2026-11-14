/* Exercise 10.10 – jqXHR handling
   $.get() trả về đối tượng jqXHR. Gắn done / fail / always để xử lý đủ các trường hợp.
   Dữ liệu lấy từ data/cities.json (lý do: xem ghi chú ở js/exercise09.js). */
var url = "data/cities.json";

function loadCities(requestUrl) {
    $('.animLoading').show();          // hiện ảnh đang tải
    $("div#results ul").empty();       // xóa kết quả của lần bấm trước

    $.get(requestUrl)
        // done will happen first
        .done(function(data) {
            $.each(data, function(index,value) {
                var li = $('<li/>').html(value.name);
                li.appendTo("div#results ul");
            });
        })
        // if error occurs will execute, but before always()
        .fail(function(xhr,status,error) {
            alert("failed loading data - status=" + status +
                     " error=" + error);
        })
        // always should be last
        .always(function(data) {
            $('.animLoading').fadeOut("slow");
        });
}

$(function() {
    $('.animLoading').hide();

    $("#consume").click(function() {
        loadCities(url);
    });

    // nút thử lỗi: địa chỉ không tồn tại nên nhánh fail() sẽ chạy
    $("#consumeBad").click(function() {
        loadCities("data/khong-ton-tai.json");
    });
});
