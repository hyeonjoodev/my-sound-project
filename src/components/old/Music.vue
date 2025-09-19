<script setup>
import TWINKLE from '../TWINKLE';
import FLIGHT from '../FLIGHT';
import GHOST_SONG from '../GHOST_SONG';
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

<template>
  <div class="card">
    <button type="button" @click="playSong(TWINKLE)">반짝반짝 작은별</button>
    <button type="button" @click="playSong(FLIGHT)">떴다떴다 비행기</button>
    <button type="button" @click="playSong(GHOST_SONG)">GHOST_SONG</button>
  </div>
  <p>
    <button type="button" @click="stopSong">STOP</button>
  </p>
  <p>
    {{ myValue }}
    <input
      type="range"
      min="0"
      max="2"
      v-model="speed"
      step="1"
      @change="onChangeSpeed"
    />
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
