import { createApp } from 'vue';
import './myStyle.css';
import App from './App.vue';
import router from './router';

// const KAKAO_KEY = 'bc01776282be27087c9cd7c4d30a43ff';

// Kakao.init(KAKAO_KEY);
// Kakao.isInitialized();

// SDK 초기화 여부를 판단합니다.
// console.log(Kakao.isInitialized());

const app = createApp(App);
app.use(router);

app.mount('#app');
