
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
    location.href = '../index.html'
})
$('.xinxi').on('tap', function () {
    location.href = '../information/news.html'
})
$('.me').on('tap', function () {
    location.href = '../Mymessage/logging01.html'
})