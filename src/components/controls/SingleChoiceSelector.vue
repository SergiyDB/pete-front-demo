<template>
  <div class="single-choice-selector non-selectable">
    <q-field
      class=      "cursor-pointer"
      color=      "white"
      bg-color=   "primary"
      dense
      :disable=   "isDisabled"
      square
    >
      <template v-slot:default>

        <div
          class="self-center q-pa-sm full-width no-outline text-weight-bold"
          tabindex="0"
        >
          {{ fieldLabel }} : {{ getLabelByValue(options, uiDataModel) }}
        </div>
        <q-menu
          @hide=      "() => updateModelValue()"
          fit
          anchor=     "bottom right"
          self=       "top right"
          max-height= "50vh"
          :disable=   "isDisabled"
        >
          <div class="q-pa-md">
            <q-option-group
              v-model=    "uiDataModel"
              :options=   "options"
              type=       "radio"
              size=       "md"
              color=      "primary"
              :disable=   "isDisabled"
            />
          </div>
        </q-menu>
      </template>
      <template v-slot:append>
        <q-icon
          name=   "unfold_more"
          color=  "white"
          size=   "3vh"
          class=  "cursor-pointer"
        />
      </template>
    </q-field>
  </div>

</template>

<script setup>
import {
  computed,
  ref,
  watch,
} from 'vue';

const props = defineProps({
  modelValue:   { type: String,   required: true },
  options:      { type: Array,    required: true },
  isFetching:   { type: Boolean,  required: true },
  fieldLabel:   { type: String }
});

const emit = defineEmits(['update:modelValue']);

const localModel = computed({
  get: () => props?.modelValue,
  set: value => emit('update:modelValue', value),
});

const uiDataModel =  ref(localModel.value);

watch(localModel, (newValue) => {
  uiDataModel.value = newValue;
});

const updateModelValue = () => {
  localModel.value = uiDataModel.value;
};

const options = props.options;
const isDisabled = computed(() => props.isFetching);
const fieldLabel = props.fieldLabel

function getLabelByValue(objArray, value) {
  const matchedObj = objArray.find(obj => obj.value === value);
  return matchedObj ? matchedObj.label : '';
}

</script>