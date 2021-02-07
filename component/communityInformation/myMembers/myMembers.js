// component/communityInformation/myMembers/myMembers.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    bmId: -1,
    members:[{
      sector: "理事会",
      students: [{
        name: "理一",
        class: "信科17-1班",
        photo: "https://hbimg.huabanimg.com/e257b8600688cff8c2e2c41c07439b786821f5c913977-GIhnJa_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "会长",
        sex: "女"
      },{
        name: "理二",
        class: "信科17-2班",
        photo: "https://hbimg.huabanimg.com/74636203b71ef2ec461782b281d7d72cfacceefd14c18-0ntDdd_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "团支书",
        sex: "男"
      }]
    },{
      sector: "秘书部",
      students: [{
        name: "秘一",
        class: "信科17-1班",
        photo: "https://hbimg.huabanimg.com/e257b8600688cff8c2e2c41c07439b786821f5c913977-GIhnJa_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "部长",
        sex: "女"
      },{
        name: "秘二",
        class: "信科17-2班",
        photo: "https://hbimg.huabanimg.com/74636203b71ef2ec461782b281d7d72cfacceefd14c18-0ntDdd_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "副部长",
        sex: "男"
      }]
    },{
      sector: "基地",
      students: [{
        name: "基一",
        class: "信科17-1班",
        photo: "https://hbimg.huabanimg.com/e257b8600688cff8c2e2c41c07439b786821f5c913977-GIhnJa_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "部长",
        sex: "女"
      },{
        name: "基二",
        class: "信科17-2班",
        photo: "https://hbimg.huabanimg.com/74636203b71ef2ec461782b281d7d72cfacceefd14c18-0ntDdd_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "副部长",
        sex: "男"
      }]
    },{
      sector: "学习部",
      students: [{
        name: "学一",
        class: "信科17-1班",
        photo: "https://hbimg.huabanimg.com/e257b8600688cff8c2e2c41c07439b786821f5c913977-GIhnJa_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "部长",
        sex: "女"
      },{
        name: "学二",
        class: "信科17-2班",
        photo: "https://hbimg.huabanimg.com/74636203b71ef2ec461782b281d7d72cfacceefd14c18-0ntDdd_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "副部长",
        sex: "男"
      }]
    },{
      sector: "实践部",
      students: [{
        name: "实一",
        class: "信科17-1班",
        photo: "https://hbimg.huabanimg.com/e257b8600688cff8c2e2c41c07439b786821f5c913977-GIhnJa_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "部长",
        sex: "女"
      },{
        name: "实二",
        class: "信科17-2班",
        photo: "https://hbimg.huabanimg.com/74636203b71ef2ec461782b281d7d72cfacceefd14c18-0ntDdd_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "副部长",
        sex: "男"
      }]
    },{
      sector: "宣传部",
      students: [{
        name: "宣一",
        class: "信科17-1班",
        photo: "https://hbimg.huabanimg.com/e257b8600688cff8c2e2c41c07439b786821f5c913977-GIhnJa_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "部长",
        sex: "女"
      },{
        name: "宣二",
        class: "信科17-2班",
        photo: "https://hbimg.huabanimg.com/74636203b71ef2ec461782b281d7d72cfacceefd14c18-0ntDdd_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "副部长",
        sex: "男"
      }]
    },{
      sector: "新媒体",
      students: [{
        name: "新一",
        class: "信科17-1班",
        photo: "https://hbimg.huabanimg.com/e257b8600688cff8c2e2c41c07439b786821f5c913977-GIhnJa_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "部长",
        性别: "女"
      },{
        name: "新二",
        class: "信科17-2班",
        photo: "https://hbimg.huabanimg.com/74636203b71ef2ec461782b281d7d72cfacceefd14c18-0ntDdd_fw658/format/webp",
        introduce: "一个好学生，性格开朗，喜欢打篮球,有空我们约一场!",
        job: "副部长",
        sex: "男"
      }]
    },]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    Show(e){
      // 如果已经打开，再次点击则关闭
      if(this.data.bmId == e.currentTarget.id){
        this.setData({
          bmId: -1
        })
      }else{// 未打开则打开
        this.setData({
          bmId: e.currentTarget.id
        })
      }
      console.log(this.data.bmId)
    }
  }
})
