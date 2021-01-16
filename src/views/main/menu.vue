<template>
  <div class="menu flex between">
    <div :class="active==1 ? 'active' : 'default' " @click="jump(1)">技 术</div>
    <div :class="active==2 ? 'active' : 'default'" @click="jump(2)">生 活</div>
    <div :class="active==3 ? 'active' : 'default'" @click="jump(3)">更 多</div>
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
        this.$router.push({name: 'list3'});
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
  position: absolute;
  top: 50px;
  width: 100%;
  .active {
    color:white;
    height:35px;
    line-height:35px;
    width:130px;
    background-color: #e9b0df;
    font-size:18px;
    text-align: center;
  }
  .default{
    color:gray;
    height:35px;
    line-height:35px;
    width:130px;
    background-color: #e9b0df;
    font-size:18px;
    text-align: center;
  }
}
</style>