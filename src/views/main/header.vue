<template>
  <div class="header ">
    <div class="track-btn">
      <span>小周的博客呀！</span>
    </div>
  </div>
</template>

<script>
export default {
  setup(){ 
    function move(e) {
			e.target.style.setProperty("--x", `${e.offsetX}px`);
			e.target.style.setProperty("--y", `${e.offsetY}px`);
		}
    return {
      move
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  width: 100%;
  height: 35px;
  font-size: 18px;
  text-align:center;
  position: relative;
  .track-btn {
    overflow: hidden;
    position: relative;
    width:100%;
    height: 35px;
    background-color: #66f;
    cursor: pointer;
    line-height: 35px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    span {
      position: relative;
      pointer-events: none; // 不加会卡顿
    }
    &::before {
      --size: 0;
      position: absolute;
      left: var(--x);
      top: var(--y);
      width: var(--size);
      height: var(--size);
      background-image: radial-gradient(circle closest-side, #09f, transparent);
      content: "";
      transform: translate3d(-50%, -50%, 0);
      transition: width 200ms ease, height 200ms ease;
    }
    &:hover::before {
      --size: 700px;
    }
  }
}
</style>