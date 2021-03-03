<template>
  <div>
    <!-- https://juejin.cn/post/6934887428616355847 -->
    <div class="input-box">
      <input class="input-control input-outline" placeholder="账号" style="">
      <label class="input-label">账号</label>
    </div>
    <div style="margin-left:8px;">
      <p>借助:placeholder-shown伪类就可以只用CSS实现这种效果。</p>
      <p>
        :placeholder-shown伪类是如何工作的？
      </p>
      <p>
        :placeholder-shown CSS 伪类 在 &lt;input> 或 &lt;textarea> 元素显示 placeholder text 时生效，简单的说就是 placeholder 有值才生效
        如果 placeholder 为空 placeholder-show 就没效果了。我们可以使用:placeholder-shown设置input元素的样式。
        <pre>
          input:placeholder-shown {
            border: 1px solid pink;
            background: yellow;
            color: green;
          }
        </pre>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup(){

  }
}
</script>

<style scoped lang="scss">
.input-control{
  width:220px;
  height:40px;
  border: solid 1px #ccc;
  padding-left: 12px;
}
.input-control:placeholder-shown::placeholder {
  color: transparent;
}
.input-control:focus{
  border: 1px solid #2486ff;
}
.input-box{
  position: relative;
  .input-label {
    position: absolute;
    left: 16px; 
    top: 16px;
    pointer-events: none;
  }
}
.input-control:not(:placeholder-shown) ~ .input-label,
.input-control:focus ~ .input-label {
  color: #2486ff;
  background-color: #fff;
  transform: scale(0.75) translate(-2px, -32px);
}


</style>