<template>
  <q-card :class="['bordered', 'rounded-borders', 'no-box-shadow', 'q-py-sm', cardBgColorClass ? cardBgColorClass : 'bg-grey-1']">
    <q-card-section class="value">
      <div :class="['text-center', 'text-weight-bold', 'text-h3', cardTextColorClass ? cardTextColorClass : 'text-grey-10']">
        <span>{{ cardData.value }}</span><span v-if="cardData.unit">&nbsp;{{ cardData.unit }}</span>
      </div>
    </q-card-section>
    <q-card-section class="title">
      <div class="text-center">
        <span>{{ cardData.title }}</span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { SimpleIndicatorData } from 'src/interfaces/app_interfaces';

defineProps<{
  cardData: SimpleIndicatorData,
  cardTextColorClass: string,
  cardBgColorClass: string,
}>();
</script>

<style lang="scss">
</style>