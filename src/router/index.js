import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: { emoji: '🏠', title: '홈' }
    },
    {
      path: '/music',
      name: 'Misic',
      component: () => import('@/views/game/MusicGame.vue'),
      meta: { emoji: '🎵', title: '음악' }
    },
    {
      path: '/timing',
      name: 'Timing',
      component: () => import('@/views/game/TimingGame.vue'),
      meta: { emoji: '🛼', title: '순발력' }
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('@/views/game/MenuGame.vue'),
      meta: { emoji: '🍛', title: '메뉴고르기' }
    },
    {
      path: '/move',
      name: 'Move',
      component: () => import('@/views/game/MoveGame.vue'),
      meta: { emoji: '🪓', title: '피하기' }
    },
    {
      path: '/random',
      name: 'Random',
      component: () => import('@/views/game/RandomGame.vue'),
      meta: { emoji: '🔄️', title: '랜덤' }
    }
    // {
    //   path: '/mini',
    //   name: 'Mini',
    //   component: () => import('@/views/game/MiniGame.vue'),
    //   meta: { emoji: '🕑', title: '10초맞추기' }
    // }
  ]
});

export default router;
