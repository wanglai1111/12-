$(function () {
  $.ajax({
    type:'get',
    url:'getcoupon',
    dataType:'json',
    success:function (result) {
      console.log(result);
      var html = template('listTemp',{data:result.result})
      console.log(html);
      $('.mmm_orderlist').html(html)
    }
  })
})