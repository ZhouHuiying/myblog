<template>
  <div class="listContainer">
    <div v-for="item of tableData" :key="item.id" class="item" @click="jumpToDetail(item.name)">
      <div class="list-title flex align-center">{{item.title}}</div>
      <div class="list-intro">{{item.intro}}</div>
      <div class="list-date">{{item.date}}</div>
    </div>
  </div>
</template>

<script>
import { ref,onMounted} from '@vue/composition-api';

export default {
  setup(){
    const tableData = ref([
      {
        id: 1,
        name:'techArticle1',
        title: '滑动窗口-和为s的连续正数序列',
        intro: '滑动窗口可以看成数组中框起来的一个部分。在一些数组类题目中，我们可以用滑动窗口来观察可能的候选结果。当滑动窗口从数组的左边滑到了右边，我们就可以从所有的候选结果中找到最优的结果。',
        date:'2021-01-16'
      },
      {
        id: 2,
        name:'techArticle2',
        title: '页面内跳转',
        intro: '页面内跳转',
        date:'2021-01-19'
      },
      {
        id: 3,
        name:'techArticle3',
        title: '内容在固定高度内滚动',
        intro: '内容在固定高度内滚动',
        date:'2021-03-01'
      },
      {
        id: 4,
        name:'techArticle4',
        title: '几个CSS Demo — 1！',
        intro: '几个小的CSS Demo~',
        date:'2021-05-25'
      },
      {
        id: 5,
        name:'techArticle5',
        title: '生产计划甘特图',
        intro: '通过Vue实现的一个简单的甘特图,以年为时间跨度；',
        date:'2021-03-04'
      },
      {
        id: 6,
        name:'techArticle6',
        title: '今天吃什么？(#^.^#)',
        intro: '---study from xiaozuzu(#^.^#)',
        date:'2021-05-24'
      },
    ]);
    function jumpToDetail(name){
      this.$router.push(name)
    }
    onMounted(()=>{
      tableData.value.sort((a,b)=> new Date(b.date)-new Date(a.date))
    })
    return{ 
      tableData,jumpToDetail
    }
  }
}
</script>

<style scoped lang="scss">
.listContainer{
  width: 100%;
  padding-top: 0px;
  .item{
    cursor: pointer;
    width: 95%;
    padding: 10px 20px;
    margin: 0 auto;
    border: solid 1px #cccccc;
    margin-top: 15px;
    border-radius: 4px;
    .list-intro{
      line-height: 20px;
    }
  }
}
</style>