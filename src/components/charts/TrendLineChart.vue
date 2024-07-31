<template>
  <div class="line-widget full-width full-height ">
    <div class="full-width full-height q-py-sm row justify-center">
      <canvas
        :id="canvasUid"
        class="full-width full-height"
      ></canvas>
    </div>
  </div>
</template>

<script setup>
import {
  // computed,
  // inject,
  onMounted,
  onUpdated,
  reactive,
  watchEffect,
} from 'vue';

import create_UUID from 'src/shared/generateUUID';

import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  // Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import { generateRandomNumbers } from 'src/shared/generateRandonInts';

const props = defineProps({
  dataset: { type: Object, required: true }
});

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  // Legend,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

const canvasUid = create_UUID();
// const DATA_COUNT = 5;
// const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

// const labels = dataset.labels
const data = {
  labels: props.dataset.labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: generateRandomNumbers(15, 95, props.dataset.labels.length),
      fill: false,
      borderColor: 'rgba(138, 43, 226, 0.6)',
      tension: 0.1,
      datalabels: {
        align: 'center',
        anchor: 'center'
      },
      backgroundColor: ['rgb(138, 43, 226)']
    },
  ],
};

const makeChartConfig = () => {
  return {
    type: 'line',
    data: data,
    options: {
      layout: {
        padding: 15
      },
      elements: {
        point: {
          pointStyle: false
        }
      },
      responsive: false,
      maintainAspectRatio: false,
      cubicInterpolationMode: 'monotone',
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          backgroundColor: function(context) {
            return context.dataset.backgroundColor;
          },
          borderRadius: 10,
          color: 'white',
          font: {
            // weight: 'bold'
          },
          // formatter: Math.round,
          padding: 4
        }
        // title: {
        //   display: true,
        //   text: 'Chart.js Line Chart',
        // },
      },
      scales: {
      //   r: {
      // //     pointLabels: {
      // //       display: true,
      // //       centerPointLabels: true,
      // //       font: {
      // //         size: 18
      // //       }
      // //     },
      //     ticks: {
      //       z: 1
      //     }
      //   }
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      }
    },
  };
};

let chartConfig = reactive({});
let myChart = {};

const createChart = function () {
  const ctx = document.getElementById(canvasUid);

  if (ctx) {
    try {
      myChart = new ChartJS(ctx, chartConfig);
    } catch (error) {
      console.error(error);
    }
  }
};

watchEffect(() => {
  chartConfig = makeChartConfig();
});

onMounted(() => {
  createChart();
});

onUpdated(() => {
  if (document.getElementById(canvasUid)) {
    myChart.data = chartConfig.data;
    myChart.update();
    myChart.resize();
  }
});
</script>

<style lang="scss" scoped>
.canvas-line-widget__wrapper {
  height: 100% !important;
  width: 100% !important;
}
</style>