<template>
  <div class="listContainer">
    <div class="item" >
      <div class="title flex align-center">小周的github地址：</div>
      <div class="intro">
        <a href="https://github.com/ZhouHuiying">https://github.com/ZhouHuiying</a>
      </div>
    </div>
    <div class="item" >
      <div class="title flex align-center">邮箱：</div>
      <div class="intro">
        15967169499@163.com
      </div>
    </div>
    <div class="item" >
      <div class="title flex align-center">浙江工商大学 信息与电子工程学院</div>
    </div>
    <div class="item flex center">
      <img src="../../assets/me.jpg" alt="">
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
        intro: 'intro1',
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
    margin-top: 15px;
    padding: 8px;
    .title{
      height: 30%;
      margin-left: 20px;
      padding:8px;
    }
    .intro{
      height: 70%;
      margin-left: 20px;
    }
    img{
      width:600px;
      // height:400px;
    }
  }
}
</style>