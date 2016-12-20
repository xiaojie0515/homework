window.onload = function(){
	var list = document.getElementsByClassName('news');
	var texts = document.getElementsByClassName("otext");
	for(var i=0; i<list.length; i++){
		console.log(list[i]);
		list[i].addEventListener('touchstart', function(){
			var id = this.getAttribute('dataid');
			console.log(id);
			var texts = document.getElementsByClassName("otext");
			for(var j=0; j < texts.length; j++){
				if(texts[j].id == id){
					texts[j].style.display = 'block'
				}else{
					texts[j].style.display = 'none'
				}
				
				list[j].setAttribute("class", "news");
			}
			this.setAttribute("class", "news active");
		})
	}
}
$('.me').on('tap', function () {
    location.href = '../Mymessage/logging01.html'
})
$('.shouye').on('tap', function () {
    location.href = '../index/index.html'
})
$('.yuyue').on('tap', function () {
    location.href = '../yuyue/yuyue04.html'
})
