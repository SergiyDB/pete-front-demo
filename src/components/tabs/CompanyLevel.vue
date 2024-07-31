<template>

  <div class="row justify-end q-gutter-md q-pa-md full-width">
    <MonthPickerMenu
      :isFetching="false"
      :localeStr="'en-US'"
      :current-date="currentDate"
      v-model="(formState as CompanyAdminForm).level_selectedMonths"
    />

    <SingleChoiceSelector
      :isFetching="false"
      :options="levelSelectorOptions"
      v-model="(formState as CompanyAdminForm).level_selectedLevel"
      :fieldLabel="'Level'"
    />

    <SelectWithFiltering
      v-model="groupSelectorModel"
      :options="groupsSelectorOptions"
    />

    <q-btn
      @click="resetForm"
      padding="'10px 5px'"
      square
      color="primary"
      text-color="white"
      icon-right="settings_backup_restore"
    >
      Reset
    </q-btn>

</div>
  <!-- {{ groupSelectorModel }} -->
  <!-- <div>{{ groupsSelectorOptions }}</div> -->

  <section class="row q-col-gutter-md q-my-lg">
    <div v-for="(elem, idx) in companyAverages.averages" :key="idx" class="col-12 col-md-3">
      <AverageIndicatorCard
        :average="elem"
      />
    </div>
  </section>

  <section class="row q-mb-lg q-col-gutter-md">
    <div class="col-12 col-md-8 ">

      <q-card class="full-height bg-white bordered rounded-borders">
        <q-card-section>
          <div class="text-h6">
            Linguistic Competence
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <RadarChart
            :labels="radarChartLabels"
            :chartColor="chartColor"
          />

        </q-card-section>
      </q-card>

    </div>

    <div class="col-12 col-md-4 q-gutter-y-sm">

      <div class="row">
        <TrendLineWidgetCard
          :timescale="'weekly'"
          :dataset="companyLevelTrendLineData['weekly']"
        />
      </div>

      <div class="row">
        <TrendLineWidgetCard
          :timescale="'monthly'"
          :dataset="companyLevelTrendLineData['monthly']"
        />
      </div>

      <div class="row">
        <TrendLineWidgetCard
          :timescale="'quarterly'"
          :dataset="companyLevelTrendLineData['quarterly']"
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
          <div class="col-12 col-md-6 snapshot-block__chart-container q-pa-sm">
            <PolarAreaChart
              :labels="polarChartLabels"
              :chartColor="chartColor"
            />
          </div>
          <div class="col-12 col-md-6 snapshot-block__cards-grid q-pa-sm">
            <SimpleIndicatorCardsGrid
              :data="companyLevelSimpleIndicatorsData"
              :chartColor="chartColor"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </section>

  <section class="q-mb-lg">
    <LeaderboardTable
      :tableCols="tableColumnsWithTeacherCol"
      :tableRows="companyStudentsData"
      :paginationSettings="paginationSettingsObj"
      :mode="'with-teacher-col'"
    />
  </section>


</template>

<script setup lang="ts">
import {
  computed,
  ref,
  ComputedRef,
  watch
} from 'vue';

// import { useRouter } from 'vue-router';

import MonthPickerMenu from 'src/components/controls/MonthPickerMenu.vue';
import SingleChoiceSelector from 'src/components/controls/SingleChoiceSelector.vue';

import LeaderboardTable from 'src/components/LeaderboardTable.vue';
import SelectWithFiltering from 'src/components/controls/SelectWithFiltering.vue';

import PolarAreaChart from 'src/components/charts/PolarAreaChart.vue';
import RadarChart from 'src/components/charts/RadarChart.vue';
import SimpleIndicatorCardsGrid from 'src/components/SimpleIndicatorCardsGrid.vue';
import TrendLineWidgetCard from 'src/components/TrendLineWidgetCard.vue';

import { GroupsService } from 'src/services/groups_service';
import { CompanyService } from 'src/services/company_service';
import { DateTimeService } from 'src/services/datetime_service';
import { CEFRLevels } from 'src/constants/cefrLevels';

import AverageIndicatorCard from 'src/components/AverageIndicatorCard.vue';

import {
  getState
} from 'src/store/appState';

import {
  resetFormState,
  getOriginalFormState,
  getCompanyLevelSelectedIndicator,
} from 'src/store/formState'

import type {
  CompanyAdminForm,
  // CompanyTeacherForm
} from 'src/store/formState';

import { chartLabels } from 'src/constants/chartLabels';
import {
  paginationSettingsObj,
  tableColumnsWithTeacherCol
} from 'src/constants/tableSettings.js';


import { companyLevelSimpleIndicatorsData } from 'src/mock/data_companies_cards_grid_data';
import { companyLevelTrendLineData } from 'src/mock/data_companies_trend_line_data';
import { companyStudentsData } from 'src/mock/data_companies_students';
import { AverageIndicatorColorHEX } from 'src/enums/averageIndicators';

defineOptions({
  name: 'CompanyLevelTab'
});

const companyService = new CompanyService();
const dateTimeService = new DateTimeService();

const state = getState();
const formState = getOriginalFormState();
const {
  user,
} = state;

const companyId = user.company_id;
const radarChartLabels = chartLabels.linguisticCompetenceRadar;
const polarChartLabels = chartLabels.skillDistributionPolar;
const currentDate = ref(dateTimeService.getCurrentDateTime());

let companyAverages: ComputedRef;

if (companyId) {
  companyAverages = computed(() => companyService.getCompanyAverageIndicatorsByCompanyId(companyId));
}

const levelSelectorOptions = CEFRLevels.map(level => ({
  label: level.label,
  value: level.id
}));

const resetForm = (): void => {
  resetFormState();
};


const chartColor = computed(() => {
  const selectedIndicator = getCompanyLevelSelectedIndicator();
  if (selectedIndicator && selectedIndicator in AverageIndicatorColorHEX) {
    return AverageIndicatorColorHEX[selectedIndicator];
  }
  return '#000000'; // Default color if no match is found
});

const groupsService = new GroupsService();

// const groupsSelectorModel = ref([]);

const groupsList = computed(() => groupsService.getGroupsListByCompanyId(1));

const groupsSelectorOptions = computed(() => {
  return groupsList.value.map(elem => {
    return {
      label: elem.name,
      value:elem.id
    }
  });
});

const groupSelectorModel = ref();

watch(groupsList, (newGroupsList) => {
  if (newGroupsList.length > 0) {
    groupSelectorModel.value = newGroupsList[0].id
  }
}, { immediate: true }) // Immediate so it runs on initialization as well

</script>