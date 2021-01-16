<template>
  <div class="listContainer">
    <div v-for="item of tableData" :key="item.id" class="item " @click="jumpToDetail(item.name)">
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
        name:'lifeArticle1',
        title: '苏州之旅~',
        intro: '元旦去苏州玩啦！',
        date: '2020-01-16'
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
    height: 130px;
    width: 90%;
    margin: 0 auto;
    border: solid 1px #cccccc;
    margin-top: 15px;
    .title{
      height: 40px;
      margin-left: 20px;
      font-size:20px;
      font-weight:550;
    }
    .intro{
      height:60px;
      margin-left: 20px;
    }
    .date{
      height:30px;
      line-height: 30px;
      margin-left: 20px;
    }
  }
}
</style>