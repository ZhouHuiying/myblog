<template>
  <div>
    <Header/>
    <div class="content">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import Header from "./header.vue";
export default {
  components: {Header,},
  setup(){

  }
}
</script>

<style scoped lang="scss">
.content{
  position: absolute;
  top: 60px;
  height: calc(100% - 60px);
  width:100%;
}
</style>