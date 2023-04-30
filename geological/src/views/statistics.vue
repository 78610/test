<template>
  <div>
    <div ref="chartContainer" style="width: 100%; height: 400px;"></div>
  </div>
  
</template>
<script>


//import { pointsData } from "../assets/data/pointsData";
import echarts from 'echarts'

export default {
  /* components:{
    pointsData
  }, */
  data(){
    return{
      chartData:[],
      timeData:[],
    }
  },
  mounted() {
    const localData = localStorage.getItem('highdata')
    const time = localStorage.getItem('timedata')
    if (localData) {
      this.chartData = JSON.parse(localData)
      this.chartData=this.chartData.slice(-7)
    }
    if(time){
      this.timeData=JSON.parse(time)
      this.timeData=this.timeData.slice(-7)
    }
    //console.log(localData.length)
    //console.log(localData)
    this.renderChart()
  },
  watch: {
    chartData: function(newChartData) {
      // 将新数据保存到本地存储
      //localStorage.setItem('chartData', JSON.stringify(newChartData))
      // 更新折线图
      this.updateChart(newChartData)
    }
  },
  methods: {
    /* handleChartClick(params) {
      console.log("chartData=...")
      console.log(this.chartData)
      const dataIndex = params.dataIndex
      const value = this.chartData.data[dataIndex]
      alert(`第 ${dataIndex + 1} 天的销量为 ${value}`)
    }, */
    renderChart() {
      const chartContainer = this.$refs.chartContainer

      // 初始化 echarts 实例
      const chart = echarts.init(chartContainer)

      // 设置折线图配置项
      const option = {
        xAxis: {
          type: 'category',
          name:'设备监测时间',
          data: this.timeData
        },
        yAxis: {
          type: 'value',
          name:'水位/m'
        },
        tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
        series: [{
          data: this.chartData,
          type: 'line'
        }],
        label: {
      show: false,
      position: 'top', // 文本标签显示在数据点上方
      //position: 'insideRight', // 设置标签在数据点的右侧显示
      formatter: '水位/m' // 设置只显示纵轴数据
    },
    emphasis: {
      label: {
        show: true // 点击时显示文本标签
      }
    },
      };

      // 使用刚指定的配置项和数据显示图表。
      chart.setOption(option);
    },
    updateChart(newData) {
      const chart = echarts.getInstanceByDom(this.$refs.chartContainer)
      chart.setOption({
        series: [{
          data: newData,
          type: 'line'
        }]
      })
    }
  }
}
</script>