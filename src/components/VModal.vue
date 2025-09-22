<template>
  <teleport to="body">
    <div id="scorePopup" v-if="content.isShow">
      <div id="popupContent">
        <div id="popupText" v-html="content.message"></div>
        <button id="popupClose" @click="onClose">닫기 ✖</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { computed } from 'vue';
import modalStore from '@/stores/modalStore';
const $modal = modalStore();

const content = computed(() => {
  return $modal.getContent();
});

const onClose = () => {
  $modal.onOk();
};
// 배경 클릭해도 닫기
// popup.onclick = (e) => {
//   if (e.target === popup) popup.style.display = 'none';
// };
</script>

<style>
/* 팝업 배경 */
#scorePopup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* 팝업 내용 */
#popupContent {
  background-color: #fff3e0;
  padding: 30px 40px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  font-size: 24px;
  color: #ff7043;
  animation: popupAppear 0.3s ease-out;
}

#popupClose {
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  background-color: #ffab91;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
}
#popupClose:hover {
  background-color: #ff8a65;
}

@keyframes popupAppear {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
