<template>
  <div class="container">
    <div
      @click="cardClick(index)"
      @mouseenter="stop()"
      @mouseout="go()"
      v-for="(item, index) in factoryInfo"
      :key="index"
      class="card-item"
      :class="{
        'card-active': active === index,
        'card-left': left === index,
        'card-right': right === index,
        'card-not-in-stage':
          index !== left && index !== active && index !== right,
      }">
        <img :src="item.image" alt/>
      </div>
  </div>
</template>

<script lang="ts">
import {ref, computed, onMounted, Ref} from '@vue/composition-api';

export default {
  setup(){
    const left = ref(0);
    const right = ref(2);
    const active = ref(1);
    const timer = ref(null);
    const dataListLen = ref(0);
    const factoryInfo = ref([
      {
        id:1,
        image: 'https://t7.baidu.com/it/u=2604797219,1573897854&fm=193&f=GIF',
      },
      {
        id:2,
        image: 'https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF',
      },
      {
        id:3,
        image: 'https://t7.baidu.com/it/u=2501476447,3743798074&fm=193&f=GIF',
      }

    ])
    function cardClick(index) {
      if (index === right.value) {
        next();
      } else if (index === left.value) {
        pre();
      }
    }

    // 轮播图停止
    function stop() {
      clearInterval(timer.value);
    }

    // 轮播图进行
    function go() {
      const card = document.getElementsByClassName("card-item");
      timer.value = setInterval(() => {
        next();
      }, 3000);
    }

    // 轮播图右移
    function next() {
      stop();
      if (active.value < dataListLen.value - 1) {
        active.value++;
      } else {
        active.value = 0;
      }
      const leftTemp = active.value - 1;
      const rightTemp = active.value + 1;
      left.value = leftTemp >= 0 ? leftTemp : dataListLen.value - 1;
      right.value = rightTemp <= dataListLen.value - 1 ? rightTemp : 0;
      go();
    }

     // 轮播图左移
    function pre() {
      stop();
      if (active.value > 0) {
        active.value--;
        active.value = dataListLen.value - 1;
      }
      const leftTemp = active.value - 1;
      const rightTemp = active.value + 1;
      left.value = leftTemp >= 0 ? leftTemp : dataListLen.value - 1;
      right.value = rightTemp <= dataListLen.value - 1 ? rightTemp : 0;
      go();
    }
    onMounted(()=>{
      dataListLen.value = factoryInfo.value.length;
    })
    
    return {
      factoryInfo,cardClick,stop,go,next,pre,left,right,active,timer,
      dataListLen,

    }
  }
}
</script>

<style scoped lang="scss">
  .container {
      position: relative;
      width: 1200px;
      min-height:300px;
      margin: 0 auto;
      overflow: hidden;

      .card-item {
        position: absolute;
        top: 30px;
        left: 0;
        width: 100%;
        height: 100%;
        display: inline-block;
        overflow: hidden;
        z-index: 0;
        transition: transform 0.4s ease-in-out;
        width: 644px;
        height: 220px;

        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }

      .card-active {
        z-index: 3;
        transform: translateX(278px) scale(1);
      }

      .card-left {
        z-index: 2;
        transform: translateX(-244px) scale(0.83);
      }

      .card-not-in-stage {
        z-index: 1;
        transform: translateX(1200px) scale(0.83);
      }

      .card-right {
        z-index: 2;
        transform: translateX(800px) scale(0.83);
      }

      .word {
        width: 1200px;
        margin: 400px auto 25px;

        .name {
          color: #ebeff4;
          font-size: 20px;
          text-align: center;
        }

        .word-item {
          display: flex;
          margin-top: 20px;
          color: #ebeff4;
          font-size: 14px;

          .tip {
            margin: -3px 3px 0 0;
          }
        }
      }
    }

</style>