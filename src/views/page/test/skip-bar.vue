<template>
  <div class="skip-bar" :style="{'padding-left': yearWidth/2 +'%', 'padding-right': yearWidth/2 +'%'}">
    <el-tooltip placement="top" effect="light">
      <div slot="content">
        <span style="color:white">项目跨度：{{`${startStep}~${endStep}`}}</span>
      </div>
      <div class="skip-bar-content" :style="{left: startOffest+'%', width: stepLength + '%'}">
        <div class="start-step step">
        </div>
        <div class="step-line" >
        </div>
        <div class="end-step step">
        </div>
      </div>
    </el-tooltip>
  </div>
</template>
<script lang="ts">
import {ref, onMounted, onUnmounted, computed, } from '@vue/composition-api';

export default { 
  props: {
    startStep: {
      type: Number,
      default: ''
    },
    endStep: {
      type: Number,
      default: ''
    },
    yearWidth: {
      type: Number,
      default: ''
    },
    isFinish: {
      type: Boolean,
      default: false
    }
  },
  setup(props:any,){
    const startYear = ref(2016)
    const endYear = ref(2022);
    
    const startOffest = computed(() => {
      const splitWidth = 100 / (endYear.value - startYear.value);
      const startleftOffest = (props.startStep - startYear.value) * splitWidth;
      return startleftOffest;
    });
    const stepLength = computed(() => {
      const splitWidth = 100 / (endYear.value - startYear.value);
      const length = splitWidth * (props.startStep - props.endStep);
      return length;
    });
    return{
      startYear,endYear,startOffest,stepLength
    }
  }
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
    .start-step {
      background-color: #006CFF;
    }
    .end-step {
      background-color: #F15D07;
    }
    .step-line {
      width: calc(100% - 16px);
      height: 2px;
      background-color: #fff;
    }
    .step {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
  }
}
</style>