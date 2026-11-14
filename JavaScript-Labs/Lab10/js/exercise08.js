/* Exercise 10.8 – Complex animations */
/* put your animation code here */

$(function() {
    /* Bước 2: chỉ đổi một thuộc tính
    $("button").click(function(){
        $("#box").animate({left: '495px'});
    });
    */

    // Bước 3-4: ba animation nối tiếp, cái sau chạy khi cái trước kết thúc
    $("button").click(function(){
        $("#box")
            .animate({
                left: '495px',
                opacity: '1',
                height: '50px'
            })
            .animate({top: '400px', opacity: '0.2'})
            .animate({height: '200px'}, 2000);
    });
});
