/* Exercise 10.6 – Simple jQuery animation */
/* put your animation code here */

$(function() {
    // mờ dần hiện ra trong 1000 ms
    $("#btnFadeIn").click(function() {
        $("figure").fadeIn(1000);
    });
    // mờ dần biến mất trong 1000 ms
    $("#btnFadeOut").click(function() {
        $("figure").fadeOut(1000);
    });
    // tự đổi giữa hiện và ẩn tùy trạng thái hiện tại
    $("#btnFade").click(function() {
        $("figure").fadeToggle(500);
    });

    // nhóm hiệu ứng trượt
    $("#btnSlideDown").click(function() {
        $("figure").slideDown("slow");
    });
    $("#btnSlideUp").click(function() {
        $("figure").slideUp("slow");
    });
    $("#btnSlide").click(function() {
        $("figure").slideToggle(2000);
    });
});
