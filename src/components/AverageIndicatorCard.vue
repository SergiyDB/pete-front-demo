<template>

  <q-card
    clickable
    @click="selectAvgIndicator"
    class="bg-white bordered non-selectable"
    :class="{
      [getColorClass()]: isSelectedIndicator,
      [getTextClass()]: isSelectedIndicator,
    }"
  >
    <q-card-section>
      <div class="title text-body1 text-weight-bold">
        <span>{{ average.name }}</span>
      </div>
    </q-card-section>

    <q-card-section class="value text-center">
      <div class="text-center text-h4">
        <span>{{ label }}</span
        ><span v-if="average.unit">&nbsp;{{ average.unit }}</span>
      </div>
    </q-card-section>

    <!-- <q-card-section v-if="data.additionalText" class="additional">
      <div class="text-body2 text-center">
        <span v-if="data.additionalText">{{ data.additionalText }}</span>
        <span v-if="data.additionalValue"
          >:&nbsp;{{ data.additionalValue }}</span
        >
        <span v-if="data.additionalUnit">&nbsp;{{ data.additionalUnit }}</span>
      </div>
    </q-card-section> -->

  </q-card>
</template>

<script setup lang="ts">

// import companiesAverage from 'src/mock/data_companies_average'
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { AverageIndicator } from 'src/enums/averageIndicators';
import type { Average } from 'src/interfaces/app_interfaces';

import {
  getCompanyOverviewSelectedIndicator,
  getCompanyLevelSelectedIndicator,
  getSchoolOverviewSelectedIndicator,
  getSchoolGradeSelectedIndicator,

  setCompanyOverviewSelectedIndicator,
  setCompanyLevelSelectedIndicator,
  setSchoolOverviewSelectedIndicator,
  setSchoolGradeSelectedIndicator,

} from 'src/store/formState';

const props = defineProps<{ average: Average }>();
const average = props.average;

const route = useRoute();
const currentPath = route.path;



const label = average.indicator === 'AVE_CEFR'
  ? (typeof average.value === 'object' && average.value !== null
      ? average.value.label
      : average.value)
  : average.value;

const selectedIndicator = computed(() => {
  let result: AverageIndicator;
  switch(currentPath) {
    case '/company/overview':
      result = getCompanyOverviewSelectedIndicator();
      break;

    case '/company/level':
      result = getCompanyLevelSelectedIndicator();
      break;

    case '/school/overview':
      result = getSchoolOverviewSelectedIndicator();
      break;

    case '/school/grade':
      result = getSchoolGradeSelectedIndicator()
      break;

    default:
      result = AverageIndicator.AVE_CEFR
  }
  return result;
})

const isSelectedIndicator = computed(
  () => average.indicator === selectedIndicator.value
);

const selectAvgIndicator = () => {
  switch(currentPath) {
    case '/company/overview':
      if (average.indicator === AverageIndicator.AVE_CEFR) {
        setCompanyOverviewSelectedIndicator(AverageIndicator.AVE_CEFR)

      } else if (average.indicator === AverageIndicator.AVE_FLUENCY) {
        setCompanyOverviewSelectedIndicator(AverageIndicator.AVE_FLUENCY)

      } else if (average.indicator === AverageIndicator.AVE_TIME_SPENT) {
        setCompanyOverviewSelectedIndicator(AverageIndicator.AVE_TIME_SPENT)

      } else if (average.indicator === AverageIndicator.AVE_STREAK) {
        setCompanyOverviewSelectedIndicator(AverageIndicator.AVE_STREAK)
      }
      break;

    case '/company/level':
      if (average.indicator === AverageIndicator.AVE_CEFR) {
        setCompanyLevelSelectedIndicator(AverageIndicator.AVE_CEFR)

      } else if (average.indicator === AverageIndicator.AVE_FLUENCY) {
        setCompanyLevelSelectedIndicator(AverageIndicator.AVE_FLUENCY)

      } else if (average.indicator === AverageIndicator.AVE_TIME_SPENT) {
        setCompanyLevelSelectedIndicator(AverageIndicator.AVE_TIME_SPENT)

      } else if (average.indicator === AverageIndicator.AVE_STREAK) {
        setCompanyLevelSelectedIndicator(AverageIndicator.AVE_STREAK)
      }
      break;

    case '/school/overview':
      if (average.indicator === AverageIndicator.AVE_CEFR) {
        setSchoolOverviewSelectedIndicator(AverageIndicator.AVE_CEFR)

      } else if (average.indicator === AverageIndicator.AVE_FLUENCY) {
        setSchoolOverviewSelectedIndicator(AverageIndicator.AVE_FLUENCY)

      } else if (average.indicator === AverageIndicator.AVE_TIME_SPENT) {
        setSchoolOverviewSelectedIndicator(AverageIndicator.AVE_TIME_SPENT)

      } else if (average.indicator === AverageIndicator.AVE_STREAK) {
        setSchoolOverviewSelectedIndicator(AverageIndicator.AVE_STREAK)
      }
      break;

    case '/school/grade':
      if (average.indicator === AverageIndicator.AVE_CEFR) {
        setSchoolGradeSelectedIndicator(AverageIndicator.AVE_CEFR)

      } else if (average.indicator === AverageIndicator.AVE_FLUENCY) {
        setSchoolGradeSelectedIndicator(AverageIndicator.AVE_FLUENCY)

      } else if (average.indicator === AverageIndicator.AVE_TIME_SPENT) {
        setSchoolGradeSelectedIndicator(AverageIndicator.AVE_TIME_SPENT)

      } else if (average.indicator === AverageIndicator.AVE_STREAK) {
        setSchoolGradeSelectedIndicator(AverageIndicator.AVE_STREAK)
      }
      break;

    default:
      break;
  }
};

const getColorClass = (): string => {
  return `bg-${average.color}`;
};

const getTextClass = (): string => {
  return 'text-white';
};
</script>

<style lang="scss"></style>
