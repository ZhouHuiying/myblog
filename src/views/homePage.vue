<template>
  <div class="container">
    <div class="name flex column ">小周的博客！</div>
    <div class="intro flex center">一个喜欢小居居的女生~</div>
    <div class="button flex center" @click="jumpTo()">EXPLORE!</div>
    <div class="image">
      <img src="../assets/cutePig.jpg" alt="">
    </div>
  </div>
</template>

<script >
import { onMounted,} from '@vue/composition-api';

export default {
  setup(){
    function jumpTo(){
      this.$router.push({name: 'article1'});
    }
    onMounted(()=>{
      console.log(11); 
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
  background-image: url('../assets/bg.png');
  height:100vh;
  background-size: 100% 100%;
  .name{
    font-size: 30px;
    color:black;
    text-align: center;
    padding-top:40px;
  }
  .intro{
    margin-top:50px;
    color: gray;
    font-size:20px;
  }
  .button{
    font-size: 35px;
    border: solid 1px gray;
    width: 250px;
    margin: 150px auto 0;
    &:hover{
      font-size: 38px;
      cursor: pointer;
    }
  }
  
  .image{
    position: absolute;
    bottom:20px;
    right:20px;
    img{
      width:200px;
      height:200px;
    }
    
  }
}

</style>