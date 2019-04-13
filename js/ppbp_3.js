$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators:false, //是否显示滚动条，默认为True    
        scrollY: true, //是否竖向滚动
        scrollX: false //是否横向滚动
    });
    var data1 = {
        brandtitleid: getParameter(location.search).bbid,
        'pagesize ': 4
    }
    // console.log(data1)
    function cai() {
        $.ajax({
            type: 'get',
            url: 'getbrandproductlist',
            data: data1,
            dataType: 'json',
            success: function(result) {
                console.log(result);
                var html1 = template('xTemp', {list: result.result})
                $('.ddd .mui-scroll').html(html1);
                // $('.cscs').on('tap',function(){
                //     var vpn = this.data('c');
                //     var cpi = this.data('v');
                //     var vv = {
                //         vpn: vpn,
                //         cpi: cpi
                //     }
                //     localStorage.setItem('mmm_info', vv);
                //     return false;
                // })
            }
        })
    }
    cai();
    
    function getParameter(url){
        var obj = {}
        console.log(url)
        // location.search:url中?及?后面的内容
        url = url.substring(1) //cid=5&name=jack
        // 先按&拆分
        var arr = url.split('&') //['cid=5','name=jack']
        // 遍历进行第二次拆分
        for(var i=0;i<arr.length;i++){
            var temp = arr[i].split('=') //['cid',5]
            obj[temp[0]] = temp[1] // obj['cid'] = 5
        }
        return obj
    }
})