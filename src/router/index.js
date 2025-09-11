import { createRouter, createWebHistory } from 'vue-router';
import Music from '../components/Music.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/music', name: 'Music', component: Music }]
});

export default router;
