<template>

  <div class="row justify-end q-gutter-md q-pa-md full-width">
    <MonthPickerMenu
      :isFetching="false"
      :localeStr="'en-US'"
      :current-date="currentDate"
      v-model="(formState as CompanyAdminForm).overview_selectedMonths"
    />

    <SingleChoiceSelector
      :isFetching="false"
      :options="levelSelectorOptions"
      v-model="(formState as CompanyAdminForm).overview_selectedLevel"
      :fieldLabel="'Level'"
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

  <!-- {{ companyAverages.averages }} -->
  <section class="row q-col-gutter-md q-my-lg">
    <div v-for="(elem, idx) in companyAverages.averages" :key="idx" class="col-12 col-md-3">
      <AverageIndicatorCard
        :average="elem"
      />
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
            <LineChart
              :chartColor="chartColor"
            />
          </div>
          <div class="col-12 col-md-6 snapshot-block__cards-grid q-pa-sm">
            <SimpleIndicatorCardsGrid
              :data="companyOverviewSimpleIndicatorsData"
              :chartColor="chartColor"
            />
            <!-- {{ companyOverviewSimpleIndicatorsData }} -->
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
            :labels="polarChartLabels"
            :chartColor="chartColor"
          />
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12 col-md-6">
      <FollowUpList
        :data="companyFollowUpData"
        v-model="(formState as CompanyAdminForm).overview_followUp"
      />
    </div>
  </section>

</template>

<script setup lang="ts">
import {
  computed,
  ref,
  ComputedRef,
} from 'vue';

import { CompanyService } from 'src/services/company_service';

import MonthPickerMenu from 'src/components/controls/MonthPickerMenu.vue';
import SingleChoiceSelector from 'src/components/controls/SingleChoiceSelector.vue';
import SimpleIndicatorCardsGrid from 'src/components/SimpleIndicatorCardsGrid.vue';
import FollowUpList from 'src/components/FollowUpList.vue';

import LineChart from 'src/components/charts/LineChart.vue';
import PolarAreaChart from 'src/components/charts/PolarAreaChart.vue';

import AverageIndicatorCard from 'src/components/AverageIndicatorCard.vue';

import {
  getState
} from 'src/store/appState';

import {
  resetFormState,
  getOriginalFormState,
  getCompanyOverviewSelectedIndicator,
} from 'src/store/formState';

import type { CompanyAdminForm } from 'src/store/formState'

import { companyOverviewSimpleIndicatorsData } from 'src/mock/data_companies_cards_grid_data';
import { companyFollowUpData } from 'src/mock/data_companies_follow_up';
import { CEFRLevels } from 'src/constants/cefrLevels';
import { AverageIndicatorColorHEX } from 'src/enums/averageIndicators';

import { DateTimeService } from 'src/services/datetime_service';
import { chartLabels } from 'src/constants/chartLabels';

defineOptions({
  name: 'CompanyOverviewTab'
});


const state = getState();
const formState = getOriginalFormState();
const {
  user,
} = state;

const companyId = user.company_id;
const companyService = new CompanyService();
const dateTimeService = new DateTimeService();
const currentDate = ref(dateTimeService.getCurrentDateTime());

const polarChartLabels = chartLabels.skillDistributionPolar;
const chartColor = computed(() => {
  const selectedIndicator = getCompanyOverviewSelectedIndicator();
  if (selectedIndicator && selectedIndicator in AverageIndicatorColorHEX) {
    return AverageIndicatorColorHEX[selectedIndicator];
  }
  return '#000000'; // Default color if no match is found
});

let companyAverages: ComputedRef;

if (companyId) {
  companyAverages = computed(() => companyService.getCompanyAverageIndicatorsByCompanyId(companyId));
}

// import MonthPickerSingle from 'components/MonthPickerSingle.vue'

// import GroupsService from 'src/services/groups_service';

// const groupsService = new GroupsService();


// const monthPickerModel = ref( [ currentDate.value.getMonth() ] );

// const monthPickerSingleModel = ref( currentDate.value.getMonth() );


// const levelSelectorModel = ref( 'a1' );

const levelSelectorOptions = CEFRLevels.map(level => ({
  label: level.label,
  value: level.id
}));

const resetForm = () => {
  resetFormState();
}



</script>