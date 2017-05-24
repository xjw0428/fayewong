Page({
    data:{
        scaleData: 10,
        markers: [{
          iconPath: "/images/mark.jpg",
          id: 0,
          latitude: 43.847378,
          longitude: 125.285806,
          width: 50,
          height: 50
        }],
        polyline: [{
          points: [{
            longitude: 43.847378,//纬度
            latitude: 125.285806//经度
          }, {
            longitude: 43.847378,
            latitude: 125.285899
          },{
            longitude: 43.847378,
            latitude: 125.40
          }
          ],
          color: "#FF0000",
          width: 9,
          dottedLine: true
        }],
        controls: [{
          id: 1,
          iconPath: '/images/control.jpg',
          position: {
            left: 0,
            top: 300 - 50,
            width: 50,
            height: 50
          },
          clickable: true
        }]
    },
    regionchange(e) {
      console.log(e.type)
    },
    markertap(e) {
      console.log(e.markerId)
    },
    controltap(e) {
      console.log(e.controlId)
    },
    onclick_larger:function(){
        var that = this;
        that.setData({
            scaleData:that.data.scaleData+1
        })
    },
    onclick_smaller:function(){
        var that = this;
        that.setData({
            scaleData:that.data.scaleData-1
        })
    }
})