import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    children: [
      {
        path: '',
        component: () => import('layouts/MainLayout.vue'),
        children: [
          {
            path: 'school',
            component: () => import('pages/SchoolPage.vue'),
            children: [
              { path: 'overview',   component: () => import('components/tabs/SchoolOverview.vue') },
              { path: 'grade',      component: () => import('components/tabs/SchoolGrade.vue') },
              { path: 'team',       component: () => import('components/tabs/SchoolTeam.vue') },
            ],
          },
          {
            path: 'company',
            component: () => import('pages/CompanyPage.vue'),
            children: [
              { path: 'overview',   component: () => import('components/tabs/CompanyOverview.vue') },
              { path: 'level',      component: () => import('components/tabs/CompanyLevel.vue') },
              { path: 'team',       component: () => import('components/tabs/CompanyTeam.vue') },
            ],
          },
          {
            path: 'tutor',
            component: () => import('pages/TutorPage.vue'),
            children: [
              { path: 'overview',   component: () => import('components/tabs/TutorOverview.vue') },
              { path: 'level',      component: () => import('components/tabs/TutorLevel.vue') },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('pages/AuthPage.vue'),
    children: [
      { path: 'sign-in',        component: () => import('components/forms/SignInForm.vue') },
      { path: 'reset-password', component: () => import('components/forms/ResetPasswordForm.vue') },
      {
        path: 'sign-up',
        component: () => import('components/forms/SignUpFormSelection.vue'),
        children: [
          { path: '', redirect: 'school' },
          { path: 'school', component: () => import('components/forms/SignUpFormSchool.vue') },
          { path: 'company', component: () => import('components/forms/SignUpFormCompany.vue') },
          { path: 'tutor', component: () => import('components/forms/SignUpFormTutor.vue') },
        ],
      },
      { path: '', redirect: 'sign-in' },
    ],
  },
  { path: '/student/:id', component: () => import('pages/StudentSummaryPage.vue'), props: true },
  { path: '/teacher/:id', component: () => import('pages/TeacherSummaryPage.vue'), props: true },
  { path: '/:catchAll(.*)*', component: () => import('pages/ErrorNotFound.vue') },
];

export default routes;
