//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    result: ''

  },

  onLoad: function () {

  },

  gotoPdf: function(){
    wx.navigateTo({
      url: '../test/test'

    })
  },

  getScancode: function () {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        wx.navigateTo({
          url: '../test/test'
          // url: '../navigator/navigator?title=' + res.result

        })
        var result = res.result;

        _this.setData({
          result: result,

        })
      }
    })

  }

})