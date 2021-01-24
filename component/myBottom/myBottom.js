// component/myBottom/myBottom.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
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
    hiddenInput: true,// 是否隐藏输入框
    content: "",// 输入框的内容
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 显示输入框
    hiddenInput(e) {
      console.log(this.data.showInput)
      this.setData({
        hiddenInput: false,
      })
      console.log(this.data.hiddenInput)
    },
    contentUpdates(e){
      this.setData({
        content: e.detail.content
      })
    }
  }
})
