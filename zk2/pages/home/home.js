// pages/home/home.js
Page({

  data: {
    data:[],
    listData:[],
    toView:''
  },
  tap(e){
    let id = e.currentTarget.dataset.id;
    this.setData({
      toView:id
    })
    //弹框
    wx.showToast({
      icon:'none',
      title: id,
      duration: 1000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    wx.request({
      url: 'http://baojia.chelun.com/v2-car-getMasterBrandList.html',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        let obj = {}
        res.data.data.forEach((item,index)=>{
          if (obj[item.Spelling[0]]){
            obj[item.Spelling[0]].push(item)
          }else{
            obj[item.Spelling[0]] = []
            obj[item.Spelling[0]].push(item)
          }
        })
          that.setData({
          data: obj
        })
      }
    })
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