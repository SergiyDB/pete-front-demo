<template>
  <div
    class="column q-pa-md q-gutter-y-md"
    style="width: 500px; max-width: 800px"
  >
    <!-- <q-avatar size="120px">
      <img src="src/assets/images/logos/uni_logo.jpeg" />
    </q-avatar> -->
    <img style="object-fit:contain; height: 100px" src="src/assets/images/logos/uni_logo.jpeg" alt="">

    <div class="text-h3 text-weight-bold">Forgot password?</div>
    <div class="text-body1">Fill the form to reset your password</div>

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

      <div class="text-body1">
        Return to
        <span
          class="text-blue text-weight-bold"
          style="cursor: pointer"
          @click="navToSignIn"
          >Sign In</span
        >
      </div>

      <div class="q-py-md">
        <q-btn
          class="full-width"
          size="1rem"
          label="Send reset link"
          type="submit"
          color="primary"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import AuthService from 'src/services/auth_service';
import { validateStringRequired } from 'src/shared/validators';
// import { getState, setUser } from 'src/app_state/app_state';

const $q = useQuasar();
const router = useRouter();

const authService = new AuthService();

const email = ref('');

const onSubmit = async () => {
  try {
    const result = await authService.resetUserPassword(email.value.trim());

    if (result.status === 'ok') {
      navToSignIn();

      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted',
      });
    } else {
      $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Invalid email',
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
};

const navToSignIn = () => {
  router.push('/auth/sign-in');
};
</script>
