var startX,
	starty,
	moveX,
	moveY,
	times = 0,
	timeout;


var dom = document.getElementsByClassName('md')[0];

	dom.addEventListener('touchstart', function(e){
		console.log('touchstart');
		
		timeout = setInterval(function(){
			times += 100; 
		},100)
		var th = e.touches[0];
		startX = th.clientX;
		startY = th.clientY;
	})
	

	dom.addEventListener('touchmove', function(e){
		console.log('touchmove');
		var th = e.touches[0];
		moveX = th.clientX;
		moveY = th.clientY;
	})
	

	dom.addEventListener('touchend', function(e){
		console.log('touchend');
		console.log(startX,starty,moveX,moveY)
		
		if(moveY - startY >= 100){
			dom.style.color = 'skyblue'
		}else if(startY - moveY >= 100){
			dom.style.color = 'sandybrown'
		}
		
		var fontSize = parseInt(window.getComputedStyle(document.getElementsByClassName('md')[0]).fontSize);
		
		console.log('fontSize', fontSize)
//		if(moveY - startY >= 100){
//			dom.style.fontSize = '50px'
//		}else if(startY - moveY >= 100){
//			dom.style.fontSize = '30px'
//		}
		
		
		if(moveX - startX >=100 ){
			fontSize += 2;
			document.getElementsByClassName('md')[0].style.fontSize = fontSize + 'px';
		}else if(startX - moveX >= 100){
			
			fontSize -= 2;
			document.getElementsByClassName('md')[0].style.fontSize = fontSize + 'px';
		}
		clearInterval(timeout);
		console.log(times);
		if(times >= 1000){
			console.log('tap')
		}
	})
	
	var  xhr = new XMLHttpRequest();
	
	xhr.open('get', 'http://122.10.30.153:9901/index')
	xhr.send();
	xhr.onreadystatechange = function(){
		
		if(xhr.state === 200 || xhr.readyState === 4){
			console.log('success', JSON.parse(xhr.response))
		}
	}
	
	$.ajax({
		url: "http://122.10.30.153:9901/index",
		type: 'get',
		dataType: 'json',
		success: function(result){
			console.log('result', result)
		},
		complete: function(res){
			console.log('res', res)
		}
	})
