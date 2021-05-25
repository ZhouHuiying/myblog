<template>
  <div >
    <div class="container">
      <img class="title" src="../../../assets/tech/logo.png" alt="" >
      <Ball v-for="(ball,index) in ballArr" :key="index" :ball="ball"/>
      <span class="name" v-show="mealName">{{mealName}}</span>
      <div class="btn" @click="handleClick()">{{btnName}}</div>
      <div class="addMenu" @click="openDialog()">点击自定义菜单</div>
    </div>
    
    <el-dialog
      title="自定义菜单"
      :visible.sync="dialogVisible"
      width="50%"
      >
      <div>
        <div style="margin: 12px 0;">
          <span v-for="(item,index) of mealArr" :key="index" style="margin-right:4px;">
            {{item}}
          </span>
        </div>
        <div style="display:flex; justify-content: center;align-items: center;">
          <el-input
          type="textarea"
          :rows="5" autosize
          placeholder="请输入内容"
          v-model="food">
          </el-input>
          <div><el-button type="primary" @click="confirm()">添加</el-button></div>
        </div>
      </div>
      <span  class="dialog-footer" slot="footer" style="display:flex;justify-content: center;">
        <el-button type="primary" @click="dialogVisible=false">确定</el-button> 
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { ref,computed,onMounted,} from '@vue/composition-api';
import Ball from '../../../components/Ball.vue'

export default {
  components:{
    Ball
  },
  setup(){
    const mealArr = ref(["别吃别吃", "锟斤拷", "馄饨", "烩面", "热干面", "刀削面", "油泼面", "炸酱面", "炒面", "重庆小面", "米线", "酸辣粉", "土豆粉", "螺狮粉", "凉皮儿", "麻辣烫", "肉夹馍", "羊肉泡馍", "炒饭", "盖浇饭", "烤肉饭", "黄焖鸡米饭", "麻辣香锅", "火锅", "酸菜鱼", "烤串", "披萨", "烤鸭", "汉堡", "炸鸡", "寿司", "煎饼果子", "南瓜粥", "小龙虾", "牛排", "砂锅", "大排档", "馒头", "西餐", "自助餐", "小笼包", "水果", "西北风", "烧烤", "泡面", "水饺", "日本料理", "涮羊肉", "兰州拉面", "肯德基", "面包", "臊子面", "小笼包", "麦当劳", "沙县小吃", "烤鱼", "海鲜", "铁板烧", "韩国料理", "甜点", "鸭血粉丝汤"])
    const ballArr = ref([])
    const mealName = ref('')
    const timerAdd = ref(null)
    const timerDel = ref(null)
    const timerClean = ref(null)
    const clientHeight = ref(0)
    const dialogVisible = ref(false)
    const clientWidth = ref(0)
    const food = ref()
    const btnName = computed(() => {
      return timerAdd.value === null ? '开始' : '停止'
    })
    function stop() {
      clearInterval(timerAdd.value)
      timerAdd.value = null
      timerClean.value = setTimeout(() => {
        ballArr.value = []
        clearInterval(timerDel.value)
      }, 3000)
    }
    function start() {
      clearTimeout(timerClean.value)
      timerAdd.value = setInterval(() => {
        const len = mealArr.value.length
        mealName.value = mealArr.value[parseInt(Math.random() * len)]
        ballArr.value.push({
          top: parseInt(Math.random() * clientHeight.value) + 'px',
          left: parseInt(Math.random() * clientWidth.value) + 'px',
          name: mealArr.value[parseInt(Math.random() * len)],
          fontSize: 12 + parseInt(Math.random() * 20) + 'px',
        })
      }, 100)

      timerDel.value = setInterval(() => {
        ballArr.value.shift()
      }, 3000)

      setTimeout(() => {
        stop()
      }, 20000)

    }
    function handleClick() {
      timerAdd.value ? stop() : start()
    }
    function openDialog(){
      dialogVisible.value = true;
    }
    function confirm(){
      mealArr.value.push(food.value)
      food.value = null;
    }
    onMounted(() => {
      const dom = document.getElementsByClassName('container')[0]
      clientWidth.value = dom.clientWidth
      clientHeight.value = dom.clientHeight
    })

    return{ 
      ballArr,mealArr,mealName,mealName,timerDel,start,stop,
      timerClean,clientHeight,clientWidth,btnName,handleClick,
      openDialog,dialogVisible,food,confirm
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(../../../assets/tech/bg.jpg);
  overflow: hidden;
  margin-top: -12px;
  .title {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 270px; 
  }
  .name {
    font-size: 35px;
    color: #ff9732;
    font-weight: 800;
  }
}
.btn {
  width: 100px;
  margin-top: 12px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, .6);
  font-size: 20px;
  text-align: center;
  color: #fff;
  line-height: 40px;
  transition: background-color 300ms;
  cursor: pointer;
}
.btn:hover {
  background-color: rgba(0, 0, 0, .4);
}
.addMenu{
  margin-top:12px;
}
</style>