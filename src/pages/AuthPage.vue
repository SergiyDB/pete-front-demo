<template>
  <div class="fullscreen row">

    <div style="padding-top: 5vh" class="col-12 col-md-6 column items-center">
      <router-view />
    </div>

    <div style="padding-top: 30vh" class="col-12 col-md-6 bg-primary text-white column q-px-xl">
      <p class="text-h2 text-bold">Welcome to</p>
      <p class="text-h4 text-bold">P3T3's Learning Management System</p>
      <p class="text-h6 text-uppercase">AI-personalized language learning</p>
    </div>
  </div>
</template>

<script setup>

defineOptions({
  name: 'AuthPage',
});

</script>

<style lang="scss" scoped>
</style>