<template>
  <div class="date-selector non-selectable">
    <q-field
      class=    "cursor-pointer"
      filled
      bg-color= "primary"
      color=    "white"
      dense
      square
      :disable= "isFetching"
    >
      <template v-slot:default>
        <div
          class="self-center q-pa-sm full-width no-outline text-weight-bold"
          tabindex="0"
        >
          Selected months: {{ uiDataModel.length }}
        </div>

        <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
          <div class="text-weight-bolder text-caption">
            {{ getSortedSelectedMonthLabels().join(', ') }} {{ currentYear }}
          </div>
        </q-tooltip>

        <q-menu
          :max-width= "`${0.85 * resize.width}px`"
          anchor=     "bottom middle"
          self=       "top middle"
          fit
          @hide=      "() => updateModelValue()"
        >
          <div class="date-selector__picker q-px-lg q-py-md">
            <div class="date-selector__picker__month-picker row">
              <q-btn
                v-for=        "month in monthsList"
                :key=         "month.value"
                class=        "date-selector__picker__month-picker__pick-month-button col-4 text-weight-regular"
                :label=       "month.label"
                :disable=     "isMonthDisabled(month.value) || isFetching"
                :flat=        "!isMonthSelected(month.value)"
                :color=       "isMonthSelected(month.value) ? 'primary' : 'standart'"
                :text-color=  "isMonthSelected(month.value) ? 'white' : 'black'"
                @click=       "selectMonth(month.value)"
                size=         "md"
                align=        "center"
                padding=      "xs"
                unelevated
              />
            </div>
          </div>
        </q-menu>
      </template>

      <template v-slot:append>
        <q-icon
          name=   "event"
          color=  "white"
          class=  "cursor-pointer"
        />
      </template>

    </q-field>
    <q-resize-observer @resize="onResize" />
  </div>
</template>

<script setup>

import {
  ref,
  computed,
  watch,
} from 'vue';

const props = defineProps({
  modelValue:   { type: Array,    required: true },
  currentDate:  { type: Date,     required: true },
  localeStr:    { type: String,   required: true },
  isFetching:   { type: Boolean,  required: true },
});

const emit = defineEmits(['update:modelValue']);

const localModel = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
});

const isFetching = computed(() => props.isFetching);
const currentDate = props.currentDate;
const currentYear = currentDate.getFullYear();

const uiDataModel = ref([...localModel.value]);

watch(localModel, (newValue) => {
  uiDataModel.value = [...newValue];
});

const updateModelValue = () => {
  localModel.value = [...uiDataModel.value];
};

function getMonthsArray(locale) {
  const months = [];
  for (let i = 0; i < 12; i++) {
    const monthName = new Date(currentYear, i).toLocaleString(locale, { month: 'short' });
    months.push({ value: i, label: monthName });
  }
  return months;
}

const resize = ref(0);

const monthsList = computed(() => getMonthsArray(props.localeStr));

const selectMonth = (val) => {
  if (isMonthSelected(val)) {
    uiDataModel.value = uiDataModel.value.filter(month => month !== val);
  } else {
    uiDataModel.value.push(val);
  }
};

const isMonthSelected = (val) => uiDataModel.value.includes(val);

const isMonthDisabled = (val) => val > currentDate.getMonth();

const onResize = function (size) {
  resize.value = size;
};

const getSortedSelectedMonthLabels = () => {
  return uiDataModel.value
    .sort((a, b) => a - b)
    .map(monthValue => monthsList.value.find(month => month.value === monthValue)?.label);
};

</script>

<style lang="scss">
</style>
