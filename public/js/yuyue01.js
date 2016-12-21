/**
 * Created by Administrator on 2016/12/21.
 */
$('.jiedan').on('tap', function () {
    location.href = 'yuyue02.html'
})
$('.after').on('tap', function () {
    history.back()
})
$('.dianhua-img').on("tap", function(){
    $('.tan-bg').show()
})
$('.tan-qx').on('tap', function(){
    $('.tan-bg').hide()
})