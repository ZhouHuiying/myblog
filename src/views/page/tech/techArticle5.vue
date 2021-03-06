<template>
  <div  class="all">
    <div class="container" style="margin-top:4px;">
      <div class="article-title">
        <i class="icon iconfont icon-fanhui" @click="()=>this.$router.back()"></i>
        生产计划甘特图
      </div>
      <div class=" flex center" style="margin-top:12px;margin-bottom:12px;line-height:20px;">
        通过Vue实现的一个简单的甘特图，以年为时间跨度；
        <br/>
        找到了一个好用的甘特图的例子，npm install --save gantt-elastic即可安装使用。
        <a style="margin-top:16px;" href="https://blog.csdn.net/yangxiaoman123/article/details/107855727?utm_medium=distribute.pc_relevant_download.none-task-blog-BlogCommendFromBaidu-2.nonecase&dist_request_id=&depth_1-utm_source=distribute.pc_relevant_download.none-task-blog-BlogCommendFromBaidu-2.nonecas">
          gantt-elastic
        </a>
      </div>
      <div class="skip-chart ">
        <div class="chart-header">
          <span v-for="(item,index) of yearList" :key="index" :style="{width: yearWidth + '%'}">{{item}}</span>
        </div>
        <div class="chart-body">
          <el-scrollbar style="height:100%;" class="el-menuscrollbar">
            <div v-for="(t, index) of data" :key="index">
              <div class="date">{{t.date}}</div>
              <div v-for="(item, index) of t.list" :key="index" class="chart-body__content">
                <div class="chart-body__label">{{item.label}}</div>
                <skip-bar :startStep="item.startStep" :endStep="item.endStep" :yearWidth="yearWidth" :isFinish="item.isFinish"></skip-bar>
                <div class="chart-detail" v-for="(item,index) of yearList" :key="index" :style="{width: yearWidth + '%', height: '100%'}">
                  <div></div>
                </div>
              </div>
            </div>
          
          </el-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {ref, computed, onMounted, Ref} from '@vue/composition-api';
import skipBar from './skip-bar.vue';


export default {
  components: {
    skipBar,
  },
  setup() {
    const yearList = ref([2016, 2017, 2018, 2019, 2020, 2021, 2022,2023,2024]);
    const data = ref([
      {
        id:1,
        date: '2016-1-8',
        list:[
          {
            label: '计划1-1',
            startStep: new Date(2016,1,8),
            endStep: new Date(2020,5,1),
            isFinish: 1,
          },
          {
            label: '计划1-2',
            startStep: new Date(2016,1,8),
            endStep: new Date(2020,7,1),
            isFinish: -1,
          },
          {
            label: '计划1-3',
            startStep: new Date(2016,1,8),
            endStep: new Date(2020,9,1),
            isFinish: 1,
          },
          {
            label: '计划1-4',
            startStep: new Date(2016,1,8),
            endStep: new Date(2020,10,1),
            isFinish: 1,
          },
          {
            label: '计划1-5',
            startStep: new Date(2016,1,8),
            endStep: new Date(2020,11,1),
            isFinish: 0,
          },
        ]
      },
      {
        id:2,
        date: '2017-1-8',
        list:[
          {
          label: '计划2-1',
          startStep: new Date(2017,1,8),
          endStep: new Date(2022,7,1),
          isFinish: 0,
          },
          {
            label: '计划2-2',
            startStep: new Date(2017,1,8),
            endStep: new Date(2022,8,1),
            isFinish: 0,
          },
          {
            label: '计划2-3',
            startStep: new Date(2017,1,8),
            endStep: new Date(2022,9,1),
            isFinish: 1,
          },
          {
            label: '计划2-4',
            startStep: new Date(2017,1,8),
            endStep: new Date(2022,10,1),
            isFinish: 1,
          },
          {
            label: '计划2-5',
            startStep: new Date(2017,1,8),
            endStep: new Date(2022,11,1),
            isFinish: -1,
          },
        ]
      },
      {
        id:3,
        date: '2020-3-4',
        list:[
          {
          label: '计划3-1',
          startStep: new Date(2020,3,4),
          endStep: new Date(2022,7,1),
          isFinish: 0,
          },
          {
            label: '计划3-2',
            startStep: new Date(2020,3,4),
            endStep: new Date(2022,8,1),
            isFinish: 0,
          },
          {
            label: '计划3-3',
            startStep: new Date(2020,3,4),
            endStep: new Date(2022,9,1),
            isFinish: -1,
          },
          {
            label: '计划3-4',
            startStep: new Date(2020,3,4),
            endStep: new Date(2022,10,1),
            isFinish: 1,
          },
          {
            label: '计划3-5',
            startStep: new Date(2020,3,4),
            endStep: new Date(2022,11,1),
            isFinish: 1,
          },
        ]
      },
      ]);
    
    const yearWidth = computed(() => {
      return (100 / yearList.value.length);
    });
    onMounted( async () => {
      
    })
    return {
      yearList,data,yearWidth,
    };
  },
};
</script>
<style lang="scss" scoped>
.el-scrollbar__thumb {
  background-color: #3e97f6;
}
.date{
  padding: 8px;
  font-weight: 550;
  font-size: 16px;
}
.skip-chart {
  margin-top:20px;
  margin: 0 auto;
  width: 90%;
  height: 700px;
  font-size: 12px;
  .chart-header {
    height: 30px;
    line-height: 30px;
    width: calc(100% - 125px);
    margin-left: 125px;
    padding-right: 20px;
    display: flex;
    flex-wrap: nowrap;
    span {
      text-align: center;
      display: inline-block;
    }
  }
  .chart-body {
    width: 100%;
    height: calc(100% );
    padding-bottom: 20px;
    .chart-body__content {
      width: 100%;
      height: 40px;
      line-height: 40px;
      display: flex;
      flex-wrap: nowrap;
      position: relative;
      .chart-body__label {
        min-width: 125px;
        text-align: center;
      }
      .chart-detail {
        position: relative;
        z-index: 8;
        &>div{
          width: 1px;
          height: 100%;
          background-color: #0166B5;
          position: absolute;
          left: 50%
        }
      }
      .skip-bar {
        position: absolute;
        z-index: 9;
        top: 50%;
        transform: translateY(-50%);
        width: calc(100% - 135px);
        margin-left: 125px;
      }
    }
  }
}
</style>

