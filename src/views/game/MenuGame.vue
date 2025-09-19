<template>
  <h1>🍱 오늘 점심</h1>

  <button class="button" @click="onMenuBtnClick">오늘 점심 뭐 먹지?</button>
  <div id="menuResult">{{ menuResult }}</div>
  <img
    id="menuImg"
    :src="menuImgSrc"
    alt="메뉴 이미지"
    v-show="isShowMenuImg"
  />
</template>

<script setup>
import { ref } from 'vue';

const menuList = [
  { name: '김치찌개' },
  { name: '돈까스' },
  { name: '샌드위치' },
  { name: '라면' },
  { name: '볶음밥' },
  { name: '샐러드' },
  { name: '피자' },
  { name: '떡볶이' },
  { name: '고로케' },
  { name: '초밥' }
];

const menuResult = ref('🍴 버튼을 눌러 메뉴 확인!');
const menuImgSrc = ref('');
const isShowMenuImg = ref(false);

const onMenuBtnClick = () => {
  const randomMenu = menuList[Math.floor(Math.random() * menuList.length)];
  menuResult.value = '오늘 점심은: ' + randomMenu.name + ' 🍴';
  menuImgSrc.value = 'https://placecats.com/bella/300/200';
  isShowMenuImg.value = true;
};
</script>
<style>
#menuResult {
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
  color: #555;
}
#menuImg {
  margin-top: 15px;
  max-width: 200px;
  border-radius: 12px;
  display: block;
  margin: 15px auto;
}
</style>
