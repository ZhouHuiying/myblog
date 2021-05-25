<template>
  <div class="container">
    <div class="article-title">
      <i class="icon iconfont icon-fanhui" @click="()=>this.$router.back()"></i>
      几个CSS Demo！—补充
      </div>
    <div class="article-date">2021-03-02</div>
    <div class="article-content">
      <div class="first">
        <div class="title">占位符交互</div>
        <div style="margin-top:12px;">
          <inputBox></inputBox>
        </div>
      </div>
      <div class="first">
        <div class="title">使用mix-blend-mode混合元素</div>
        <div style="margin-top:12px;">
          <mixBlendMode></mixBlendMode>
        </div>
      </div>
      <div class="first">
        <div class="title">走马灯效果</div>
        <div style="margin-top:12px;">
          <carousel></carousel>
        </div>
      </div>
      <div class="first">
        <div class="title">滚动公告</div>
        <div style="margin-top:12px;">
          <scrollNotice></scrollNotice>
        </div>
      </div>
      <div class="first">
        <div class="title">固定高度内轮播切换</div>
        <div style="margin-top:12px;">
          <carousel2></carousel2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  inputBox  from "../../../components/inputBox.vue";
import  mixBlendMode  from "../../../components/mix-blend-mode.vue";
import  carousel  from "../../../components/carousel.vue";
import  scrollNotice  from "../../../components/scrollNotice.vue";
import  carousel2  from "../../../components/carousel2.vue";

export default {
  components: {
    inputBox,
    mixBlendMode,
    carousel,
    scrollNotice,
    carousel2,
  },
  setup(){

  }
}
</script>

<style scoped lang="scss">
.title{
  padding-left: 10px;
  border-left: 5px solid #d89;
  font-size: 16px;
}
.first{
  margin-top: 50px;
}
</style>