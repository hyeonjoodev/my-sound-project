<template>
  <Layout>
    <RouterView />
  </Layout>

  <v-modal />
</template>

<script setup>
import Layout from '@/components/Layout.vue';

import VModal from '@/components/VModal.vue';
</script>
