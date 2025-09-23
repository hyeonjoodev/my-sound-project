<template>
  <!-- 네비게이터 -->
  <!-- 펼쳐지는 네비게이터 -->
  <nav id="navigator">
    <div id="floatingNav" ref="nav">
      <router-link v-for="route in allRoutes" :to="route.path"
        >{{ route.meta.emoji }} {{ route.meta.title }}
      </router-link>
    </div>
  </nav>

  <!-- 모바일 플로팅 버튼 -->
  <div id="navToggle" @click="onToggleClick">☰</div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const $router = useRouter();

const allRoutes = ref([]);
const nav = ref();

const isShow = ref(false);

let event = () => {
  if (isShow.value) onToggleClick();
};

onMounted(() => {
  allRoutes.value = $router.options.routes;
});

const onToggleClick = (e) => {
  e?.stopPropagation();
  isShow.value = !isShow.value;
  nav.value.classList.toggle('show');

  if (isShow.value) document.addEventListener('click', event);
  else document.removeEventListener('click', event);
};
</script>
