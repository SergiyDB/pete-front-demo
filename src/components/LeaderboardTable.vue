<template>
  <q-table
    title="Leaderboard"
    :rows="tableProps.tableRows"
    :columns="tableProps.tableCols"
    row-key="student"
    :pagination="tableProps.paginationSettings"
  >
    <template v-slot:body-cell-student="props">
      <q-td :props="props">
        <div>
          <span
            style="cursor: pointer"
            class="text-body2 text-blue text-weight-bold"
            @click="navigateToStudentById(props.row.id)">{{ props.value }} <q-icon name="arrow_outward"/></span>
        </div>
      </q-td>
    </template>

    <template v-if="tableProps.mode === 'with-teacher-col'" v-slot:body-cell-teacher="props">
      <q-td :props="props">
        <div>
          <span
            style="cursor: pointer"
            class="text-body2 text-blue text-weight-bold"
            @click="navigateToTeacherById(props.row.teacherId)">{{ props.value }} <q-icon name="arrow_outward"/></span>
        </div>
      </q-td>
    </template>
  </q-table>
</template>

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

const tableProps = defineProps({
  tableCols: { type: Array, required: true },
  tableRows: { type: Array, required: true },
  paginationSettings: { type: Object, required: true },
  mode: { type: String, required: true }
});


const navigateToStudentById = (id) => {
  router.push(`/student/${id}`)
};

const navigateToTeacherById = (id) => {
  router.push(`/teacher/${id}`)
};

</script>