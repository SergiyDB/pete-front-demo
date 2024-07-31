<template>
  <div class="column q-gutter-y-md">

    <q-form
      @submit="onSubmit"
      class="q-gutter-sm"
    >
      <q-input
        filled
        type="text"
        v-model="fullName"
        label="Full name *"
        lazy-rules
        :rules="[
          val => validateStringRequired(val) || 'Your name required!',
          val => validateAlphabetic(val) || 'Only alphabetic characters are allowed'
        ]"
      />

      <q-input
        filled
        type="email"
        v-model="email"
        label="Email address *"
        lazy-rules
        :rules="[
          (val) => validateStringRequired(val) || 'Email required!' ,
          (val, rules) => rules.email(val) || 'Please enter a valid email address'
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
          (val) => val.length >= 8 || 'Your password should be at least 8 characters'
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

      <q-input
        filled
        v-model="confirmPassword"
        label="Password confirmation *"
        lazy-rules
        :type="isPwdConfVisible ? 'text' : 'password'"
        :rules="[
          (val) => validateStringRequired(val) || 'Please confirm your password',
          (val) => validatePasswordConfirmation(password, val) || 'Password confirmation does not match the password'
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwdConfVisible ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwdConfVisible = !isPwdConfVisible"
          />
        </template>
      </q-input>

      <q-input
        filled
        type="text"
        v-model="companyCode"
        label="Company Code *"
        lazy-rules
        :rules="[
          (val) => validateStringRequired(val) || 'Please enter your company code',
          (val) => validateAlphanumeric(val) || 'Company code must contain only letters and digits',
          (val) => val.length === 5 || 'Company code should consist of 5 characters',
        ]"
      />
      <!-- hint="Company code must be 5 characters long and contain only letters and digits." -->

      <div class="row items-center">
        <q-checkbox class="q-mr-sm" size="lg" dense v-model="agreeTerms"/>
        <span class="text-body1 q-mr-sm">I agree with </span>
        <span @click="onShowTerms" style="cursor: pointer" class="text-body1 text-blue text-weight-bold q-mr-sm"> Terms </span>
        <span class="text-body1 q-mr-sm"> and </span>
        <span @click="onShowPrivacyPolicy" style="cursor: pointer" class="text-body1 text-blue text-weight-bold"> Privacy Policy </span>
      </div>


      <div class="q-py-md">
        <q-btn class="full-width" size="1rem" label="Create your free account" type="submit" color="primary"/>
        <!-- <q-btn size="1rem" label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
      </div>

    </q-form>

    <q-dialog v-model="showTermsText">
      <q-layout view="Lhh lpR fff" container class="bg-white text-dark">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Terms</q-toolbar-title>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-toolbar>
        </q-header>

        <q-page-container>
          <q-page padding>
            <UserTerms />
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>

    <q-dialog v-model="showPrivacyPolicyText">
      <q-layout view="Lhh lpR fff" container class="bg-white text-dark">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Privacy Policy</q-toolbar-title>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-toolbar>
        </q-header>

        <q-page-container>
          <q-page padding>
            <PrivacyPolicy />
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import AuthService from 'src/services/auth_service';
import {
  validateAlphabetic,
  validateStringRequired,
  // validateRequired,
  validatePasswordConfirmation,
  validateAlphanumeric
} from 'src/shared/validators';

import PrivacyPolicy from 'src/components/terms_and_policies/PrivacyPolicy.vue';
import UserTerms from 'src/components/terms_and_policies/UserTerms.vue';

const $q = useQuasar();
const router = useRouter();

const authService = new AuthService();

const fullName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const companyCode = ref('');
const agreeTerms = ref(false);
const showTermsText = ref(false);
const showPrivacyPolicyText = ref(false);

const isPwdVisible = ref(false);
const isPwdConfVisible = ref(false);

const onSubmit = async () => {

  if (!agreeTerms.value) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'You must agree to the Terms and Privacy Policy.'
    });
    return;
  }

  try {
    const result = await authService.signUpCompany(
      fullName.value.trim(),
      email.value.trim(),
      password.value.trim(),
      companyCode.value.trim()
    )

    if (result.status === 'ok') {

      router.push('/company');

      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Signed up successfully!'
      });

    } else {

      $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Invalid registration data'
      });

      onReset();

    }

  } catch (error) {
    console.error(error);
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: error.message || 'Sign-up failed!',
    });

    onReset();

  }
}

const onReset = () => {
  fullName.value = '';
  email.value = ''
  password.value = '';
  confirmPassword.value = '';
  companyCode.value = '';
  agreeTerms.value = false
}

const onShowTerms = () => {showTermsText.value = true};

const onShowPrivacyPolicy = () => {showPrivacyPolicyText.value = true}

</script>
