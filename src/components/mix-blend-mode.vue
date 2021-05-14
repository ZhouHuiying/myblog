<template>
  <div>
    <div class='blend'>
      <h1>2021加油 ！</h1>
    </div>
    <!-- <div style="margin-left:8px;">
      <p>
        使用mix-blend-mode属性，不仅可以混合图片，还可以把元素的文本和边框与容器的背景图片混合在一起。
      </p>
      <p>
        mix-blend-mode 属性描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合。
        mix-blend-mod:  &lt;blend-mode>
      </p>
      <p>blend-mode的值可以是：normal、multiply、screen、overlay、darken、lighten、hard-light、soft-light等。</p>
      <p>background-size属性指定背景图片大小;</p>
      <pre>
    background-size: length|percentage|cover|contain;
      length: 设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为 auto(自动);
      percentage: 将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"auto(自动)";
      cover: 此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小;
      contain: 此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小;
      </pre>
    </div> -->
  </div>  
</template>

<script>
export default {
  setup(){

  }
}
</script>

<style scoped lang="scss">
.blend{
  height: 300px;
  width: 300px;
  background-image: url('../assets/cutePig.jpg');
  background-size: cover;
  background-position: center;
  h1 {
    mix-blend-mode: hard-light;
    background-color: white;
    text-align: center;
    color: #808080;
    border: 0.1em solid #ccc;
    border-width: 0.1em 0;

  }
}


</style>