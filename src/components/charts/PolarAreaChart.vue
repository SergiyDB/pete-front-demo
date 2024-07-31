<template>
  <div class="polar-area-chart">
    <div class="full-width q-py-sm row justify-center">
      <canvas class="full-height" :id="canvasUid" style="max-height: 45vh;"></canvas>
    </div>
  </div>
</template>

<script setup>
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
  PolarAreaController,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

import { generateRandomNumbers } from 'src/shared/generateRandonInts';

const props = defineProps({
  labels: { type: Array, required: true},
  chartColor: {type: String}
  // data: { type: Array, required: true }
});

const chartColor = computed(() => props.chartColor);

ChartJS.register(
  PolarAreaController,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  ChartDataLabels
);

const canvasUid = create_UUID();

const data = computed(() => {
  return {
  labels: props.labels,
  datasets: [
    {
      label: chartColor.value,
      data: generateRandomNumbers(20, 95, 4),
      backgroundColor: [
        'rgba(66, 135, 245, 0.6)',
        'rgba(138, 43, 226, 0.6)',
        'rgba(32, 178, 170, 0.6)',
        'rgba(255, 160, 122, 0.6)',
      ]
    }
  ]
};
})


const makeChartConfig = () => {
  return {

    type: 'polarArea',
    data: data.value,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        datalabels: {
          anchor: 'center',
          backgroundColor: function(context) {
            return context.dataset.backgroundColor;
          },
          borderColor: 'white',
          borderRadius: 25,
          borderWidth: 2,
          color: 'white',
          font: {
            weight: 'bold'
          },
          formatter: Math.round,
          padding: 6
        }
        // title: {
        //   display: true,
        //   text: 'Chart.js Polar Area Chart'
        // }
      },
      scales: {
        r: {
      //     pointLabels: {
      //       display: true,
      //       centerPointLabels: true,
      //       font: {
      //         size: 18
      //       }
      //     },
          ticks: {
            z: 1
          }
        }
      },
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