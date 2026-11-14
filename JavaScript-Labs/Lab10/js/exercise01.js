/* Exercise 10.1 – Set up jQuery
   jQuery được nạp trong <head>: ưu tiên CDN, nếu không tải được thì dùng bản trong js/.
   Đoạn dưới chỉ để kiểm tra jQuery đã sẵn sàng hay chưa. */
if (window.jQuery) {
    console.log("jQuery loaded, version " + jQuery.fn.jquery);
    document.getElementById("msgArea").value =
        "jQuery is ready - version " + jQuery.fn.jquery;
} else {
    console.error("jQuery was NOT loaded");
    document.getElementById("msgArea").value = "jQuery was NOT loaded";
}
