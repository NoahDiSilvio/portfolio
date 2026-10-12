<script setup lang="ts">
const starCount = 40

const stars = Array.from({ length: starCount }, () => ({
  top: Math.random() * 100 + '%',
  left: Math.random() * 100 + '%',
  size: 0.4 + Math.random() * 1.2,
  delay: Math.random() * 3,
}))
</script>

<template>
  <section id="contact" class="section">
    <h2 class="section-label reveal from-left">Contact</h2>

    <div class="block reveal">
      <div class="sky" aria-hidden="true">
        <span
          v-for="(s, i) in stars"
          :key="i"
          class="twinkle"
          :style="{
            top: s.top,
            left: s.left,
            fontSize: s.size + 'rem',
            animationDelay: s.delay + 's',
            opacity: s.size < 0.7 ? 0.5 : 1,
          }"
        >✦</span>
      </div>
      <span class="star">✦</span>

      <p class="small-caps intro">Stage of project in gedachten?</p>

      <h3 class="title">Laten we<br />praten.</h3>

      <a href="mailto:noah.di.silvio7@gmail.com" class="email">noah.di.silvio7@gmail.com ↗</a>

      <div class="bottom">
        <div class="links small-caps">
          <a href="https://github.com/NoahDiSilvio" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/noah-di-silvio-6743633aa/" target="_blank">LinkedIn</a>
          <span>Gent, België</span>
        </div>

        <a href="/cv.pdf" download="CV-Noah-Di-Silvio.pdf" class="cv">
          Download CV <span>↓</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.block {
  position: relative;
  overflow: hidden;
  background: var(--red);
  color: var(--bg);
  padding: clamp(2rem, 5vw, 4rem);
}

.star {
  position: absolute;
  right: -2rem;
  top: -3rem;
  font-size: 18rem;
  line-height: 1;
  color: rgba(0, 0, 0, 0.12);
  animation: spin 30s linear infinite;
  pointer-events: none;
}

.intro {
  font-weight: 600;
  margin: 0 0 1rem;
}

.title {
  font-size: clamp(4rem, 10vw, 8rem);
  line-height: 0.85;
  color: var(--bg);
}

.email {
  display: inline-block;
  margin-top: 2rem;
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 500;
  border-bottom: 0.125rem solid var(--bg);
  padding-bottom: 0.2rem;
  transition: padding 0.2s;
  overflow-wrap: anywhere;
}

.email:hover { padding-left: 0.5rem; }

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}

.links {
  display: flex;
  gap: 2rem;
  font-weight: 600;
}

.links a:hover { text-decoration: underline; }

.cv {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.4rem;
  background: var(--bg);
  color: var(--text);
  border-radius: 62.438rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: transform 0.2s;
}

.cv:hover { transform: translateY(-0.125rem); }

@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 37.5rem) {
  .links { flex-direction: column; gap: 0.5rem; }
}
.sky {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.twinkle {
  position: absolute;
  line-height: 1;
  color: var(--bg);
  opacity: 0.15;
  animation: twinkle 3s ease-in-out infinite;
}

.block > *:not(.sky):not(.star) {
  position: relative;
  z-index: 1;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.15; transform: scale(0.8) rotate(0deg); }
  50% { opacity: 0.5; transform: scale(1.1) rotate(20deg); }
}

@media (prefers-reduced-motion: reduce) {
  .twinkle { animation: none; }
}

@media (max-width: 62.5rem) {
  .twinkle:nth-child(n + 26) {
    display: none;
  }
}

@media (max-width: 37.5rem) {
  .twinkle:nth-child(n + 13) {
    display: none;
  }
}
</style>
