$(function(){
    $(".top").click(function(){
        $("html,body").animate({scrollTop:0},900);// 數字代表速度
        return false // 停止動畫
    });
});

