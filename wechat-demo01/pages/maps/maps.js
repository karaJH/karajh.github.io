Page({
  data: {
    maps: []
  },
  markertap: function () {
    
  },
  onLoad: function () {
    this.setData({
      
    })
  },
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }
})
