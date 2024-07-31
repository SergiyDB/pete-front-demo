<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row full-width q-py-lg">
        <q-avatar size="100px" class="q-mr-md">
          <template v-if="user.imageUrl">
            <img :src="user.imageUrl" alt="" />
          </template>
          <template v-else>
            <q-icon color="primary" name="account_circle" size="100px" />
          </template>
        </q-avatar>
        <div>
          <div class="text-h4 text-weight-bold">
            Welcome back, {{ user.full_name }}!
          </div>
          <div style="cursor: pointer" class="text-body2">
            <q-icon name="notifications" />You have 12 new messages
          </div>
        </div>

        <q-space />

        <div class="q-pa-sm q-gutter-sm">
          <q-btn
            padding="'10px 5px'"
            flat
            rounded
            icon="settings"
          >
            Settings
          </q-btn>

          <q-btn
            padding="'10px 5px'"
            flat
            rounded
            icon="logout"
            @click="logout()"
          >
            Logout
          </q-btn>

        </div>

      </div>

      <div>
        <q-tabs
          stretch
          dense
          active-color="white"
          active-bg-color="primary"
          indicator-color="primary"
          align="left"
          narrow-indicator
        >
          <q-route-tab
            :to="'/company/overview'"
            exact
            replace
            name="overview"
            label="Overview"
            v-if="user.user_role === 'admin'"
          />
          <q-route-tab
            :to="'/company/level'"
            exact
            replace
            name="level"
            label="Level"
          />
          <q-route-tab
            :to="'/company/team'"
            exact
            replace
            name="team"
            label="Team"
          />
        </q-tabs>
      </div>

      <q-separator spaced/>

      <router-view />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import {
  getState,
  logoutUser
} from 'src/store/appState';

import {
  initFormState,
} from 'src/store/formState';

defineOptions({
  name: 'CompanyPage',
});

const router = useRouter();
const state = getState();
const {
  user,
} = state;

const logout = () => {
  logoutUser();
  router.push({ path: '/auth' });
};

initFormState();
</script>

<style lang="scss" scoped></style>
