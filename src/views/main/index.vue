<template>
  <div class="all">
    <div class="header">
      <Header />
    </div>
    <div class="menu">
      <Menu/>
    </div>
    <div class="flex center">
      <div class="content" >
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
  width:100%;
.content{
  position: absolute;
  top: 95px;
  width:90%;
  min-height:850px;
  background-color: #e8efeb;  
}
}

</style>