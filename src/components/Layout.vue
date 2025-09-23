<template>
  <Header />
  <main id="main">
    <slot>
      <section>
        <h2>여기에 컨텐츠 들어감 🎉</h2>
        <p>게임이든 메뉴 추천이든, 메인 컨텐츠는 이쪽에 보여줄 수 있어!</p>
        <p>스크롤 테스트용 더미 텍스트 ↓↓↓</p>
        <p>Lorem ipsum dolor sit amet...</p>
        <p style="height: 200px"></p>
      </section>
    </slot>
  </main>
  <Footer />

  <navigator />
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';

import Navigator from './Navigator.vue';
</script>
