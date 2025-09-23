<template>
  <p>이모지를 클릭해 보세요!</p>

  <div class="button-group">
    <button class="button" type="button" @click="playSong(TWINKLE)">🌟</button>
    <button class="button" type="button" @click="playSong(FLIGHT)">✈️</button>
    <button class="button" type="button" @click="playSong(GHOST_SONG)">
      👻
    </button>
  </div>
  <p>
    <button class="button blue" type="button" @click="stopSong">STOP</button>
  </p>
  <p>Speed</p>
  <p>
    <input
      type="range"
      min="0"
      max="2"
      v-model="speed"
      step="1"
      @change="onChangeSpeed"
      class="slider"
    />
  </p>
</template>

<script setup>
import TWINKLE from '@/assets/music/TWINKLE';
import FLIGHT from '@/assets/music/FLIGHT';
import GHOST_SONG from '@/assets/music/GHOST_SONG';
import { computed, ref } from 'vue';

const TYPES = ['sine', 'square', 'sawtooth', 'triangle'];

const bpm = ref(80);
const beatDuration = computed(() => 60000 / bpm.value); // 1박(millisecond)

const ctx = new (window.AudioContext || window.webkitAudioContext)();

let nowPlays = [];

const playSound = (freq = 440, duration = 0.2) => {
  const osc = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.value = freq;

  osc2.type = 'sine';
  osc2.frequency.value = freq * 2; // 1옥타브 위 배음

  // GainNode로 ADSR
  const now = ctx.currentTime;
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(1, now + 0.02); // Attack
  gain.gain.linearRampToValueAtTime(0.7, now + 0.1); // Decay
  gain.gain.setValueAtTime(0.7, now + duration / 1000 - 0.05); // Sustain
  gain.gain.exponentialRampToValueAtTime(0.0000001, now + duration / 1000); // Release

  osc.connect(gain);
  osc2.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + duration / 1000);
  osc2.start(now);
  osc2.stop(now + duration / 1000);
};

const playSong = async (songArray) => {
  if (ctx.state === 'suspended') ctx.resume();
  let time = 0;

  stopSong();

  songArray.forEach((noteObj) => {
    const duration = beatDuration.value * noteObj.beat;
    const id = setTimeout(
      () => (noteObj.freq ? playSound(noteObj.freq, duration) : null),
      time
    );
    time += duration;
    nowPlays.push(id);
  });
};

const stopSong = () => {
  nowPlays.forEach((id) => clearTimeout(id));
  nowPlays = [];
};

const speed = ref(1);
const onChangeSpeed = () => {
  console.log(speed.value);
  switch (Number(speed.value)) {
    case 0:
      bpm.value = 60;
      break;
    case 1:
      bpm.value = 80;
      break;
    case 2:
      bpm.value = 120;
      break;

    default:
      break;
  }
};
</script>

<style scoped>
/* 공통 슬라이더 스타일 */
.slider {
  -webkit-appearance: none; /* 기본 브라우저 스타일 제거 */
  appearance: none;
  width: 200px; /* 원하는 길이 */
  height: 8px;
  border-radius: 5px;
  background: linear-gradient(90deg, #ff7043, #ffcc80);
  outline: none;
  cursor: pointer;
  transition: background 0.3s;
}

/* 마우스 올렸을 때 */
.slider:hover {
  background: linear-gradient(90deg, #ff5722, #ffb74d);
}

/* 크롬, 사파리, 엣지 핸들 */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 2px solid #ff7043;
  border-radius: 50%;
  cursor: grab;
  transition: 0.2s;
}
.slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  background: #ffe0b2;
}

/* 파이어폭스 핸들 */
.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #fff;
  border: 2px solid #ff7043;
  border-radius: 50%;
  cursor: grab;
  transition: 0.2s;
}
.slider::-moz-range-thumb:hover {
  transform: scale(1.1);
  background: #ffe0b2;
}
</style>
