<template>
  <div class="listContainer">
    <div v-for="item of tableData" :key="item.id" class="item" @click="jumpToDetail(item.name)">
      <div class="title flex align-center">{{item.title}}</div>
      <div class="intro">{{item.intro}}</div>
      <div class="date">{{item.date}}</div>
    </div>
  </div>
</template>

<script>
import { ref,} from '@vue/composition-api';

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
    ]);
    function jumpToDetail(name){
      this.$router.push(name)
    }
    return{
      tableData,jumpToDetail
    }
  }
}
</script>

<style scoped lang="scss">
.listContainer{
  width: 100%;
  padding-top: 15px;
  .item{
    cursor: pointer;
    height: 130px;
    width: 90%;
    padding: 10px 20px;
    margin: 0 auto;
    border: solid 1px #cccccc;
    margin-top: 15px;
    border-radius: 4px;
    .title{
      position: relative;
      display: inline-block;
      font-size:18px;
      font-weight: 550;
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom:-4px;
        width: 0;
        height: 2px;
        background-color: skyblue;
        transition: .3s all linear;
      }
      &:hover {
        &::before {
          content: '';
          left: 0;
          width: 100%;
        }
      }
    }
    .intro{
      height: 50%;
      font-size:16px;
      margin-top:6px;
    }
    .date{
      font-size:14px;
    }
  }
}
</style>