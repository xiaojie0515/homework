
    $('.jiedan').on('tap', function(){
        var $self = $(this)
        var i = $self.index()
        $self.hide()
        $self.next().show()
	 })

$('.yuyue-box').on({
	'swipeLeft':function(){
		$(this).addClass('active');
	},
	'swipeRight':function(){
		$(this).removeClass('active');
	}
})

$('.shanchu').on('tap', function(){
	$(this).parent().hide()
})

$('.shouye').on('tap',function () {
    location.href = '../index/index.html'
})
$('.xinxi').on('tap', function () {
    location.href = '../information/news.html'
})
$('.me').on('tap', function () {
    location.href = '../Mymessage/logging01.html'
})
$('.yuyue-box').on('tap', function () {
    location.href = 'yuyue01.html'
})

$('.bottom-jia').on('tap', function () {
    $('.fb-bg').show()
})
$('.fbxq').on('tap', function () {
    location.href = '../Release/Release01.html'
})
$('.push-x').on('tap', function () {
    $('.fb-bg').hide()
})
$('.fbfy').on('tap', function () {
    location.href = '../Release/Release02.html'
})
