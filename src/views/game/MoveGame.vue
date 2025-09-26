<template>
  <h1>🐭 피하기 게임</h1>
  <p>마우스로 초록 상자를 움직여 빨간 장애물 피하기!</p>
  <div v-show="gameOver" ref="boxRef" id="thumbnailBox" @click="startGame">
    클릭하여 시작하기
  </div>
  <canvas
    v-show="!gameOver"
    id="gameCanvas"
    width="400"
    height="300"
    ref="canvasRef"
    @mousemove="onMouseMove"
    @touchmove="onMouseMove"
  ></canvas>

  <div class="result-text">레벨: {{ level }}</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import modalStore from '@/stores/modalStore';

const $modal = modalStore();

const canvasRef = ref();

let ctx;
let player = { x: 180, y: 250, w: 40, h: 40 };
let obstacle;
let score = ref(0);
let gameOver = ref(true);
let level = ref(1);
let boxSize = 40;

const boxRef = ref();
onMounted(() => {
  let width = window.innerWidth * 0.6;
  let height = window.innerHeight * 0.4;

  boxRef.value.style.width = width + 'px';
  boxRef.value.style.height = height + 'px';

  boxRef.value.style.lineHeight = height + 'px';

  canvasRef.value.width = width;
  canvasRef.value.height = height;

  boxSize =
    window.innerWidth > window.innerHeight
      ? window.innerHeight * 0.03
      : window.innerWidth * 0.05;

  player = {
    x: canvasRef.value.width - boxSize,
    y: canvasRef.value.height - boxSize,
    w: boxSize,
    h: boxSize
  };
});

const onMouseMove = (e) => {
  const rect = canvasRef.value.getBoundingClientRect();

  let clientX;

  if (e.type.startsWith('touch')) clientX = e.touches[0].clientX;
  else clientX = e.clientX;

  player.x = clientX - rect.left - player.w / 2;
};

const draw = () => {
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
  ctx.fillStyle = '#32cd32';
  ctx.fillRect(player.x, player.y, player.w, player.h);
  ctx.fillStyle = '#ff4500';
  ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
};

const update = () => {
  if (gameOver.value) return;
  obstacle.y += obstacle.speed;
  if (obstacle.y > canvasRef.value.height) {
    obstacle.y = 0;
    obstacle.x = Math.random() * (canvasRef.value.width - obstacle.w);
    score.value++;
    if (score.value >= 10) {
      level.value++;
      obstacle.speed += 2;
      score.value = 0;
    }
  }
  if (
    player.x < obstacle.x + obstacle.w &&
    player.x + player.w > obstacle.x &&
    player.y < obstacle.y + obstacle.h &&
    player.y + player.h > obstacle.y
  ) {
    gameOver.value = true;
    $modal.openModal(` 레벨: ${level.value}<br/>점수: ${score.value}`);
  }
};

const startGame = () => {
  level.value = 1;
  gameOver.value = false;

  ctx = canvasRef.value.getContext('2d');

  obstacle = { x: Math.random() * 360, y: 0, w: boxSize, h: boxSize, speed: 3 };

  loop();
};

const loop = (timeStamp) => {
  draw();
  update();
  if (!gameOver.value) requestAnimationFrame(loop);
};
</script>

<style scoped>
#score {
  font-size: 24px;
  margin-top: 10px;
}

#thumbnailBox {
  width: 400px;
  height: 300px;
  margin: 0 auto;
  background-color: #707070;
  line-height: 300px;
  font-size: 24px;
  color: white;
  cursor: pointer;
  user-select: none;
}
</style>
