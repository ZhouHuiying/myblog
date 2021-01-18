<template>
  <div class="all">
    <div class="header">
      <Header />
    </div>
    <div class="menu">
      <Menu/>
    </div>
    <div class="content">
      <div class="main-page" >
        <router-view/>
      </div>
    </div>
  
    
  </div>
</template>

<script>
import Header from "./header.vue";
import Menu from './menu.vue';
export default {
  components: {Header, Menu,},
  setup(){

  }
}
</script>

<style scoped lang="scss">
.all{
  width: 100%;
  height: 100vh;
  .content{
    width:90%;
    min-height: 800px;
    margin: 0 auto;
    background-color: #e8efeb;
    border-radius: 8px;
    padding:12px 0 20px 0;
    .main-page {
      width: 100%;
      height: 100%;
    }
  }
}

</style>