<template>
  <div class="ball" :style="{top: ball.top , left: ball.left, fontSize: ball.fontSize}">{{ball.name}}</div>
</template>

<script >
import { ref,computed,onMounted,} from '@vue/composition-api';

export default {
  props:{
    ball:{
      type:Object,
      default: () => {}
    } 
  },
  setup(){
    onMounted(() => {

    })
    return{
    }
  }
}
</script>

<style lang="scss" scoped>
.ball {
  position: absolute;
  font-weight: 500;
  color: #666;
  animation: disappear 3000ms forwards;
}
@keyframes disappear {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

