<template>
  <div
    class="column q-pa-md q-gutter-y-md"
    style="width: 500px; max-width: 800px"
  >
    <!-- <q-avatar size="120px">
      <img src="src/assets/images/logos/uni_logo.jpeg" />
    </q-avatar> -->

    <img style="object-fit:contain; height: 100px" src="src/assets/images/logos/uni_logo.jpeg" alt="">

    <div class="text-h3 text-weight-bold">Sign Up</div>

    <div class="text-body1">
      Already have an account?
      <span
        style="cursor: pointer"
        class="text-blue text-weight-bold"
        @click="navToSignIn"
        >Sign In</span
      >
    </div>
    <q-tabs active-color="white" active-bg-color="primary" shrink>
      <q-route-tab label="Through School" to="/auth/sign-up/school" exact />
      <q-route-tab label="Through Company" to="/auth/sign-up/company" exact />
      <q-route-tab label="As Tutor" to="/auth/sign-up/tutor" exact />
    </q-tabs>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navToSignIn = () => {
  router.push('/auth/sign-in');
};
</script>
