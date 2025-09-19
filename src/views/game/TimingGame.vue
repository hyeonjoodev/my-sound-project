<template>
  <h1>⚡ 반응 속도 테스트</h1>
  <p>화면이 초록색으로 바뀌면 스페이스바 누르기!</p>
  <div ref="boxRef" id="testBox" @click="startTest">
    {{ boxObject.text }}
  </div>
  <p id="result">{{ boxObject.resultText }}</p>
</template>

<script setup>
import { reactive, ref } from 'vue';

const boxRef = ref();

const boxObject = reactive({
  text: '대기중...',
  color: '#87cefa',
  ready: false,
  delay: null,
  startTime: 0,
  resultText: '🏁 반응 속도: -'
});

const startTest = () => {
  boxObject.text = '준비…';
  boxRef.value.style.background = '#87cefa';
  boxObject.ready = false;
  boxObject.delay = Math.random() * 3000 + 1000;
  console.log('start!');
  setTimeout(() => {
    boxRef.value.style.background = '#32cd32';
    boxObject.text = '지금!';
    boxObject.startTime = Date.now();
    boxObject.ready = true;
  }, boxObject.delay);
};

const endTest = () => {
  boxObject.text = '다시 시작하기';
  boxRef.value.style.background = '#707070';
  boxObject.ready = false;
};

document.body.onkeydown = (e) => {
  console.log('key down');
  if (e.code === 'Space') {
    if (boxObject.ready) {
      const reaction = Date.now() - boxObject.startTime;
      boxObject.resultText = `🏁 반응 속도: ${reaction}ms`;
    } else {
      boxObject.resultText = '⛔ 너무 빨리 눌렀어요!';
    }
    endTest();
  }
};
</script>

<style>
#testBox {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  background-color: #707070;
  border-radius: 20px;
  line-height: 300px;
  font-size: 24px;
  color: white;
  cursor: pointer;
  user-select: none;
}
</style>
