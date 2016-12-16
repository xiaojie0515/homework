	
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
		var otop = window.scrollY;

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
			$downBox.hide();
		}
	});



	var $queyrBlock = $('.query-block');
	var $downBox = $('.down-box');
	$queyrBlock.on('tap', function(e){
		e.preventDefault();
		e.stopPropagation();
		if(window.scrollY < 320){
			window.scrollTo(0, 320);
		}else{
			window.scrollTo(0, 320);
		}

		var $self = $(this);
	    var index = $self.index();
	    console.log($self);
	    
   		if($self.hasClass('active')){
	    	$self.removeClass('active');
	    	$downBox.hide();
	    }else{
	    	$queyrBlock.removeClass('active');
	    	$self.addClass('active');
	    	$downBox.hide().eq(index).show();
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
//      $('.query-box').css({
//			  position: 'inherit'
//			})
		
    }
})
	 var $quyu = $('.quyu');
	 console.log($quyu)
	$quyu.on('tap',function(){
		var $self = $(this);
		var index = $self.index();
		if($self.hasClass('quyu')){
			$self.removeClass('quyu');
			$self.addClass('quyu2');
			
		}else{
			$('.quyu').removeClass('quyu2')
			$self.addClass('quyu');
		}
	})

	 var $danjia = $('.danjia');
	 console.log($danjia)
	$danjia.on('tap',function(){
		var $self = $(this);
		
		if($self.hasClass('danjia')){
			$self.removeClass('danjia');
			$self.addClass('danjia02');
			
		}else{
			$('.danjia').removeClass('danjia02')
			$self.addClass('danjia');
		}
	})
	
	var $aixin = $('.aixin');
	 console.log($aixin)
	$aixin.on('tap',function(){
		var $self = $(this);
		
		if($self.hasClass('aixin')){
			$self.removeClass('aixin');
			$self.addClass('aixin2');
			
		}else{
			$('.aixin').removeClass('aixin2')
			$self.addClass('aixin');
		}
	})
	
	$('.sousuo').on("tap", function(){
		$('.search-bg').css({
			display:'block'
		})
	})
	
	$('.search-quxiao').on("tap", function(){
		$('.search-bg').css({
			display:'none'
		})
	})
	
	
	
//	window.onload = function(){
//	var ditie = document.getElementsByClassName('ditie')
//			for(var i=0; i<ditie.length; i++){
//				ditie[i].ontouchstart = function(){
//					var id = this.getAttribute('dataid');
//					var gengduo = document.getElementsByClassName("gengduo");
//					for(var j=0; j < gengduo.length; j++){
//						if(gengduo[j].id == id){
//							gengduo[j].style.display = 'block'
//						}else{
//							gengduo[j].style.display = 'none'
//						}
//						
//						/*ditie[j].setAttribute("class", "news");
//						this.setAttribute("class", "news active");*/
//					}
//				}
//			}
//}


window.onload = function(){
	var ditie = document.getElementsByClassName('ditie');
	var gd = document.getElementsByClassName("gengduo");
	for(var i=0; i<ditie.length; i++){
		console.log(ditie[i]);
		ditie[i].addEventListener('touchstart', function(){
			var id = this.getAttribute('dataid');
			console.log(id);
			var gd = document.getElementsByClassName("gengduo");
			for(var j=0; j < gd.length; j++){
				if(gd[j].id == id){
					gd[j].style.display = 'block'
				}else{
					gd[j].style.display = 'none'
				}
				
				ditie[j].setAttribute("class", "ditie");
			}
			this.setAttribute("class", "ditie ditie-atv");
		})
	}
}