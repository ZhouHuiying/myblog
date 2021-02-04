<template>
  <div class="listContainer">
    <div v-for="item of tableData" :key="item.id" class="item " @click="jumpToDetail(item.name)">
      <div class="list-title flex align-center">{{item.title}}</div>
      <div class="list-intro">{{item.intro}}</div>
      <div class="list-date">{{item.date}}</div>
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
        name:'lifeArticle1',
        title: '和小林的苏州之旅~',
        intro: '元旦去苏州玩啦！今天抽空来记录一下~(*╹▽╹*)',
        date: '2020-01-18'
      },
      {
        id: 2,
        name:'lifeArticle2',
        title: '2020总结~',
        intro: '2020年已经结束啦，今天是2021年的1月19日，想要给2020年做一个总结，就现在开始吧！',
        date: '2020-01-19'
      }
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
  .item{
    cursor: pointer;
    width: 95%;
    padding: 10px 20px;
    margin: 0 auto;
    border: solid 1px #cccccc;
    margin-top: 15px;
    border-radius: 4px;
  }
}
</style>