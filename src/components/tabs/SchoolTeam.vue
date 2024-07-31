<template>

  <div class="q-pa-md row items-stretch q-gutter-md">
    <PersonCardComponent
      v-for="elem in schoolTeamMembersList"
      @click="() => navigateToPersonById(elem.id)"
      :key="elem.id"
      :person-data="elem"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import PersonCardComponent from 'src/components/PersonCardComponent.vue';

import {
  schoolTeamMembersList,
} from 'src/mock/data';

defineOptions({
  name: 'SchoolTeamTab'
});

const router = useRouter();

const navigateToPersonById = (id: number) => {
  router.push(`/teacher/${id}`)
}

</script>