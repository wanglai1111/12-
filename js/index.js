$(function () {
      $.ajax({
        type: 'get',
        url: 'getmoneyctrl',
        dataType: 'json',
        success: function (result) {
          console.log(result);

          var html = template('discountList', {
            data: result.result
          })
          // console.log(html);

          //渲染页面
          $('.discount').html(html)
        }
      })
      //首页菜单
      $.ajax({
        type: 'get',
        url: 'getindexmenu',
        dataType: 'json',
        success: function (result) {
          console.log(result);
          var menusHtml = template('menuslist', {
            data: result.result
          })
          $('.mmm_orderlist').html(menusHtml)
        }
      })
     
    })
