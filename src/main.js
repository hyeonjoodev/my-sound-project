import { createApp } from 'vue';
// import './myStyle.css';
import App from './App.vue';
// import router from './router';
import { createPinia } from 'pinia';

// const KAKAO_KEY = 'bc01776282be27087c9cd7c4d30a43ff';

// Kakao.init(KAKAO_KEY);
// Kakao.isInitialized();

// SDK 초기화 여부를 판단합니다.
// console.log(Kakao.isInitialized());

// app.use(router);

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

app.mount('#app');
