<template>
  <section id="contact" class="section">
    <h2 class="section-label reveal from-left">Contact</h2>

    <div class="block reveal">
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
</style>
