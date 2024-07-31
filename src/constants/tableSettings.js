export const tableColumnsWithTeacherCol = [
  {
    name: 'student',
    required: true,
    label: 'Student',
    align: 'left',
    field: row => row.student,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'cefr',
    required: true,
    label: 'CEFR',
    align: 'left',
    field: row => row.cefr,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'fluency',
    required: true,
    label: 'Fluency (%)',
    align: 'left',
    field: row => row.fluency,
    format: val => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'timeSpent',
    required: true,
    label: 'Time Spent (hours)',
    align: 'left',
    field: row => row.timeSpent,
    format: val => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'streak',
    required: true,
    label: 'Streak (days)',
    align: 'left',
    field: row => row.streak,
    format: val => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'teacher',
    required: true,
    label: 'Teacher',
    align: 'left',
    field: row => row.teacher,
    format: val => `${val}`,
    sortable: true
  },
];

export const paginationSettingsObj = {
  sortBy: 'fluency',
  descending: true,
  rowsPerPage: 10
}
