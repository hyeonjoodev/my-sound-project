<script setup>
import { ref } from 'vue';
import VCard from '../components/VCard.vue';
import '../myStyle.css';

const cards = ref([
  {
    title: '강한 타이포그래피',
    content:
      '블랙을 활용한 타이포로 정보의 우선순위를 명확하게 합니다. 여기에 컬러 포인트로 시선을 유도합니다.'
  },
  {
    title: '미니멀한 컴포넌트',
    content:
      '버튼, 카드, 배지 등 기본 컴포넌트를 최소한의 스타일로 구성해 재사용성을 높였습니다.'
  },
  {
    title: '포인트 컬러',
    content:
      '전체 톤은 흰색-검정으로 유지하고, CTA나 중요 요소에만 컬러를 최소 사용해 임팩트를 줍니다.'
  }
]);
</script>

<template>
  <div class="wrap">
    <header>
      <a class="brand" href="#">
        <div class="logo">FP</div>
        <div>
          <div style="font-weight: 700">스튜디오</div>
          <div style="font-size: 12px; color: var(--muted); margin-top: 2px">
            화이트 + 블랙 + 포인트
          </div>
        </div>
      </a>
      <nav>
        <a href="#features">Features</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <a class="cta" href="#">Get started</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-content">
          <div class="eyebrow">New · 디자인 템플릿</div>
          <h1>
            화이트톤 기반의 심플 & 모던 UI<br /><span
              style="color: var(--muted); font-weight: 500"
              >블랙 타이포와 컬러 포인트로 시각적 리듬을 만듭니다</span
            >
          </h1>
          <p class="lead">
            기업 랜딩, 포트폴리오, 제품 소개 등 범용적으로 쓰기 좋은
            레이아웃입니다. 컬러는 소수 포인트로만 사용해 전체적인 미니멀함을
            유지했어요.
          </p>
          <div class="cta-row">
            <button class="btn primary">시작하기</button>
            <button class="btn">디자인 시스템 보기</button>
            <div
              style="
                margin-left: auto;
                display: flex;
                align-items: center;
                gap: 10px;
              "
            >
              <div class="accent-pill">NEW</div>
            </div>
          </div>
        </div>

        <aside class="mock" aria-hidden="true">
          <div class="title">대시보드 미리보기</div>
          <div class="meta">로그인 후 간단한 통계와 빠른 액세스</div>
          <div style="height: 18px"></div>
          <div style="display: flex; gap: 10px; align-items: center">
            <div
              style="
                flex: 1;
                background: linear-gradient(90deg, var(--accent-2), #dff6ec);
                height: 64px;
                border-radius: 10px;
                padding: 12px;
                display: flex;
                flex-direction: column;
                justify-content: center;
              "
            >
              <div style="font-weight: 700">₩12,430</div>
              <div style="font-size: 12px; color: var(--muted)">
                이번 달 매출
              </div>
            </div>
            <div
              style="
                width: 86px;
                background: linear-gradient(90deg, var(--accent-1), #ffeaf0);
                height: 64px;
                border-radius: 10px;
                padding: 12px;
                display: flex;
                flex-direction: column;
                justify-content: center;
              "
            >
              <div style="font-weight: 700">+8%</div>
              <div style="font-size: 12px; color: var(--muted)">전월 대비</div>
            </div>
          </div>
        </aside>
      </section>

      <section id="features" class="features">
        <VCard
          v-for="(card, idx) of cards"
          :key="idx"
          :title="card.title"
          :content="card.content"
          :colorIndex="idx + 1"
        />
      </section>
    </main>

    <footer>
      <div>© 2025 스튜디오</div>
      <div style="display: flex; gap: 12px; align-items: center">
        <div style="font-size: 13px; color: var(--muted)">
          Made with • minimal
        </div>
        <div
          style="
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: var(--accent-1);
          "
        ></div>
        <div
          style="
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: var(--accent-2);
          "
        ></div>
        <div
          style="
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: var(--accent-3);
          "
        ></div>
      </div>
    </footer>
  </div>
</template>
