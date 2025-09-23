<template>
  <Header />
  <main id="main">
    <slot> </slot>
  </main>
  <Footer />

  <navigator />
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';

import Navigator from './Navigator.vue';
</script>
