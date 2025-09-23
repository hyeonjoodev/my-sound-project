<template>
  <h1>⚡ 반응 속도 테스트</h1>
  <p>화면이 <span style="color: green">초록색</span>으로 바뀌면 클릭!</p>
  <div ref="boxRef" class="testBox" @click="onClickBox">
    <div class="textWrapper">
      <span class="center-text"> {{ gameData.text }} </span>
      <span class="result-text">
        {{ !!gameData.result ? `🏁 반응 속도:${gameData.result}ms` : '' }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const boxRef = ref();

const gameData = reactive({
  text: '대기중...', // 메인 텍스트
  result: '', // 반응 속도
  color: '#87cefa',
  isStart: false,
  isReady: false,
  delay: null,
  startTime: 0
});

let timer = null;

const onClickBox = () => {
  if (!gameData.isStart) {
    startTest();
  } else {
    endTest();
  }
};

const startTest = () => {
  gameData.isStart = true;
  gameData.isReady = false;
  gameData.result = null;
  gameData.startTime = null;

  gameData.text = '준비…';
  boxRef.value.style.background = '#87cefa';

  gameData.delay = Math.random() * 3000 + 1000;
  timer = setTimeout(() => {
    boxRef.value.style.background = '#32cd32';
    gameData.text = '지금!';
    gameData.startTime = Date.now();
    gameData.isReady = true;
  }, gameData.delay);
};

const endTest = () => {
  gameData.result = gameData.startTime ? Date.now() - gameData.startTime : 0;

  clearTimeout(timer);
  gameData.isStart = false;

  boxRef.value.style.background = '#707070';
  gameData.isReady = false;

  if (gameData.result) {
    gameData.text = '🤗 잘했어요!';
    boxRef.value.style.background = '#6678ff';
  } else {
    gameData.text = '🚫 너무 빨랐어요!';
    boxRef.value.style.background = '#ff7265';
  }
};
</script>

<style scoped>
.testBox {
  width: 300px;
  height: 300px;
  margin: 20px auto;
  background-color: #707070;
  border-radius: 20px;
  font-size: 24px;
  color: white;
  cursor: pointer;
  user-select: none;

  display: flex;
  justify-content: center; /* wrapper 중앙 정렬 */
  align-items: center; /* wrapper 중앙 정렬 */
}

.textWrapper {
  display: flex;
  flex-direction: column;
  align-items: center; /* text 가로 중앙 */
  .center-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .result-text {
    color: white;
    font-size: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4px; /* mainText 바로 아래 */
  }
}
</style>
