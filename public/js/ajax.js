/**
 * Created by Administrator on 2016/12/23.
 */
$("#btn").click(function () {
    var username = $('#name').val()
    var passwd = $('#passwd').val()

    $.ajax({
        url: 'api/user/login',
        type: 'POST',
        dataType: 'json',
        data: {
            username: username,
            passwd: passwd
        },
        success: function (result) {
            console.log('result', result)
            if(result.code == 1){
                alert('登陆成功')
            }else{
                alert(result.msg)
            }
        },
        // complete: function (res) {
        //     console.log('res', res)
        // }
    })
})
