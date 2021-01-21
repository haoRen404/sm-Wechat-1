// 大佬封装的环形进度条的js
// https://blog.csdn.net/weixin_41257563/article/details/83542225?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161113445916780271580760%252522%25252C%252522scm%252522%25253A%25252220140713.130102334.pc%25255Fblog.%252522%25257D&request_id=161113445916780271580760&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v1~rank_blog_v1-4-83542225.pc_v1_rank_blog_v1&utm_term=%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%A6%82%E4%BD%95%E7%94%BB%E5%9C%86

export default{ 
  data: {
    percentage: '', // 百分比
    animTime: '', // 动画执行时间
  },
  options:{
    // 绘制圆形进度条方法。c是圆环进度百分比，w，h是圆心的坐标
    run(c, w, h) {
      let that = this;
      var num = (2 * Math.PI / 100 * c) - 0.5 * Math.PI;
      // arc()方法创建弧/曲线。参数（圆中心x坐标，圆中心y坐标，圆的半径，起始角，结束角）
      that.data.ctx2.arc(w, h, w - 8, -0.5 * Math.PI, num); // 每个间隔绘制的弧度
      that.data.ctx2.setStrokeStyle("#0081FF");// 圆环颜色
      that.data.ctx2.setLineWidth("10");// 线宽度，即是圆环的宽度
      that.data.ctx2.setLineCap("butt");
      that.data.ctx2.stroke();
      // that.data.ctx2.beginPath();
      // that.data.ctx2.setFontSize(40); // 字体大小。注意不要加引号
      // that.data.ctx2.setFillStyle("#0081FF");// 字体颜色
      // that.data.ctx2.setTextAlign("center");// 设置文本对齐
      // that.data.ctx2.setTextBaseline("middle");// 设置文本基线
      // that.data.ctx2.fillText(c + "%", w, h);// 填充文本
      that.data.ctx2.draw();// 画
    },

    // 动画效果实现。start：起始百分比；end：结束百分比；w,h：其实就是圆心横纵坐标
    // 实现动画效果其实使用定时器控制run方法一直执行
    canvasTap(start, end, time, w, h) {
      var that = this;
      start++;
      if (start > end) {
        return false;
      }
      that.run(start, w, h);
      setTimeout(function () {
        that.canvasTap(start, end, time, w, h);
      }, time);
    },

    // id是canvas画板的id；percent是进度条百分比；time是画图动画执行的时间
    draw: function (id, percent, animTime) {
      var that = this;
      const ctx2 = wx.createCanvasContext(id);
      that.setData({
        ctx2:ctx2,
        percentage:percent,
        animTime: animTime
      });
      var time = that.data.animTime / that.data.percentage;
      wx.createSelectorQuery().select('#'+id).boundingClientRect(function (rect) { //监听canvas的宽高
        var w = parseInt(rect.width / 2); //获取canvas宽的的一半
        var h = parseInt(rect.height / 2); //获取canvas高的一半，
        that.canvasTap(0, that.data.percentage, time, w, h)
      }).exec();
    },
  } 
}