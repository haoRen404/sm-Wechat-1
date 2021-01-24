// component/myInput/myInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否隐藏输入框
    hiddenInput:{
      type: Boolean,
      value: true
    },
    // 输入框的初始高度
    initialHeight:{
      type: Number,
      value: 0
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    InputBottom: 0,// 输入框距离底部的高度
    isFocus: true,// 是否获得焦点
    content: " ",// 用来同步的评论的内容
    tempContent: " ",// 暂存的同步的评论的内容
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 输入框聚焦时
    InputFocus(e) {
      this.setData({
        InputBottom: e.detail.height
      })
    },
    // 输入框失去焦点时
    InputBlur(e) {
      this.setData({
        InputBottom: 0,
        isFocus: false,//失去焦点
      })
      wx.hideKeyboard();// 收起键盘
    },
    // 隐藏输入框
    hiddenInput(){
      if(this.data.InputBottom == 0){
        this.setData({
          hiddenInput: true,
        })
      }else{
        this.setData({
          InputBottom: 0,
        })
      }
    },
    //点击发送
    send(e){
      this.setData({
        InputBottom: 0,//回到底部
        hiddenInput: true,// 不显示
        content: "",// 发送后内容清空
      })
      console.log(e)
      // 发送后内容清空，同步过去
      this.triggerEvent('contentUpdates', {content: ""})
    },
    // 内容同步
    contentUpdates(e){
      this.setData({
        content: e.detail.value,
      })
      this.triggerEvent('contentUpdates', {content: this.data.content})
    },
  }
})
