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
        title: '苏州之旅~',
        intro: '元旦去苏州玩啦！今天抽空来记录一下~(*╹▽╹*)',
        date: '2020-01-18'
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