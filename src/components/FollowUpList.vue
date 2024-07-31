<template>
  <q-card class="rounded-borders full-width">
    <q-card-section>
      <div class="row">
        <div class="text-h6">Follow-Up</div>
        <q-space />
        <div class="">
          <q-btn-toggle
            v-model="localModel"
            class="my-custom-toggle"
            no-caps
            rounded
            unelevated
            toggle-color="primary"
            color="white"
            text-color="primary"
            :options="[
              { label: 'Today', value: 'today' },
              { label: 'This week', value: 'week' }
            ]"
          />
        </div>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <q-list bordered class="rounded-borders">
        <q-item
          v-for="item in followUpData"
          :key="item.name"
          clickable
          v-ripple
        >
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label caption>{{ item.description }}</q-item-label>
          </q-item-section>
          <q-separator spaced inset />
          <q-item-section side top>
            <div>
              <q-icon size="md" name="chevron_right" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup >
import {
  // ref,
  computed
} from 'vue';

// interface FollowUpItem {
//   name:         string;
//   description:  string;
// };

// const props = defineProps<{
//   data: Record<string, Array<FollowUpItem>>;
//   modelValue: 'today' | 'week';
// }>();

const props = defineProps({
  data: { type: Object },
  modelValue: { type: String }
})

const emit = defineEmits(['update:modelValue'])

let localModel = computed({
  get: () => props.modelValue,
  set: (value) => {
      emit('update:modelValue', value)
    },
})

const followUpData = computed(() => {
  return localModel.value === 'today' ? props.data.today : props.data.week;
});
</script>

<style lang="scss">
</style>
