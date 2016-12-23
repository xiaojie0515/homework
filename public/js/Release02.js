/**
 * Created by Administrator on 2016/12/22.
 */
var $radioList = $('.radio_box .radio_block');
$radioList.on('tap', function(){
    var $self = $(this);
    if(!$self.hasClass('selected')){
        $radioList.removeClass('selected');
        $self.addClass('selected');
    }
});
$(".quxiao").on('tap', function () {
    history.back()
})