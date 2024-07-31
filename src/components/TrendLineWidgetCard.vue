<template>
  <q-card class="full-width">
    <q-card-section horizontal>

      <q-card-section>
        <div class="text-weight-bold"><span class="text-capitalize">{{ timescale }}</span> Progress</div>
        <!-- <div class="text-center text-uppercase text-weight-bold">{{ title }}</div> -->
      </q-card-section>

      <q-separator vertical />

      <q-card-section>
        <TrendLineChart
          :dataset="dataset"
        />
      </q-card-section>

    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import TrendLineChart from 'src/components/charts/TrendLineChart.vue';

defineProps<{
  timescale: string,
  // title: string,
  dataset: Record<string, number[] | string[]>,

}>()

</script>

<style lang="scss" scoped>

</style>