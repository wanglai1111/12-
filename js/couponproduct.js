$(function () {

  //获取优惠券首页优惠券标题
  var info = {
    couponid: $.getParameter(location.search).cc
  }



  $.ajax({
    type: 'get',
    url: 'getcouponproduct',
    data: info,
    dataType: 'json',
    success: function (result) {
      console.log(result);
      var html = template('listTitleTemp', {
        data: result.result
      })
      $('.mmm_orderlist').html(html)

      var flag = true;
      //有数据则执行点击事件
      if (!flag) {
        return

      } else {
        if (flag) {
          $('.listCont').on('tap', function () {

            $('body').css({
              'background-color': 'rgba(0,0,0,.3)'
            }, {
              'z-index': 100
            })
            $('.mmm_logo').css('background', 'rgba(0,0,0,.3)')
            $('.listCont .listImg img').css('opacity', '0.3')
            $('.showBox').show()
            var Html = template('bannerTemp', {
              data: result.result
            })
            console.log(Html);
            
            $('.bannerlist').html(Html)
            // 如果轮播图是动态生成就需要重新手动初始化
            mui('.mui-slider').slider({
              interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
            });
          })
        }
      }
    }
  })

})
