//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items:[],
    input:"",
    checkbox:false,
    checkbox:false,
    list:[],
    isChecked2:true
  },
  //事件处理函数
  input(e){
    if (e.detail.value.length != '') {
      this.setData({
        items: this.data.items.concat(e.detail.value),
        input: '',
        isChecked: false
      })
    }
    
  },
  delete(e){
    console.log(e.currentTarget.dataset)
    let { index }=e.currentTarget.dataset
    console.log(index)
    this.data.items.splice(index, 1)
    this.setData({
      items:this.data.items
    })
  },
  delete2(e) {
    console.log(e.currentTarget.dataset)
    let { index } = e.currentTarget.dataset
    console.log(index)
    this.data.list.splice(index, 1)
    this.setData({
      list: this.data.list
    })
  },
  niming(e){
    let isChecked = e.currentTarget.dataset.checked;
    console.log(e.detail.value)
    if (e.detail.value.length>0){
      isChecked = true
    }else{
      isChecked = false
    }
    this.setData({
      isChecked: isChecked
    })

      let { index } = e.currentTarget.dataset
    if(isChecked){
      var s = this.data.items.splice(index,1)
      console.log(s.toString())
      this.data.list.push(s.toString())
      console.log(this.data.list)
      this.setData({
        isChecked : false,
        items:this.data.items,
        list:this.data.list
      })
    }
    console.log(this.data.list)
  },
  niming2(e) {
    // let isChecked = e.currentTarget.dataset.checked;
    // console.log(e.detail.value)
    // if (e.detail.value.length < 1) {
    //   isChecked = false
    // } else {
    //   isChecked = true
    // }
    // this.setData({
    //   isChecked: isChecked
    // })
    // console.log(isChecked)
    let { index } = e.currentTarget.dataset
    // if (isChecked == false) {
      var s = this.data.list.splice(index, 1)
      console.log(s.toString())
      this.data.items.push(s.toString())
      console.log(this.data.items)
      this.setData({
        items: this.data.items,
        list: this.data.list,
        isChecked2:true
      })
    // }

  }
})
