/**
 * Created by Administrator on 2016/12/19.
 */
$('.rester').on('tap', function () {
    location.href = 'login03.html'
})
$('.forget').on('tap', function () {
    location.href = 'login04.html'
})

$('.after').on('tap', function () {
    location.href = '../Mymessage/logging02.html'
})


$("input").on('blur',function () {
        var $self = $(this)
        var index = $self.index()
        if($(".iname").val() != "" && $(".imima").val() != "" ){
            $('.login').css({
                background:'#EB5C11'
            })
            $('.login').removeAttr('disabled','disabled')
        }else{
            $('.login').css({
                background:'#c7c7c7'
            })
            $('.login').attr('disabled','disabled')
        }
    })

$('.login').on('tap', function () {
    if($(".login").attr('disabeld') == null)
    location.href = '../Mymessage/logging01.html'
})