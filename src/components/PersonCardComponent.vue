<template>
  <q-card flat bordered class="person-card bordered self-stretch">

    <q-card-section >
      <q-avatar size="120px">
        <img :src="imageSrc">
      </q-avatar>
      <q-icon size="sm" class="float-right on-right" name="arrow_outward"/>
    </q-card-section>

    <q-card-section>
      <div class="text-h6">{{ name }}</div>
      <div class="text-subtitle2">{{ position }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none text-caption">

      <div v-if="contacts.email" @click.stop="() => {}">
        <a :href="mailToString" style="text-decoration: none;"><q-icon name="email" class="q-mr-xs"/>{{ contacts.email }}</a>
      </div>

      <div v-if="contacts.phone" @click.stop="() => {}">
        <a :href="telString" style="text-decoration: none;"><q-icon name="call" class="q-mr-xs"/>{{ contacts.phone }}</a>
      </div>

    </q-card-section>

  </q-card>
</template>

<script setup>

const props = defineProps({
  personData: { type: Object, required: true },
});

const {
  imageSrc,
  name,
  position,
  contacts,
} = props?.personData;

const mailToString = `mailto:${contacts.email}`;

const telString = `tel:${contacts.phone}`;

</script>

<style lang="scss" scoped>
.person-card {
  width: 100%;
  max-width: 250px;
}

</style>