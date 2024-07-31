<template>
  <div class="line-chart full-height full-width">
    <div class="full-height full-width q-py-sm row justify-center">
      <canvas
        :id="canvasUid"
        class="full-height"
      ></canvas>
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

const props = defineProps({
  chartColor: {type: String}
})

const chartColor = computed(() => props.chartColor);

const canvasUid = create_UUID();

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const data = computed(() => {return{
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: generateRandomNumbers(10, 100, 12),
      fill: false,
      borderColor: chartColor.value,
      tension: 0.1,
      datalabels: {
        align: 'start',
        anchor: 'start'
      },
      backgroundColor: chartColor.value,
    },
  ],
};})

const makeChartConfig = () => {
  return {
    type: 'line',
    data: data.value,
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cubicInterpolationMode: 'monotone',
      plugins: {
        legend: {
          display: false,
          // position: 'top',
        },
        datalabels: {
          backgroundColor: function(context) {
            return context.dataset.backgroundColor;
          },
          borderRadius: 10,
          color: 'white',
          font: {
            weight: 'bold'
          },
          // formatter: Math.round,
          padding: 6
        }
        // title: {
        //   display: true,
        //   text: 'Chart.js Line Chart',
        // },
      },
      scales: {
        x: {
          ticks: {
            padding: 8
          }
        },
        y: {
          ticks: {
            padding: 12
          }
        }
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

<style lang="scss">
.canvas-line-chart__wrapper {
  height: 100% !important;
  width: 100% !important;
}

</style>
