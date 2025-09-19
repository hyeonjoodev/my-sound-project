<template>
  <h1>🎮 10초 클릭 게임</h1>

  <button class="button" @click="onGameBtnClick">10초 클릭 게임 시작!</button>
  <div id="gameScore">🏆 점수: {{ gameScore }}</div>
</template>

<script setup>
import { ref } from 'vue';

// 클릭 게임
let score = 0;
let gameRunning = false;
const gameBtn = document.getElementById('gameBtn');
const gameScore = ref(0);

const onGameBtnClick = () => {
  if (!gameRunning) {
    score = 0;
    gameRunning = true;
    gameScore.value = 0;
    const start = Date.now();
    const interval = setInterval(() => {
      if (Date.now() - start >= 10000) {
        // 10초
        clearInterval(interval);
        gameRunning = false;
        alert('⏰ 10초 끝! 점수: ' + score);
      }
    }, 50);
  } else {
    if (gameRunning) score++;
    gameScore.value = score;
    gameBtn.classList.add('clicking');
    setTimeout(() => gameBtn.classList.remove('clicking'), 100);
  }
};
</script>
<style>
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
