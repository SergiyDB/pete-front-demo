<template>

  <div class="row">
    <div class="col-12 col-md-6 q-pa-sm">
      <SimpleIndicatorCard
        :cardData="{ title: 'Top 10%',       value: getRandomInt(1, 300) }"
        :cardBgColorClass="'bg-light-blue-1'"
        :cardTextColorClass="'text-indigo-14'"
      />
    </div>
    <div class="col-12 col-md-6 q-pa-sm">
      <SimpleIndicatorCard
        :cardData="{ title: 'Bottom 30%',    value: getRandomInt(1, 300) }"
        :cardBgColorClass="'bg-red-1'"
        :cardTextColorClass="'text-deep-orange-14'"
      />
    </div>
  </div>

  <div class="row">
    <div class="col-12 col-md-3 q-pa-sm">
      <SimpleIndicatorCard
        :cardData="{ title: 'Fluency 92%+',  value: getRandomInt(1, 300) }"
        :cardBgColorClass="'bg-light-green-1'"
        :cardTextColorClass="'text-green-10'"
      />
    </div>

      <div class="col-12 col-md-3 q-pa-sm">
      <SimpleIndicatorCard
        :cardData="{ title: 'Fluency 87%+',  value: getRandomInt(1, 300) }"
        :cardBgColorClass="'bg-cyan-1'"
        :cardTextColorClass="'text-cyan-10'"
      />
    </div>

    <div class="col-12 col-md-3 q-pa-sm">
      <SimpleIndicatorCard
        :cardData="{ title: 'Fluency 77%-',  value: getRandomInt(1, 300) }"
        :cardBgColorClass="'bg-amber-1'"
        :cardTextColorClass="'text-amber-10'"
      />
    </div>

    <div class="col-12 col-md-3 q-pa-sm">
      <SimpleIndicatorCard
        :cardData="{ title: 'Fluency 57%-',  value: getRandomInt(1, 300) }"
        :cardBgColorClass="'bg-deep-orange-1'"
        :cardTextColorClass="'text-deep-orange-10'"
      />
    </div>

  </div>

</template>

<script setup>
import SimpleIndicatorCard from './SimpleIndicatorCard.vue';
// import type { SimpleIndicatorData } from 'src/interfaces/app_interfaces';
import { getRandomInt } from 'src/shared/generateRandonInts';

// defineProps<{ data: Record<string, SimpleIndicatorData>}>();

defineProps({
  data: {type: Object, required: true},
  chartColor: {type: String}
})



</script>

<style lang="scss" scoped>

</style>