<template>
  <!-- 네비게이터 -->
  <!-- 펼쳐지는 네비게이터 -->
  <nav id="navigator">
    <div id="floatingNav">
      <a href="#">🏠 홈</a>
      <a href="#">🎮 게임</a>
      <a href="#">📊 점수</a>
      <a href="#">ℹ️ 정보</a>
    </div>
  </nav>

  <!-- 모바일 플로팅 버튼 -->
  <div id="navToggle">☰</div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('floatingNav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
});
</script>
