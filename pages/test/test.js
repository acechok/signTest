// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: 'http://192.168.66.110:8002/index.html',
    photoData: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    this.photoData = currPage.data.photoData;
    // if(currPage.data.photoData){
    //   that.setData({
    //     url: "http://192.168.66.110:8002/index.html?photoData=" + encodeURIComponent(JSON.stringify(currPage.data.photoData))
    //   });
    // }
  
    console.log(encodeURIComponent(JSON.stringify(currPage.data.photoData)))
    console.log(this.photoData)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})