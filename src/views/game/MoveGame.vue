<template>
  <h1>🐭 피하기 게임</h1>
  <p>마우스로 초록 상자를 움직여 빨간 장애물 피하기!</p>
  <canvas
    id="gameCanvas"
    width="400"
    height="300"
    ref="canvasRef"
    @mousemove="onMouseMove"
  ></canvas>
  <div id="score">점수: 0</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const canvasRef = ref();

let ctx;
let player = { x: 180, y: 250, w: 40, h: 40 };
let obstacle = { x: Math.random() * 360, y: 0, w: 40, h: 40, speed: 3 };
let score = 0;
let gameOver = false;

onMounted(() => {
  ctx = canvasRef.value.getContext('2d');
  loop();
});

const onMouseMove = (e) => {
  const rect = canvasRef.value.getBoundingClientRect();
  player.x = e.clientX - rect.left - player.w / 2;
};

const draw = () => {
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
  ctx.fillStyle = '#32cd32';
  ctx.fillRect(player.x, player.y, player.w, player.h);
  ctx.fillStyle = '#ff4500';
  ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
};

const update = () => {
  if (gameOver) return;
  obstacle.y += obstacle.speed;
  if (obstacle.y > canvasRef.value.height) {
    obstacle.y = 0;
    obstacle.x = Math.random() * (canvasRef.value.width - obstacle.w);
    score++;
    document.getElementById('score').textContent = `점수: ${score}`;
  }
  if (
    player.x < obstacle.x + obstacle.w &&
    player.x + player.w > obstacle.x &&
    player.y < obstacle.y + obstacle.h &&
    player.y + player.h > obstacle.y
  ) {
    gameOver = true;
    alert(`💥 게임 오버! 최종 점수: ${score}`);
  }
};

const loop = (timeStamp) => {
  draw();
  update();
  if (!gameOver) requestAnimationFrame(loop);
};
</script>

<style>
#score {
  font-size: 24px;
  margin-top: 10px;
}
</style>
