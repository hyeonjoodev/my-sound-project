<template>
  <article class="card">
    <div
      style="display: flex; align-items: center; gap: 12px; margin-bottom: 6px"
    >
      <span class="dot" :style="background"></span>
      <h3>{{ title }}</h3>
    </div>
    <p style="color: var(--muted)">
      {{ content }}
    </p>
  </article>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: { type: String },
  content: { type: String },
  colorIndex: { type: Number }
});

const background = computed(() => {
  return 'background: var(--accent-' + props.colorIndex + ')';
});
</script>
