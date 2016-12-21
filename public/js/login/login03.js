/**
 * Created by Administrator on 2016/12/19.
 */
$('.after').on('tap', function () {
    history.back()
})
$('#shenfen').on('tap', function () {
    $('.shenfen2').show()
})
$('.type').on('tap', function () {
    var $this = $(this);
    $('.sf').val($this.text());

})
$('.sf').focus(function () {
    if($('zh').val()!= "" && $('mm').val()!= "" && $('mm1').val()!= "" && $('mm2').val()!= "" && $('sf').val()!= ""){
        $('.login').css('background','#ED6C2B')
        $('.shenfen2').hide()
    }
})
$('.login').on('tap', function () {

    location.href = 'login05.html'

})