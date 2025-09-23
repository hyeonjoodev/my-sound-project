<template>
  <Layout>
    <!-- <TimingGame />
    <hr />
    <MenuGame />
    <hr />
    <MiniGame />
    <hr />
    <MoveGame />
    <hr />
    <RandomGame /> -->
  </Layout>

  <v-modal />
</template>

<script setup>
import Layout from './components/Layout.vue';
import TimingGame from './views/game/TimingGame.vue';
import MenuGame from './views/game/MenuGame.vue';
import MiniGame from './views/game/MiniGame.vue';
import MoveGame from './views/game/MoveGame.vue';
import RandomGame from './views/game/RandomGame.vue';

import VModal from './components/VModal.vue';
</script>
