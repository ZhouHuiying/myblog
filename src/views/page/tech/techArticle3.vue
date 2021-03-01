<template>
  <div class="container">
    <div class="article-title title">
      <i class="icon iconfont icon-fanhui" @click="()=>this.$router.back()"></i>
      内容在固定高度内滚动</div>
    <div class="article-date">2021-03-01</div>
    <div class="article-content">
      <p>
        在页面中，有时候需要一个div中的内容在给定的固定高度内滚动，下面讲一下这种效果的实现。
      </p>
      <pre>代码：
        &lt;div class="box"  @mouseenter="clearTimer" @mouseleave ="scrollFun"> 
          &lt;div class="box-content">
            &lt;div v-for="item of tableData" :key="item.id" style="height:40px;">item.title : item.content&lt;/div>
          &lt;/div>
        &lt;/div>
      </pre>
      <div>
        在进入该div时需要停止这个定时器，离开这个div时需要加上这个定时器，让内容继续滚动。
      </div>
      <pre>
        function scrollFun(){
          timelineTimer.value = setInterval(() => {
            let scrollDom = document.getElementsByClassName('box')[0],
                scrollTop = scrollDom.scrollTop,
                boxWrapperHeight = document.getElementsByClassName('box')[0].clientHeight,
                contentHeight = document.getElementsByClassName('box-content')[0].clientHeight;
            if(scrollTop + boxWrapperHeight &lt; contentHeight){
              scrollDom.scrollTo(0, scrollTop + 1)
            }else{
              scrollDom.scrollTo(0, 0)
            }
          }, 100)
        }

        function clearTimer(){
          clearInterval(timelineTimer.value)
        }
        
      </pre>
      <div>网页可见区域高：document.body.clientHeight</div>
      <div>
        <p>效果：</p>
        <div class="box"  @mouseenter="clearTimer" @mouseleave ="scrollFun"> 
          <div class="box-content">
            <div v-for="item of tableData" :key="item.id" style="height:40px;">{{item.title}} : {{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, onMounted, onUnmounted, } from '@vue/composition-api';

export default {
  setup(){
    const tableData = ref([
      {
        id: 1,
        title: 'title1',
        content: 'content1'
      },
      {
        id: 2,
        title: 'title2',
        content: 'content2'
      },
      {
        id: 3,
        title: 'title3',
        content: 'content3'
      },
      {
        id: 4,
        title: 'title4',
        content: 'content4'
      },
      {
        id: 5,
        title: 'title5',
        content: 'content5'
      },
      {
        id: 6,
        title: 'title6',
        content: 'content6'
      },
      {
        id: 7,
        title: 'title7',
        content: 'content7'
      },
      {
        id: 8,
        title: 'title8',
        content: 'content8'
      },
      {
        id: 9,
        title: 'title9',
        content: 'content9'
      },
      {
        id: 10,
        title: 'title10',
        content: 'content10'
      }
    ]);
    const timelineTimer = ref(null);

    function scrollFun(){
      timelineTimer.value = setInterval(() => {
        let scrollDom = document.getElementsByClassName('box')[0],
            scrollTop = scrollDom.scrollTop,
            boxWrapperHeight = document.getElementsByClassName('box')[0].clientHeight,
            contentHeight = document.getElementsByClassName('box-content')[0].clientHeight;
        if(scrollTop + boxWrapperHeight < contentHeight){
          scrollDom.scrollTo(0, scrollTop + 1)
        }else{
          scrollDom.scrollTo(0, 0)
        }
      }, 100)
    }
    function clearTimer(){
      clearInterval(timelineTimer.value)
    }

    onMounted(async function () {
      scrollFun();
    });
    onUnmounted(async function (){
      clearInterval(timelineTimer.value)
    })
    return{
      timelineTimer,tableData,scrollFun,clearTimer
    }
  }
}
</script>

<style scoped lang="scss">
.box{
  margin-top: 10px;
  height: 200px;
  width: 150px;
  background-color: #fff;
  overflow: auto;
}
</style>