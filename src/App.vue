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
        <article class="card">
          <div
            style="
              display: flex;
              align-items: center;
              gap: 12px;
              margin-bottom: 6px;
            "
          >
            <span class="dot" style="background: var(--accent-1)"></span>
            <h3>강한 타이포그래피</h3>
          </div>
          <p style="color: var(--muted)">
            블랙을 활용한 타이포로 정보의 우선순위를 명확하게 합니다. 여기에
            컬러 포인트로 시선을 유도합니다.
          </p>
        </article>
        <article class="card">
          <div
            style="
              display: flex;
              align-items: center;
              gap: 12px;
              margin-bottom: 6px;
            "
          >
            <span class="dot" style="background: var(--accent-2)"></span>
            <h3>미니멀한 컴포넌트</h3>
          </div>
          <p style="color: var(--muted)">
            버튼, 카드, 배지 등 기본 컴포넌트를 최소한의 스타일로 구성해
            재사용성을 높였습니다.
          </p>
        </article>
        <article class="card">
          <div
            style="
              display: flex;
              align-items: center;
              gap: 12px;
              margin-bottom: 6px;
            "
          >
            <span class="dot" style="background: var(--accent-3)"></span>
            <h3>포인트 컬러</h3>
          </div>
          <p style="color: var(--muted)">
            전체 톤은 흰색-검정으로 유지하고, CTA나 중요 요소에만 컬러를 최소
            사용해 임팩트를 줍니다.
          </p>
        </article>
      </section>

      <section id="work" class="gallery">
        <div class="big" role="img" aria-label="프로젝트 스냅샷">
          <div>
            <div style="font-size: 18px; font-weight: 700">
              Featured Project
            </div>
            <div
              style="
                font-size: 13px;
                color: rgba(255, 255, 255, 0.9);
                margin-top: 8px;
              "
            >
              모던한 대시보드와 간결한 UX
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="small">Case Study A</div>
          <div class="small">Case Study B</div>
        </div>
      </section>

      <section
        id="contact"
        style="
          display: flex;
          gap: 18px;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 36px;
        "
      >
        <div style="flex: 1; min-width: 260px" class="card">
          <h3>문의하기</h3>
          <p style="color: var(--muted)">
            프로젝트 의뢰나 템플릿 커스터마이징을 원하면 연락 주세요.
          </p>
          <form
            style="
              display: flex;
              flex-direction: column;
              gap: 10px;
              margin-top: 12px;
            "
          >
            <input
              placeholder="이름"
              style="
                padding: 10px;
                border-radius: 10px;
                border: 1px solid rgba(11, 11, 11, 0.06);
              "
            />
            <input
              placeholder="이메일"
              style="
                padding: 10px;
                border-radius: 10px;
                border: 1px solid rgba(11, 11, 11, 0.06);
              "
            />
            <textarea
              placeholder="요청사항"
              style="
                padding: 10px;
                border-radius: 10px;
                border: 1px solid rgba(11, 11, 11, 0.06);
                min-height: 100px;
              "
            ></textarea>
            <div style="display: flex; gap: 10px">
              <button class="btn primary" type="button">전송</button>
              <button class="btn" type="reset">초기화</button>
            </div>
          </form>
        </div>

        <div style="width: 260px; min-width: 200px" class="card">
          <h4>정보</h4>
          <p style="color: var(--muted); font-size: 13px; margin: 0">
            서울 • 대한민국
          </p>
          <div style="height: 10px"></div>
          <div style="display: flex; flex-direction: column; gap: 8px">
            <div style="font-weight: 700">Email</div>
            <div style="color: var(--muted); font-size: 13px">
              hello@my.example
            </div>
          </div>
        </div>
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
