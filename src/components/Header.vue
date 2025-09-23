<template>
  <header id="header">
    <h1>🍊 Fun Mini App</h1>
  </header>
</template>

<script>
import { onMounted } from 'vue';

onMounted(() => {
  const navigatorEl = document.getElementById('navigator');
  const toggleBtn = document.getElementById('navToggle');

  toggleBtn.onclick = () => {
    if (navigatorEl.style.transform === 'translateX(0%)') {
      navigatorEl.style.transform = 'translateX(-100%)';
    } else {
      navigatorEl.style.transform = 'translateX(0%)';
    }
  };
});
</script>
