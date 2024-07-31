<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          size="lg"
          @click="navigateBack"
          flat
          round
          dense
          icon="arrow_back"
          class="q-mr-sm"
        />
        <q-toolbar-title> Teacher Summary </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-lg q-gutter-y-lg">
        <!-- {{ teacherId }}

        {{ userType }}

        {{ teacherInfo }}

        {{ teacherSummary }} -->

        <section class="column items-center justify-center">
          <q-avatar size="200px">
            <img :src="teacherInfo['imageSrc']" />
          </q-avatar>

          <!-- {{teacherInfo}} -->

          <div class="text-h6">Teacher</div>
          <div class="text-body1">{{ teacherInfo.name }}</div>
        </section>

        <section class="row justify-center q-mb-lg">
          <MonthPickerRow
            :isFetching="false"
            :localeStr="'en-US'"
            :current-date="currentDate"
            v-model="formState.teacher_selectedMonths"
          />
        </section>

        <!-- <section class="row q-col-gutter-md q-mb-lg">
          <div
            v-for="(elem, idx) in teacherSummary['averageIndicatorsData']"
            :key="idx"
            class="col-12 col-md-3"
          >
            <AverageIndicatorCard :data="elem" />
          </div>
        </section> -->


        <section class="row q-col-gutter-md q-my-lg">
          <div v-for="(elem, idx) in teacherAverages.averages" :key="idx" class="col-12 col-md-3">
            <AverageIndicatorCard
              :average="elem"
            />
          </div>
        </section>


        <section class="row q-mb-lg q-col-gutter-md">
          <div class="col-12 col-md-8">
            <q-card class="full-height bg-white bordered rounded-borders">
              <q-card-section>
                <div class="text-h6">XY</div>
              </q-card-section>
              <q-separator />
              <q-card-section class="row">
                <div class="col-12 col-md-6">
                  <div class="text-center text-subtitle1 text-weight-bold">
                    Skill Distribution
                  </div>
                  <PolarAreaChart
                    :labels="polarChartLabels"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-center text-subtitle1 text-weight-bold">
                    Linguistic Competence
                  </div>
                  <RadarChart
                    :labels="radarChartLabels"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4 q-gutter-y-sm">
            <div class="row">
              <TrendLineWidgetCard
                :timescale="'weekly'"
                :dataset="teacherSummary['progressTrendLineDataXY']['weekly']"
              />
            </div>

            <div class="row">
              <TrendLineWidgetCard
                :timescale="'monthly'"
                :dataset="teacherSummary['progressTrendLineDataXY']['monthly']"
              />
            </div>

            <div class="row">
              <TrendLineWidgetCard
                :timescale="'quarterly'"
                :dataset="
                  teacherSummary['progressTrendLineDataXY']['quarterly']
                "
              />
            </div>
          </div>
        </section>

        <section class="row q-mb-lg q-col-gutter-md">
          <div class="col-12 col-md-8">
            <q-card class="full-height bg-white bordered rounded-borders">
              <q-card-section>
                <div class="text-h6">YZ</div>
              </q-card-section>
              <q-separator />
              <q-card-section class="row">
                <div class="col-12 col-md-6">
                  <div class="text-center text-subtitle1 text-weight-bold">
                    Skill Distribution
                  </div>
                  <PolarAreaChart
                    :labels="polarChartLabels"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-center text-subtitle1 text-weight-bold">
                    Linguistic Competence
                  </div>
                  <RadarChart
                    :labels="radarChartLabels"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4 q-gutter-y-sm">
            <div class="row">
              <TrendLineWidgetCard
                :timescale="'weekly'"
                :dataset="teacherSummary['progressTrendLineDataYZ']['weekly']"
              />
            </div>

            <div class="row">
              <TrendLineWidgetCard
                :timescale="'monthly'"
                :dataset="teacherSummary['progressTrendLineDataYZ']['monthly']"
              />
            </div>

            <div class="row">
              <TrendLineWidgetCard
                :timescale="'quarterly'"
                :dataset="
                  teacherSummary['progressTrendLineDataYZ']['quarterly']
                "
              />
            </div>
          </div>
        </section>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import AverageIndicatorCard from 'components/AverageIndicatorCard.vue';
import PolarAreaChart from 'components/charts/PolarAreaChart.vue';
import RadarChart from 'components/charts/RadarChart.vue';
import TrendLineWidgetCard from 'components/TrendLineWidgetCard.vue';

import MonthPickerRow from 'components/controls/MonthPickerRow.vue';

// import { teacherSummaryData } from 'src/mock/data.ts';

import TeachersService from 'src/services/teachers_service';
import { DateTimeService } from 'src/services/datetime_service';
import { getState } from 'src/store/appState';

import { chartLabels } from 'src/constants/chartLabels';
const radarChartLabels = chartLabels.linguisticCompetenceRadar;
const polarChartLabels = chartLabels.skillDistributionPolar;

import {
  // resetFormState,
  getOriginalFormState,
  // getCompanyLevelSelectedIndicator,
} from 'src/store/formState'

const props = defineProps({
  id: String,
});

defineOptions({
  name: 'TeacherSummaryPage',
});


const router = useRouter();
const teachersService = new TeachersService();
const dateTimeService = new DateTimeService();

const currentDate = ref(dateTimeService.getCurrentDateTime());

const state = getState();
const formState = getOriginalFormState();
const {
  user,
} = state;

const teacherId = computed(() => parseInt(props.id));
const userType = user.user_type;

const navigateBack = () => {
  router.go(-1);
};

const teacherInfo = computed(() =>
  teachersService.getTeacherInfoByTeacherId(userType, teacherId.value)
);
const teacherSummary = computed(() =>
  teachersService.getTeacherSummaryByTeacherId(userType, teacherId.value)
);

const teacherAverages = computed(() => teachersService.getTeacherAveragesByTeacherId(teacherId.value))

// getTeacherAveragesByTeacherId
</script>

<style lang="scss" scoped></style>
src/store/appState
