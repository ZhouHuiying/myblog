<template>
  <div class="listContainer">
    <div v-for="item of tableData" :key="item.id" class="item " >
      <div class="title flex align-center">{{item.title}}</div>
      <div class="intro">{{item.intro}}</div>
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
        title: 'title1',
        intro: 'intro1'
      }
    ]);
    return{
      tableData,
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
      height: 30%;
      margin-left: 20px;
    }
    .intro{
      height: 30%;
      margin-left: 20px;
    }
  }
}
</style>