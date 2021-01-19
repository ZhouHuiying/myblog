<template>
  <div class="container">
    <div class="article-title title">
      <i class="icon iconfont icon-fanhui" @click="()=>this.$router.back()"></i>
      页面内跳转</div>
    <div class="article-date">2021-01-19</div>
    <div class="article-content flex around">
      <div style="width:20%;">
        <a href="#demo">跳到id为demo的DIV</a> 
        <div class="demo"></div>
        <div class="demo"></div>
        <div class="demo"></div>
        <div class="demo"></div>
        <div class="demo" id="demo" style="text-align:center;">id=demo</div>
        <div class="demo"></div>
      </div>
      <div>
        <p>第一种方法：直接在html中添加；</p>
        <p>使用a标签跳转到对应id的位置</p>
        <pre>
      &lt;a href="#demo"> 跳到id为demo的DIV &lt;/a>
        </pre>
        <p>第二种方法：先在html中添加，再添加js代码</p>
        <pre>
          <p>通过btn的window.location.hash  跳转到对应位置;</p>
      html: &lt;input  type="button" value="跳到id为demo的DIV"  onclick="javascript:onTopClick();" />
      js: 
        function onTopClick() {
          window.location.hash = "#domo";
        }
        </pre>
        <p>第三种方法：先在html中添加，再添加js代码</p>
        <pre>
      html: &lt;button class="btn"> 到指定滚动高度&lt;/button>
      js:
        $(document).on('click',$('.btn'),function(){
          $(window).scrollTop($('#demo').offset().top)
        })
        </pre>
      </div>
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
.demo{
    width: 100px;
    height: 100px;
    border: 1px red solid;
    margin-bottom: 100px;
    margin-right: 50px;
}
.btn{
    position: fixed;
    right: 0;
    top: 20px;
    background-color: #0000cc;
    color: #ffffff;
}
</style>