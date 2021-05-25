<template>
  <div  class="out">
    <div v-for="(item,index) of showData[x]" :key="index" class="flex container" >
      <div class="name">{{item.name}}</div>
      <div class="intro">{{item.intro}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, computed, onMounted,onUnmounted, Ref} from '@vue/composition-api';

export default {
  setup(){
    const originData = ref([
      {
        id:1,
        name:'data1',
        intro:'intro1'
      },
      {
        id:2,
        name:'data2',
        intro:'intro2'
      },
      {
        id:3,
        name:'data3',
        intro:'intro3'
      },
      {
        id:4,
        name:'data4',
        intro:'intro4'
      },
      {
        id:5,
        name:'data5',
        intro:'intro5'
      },
      {
        id:6,
        name:'data6',
        intro:'intro6'
      },
      {
        id:7,
        name:'data7',
        intro:'intro7'
      },
      {
        id:8,
        name:'data8',
        intro:'intro8'
      },
    ])
    const showData = ref([])
    const x = ref(0)
    function getData(){
      let y=parseInt((originData.value.length/6).toString())+1;
      let i;
      for(i=0;i<y-1;){
        showData.value.push(originData.value.slice(i*6,(i+1)*6));
        i++;
        if(i==y-1){
          showData.value.push(originData.value.slice(originData.value.length-6,originData.value.length))
        }
      }
    }
    onMounted(()=>{
      getData()
      setInterval(()=>{
        x.value++;
        if(x.value>=parseInt((originData.value.length/6).toString())+1){
          x.value = 0;
        }
      },5000)
    })
    return {
      originData,showData,getData,x,
    }
  }
}
</script>

<style scoped lang="scss">
.out{
  background-color: #fff;
  width: 500px;
  .container{
    width: 100%;
    height: 30px;
    padding: 4px;
    .name{
      width:80px;
    }
  }
}

</style>