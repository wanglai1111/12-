$(function () {
    // 默认情况下，mui不响应click单击事件，这是它的默认行为
    // 解决方式就是重新为所有a绑定tap
    mui('body').on('tap', 'a', function (e) {
        e.preventDefault()
        window.top.location.href = this.href;
    });

    // 发送ajax请求时进行路径拼接
    const baseURL = 'http://mmb.ittun.com/api/'
    // 添加zepto拦截器，在每次发送ajax请求前都经过这个函数进行业务处理
    $.ajaxSettings.beforeSend = function (xhr, obj) {
        // console.log(obj)
        obj.url = baseURL + obj.url
        // console.log(obj)

        // 在访问 私有路径 的时候，手动的将token值传递给服务器，不是的话不进入
        // 值如何传递：通过请求头的方式将token值传递给服务器
        // if(obj.url.indexOf('/my/') != -1){
        //     xhr.setRequestHeader('Authorization',sessionStorage.getItem('pyg_token'))
        // }
    }
})