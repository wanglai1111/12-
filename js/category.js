$(function () {
    $.ajax({
        type: 'get',
        url: 'getcategorytitle',
        success: function (result) {
            console.log(result);
            
        }
    })
})