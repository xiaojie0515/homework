$('.jiedan').on('tap', function(){
	$('.jiedan').hide(),$('.jiedan2').show()
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
