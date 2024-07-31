<template>
  <div
    class="column q-pa-md q-gutter-y-md"
    style="width: 500px; max-width: 800px"
  >
    <img style="object-fit:contain; height: 100px" src="src/assets/images/logos/uni_logo.jpeg" alt="">

    <div class="text-h3 text-weight-bold">Sign In</div>
    <div class="text-body1">
      Don't have an account?
      <span
        @click="navToSignUp"
        style="cursor: pointer"
        class="text-blue text-weight-bold"
      >
        Sign Up
      </span>
    </div>

    <q-form @submit="onSubmit" class="q-gutter-sm">
      <q-input
        filled
        type="email"
        v-model="email"
        label="Email address *"
        lazy-rules
        :rules="[
          (val) => validateStringRequired(val) || 'Email required!',
          (val, rules) =>
            rules.email(val) || 'Please enter a valid email address',
        ]"
      />

      <q-input
        filled
        v-model="password"
        label="Password *"
        lazy-rules
        hint="Min length 8 characters"
        :type="isPwdVisible ? 'text' : 'password'"
        :rules="[
          (val) => validateStringRequired(val) || 'Please enter your password',
          (val) =>
            val.length >= 8 || 'Your password should be at least 8 characters',
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwdVisible ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwdVisible = !isPwdVisible"
          />
        </template>
      </q-input>

      <div class="row justify-between items-center">
        <q-checkbox class="text-body1" size="lg" dense v-model="rememberMe"
          >Remember Me</q-checkbox
        >
        <div class="text-body1">
          <span
            class="text-blue text-weight-bold"
            style="cursor: pointer"
            @click="navToResetPassword"
          >
            Forgot password
          </span>
        </div>
      </div>

      <div class="q-py-md">
        <q-btn
          class="full-width"
          size="1rem"
          label="sign in"
          type="submit"
          color="primary"
        />
        <!-- <q-btn size="1rem" label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import AuthService from 'src/services/auth_service';

import { validateStringRequired } from 'src/shared/validators';

import {
  // getState,
  setUser,
} from 'src/store/appState';

const $q = useQuasar();
const router = useRouter();

const authService = new AuthService();

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const isPwdVisible = ref(false);

const onSubmit = async () => {
  try {
    const result = await authService.signIn(
      email.value.trim(),
      password.value.trim()
    );

    if (result.status === 'ok') {
      setUser(result.user);

      // const { user } = getState();
      // const userType = user?.user_type;
      router.push('/');

      // if (userType === 'school') {
      //   router.push('/school');
      // } else if (userType === 'company') {
      //   router.push('/company');
      // } else {
      //   router.push('/');
      // }

      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted',
      });

      // router.push({ path: '/' });
    } else {
      $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Invalid email or password',
      });

      onReset();
    }
  } catch (error) {
    console.error(error);
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: error.message,
    });

    onReset();
  }
};

const onReset = () => {
  email.value = '';
  password.value = '';
  rememberMe.value = false;
};

const navToSignUp = () => {
  router.push('/auth/sign-up/school');
};

const navToResetPassword = () => {
  router.push('/auth/reset-password');
};
</script>
src/store/appState
