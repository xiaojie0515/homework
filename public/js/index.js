	
	var $slider = $('.banner-img');
	var $sliderCon = $('.banner-box');
	var $point = $('.point-block');
	var W = $(window).width();
	var lg = $slider.length;
	var boxW = W * lg;
	var hg = W * 0.85;
	$sliderCon.width(boxW);
	$slider.width(W).height(hg);
	var swipeNow = 0;
	var slideTime;

	$sliderCon.on('swipeLeft', function(){
	   
	    clearTimeout(slideTime);
	    if(swipeNow < lg - 1){
	      
	        var swipeW = (++swipeNow) * W;
	        $sliderCon.css('transform', 'translateX(-'+ swipeW +'px)');
	        
	        $point.removeClass('active').eq(swipeNow).addClass('active');
	        autoSwipe();
	    }
	});
	$sliderCon.on('swipeRight', function(){
	    console.log('touch right');
	    clearTimeout(slideTime);
	    if(swipeNow > 0){
	      
	        var swipeW = (--swipeNow) * W;
	        $sliderCon.css('transform', 'translateX(-'+ swipeW +'px)');
	      
	        $point.removeClass('active').eq(swipeNow).addClass('active');
	        autoSwipe();
	    }
	});

	function autoSwipe(){
	    slideTime = setTimeout(function(){
	        if(swipeNow < lg - 1){
	          
	            var swipeW = (++swipeNow) * W;
	            $sliderCon.css('transform', 'translateX(-'+ swipeW +'px)');
	            
	            $point.removeClass('active').eq(swipeNow).addClass('active');
	            autoSwipe();
	        }
	    }, 2000);
	}
	autoSwipe();


$(window).scroll(function(){
		var otop = $(window).scrollTop();

		console.log(otop)
		
		if(otop >= 320 ){
			$('.heads02').css({
				display:'block'
			})
			$('.query-box').css({
			  position: 'fixed',
			  top: "45px",
			  zIndex: "5"
			})
			
			
		}else{$('.query-box').css({
			  position: 'inherit'
			})
		$('.heads02').css({
				display:'none'
			})
		}
	});

$('.icon02').hide();

	var $queyrBlock = $('.query-block');
	$queyrBlock.on('tap', function(){
		if($(window).scrollTop() < 320){
			$(window).scrollTop(320);
		}

		var $self = $(this);
	    var index = $self.index();
	    console.log(index);
	    if($self.hasClass('active')){
	        $self.removeClass('active');
	        $('.down-box').eq(index).hide();
	       	
			 $('.icon').eq(index).show();
	         $('.icon02').eq(index).hide();
	       var x = $(window).scrollTop();console.log(x)
	       $('.heads02').css({
				display:'block'
			})
	        $('.query-box').css({
			  position: 'fixed',
			  top: "45px",
			  zIndex: "5"
			})
	       
	    }else{
	        $queyrBlock.removeClass('active');
	        $self.addClass('active');
	        $('.icon').eq(index).hide();
	         $('.icon02').eq(index).show();
	        $('.down-box').hide().eq(index).show();
	    }
	});

$('.query-price').on('tap', function(){
    var $self = $(this);
    if($self.hasClass('active-down')){
        console.log('up');
        $self.removeClass('active-down').addClass('active-up');
    }else if($self.hasClass('active-up')){
        console.log('normal');
        $self.removeClass('active-up');
    }else{
        console.log('down');
        $self.addClass('active-down');
        $('.query-box').css({
			  position: 'inherit'
			})
		$('.heads02').css({
				display:'none'
			})
    }
})


	
	
	

