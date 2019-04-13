$(function () {
    $.ajax({
        type: 'get',
        url: 'getcategorytitle',
        dataType: 'json',
        success: function (result) {
            console.log(result);
            var html = template('classify', {
                list: result.result
            })
            $('.mui-table-view').html(html)
            
            $('.mui-table-view').on('tap','a', function (e) {
                // var num = $(e.target)[0].dataset.id
                // console.log(num);
                
                var num = $(this).data('titleid')
                console.log(num);
                
                $.ajax({
                    type: 'get',
                    url: 'getcategory',
                    data: {
                        titleid: num
                    },
                    dataType: 'json',
                    success: function (result) {
                        console.log(result);
                        var html = template('classify_up', {
                            list: result.result
                        })
                        $('.mui-collapse-content').html(html)
                    }
                })
            })
        }
    })
})