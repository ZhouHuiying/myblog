<template>
  <div class="skip-bar" :style="{'padding-left': yearWidth/2 +'%', 'padding-right': yearWidth/2 +'%'}">
    <el-tooltip placement="top" effect="light">
      <div slot="content">
        <!-- <span >项目跨度：{{start}}—{{end}}</span> -->
      </div>
      <div class="skip-bar-content" :style="{left: startOffest+'%', width: stepLength + '%'}">
        <div class="start-step step">
        </div>
        <div class="step-line" :style="getFlag===0 ? {backgroundColor:'#409EFF'} : getFlag===1 ? {backgroundColor:'#67C23A'} : {backgroundColor:'#F56C6C'}">
        </div>
        <div class="end-step step">
        </div>
      </div>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  name: 'skipBar',
  props: {
    startStep: {
      type: Date,
    },
    endStep: {
      type: Date,
    },
    yearWidth: {
      type: Number,
    },
    isFinish: {
      type: Number,
    }
  },
  data() {
    return {
      startYear: 2016,
      endYear: 2024,
    };
  },
  computed: {
    startOffest() {
      const splitWidth = 100 / (this.endYear  - this.startYear) / 12;
      let tempYear = this.startStep.getFullYear();
      let tempMonth = this.startStep.getMonth();
      const startleftOffest = ((tempYear -this.startYear) * 12 +  tempMonth)* splitWidth;
      return startleftOffest;
    },
    stepLength() {
      const splitWidth = 100 / (this.endYear  - this.startYear) / 12;
      let tempYear1 = this.endStep.getFullYear();
      let tempYear2 = this.startStep.getFullYear();
      let tempMonth1 = this.endStep.getMonth() + 1;
      let tempMonth2 = 11 - this.startStep.getMonth();
      console.log((tempYear1 - tempYear2  -1) * 12 +  tempMonth1 + tempMonth2 )
      const length = splitWidth * ( (tempYear1 - tempYear2 - 1  ) * 12 +  tempMonth1 + tempMonth2 )
      return length;
    },
    getFlag(){
      const flag = this.isFinish;
      return flag;
    }
  },
};
</script>
<style lang="scss">
.skip-bar {
  width: 100%;
  height: 32px;
  line-height: 32px;
  .skip-bar-content {
    position: relative;
    height: 8px;
    display: flex;
    flex-wrap: nowrap;
    align-items:center;
    top: 50%;
    transform: translateY(-50%);
    // .start-step {
    //   background-color: #006CFF;
    // }
    // .end-step {
    //   background-color: #F15D07;
    // }
    .step-line {
      width: calc(100% - 16px);
      height: 12px;
      background-color: #fff;
      border-radius: 5px;
    }
    .step {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
  }
}
</style>