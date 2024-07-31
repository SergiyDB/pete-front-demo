<template>
  <q-select
    label=          "Group"
    v-model=        "uiDataModel"
    :options=       "filteredOptions"
    @filter=        "filterFnAutoselect"
    @filter-abort=  "abortFilterFn"
    @popup-hide=    "updateModelValue"
    style=          "width: 250px"
    map-options
    emit-value
    input-debounce="0"
    hide-selected
    use-input
    fill-input
    clearable
    dense
    outlined
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          No results
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup>
import {
  ref,
  computed
} from 'vue';

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  options: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const localModel = computed({
  get: () => props?.modelValue,
  set: () => updateModelValue(),
});

const uiDataModel =  ref(localModel.value);

const updateModelValue = () => {
  emit('update:modelValue', uiDataModel.value);
};

const searchTerm = ref('');
const originalOptions = computed(() => props.options);

const filteredOptions = computed({
  get() {
    if (!searchTerm.value) {
      return originalOptions.value;
    }

    const needle = searchTerm.value.toLowerCase();
    return originalOptions.value.filter(option =>
      option.label.toLowerCase().includes(needle)
    );
  },
  set(newOptions) {
    originalOptions.value = newOptions;
  }
});

function filterFnAutoselect(val, update) {
  searchTerm.value = val;

  setTimeout(() => {
    update(() => {
      if (val === '') {
        filteredOptions.value = props.options;
      } else {
        const needle = val.toLowerCase();
        filteredOptions.value = props.options.filter(option =>
          option.label.toLowerCase().includes(needle)
        );
      }
    },
    // "ref" is the Vue reference to the QSelect
    ref => {
      if (val !== '' && ref.options.length > 0 && ref.getOptionIndex() === -1) {
        ref.moveOptionSelection(1, true); // focus the first selectable option and do not update the input-value
        ref.toggleOption(ref.options[ref.optionIndex], true); // toggle the focused option
      }
    });
  }, 300);
}

function abortFilterFn() {
  searchTerm.value = '';
}
</script>

<style lang="scss" scoped>
</style>
