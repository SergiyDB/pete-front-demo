<template>
  <div class="radar-chart">
    <div class="full-width q-py-sm row justify-center">
      <canvas :id="canvasUid" class="full-height" style="max-height: 45vh"></canvas>
    </div>
  </div>

</template>

<script setup>

const props = defineProps({
  labels: {type: Array, required: true},
  chartColor: { type: String }
});

import {
  computed,
  // inject,
  onMounted,
  onUpdated,
  reactive,
  watchEffect,
} from 'vue';

import create_UUID from 'src/shared/generateUUID';

import {
  Chart as ChartJS,
  Filler,
  RadarController,
  LineElement,
  PointElement,
  Tooltip,
  // Legend,
  RadialLinearScale,
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';


import { generateRandomNumbers } from 'src/shared/generateRandonInts';


ChartJS.register(
  RadarController,
  LineElement,
  PointElement,
  Tooltip,
  // Legend,
  RadialLinearScale,
  Filler,
  ChartDataLabels
);

const canvasUid = create_UUID();
const chartColor = computed(() => props.chartColor);

const data = computed(() => {
  return {
    labels: props.labels,
    datasets: [
      {
        fill: true,
        label: chartColor.value,
        data: generateRandomNumbers(15, 95, 5),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
    ]
  };

})


const makeChartConfig = () => {
  return {
    type: 'radar',
    data: data.value,
    options: {
      responsive: true,
      elements: {
        line: {
          borderWidth: 3,
        },
      },

      maintainAspectRatio: true,
      plugins: {
        legend: {
          // position: 'top',
          display: false
        },
        datalabels: {
          backgroundColor: function(context) {
            return context.dataset.borderColor;
          },
          color: 'white',
          font: {
            weight: 'bold'
          },
          formatter: Math.round,
          padding: 8
        }
        // title: {
        //   display: true,
        //   text: 'Chart.js Polar Area Chart'
        // }
      },
      scales: {
        r: {
          suggestedMin: 0,
          pointLabels: {
            display: true,
            // centerPointLabels: true,
            font: {
              size: 16
            }
          },
          ticks: {
            display: false
            // z: 1
          }
        }
      }
    },
  }
}

let chartConfig = reactive({});
let myChart = {};

const createChart = function() {
  const ctx = document.getElementById(canvasUid);
  if (ctx) {
    try {
      myChart = new ChartJS(ctx, chartConfig);
    } catch (error) {
      console.error(error);
    }
  }
}

watchEffect(() => {
  chartConfig = makeChartConfig();
})

onMounted(() => {
  createChart();
});

onUpdated(() => {

  if(document.getElementById(canvasUid)) {
    myChart.data = chartConfig.data
    myChart.update();
    myChart.resize();
  }

});

</script>

<style lang="scss">

</style>