<template>
  <h1>🍱 오늘 점심</h1>

  <button class="button" @click="onMenuBtnClick">오늘 점심 뭐 먹지?</button>
  <div class="result-text">{{ menuResult }}</div>
  <img
    id="menuImg"
    :src="menuImgSrc"
    alt="메뉴 이미지"
    v-show="isShowMenuImg"
  />
</template>

<script setup>
import { ref } from 'vue';
import menuList from '../../MenuList';

const menuResult = ref('🍴 버튼을 눌러 메뉴 확인!');
const menuImgSrc = ref('');
const isShowMenuImg = ref(false);

const catNames = [
  'louie',
  'poppy',
  'bella',
  'neo_2',
  'neo_banana',
  'millie_neo',
  'neo',
  'millie'
];

const onMenuBtnClick = () => {
  const randomMenu = menuList[Math.floor(Math.random() * menuList.length)];
  menuResult.value = '오늘 점심은: ' + randomMenu.name + ' 🍴';
  menuImgSrc.value =
    'https://placecats.com/' +
    catNames[Math.floor(Math.random() * catNames.length)] +
    '/300/200';
  isShowMenuImg.value = true;
};
</script>
<style scoped>
#menuImg {
  max-width: 200px;
  border-radius: 12px;
  display: block;
  margin: auto auto 20px auto;
}
</style>
