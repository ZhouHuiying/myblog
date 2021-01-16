<template>
  <div class="container">
    <div class="title">
      <i class="icon iconfont icon-fanhui" @click="()=>this.$router.back()"></i>
      苏州之旅~
    </div>
    <div class="date">2021-01-16</div>
    <div class="content">
      <p>
        元旦啦，终于有时间粗去玩啦。早早的定了去苏州的高铁票和酒店！2021年1月1日准时出发！
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup(){

  }
}
</script>

<style scoped lang="scss">
.container{
  .title{
    height:35px;
    line-height:35px;
    font-size: 20px;
    text-align: center;
    padding:8px;
    position: relative;
    i{
      position: absolute;
      left: 16px;
      font-size:20px;
      cursor: pointer;
    }
  }
  .date{
    height:35px;
    line-height:35px;
    font-size: 16px;
    text-align: center;
    padding:8px;
  }
  .content{
    width:90%;
    margin: 0 auto;
    p,pre{
      margin-top:12px;
    }
  }
}
</style>