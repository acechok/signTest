Page({
  data: {  },
  onLoad: function (options) {
    var _this = this;
    // 生命周期函数--监听页面加载
    this.setData({
      title: options.title

    });
    wx.request({
      url: 'http://222.84.248.241:40005/portal/district/recommendList',
      data: {
        platformType: 2
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        _this.setData({
          result: res.data.msg
        });
        wx.showToast({
          title: res.data.msg,
          icon: 'success',
          duration: 2000
        })
        // wx.showModal({
        //   title: '',
        //   content: res.data.msg,
        //   success(res) {
        //     if (res.confirm) {
        //       console.log('用户点击确定')
        //     } else if (res.cancel) {
        //       console.log('用户点击取消')
        //     }
        //   }
        // })
        
      }
    })
  }
})