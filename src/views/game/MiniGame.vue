<template>
  <h1>🎮 10초 클릭 게임</h1>
  <p>10초 동안 최대한 많이 버튼 클릭!</p>

  <button class="button" @click="onGameBtnClick" ref="btnRef">
    {{ btnText }}
    <!-- 진행중일 때 시간 나와야됨 -->
    <!-- 대기/진행중 나눠야함 -->
  </button>

  <button class="button blue" @click="reStart" v-if="gameScore">
    다시 시작하기
  </button>
  <div class="result-text">{{ gameScore ? `🏆 점수: ${gameScore}` : '' }}</div>
</template>

<script setup>
import { ref } from 'vue';

// 클릭 게임
let score = 0;
let isGameRunning = ref(false);

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

const readyGame = () => {
  isReady.value = 3;
  const interval = setInterval(() => {
    isReady.value - 1;
  });
};

const startGame = () => {
  score = 0;
  gameScore.value = 0;
  isGameRunning.value = true;

  startTime = Date.now();

  time = Date.now() - startTime;
  btnText.value = `${Math.round(time / 1000)}초`;

  const interval = setInterval(() => {
    time = Date.now() - startTime;
    if (time >= 10000) {
      // 10초
      clearInterval(interval);
      btnText.value = '⏰ 10초 끝!';
      gameScore.value = score;
    }
  }, 50);
};

const runningGame = () => {
  if (time < 10000) {
    if (isGameRunning.value) score++;
    btnRef.value.classList.add('clicking');
    btnText.value = `${Math.round(time / 1000)}초`;
    setTimeout(() => btnRef.value.classList.remove('clicking'), 100);
  }
};

const reStart = () => {
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
