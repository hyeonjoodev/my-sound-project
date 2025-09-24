<template>
  <h1>🎮 10초 클릭 게임</h1>
  <p>10초 동안 최대한 많이 버튼 클릭!</p>

  <p>{{ btnText }}</p>

  <button class="button" @click="onGameBtnClick" ref="btnRef">
    {{ gameScore }}
  </button>
  <p></p>
  <button class="button blue" @click="reStart" v-if="isFinish">
    다시 시작하기
  </button>
  <div class="result-text">{{ isFinish ? `🏆 점수: ${gameScore}` : '' }}</div>
</template>

<script setup>
import { ref } from 'vue';

// 클릭 게임
let score = 0;
let isGameRunning = ref(false);
let isFinish = ref(false);

const btnRef = ref();
const btnText = ref('10초 클릭 게임 시작!');
const gameScore = ref(0);
const isReady = ref(0);
let time;
let startTime = Date.now();

const onGameBtnClick = () => {
  if (!isGameRunning.value) {
    startGame();
  } else {
    runningGame();
  }
};

const startGame = () => {
  isGameRunning.value = true;

  startTime = Date.now();

  time = Date.now() - startTime;
  btnText.value = `${Math.round(time / 1000)}초`;

  const interval = setInterval(() => {
    time = Date.now() - startTime;
    btnText.value = `${Math.round(time / 1000)}초`;
    if (time >= 10000) {
      // 10초
      clearInterval(interval);
      btnText.value = '⏰ 10초 끝!';
      isFinish.value = true;
    }
  }, 50);
};

const runningGame = () => {
  if (time < 10000) {
    if (isGameRunning.value) gameScore.value++;
    btnRef.value.classList.add('clicking');
    setTimeout(() => btnRef.value.classList.remove('clicking'), 100);
  }
};

const reStart = () => {
  score = 0;
  gameScore.value = 0;
  isFinish.value = false;
  isGameRunning.value = false;
};
</script>
<style scoped>
#gameScore {
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
  color: #555;
}

#gameBtn {
  background-color: #ffcc80;
}
#gameBtn:hover {
  background-color: #ffb74d;
}
/* 클릭 버튼 애니메이션 */
#gameBtn.clicking {
  transform: scale(1.2);
  transition: transform 0.1s;
}
</style>
