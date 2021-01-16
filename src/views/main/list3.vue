<template>
  <div class="listContainer">
    <div class="item" >
      <div class="title flex align-center">小周的github地址：</div>
      <div class="intro">
        <a href="https://github.com/ZhouHuiying">https://github.com/ZhouHuiying</a>
      </div>
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
    width: 90%;
    margin: 0 auto;
    border: solid 1px #cccccc;
    margin-top: 15px;
    padding: 8px;
    .title{
      height: 30%;
      margin-left: 20px;
      padding:8px;
    }
    .intro{
      height: 30%;
      margin-left: 20px;
    }
  }
}
</style>