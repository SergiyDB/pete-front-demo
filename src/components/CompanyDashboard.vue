<template>
  <div class="q-pa-md">
    <div class="row full-width q-py-lg">
      <q-avatar size="100px" class="q-mr-md">
        <template v-if="user.imageUrl">
          <img :src="user.imageUrl" alt="" />
        </template>
        <template v-else>
          <q-icon color="primary" name="account_circle" size="100px" />
        </template>
      </q-avatar>
      <div>
        <div class="text-h4 text-weight-bold">
          Welcome back, {{ user.full_name }}!
        </div>
        <div style="cursor: pointer" class="text-body2">
          <q-icon name="notifications" />You have 12 new messages
        </div>
      </div>
      <q-space />
      <div class="q-pa-sm q-gutter-sm">
        <q-btn padding="'10px 5px'" flat rounded icon="settings"
          >Settings</q-btn
        >
        <q-btn padding="'10px 5px'" flat rounded icon="logout" @click="logout()"
          >Logout</q-btn
        >
      </div>
    </div>

    <div class="row">
      <div>
        <q-tabs
          dense
          class="text-gray"
          active-color="primary"
          indicator-color="primary"
          align-left
          narrow-indicator
          v-model="tab"
        >
          <q-tab
            v-if="user.user_role === 'admin'"
            name="overview"
            label="Overview"
          />
          <q-tab name="level" label="Level" />
          <q-tab name="team" label="Team" />
        </q-tabs>
      </div>

      <q-space />

      <div class="row q-gutter-md q-pa-md">
        <!-- <q-btn-toggle
          v-if="tab === 'overview'"
          v-model="toggleModelOverview"
          class="my-custom-toggle"
          no-caps
          rounded
          unelevated
          toggle-color="primary"
          color="white"
          text-color="primary"
          :options="[
            {label: 'Level', value: 'level'},
            {label: 'Month', value: 'month'}
          ]"
        />
        <q-btn-toggle
          v-if="tab === 'level'"
          v-model="toggleModelLevel"
          class="my-custom-toggle"
          no-caps
          rounded
          unelevated
          toggle-color="primary"
          color="white"
          text-color="primary"
          :options="[
            {label: 'Level', value: 'level'},
            {label: 'Group', value: 'group'},
            {label: 'Month', value: 'month'}
          ]"
        /> -->

        <MonthPickerMenu
          :isFetching="false"
          :localeStr="'en-US'"
          v-model="monthPickerModel"
        />

        <SingleChoiceSelector
          :isFetching="false"
          :options="[
            { label: 'A1', value: 'a1' },
            { label: 'A2', value: 'a2' },
            { label: 'B1', value: 'b1' },
            { label: 'B2', value: 'b2' },
            { label: 'C1', value: 'c1' },
          ]"
          v-model="levelSelectorModel"
          :fieldLabel="'Level'"
        />

        <q-btn
          padding="'10px 5px'"
          square
          color="primary"
          text-color="white"
          icon-right="settings_backup_restore"
          >Reset</q-btn
        >

        <!-- <LevelSelector
          :levelListOptions="[
            { label: 'A1', value: 'a1' },
            { label: 'A2', value: 'a2' },
            { label: 'B1', value: 'b1' },
            { label: 'B2', value: 'b2' },
            { label: 'C1', value: 'c1' },
          ]"
        /> -->
      </div>
    </div>

    <q-separator spaced />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel v-if="user.user_role === 'admin'" name="overview">
        <section class="row q-col-gutter-md q-mb-lg">
          <div
            v-for="(elem, idx) in companyOverviewAverageIndicatorData"
            :key="idx"
            class="col-12 col-md-3"
          >
            <AverageIndicatorCard :data="elem" />
          </div>
        </section>

        <section class="q-mb-lg">
          <q-card class="rounded-borders full-width">
            <q-card-section>
              <div class="text-h6">Accomplishment snapshot</div>
            </q-card-section>

            <q-separator />

            <q-card-section>
              <div class="row">
                <div
                  class="col-12 col-md-6 snapshot-block__chart-container q-pa-sm"
                >
                  <LineChart />
                </div>
                <div class="col-12 col-md-6 snapshot-block__cards-grid q-pa-sm">
                  <SimpleIndicatorCardsGrid
                    :data="companyOverviewSimpleIndicatorsData"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </section>

        <section class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-card class="bg-white bordered rounded-borders">
              <q-card-section>
                <div class="text-h6">Skill Distribution</div>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <PolarAreaChart
                  :labels="['Speaking', 'Reading', 'Listening', 'Writing']"
                />
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-6">
            <FollowUpList :data="companyFollowUpData" />
          </div>
        </section>
      </q-tab-panel>

      <q-tab-panel name="level">
        <section class="row q-col-gutter-md q-mb-lg">
          <div
            v-for="(elem, idx) in companyLevelAverageIndicatorData"
            :key="idx"
            class="col-12 col-md-3"
          >
            <AverageIndicatorCard :data="elem" />
          </div>
        </section>

        <section class="row q-mb-lg q-col-gutter-md">
          <div class="col-12 col-md-8">
            <q-card class="full-height bg-white bordered rounded-borders">
              <q-card-section>
                <div class="text-h6">Linguistic Competence</div>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <RadarChart
                  :labels="radarChartLabels"
                />
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4 q-gutter-y-sm">
            <div class="row">
              <TrendLineWidgetCard
                :timescale="'weekly'"
                :dataset="companyLevelProgressTrendLineData['weekly']"
              />
            </div>

            <div class="row">
              <TrendLineWidgetCard
                :timescale="'monthly'"
                :dataset="companyLevelProgressTrendLineData['monthly']"
              />
            </div>

            <div class="row">
              <TrendLineWidgetCard
                :timescale="'quarterly'"
                :dataset="companyLevelProgressTrendLineData['quarterly']"
              />
            </div>
          </div>
        </section>

        <section class="q-mb-lg">
          <q-card class="rounded-borders full-width">
            <q-card-section>
              <div class="text-h6">Skill distribution</div>
            </q-card-section>

            <q-separator />

            <q-card-section>
              <div class="row">
                <div
                  class="col-12 col-md-6 snapshot-block__chart-container q-pa-sm"
                >
                  <PolarAreaChart
                    :labels="['Speaking', 'Reading', 'Listening', 'Writing']"
                  />
                </div>
                <div class="col-12 col-md-6 snapshot-block__cards-grid q-pa-sm">
                  <SimpleIndicatorCardsGrid
                    :data="companyLevelSimpleIndicatorsData"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </section>

        <section class="q-mb-lg">
          <q-table
            title="Leaderboard"
            :rows="tableRows"
            :columns="tableColumns"
            row-key="student"
            :pagination="paginationSettingsObj"
          >
            <template v-slot:body-cell-student="props">
              <q-td :props="props">
                <div>
                  <span
                    style="cursor: pointer"
                    class="text-body2 text-blue text-weight-bold"
                    @click="navigateToStudentById(props.row.id)"
                    >{{ props.value }} <q-icon name="arrow_outward"
                  /></span>
                </div>
              </q-td>
            </template>

            <template v-slot:body-cell-teacher="props">
              <q-td :props="props">
                <div>
                  <span
                    style="cursor: pointer"
                    class="text-body2 text-blue text-weight-bold"
                    @click="navigateToTeacherById(props.row.teacherId)"
                    >{{ props.value }} <q-icon name="arrow_outward"
                  /></span>
                </div>
              </q-td>
            </template>
          </q-table>
        </section>
      </q-tab-panel>

      <q-tab-panel name="team">
        <div class="q-pa-md row items-stretch q-gutter-md">
          <PersonCardComponent
            v-for="elem in companyTeamMembersList"
            :key="elem.id"
            :person-data="elem"
          />
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getState, logoutUser } from 'src/store/appState';

