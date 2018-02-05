//app.js
App({
  onLaunch: function () {
    
    
  },
  getItem: function (callback) {
    if (this.globalData.items) {
      typeof callback == "function" && callback(this.globalData.items)
    }
    else {
      this.globalData.items = [
        {
          "url": "../../images/1.png",
          "name": "鸟",
          "price": "32.4"
        },
        {
          "url": "../../images/2.png",
          "name": "路飞",
          "price": "17.5"
        },
        {
          "url": "../../images/3.png",
          "name": "小路飞",
          "price": "10.2"
        },
        {
          "url": "../../images/4.png",
          "name": "房子",
          "price": "50.1"
        }
      ]
      typeof callback == "function" && callback(this.globalData.items)
      
    }
  },
  globalData:{
    // items: null
  },
  
})