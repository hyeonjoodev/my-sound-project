<template>
  <footer id="footer">
    <div class="footer-info">
      <p>© 2025 Hyeonjoo Lee</p>
    </div>
    <div class="footer-nav">
      <a class="footerBtn">⚙️<span>Setting</span></a>
      <a class="footerBtn" href="mailto:hyeonjoolee02@gmail.com"
        >📩<span>Contact</span></a
      >
      <a class="footerBtn" href="https://github.com/hyeonjoodev">
        <img :src="github" alt="Instagram" class="footerIcon" />
        <span>Github</span>
      </a>
      <a class="footerBtn" href="https://www.instagram.com/jennierubyjane">
        <img :src="instagram" alt="Instagram" class="footerIcon" />
        <span>Instagram</span>
      </a>
    </div>
  </footer>
</template>

<script setup>
import github from '@/assets/github-mark.svg';
import instagram from '@/assets/Instagram_Glyph_Gradient.png';
</script>
