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
        <q-toolbar-title> Student Summary </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-lg q-gutter-y-lg">
        <section class="column items-center justify-center">
          <q-avatar size="200px">
            <img :src="studentSummary['imageSrc']" />
          </q-avatar>

          <div class="text-h6">Student</div>
          <div class="text-body1">{{ studentInfo.student }}</div>
          <div class="text-body1">{{ studentSummary.grade }}</div>
          <div class="text-body1">
            Teacher:
            <span
              style="cursor: pointer"
              class="text-body2 text-blue text-weight-bold"
              @click="navigateToTeacherById(teacherInfo.id)"
              >{{ teacherInfo.name }} <q-icon name="arrow_outward" />
            </span>
          </div>
        </section>

        <section class="row justify-center q-mb-lg">

          <MonthPickerRow
            :isFetching="false"
            :localeStr="'en-US'"
            :current-date="currentDate"
            v-model="formState.student_selectedMonths"
          />

          <!-- <q-btn
            @click="resetForm"
            padding="'10px 5px'"
            square
            color="primary"
            text-color="white"
            icon-right="settings_backup_restore"
          >
            Reset
          </q-btn> -->
        </section>

        <section class="row q-col-gutter-md q-my-lg">
          <div v-for="(elem, idx) in studentAverages.averages" :key="idx" class="col-12 col-md-3">
            <AverageIndicatorCard
              :average="elem"
            />
          </div>
        </section>

        <section class="row q-mb-lg q-col-gutter-md">
          <div class="col-12 col-md-8">
            <q-card class="full-height bg-white bordered rounded-borders">
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
                :dataset="studentSummary['progressTrendLineData']['weekly']"
              />
            </div>

            <div class="row">
              <TrendLineWidgetCard
                :timescale="'monthly'"
                :dataset="studentSummary['progressTrendLineData']['monthly']"
              />
            </div>

            <div class="row">
              <TrendLineWidgetCard
                :timescale="'quarterly'"
                :dataset="studentSummary['progressTrendLineData']['quarterly']"
              />
            </div>
          </div>
        </section>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {
  computed,
  ref,
} from 'vue';
import { useRouter } from 'vue-router';

import AverageIndicatorCard from 'src/components/AverageIndicatorCard.vue';
import PolarAreaChart from 'src/components/charts/PolarAreaChart.vue';
import RadarChart from 'src/components/charts/RadarChart.vue';
import TrendLineWidgetCard from 'src/components/TrendLineWidgetCard.vue';

import MonthPickerRow from 'src/components/controls/MonthPickerRow.vue';

import StudentsService from 'src/services/students_service';
import TeachersService from 'src/services/teachers_service';
import { DateTimeService } from 'src/services/datetime_service';
import { getState } from 'src/store/appState';

import {
  // resetFormState,
  getOriginalFormState,
  // getCompanyLevelSelectedIndicator,
} from 'src/store/formState'

import { chartLabels } from 'src/constants/chartLabels';
//
const radarChartLabels = chartLabels.linguisticCompetenceRadar;
const polarChartLabels = chartLabels.skillDistributionPolar;

const props = defineProps({
  id: String,
});

defineOptions({
  name: 'StudentSummaryPage',
});

const router = useRouter();
const studentsService = new StudentsService();
const teachersService = new TeachersService();
const dateTimeService = new DateTimeService();

const currentDate = ref(dateTimeService.getCurrentDateTime());

const state = getState();
const formState = getOriginalFormState();
const {
  user,
} = state;

const studentId = computed(() => parseInt(props.id));
const userType = user.user_type;

const studentInfo = computed(() =>
  studentsService.getStudentInfoByStudentId(userType, studentId.value)
);

const studentSummary = computed(() =>
  studentsService.getStudentSummaryByStudentId(userType, studentId.value)
);

const studentAverages = computed(() => studentsService.getStudentAveragesByStudentId(studentId.value))

const teacherInfo = computed(() =>
  teachersService.getTeacherInfoByTeacherId(
    userType,
    studentInfo.value.teacherId
  )
);

// const currentDate = ref(new Date());

// const monthPickerModel = ref([currentDate.value.getMonth()]);

const navigateBack = () => {
  router.go(-1);
};

const navigateToTeacherById = (id) => {
  router.push(`/teacher/${id}`);
};

// const resetForm = () => {
//   resetFormState();
// };



</script>

<style lang="scss" scoped></style>
src/store/appState
