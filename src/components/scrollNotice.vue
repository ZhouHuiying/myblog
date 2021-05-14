<template>
  <div>
    <div class="firstNotice">
      <div class='ad'>
        <i class="iconfont">&#xe633;</i>
        <p class='content'>
            <span>重要通知：创作者服务中心上线，速度过来体验一下吧！ </span>
        </p>
      </div>
    </div>
    <div class="secondNotice">
      <div class="container">
        <ul style="--top: 0px" class="animation">
          <li class="item">公告1</li>
          <li class="item">公告2</li>
          <li class="item">公告3</li>
          <li class="item">公告4</li>
          <li class="item">公告5</li>
          <li class="item">公告6</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import {ref, computed, onMounted, Ref} from '@vue/composition-api';

export default {
  setup(){
    onMounted(async function () {
      let ul = document.getElementsByTagName('ul')[0]
      const LEN = document.getElementsByTagName('li').length
      let distance = 0
      const HEIGHT = 50;

      setInterval(() => {
        if (distance < (LEN - 1) * HEIGHT) {
          distance += HEIGHT
          ul.setAttribute('class', 'animation')
        } else {
          distance = 0
          ul.removeAttribute('class', 'animation')
        }
        ul.style.setProperty('--top', `${-distance}px`)
      }, 2000)
    });
  }
}
</script>

<style scoped lang="scss">
@font-face {
  font-family: "iconfont"; /* Project id 2516453 */
  src: url("//at.alicdn.com/t/font_2516453_g6qjhhqblt9.woff2?t=1620545333370")
      format("woff2"),
      url("//at.alicdn.com/t/font_2516453_g6qjhhqblt9.woff?t=1620545333370")
      format("woff"),
      url("//at.alicdn.com/t/font_2516453_g6qjhhqblt9.ttf?t=1620545333370")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.firstNotice{
  .ad {
    width: 400px;
    height: 60px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    color: #353535;
    box-shadow: 2px 1px 8px 1px rgb(228, 232, 235);
    margin: 40px auto;

    i {
        color: #ff6146;
        font-size: 20px;
        margin-right: 10px;
    }

    .content{
        flex: 1;
        overflow: hidden;
        margin-top: -2px;
        span {
          display: block;
          width: auto;
          white-space: nowrap;
          animation: marquee 10s linear infinite;
          padding-left: 105%;
          padding-right: 120%;
          &:hover {
            animation-play-state: paused; //规定动画已暂停 paused running 
          }
        }
    }
}

  @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
  }
}

.secondNotice{
  .container {
    position: relative;
    height: 50px;
    overflow: hidden;
    ul {
      position: absolute;
      top: var(--top);
      right: 0;
      left: 0;
    }
    .item {
      line-height: 50px;
      color: #66f;
      letter-spacing: 1ch;
      font-size: 16px;
      text-align: center;
    }
}

  .animation {
    transition: 1s top ease-in-out;
  } 
}



</style>