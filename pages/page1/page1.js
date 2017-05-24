Page({
    data:{
          imageSrc:'',
        urls:'',
        position: 0,
        requestData:[]
    },requestFromServer:function(){
        var THIS = this;
        wx.request({
            url: 'http://www.xiaochengxu-wx.com/testdata/requestdemo.js', 
            data: {
               // x: '1',
                //y: '2'
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                var data = res.data;
                THIS.setData({
                    requestData:data
                });
            }
        });
    },

})