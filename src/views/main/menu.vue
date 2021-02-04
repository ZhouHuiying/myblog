<template>
  <div class="menu flex around">
    <div :class="active==1 ? 'btn-light' : 'btn-dark' " @click="jump(1)" class="btn">
      <i class="icon iconfont icon-jishu" style="color:#55b3b1;font-weight:600"></i>
      技 术</div>
    <div :class="active==2 ? 'btn-light' : 'btn-dark'" @click="jump(2)" class="btn">
      <i class="icon iconfont icon-nightlife_winter" style="color: #ee9595;font-weight:600"></i>
      生 活</div>
    <div :class="active==3 ? 'btn-light' : 'btn-dark'" @click="jump(3)" class="btn">
      <i class="icon iconfont icon-gengduo" style="color: #70af85;font-weight:600"></i>
      About Me</div>
  </div>
</template>

<script>
import {ref, onMounted} from "@vue/composition-api";

export default {
  setup(){
    const active = ref(1);
    function jump(flag){
      if(flag==1){
        active.value = 1;
        this.$router.push({name: 'list1'});
      }else if(flag==2){
        active.value = 2;
        this.$router.push({name: 'list2'});
      }else{
        active.value = 3;
        this.$router.push({name: 'more'});
      }
    }
    return {
      jump,active,
    }
  }
}
</script>

<style scoped lang="scss">
.menu{
  height: 50px;
  width: 100%;
  margin: 12px 0;
  .btn {
    height:35px;
    line-height:35px;
    width:130px;
    font-size:18px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    &-light {
      color:black;
      background-color: #e7d9ea;
      font-weight: 550;
    }
    &-dark {
      color:gray;
      background-color: #e7d9ea;
    }
  }
}
</style>