<template>
  <div class="row q-px-md non-selectable">
    <q-btn
      v-for=        "month in monthsList"
      :key=         "month.value"
      :label=       "month.label"
      :disable=     "isMonthDisabled(month.value) || isFetching"
      :flat=        "!isMonthSelected(month.value)"
      :color=       "isMonthSelected(month.value) ? 'primary' : 'standart'"
      :text-color=  "isMonthSelected(month.value) ? 'white' : 'black'"
      @click=       "selectMonth(month.value)"
      size=         "md"
      align=        "center"
      padding=      "sm"
      unelevated
    />
  </div>
</template>

<script setup>
import {
  computed,
} from 'vue';

const props = defineProps({
  modelValue:   { type: Array,    required: true },
  currentDate:  { type: Date,     required: true },
  localeStr:    { type: String,   required: true },
  isFetching:   { type: Boolean,  required: true },
});

const emit = defineEmits(['update:modelValue']);

const currentDate = props.currentDate;
const currentYear = currentDate.getFullYear();

const localModel = computed({
  get: () => props.modelValue,
  set: (value) => updateModelValue(value),
});

const updateModelValue = (value) => {
  emit('update:modelValue', value);
};

function getMonthsArray(locale) {
  const months = [];
  for (let i = 0; i < 12; i++) {
    const monthName = new Date(currentYear, i).toLocaleString(locale, { month: 'short' });
    months.push({ value: i, label: monthName });
  }
  return months;
}

const monthsList = computed(() => getMonthsArray(props.localeStr));

const selectMonth = (val) => {
  if (isMonthSelected(val)) {
    localModel.value = localModel.value.filter(month => month !== val);
  } else {
    localModel.value.push(val);
  }
};

const isMonthDisabled = (val) => val > currentDate.getMonth();

const isMonthSelected = (val) => localModel.value.includes(val);
</script>

<style lang="scss" scoped>
.my-disabled-class {
  opacity: 0.5; /* Optional: Style for disabled state */
  pointer-events: none; /* Optional: Prevent clicking disabled buttons */
}
</style>
