<template>
  <div  class="all">
    test
  </div>
</template>
<script lang="ts">
import {ref, computed, onMounted, Ref} from '@vue/composition-api';
import Vuex from 'vuex'
export default {
  setup() {

    onMounted( async () => {
      let temp = Vuex.$store.state.blogItemList.length;
      console.log(temp)
    })
    return {
      
    };
  },
};
</script>
<style lang="scss" scoped>

</style>

