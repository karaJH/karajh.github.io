var app = getApp();

Page({
  data: {
    items:[]
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载  
    var that = this
    app.getItem(item => {
      that.setData({
        items: item,
        
      })
    })
    var a = that.data.items
  },
  itemTap: function(event){
    // console.log(event)
    var item = event.currentTarget.dataset.item
    wx.navigateTo({
      url: '../item/item?name=' + item.name + '&url=' + item.url + '&price=' + item.price,  
    })
  }
})  