import AverageIndicatorCard from './AverageIndicatorCard.vue';

import SimpleIndicatorCardsGrid from './SimpleIndicatorCardsGrid.vue';
import FollowUpList from './FollowUpList.vue';
import PolarAreaChart from 'components/charts/PolarAreaChart.vue';

import LineChart from './LineChart.vue';
import RadarChart from './RadarChart.vue';
import PersonCardComponent from './PersonCardComponent.vue';
import TrendLineWidgetCard from './TrendLineWidgetCard.vue';

// import LevelSelector from './LevelSelector.vue';
import SingleChoiceSelector from './SingleChoiceSelector.vue';
import MonthPickerMenu from './MonthPickerMenu.vue';

import {
  companyOverviewAverageIndicatorData,
  companyOverviewSimpleIndicatorsData,
  companyLevelAverageIndicatorData,
  companyLevelSimpleIndicatorsData,
  companyLevelProgressTrendLineData,
  companyStudentsLeaderboardData,
  companyFollowUpData,
  companyTeamMembersList,
} from 'src/mock/data';

import { chartLabels } from 'src/constants/chartLabels';
const radarChartLabels = chartLabels.linguisticCompetenceRadar;

const state = getState();
const {
  // isUserLoggedIn,
  user,
} = state;

const tab = user.user_role === 'admin' ? ref('overview') : ref('level');
// const toggleModelOverview = ref('level');
// const toggleModelLevel = ref('level');

const monthPickerModel = ref([new Date().getMonth()]);
const levelSelectorModel = ref('a1');

const router = useRouter();

const logout = () => {
  logoutUser();
  router.push({ path: '/auth' });
};

const tableColumns = [
  {
    name: 'student',
    required: true,
    label: 'Student',
    align: 'left',
    field: (row) => row.student,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'cefr',
    required: true,
    label: 'CEFR',
    align: 'left',
    field: (row) => row.cefr,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'fluency',
    required: true,
    label: 'Fluency (%)',
    align: 'left',
    field: (row) => row.fluency,
    format: (val) => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'timeSpent',
    required: true,
    label: 'Time Spent (hours)',
    align: 'left',
    field: (row) => row.timeSpent,
    format: (val) => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'streak',
    required: true,
    label: 'Streak (days)',
    align: 'left',
    field: (row) => row.streak,
    format: (val) => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'teacher',
    required: true,
    label: 'Teacher',
    align: 'left',
    field: (row) => row.teacher,
    format: (val) => `${val}`,
    sortable: true,
  },
];

const tableRows = companyStudentsLeaderboardData;

const paginationSettingsObj = {
  sortBy: 'fluency',
  descending: true,
  rowsPerPage: 10,
};

const navigateToStudentById = (id) => {
  router.push(`/student/${id}`);
};

const navigateToTeacherById = (id) => {
  router.push(`/teacher/${id}`);
};
</script>

<style lang="scss"></style>
src/store/appState
