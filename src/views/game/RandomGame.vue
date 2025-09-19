<template>
  <h1>🎲 랜덤 게임</h1>

  <button class="button" @click="onCoinBtnClick">💰 동전 던지기</button>
  <button class="button" @click="onDiceBtnClick">🎲 주사위 굴리기</button>
  <button class="button" @click="onAsciiBtnClick">🖼️ 랜덤 그림 보기</button>

  <div id="result">{{ resultText }}</div>
</template>
<script setup>
import { ref } from 'vue';

const resultText = ref('');

// 동전/주사위

const onCoinBtnClick = () => {
  const coin = Math.random() < 0.5 ? '앞면 🪙' : '뒷면 🪙';
  resultText.value = `동전 결과: ${coin}`;
};

const onDiceBtnClick = () => {
  const dice = Math.floor(Math.random() * 6) + 1;
  resultText.value = `주사위 결과: ${dice} 🎲`;
};

// ASCII 아트 / 미니 그림
const asciiArt = [
  `(^_^)`,
  `(>_<)`,
  `(o_o)`,
  `(♥_♥)`,
  `ʕ•ᴥ•ʔ`,
  `(¬‿¬)`,
  `(╯°□°）╯`,
  `(•‿•)`,
  `(▀̿Ĺ̯▀̿ ̿)`
];

const onAsciiBtnClick = () => {
  const art = asciiArt[Math.floor(Math.random() * asciiArt.length)];
  resultText.value = `랜덤 그림:\n${art}`;
};
</script>

<style>
#result {
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
  color: #555;
  white-space: pre;
}
</style>
