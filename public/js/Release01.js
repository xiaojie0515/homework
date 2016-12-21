$('.quxiao').on("tap", function(){
    $('.tan-bg').show();
    $('.tan-box').show();
    $('.tan-box2').hide();
})
$('.tan-qx').on('tap', function(){
    $('.tan-bg').hide()
});
$('.tan-box .tan-bottom .queding').on('touchstart',function () {
    location.href = '../Mymessage/logging01.html'
})
$('.fabu').on('tap', function () {
    $('.tan-bg').show();
    $('.tan-box').hide();
    $('.tan-box2').show();
})
$('.tan-bottom2').on('tap', function(){
    location.href = '../Mymessage/logging01.html'
})
$('.tan-txt2').on('tap', function () {
    location.href = '../Mymessage/logging01.html'
})