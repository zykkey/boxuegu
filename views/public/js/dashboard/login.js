define(['jquery','cookie'],function ($) {
    $("#formLogin").submit(function () {
        var data = $(this).serializeArray();
        console.log(data);
        $.ajax({
            type: "post",
            url:"/api/login",
            data: data,
            dataType:'json',
            success: function (result) {
                $.cookie("tcInfo",JSON.stringify(result.result));
                alert("登陆成功");
                location.href = '/';
            },
            error:function () {
                alert("用户名或密码错误")
            }
        });
        return false;
    })
});
