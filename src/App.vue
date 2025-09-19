<template>
  <TimingGame />
  <MenuGame />
  <MiniGame />
  <MoveGame />
  <RandomGame />
</template>

<script setup>
import TimingGame from './views/game/TimingGame.vue';
import MenuGame from './views/game/MenuGame.vue';
import MiniGame from './views/game/MiniGame.vue';
import MoveGame from './views/game/MoveGame.vue';
import RandomGame from './views/game/RandomGame.vue';
</script>
<style>
body {
  font-family: 'Noto Sans', sans-serif;
  background-color: #fff8f0;
  text-align: center;
  padding: 40px;
}
h1 {
  color: #ff7043;
  margin-bottom: 30px;
}
.button {
  background-color: #ffab91;
  color: white;
  padding: 15px 30px;
  margin: 15px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 18px;
  transition: 0.2s;
}
.button:hover {
  background-color: #ff8a65;
}

canvas {
  background-color: #f0f0f0;
  display: block;
  margin: 20px auto;
  border: 2px solid #333;
}
</style>
