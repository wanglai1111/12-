$(function(){
    
    $.ajax({
        type: 'get',
        url: 'getbaicaijiatitle',
        dataType: 'json',
        success: function(result){
            console.log(result)
            var html = template('baicaiTemp', {list: result.result});
            $('.ff').html(html);
            var obj = [];
            var arr = result.result.length
            for(var i = 0; i<arr; i++){
                // console.log(result.result[i].titleId)
                obj.push(result.result[i].titleId);
            }
            // console.log(obj);
            cc(obj); 
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                indicators:false, //是否显示滚动条，默认为True    
                scrollY: false, //是否竖向滚动
                scrollX: true //是否横向滚动
            });               
        }
    })
    function cc(obj) {
        $.ajax({
            type: 'get',
            url: 'getbaicaijiaproduct',
            data: {titleid: obj[0]},
            dataType: 'json',
            success: function(result){
                console.log(result);
                var html2 = template('kuaiTemp', {list: result.result});
                $('.mmm_details').html(html2);
                
            }
        })
    }
    
});