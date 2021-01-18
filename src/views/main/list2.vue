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