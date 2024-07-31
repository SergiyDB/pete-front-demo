<template>
  <div class="q-pa-md row items-stretch q-gutter-lg">
    <PersonCardComponent
      v-for="elem in teachersInfoList"
      @click="() => navigateToTeacherById(elem.id)"
      :key="elem.id"
      :person-data="elem"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import TeachersService from 'src/services/teachers_service';
import PersonCardComponent from 'src/components/PersonCardComponent.vue';

import { getState } from 'src/store/appState';

defineOptions({
  name: 'SchoolTeamTab',
});

const router = useRouter();
const teachersService = new TeachersService();

const { user } = getState();

const userType = user.user_type;

const teachersInfoList = computed(() =>
  teachersService.getTeachersInfoList(userType)
);

const navigateToTeacherById = (id) => {
  router.push(`/teacher/${id}`);
};
</script>
src/store/appState
