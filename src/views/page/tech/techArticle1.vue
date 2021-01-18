<template>
  <div class="container">
    <div class="title">
      <i class="icon iconfont icon-fanhui" @click="()=>this.$router.back()"></i>
      滑动窗口-和为s的连续正数序列</div>
    <div class="date">2021-01-16</div>
    <div class="content">
      <p>
        题目：输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
        序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
      </p>
      <p>
        <pre>
          var findContinuousSequence = function(target) {
          let list = [];
          let left = 1; 
          let right = 1;
          let sum = 0;
          while(left &lt;= target/2){
              if(sum &lt; target){
                  sum += right;
                  right++;
              }else if(sum > target){
                  sum -= left;
                  left++;
              }else{
                  let arr = [];
                  for(let i =left;i&lt;right;i++){
                      arr.push(i);
                  }
                  list.push(arr);
                  sum -= left;
                  left++;
              }
          }
          return list;
          };
        </pre>
      </p>
      <p>解决方法：</p>
      <p>滑动窗口：</p>
      <pre>  
        滑动窗口可以看成数组中框起来的一个部分。在一些数组类题目中，我们可以用滑动窗口来观察可能的候选结果。当滑动窗口从数组的左边滑到了右边，我们就可以从所有的候选结果中找到最优的结果。
        对于这道题来说，数组就是正整数序列 [1, 2, 3, \dots, n][1,2,3,…,n]。我们设滑动窗口的左边界为 ii，右边界为 jj，则滑动窗口框起来的是一个左闭右开区间 [i, j)[i,j)。
        注意，为了编程的方便，滑动窗口一般表示成一个左闭右开区间。在一开始，i=1, j=1i=1,j=1，滑动窗口位于序列的最左侧，窗口大小为零。
        滑动窗口的重要性质是：窗口的左边界和右边界永远只能向右移动，而不能向左移动。这是为了保证滑动窗口的时间复杂度是 O(n)O(n)。如果左右边界向左移动的话，这叫做“回溯”，算法的时间复杂度就可能不止 O(n)O(n)。
      </pre>
      <pre>
        定义左边界left和右边界right:
        如果当前的和sum小于target，则右移右边界--增大，
        如果当前的和sum大于target，则右移左边界--收缩。
        如示例target = 9
        第一轮：left:1, right:1
        数组[1]
        sum:0 < target
        增大右边界：right++

        第二轮：left:1, right:2
        数组[1,2]
        sum:3 < target
        增大右边界：right++
        ...
        第四轮：left:1, right:4
        数组[1,2,3,4]
        sum:10 > target
        收缩左边界：lleft++

        这样第五轮left:2, right:4
        数组[2,3,4]
        sum:9 === target
        找到正确的数组，记录下来，再收缩左边界，寻找下一个数组。
      </pre>
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
.container{
  .title{
    height:35px;
    line-height:35px;
    font-size: 20px;
    text-align: center;
    padding:8px;
    position: relative;
    i{
      position: absolute;
      left: 16px;
      font-size:20px;
      cursor: pointer;
    }
  }
  .date{
    height:35px;
    line-height:35px;
    font-size: 14px;
    text-align: center;
    padding:8px;
    color: gray;
  }
  .content{
    width:90%;
    margin: 0 auto;
    p,pre{
      margin-top:12px;
    }
  }
}
</style>