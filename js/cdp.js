$(function () {
    var data1 = []; //店铺数据集合
    var data2 = []; //区域数据集合

    // console.log(data1);
    // console.log(data2);
    // 店铺数据获取
    function init() {
        console.log(data2);
        $.ajax({
            type: 'get',
            url: 'getgsshop',
            dataType: 'json',
            success: function (result) {
                // console.log(result);
                var arr = result.result
                // var html = template('shopId', {
                //     list: [arr[0]]
                // })
                // $('.nav').prepend(html)

                for (var i = 0; i < arr.length; i++) {
                    data1.push({
                        "value": i,
                        "text": arr[i].shopName,
                        "children": data2
                    })
                }
                goodsGuery(0, 0)
            }
        })
    }

    // 区域数据获取
    $.ajax({
        type: 'get',
        url: 'getgsshoparea',
        dataType: 'json',
        success: function (result) {
            // console.log(result);
            var arr = result.result
            // var html = template('areaId', {
            //     list: [arr[0]]
            // })
            // $('.all').before(html)

            for (var i = 0; i < arr.length; i++) {
                data2.push({
                    "value": i,
                    "text": arr[i].areaName
                })
            }
            init(data2)
            goodsGuery(0, 0)
        }
    })

    // 动态生成商品列表
    function goodsGuery(index1, index2) {
        $.ajax({
            type: 'get',
            url: 'getgsproduct',
            data: {
                shopid: index1,
                areaid: index2
            },
            dataType: 'json',
            success: function (result) {
                console.log(result);
                var html = template('getgsproduct', {
                    list: result.result
                })
                $('.list').html(html)
            }
        })
    }

    console.log(data1);
    console.log(data2);

    // 使用 picker(MUI 选择器)进行区域选择
    function linkage(data, callback) {
        $('.nav').on('tap', '.menu1,.menu2', function () {
            // 1.创建对象，设置为一级联动
            var picker = new mui.PopPicker({
                layer: 2
            });
            // 2.给picker对象添加数据,添加的数据只能是数组
            console.log(data);
            picker.setData(data)
            // 3.显示picker，参数是一个回调函数，在回调函数有一个参数
            picker.show(function (items) {
                console.log(items);
                // 点击确定修改页面中店铺和区域的文本
                // console.log(items[0].text);
                $('.menu1').text(items[0].text)
                $('.menu2').text(items[1].text)
                
                // 获取选择的店铺和区域索引值
                var index1 = items[0].value
                var index2 = items[1].value
                // console.log(index1);
                // console.log(index2);
                callback(index1,index2)
            });

        })
    }
    linkage(data1, function (index1,index2) {
        // 获取选择的店铺和区域索引值作为参数
        console.log(index1, index2);
        goodsGuery(index1, index2)
    })
})