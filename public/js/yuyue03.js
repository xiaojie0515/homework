$('.gaiqi').on("tap", function(){
	$('.tan-bg').show();
	$('.tan-box').show();
    $('.tan-box2').hide();
})
$('.tan-qx').on('tap', function(){
	$('.tan-bg').hide()
});
$('.queding').on('tap',function () {
    $('.tan-box').hide();
    $('.tan-box2').show();
})
$('.tan-bottom2').on('tap', function(){
    location.href= 'yuyue02.html';
});
$('.ok').on('tap', function(){
    location.href= 'yuyue02.html';
});
$('.quxiao').on('tap', function(){
    history.back()
});