<template>
  <div class="container">
    <div class="name flex column ">小周的博客！</div>
    <div class="intro flex center">一个喜欢小居居的女生~</div>
    <div class="button flex center" @click="jumpTo()">EXPLORE !</div>
  </div>
</template>

<script >
import { onMounted,} from '@vue/composition-api';

export default {
  setup(){
    function jumpTo(){
      this.$router.push({name: 'list1'});
    }
    onMounted(()=>{
    })
    
    return{
      jumpTo,
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  position: relative;
  background-image: url('../assets/bg1.jpg');
  height:100vh;
  background-size: 100% 100%;
  .name{
    font-size: 30px;
    color:white;
    text-align: center;
    padding-top:40px;
  }
  .intro{
    margin-top:50px;
    color: #cccccc;
    font-size:20px;
  }
  .button{
    font-size: 35px;
    border: solid 1px gray;
    color:white;
    width: 250px;
    height: 80px;
    margin: 150px auto 0;
    &:hover{
      font-size: 38px;
      cursor: pointer;
    }
  }

}

</style>