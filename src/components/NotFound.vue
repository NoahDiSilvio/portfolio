<script setup lang="ts">
const path = window.location.pathname
document.title = 'Noah Di Silvio | 404'
</script>

<template>
  <div class="page">
    <a href="/" class="logo">N<span class="dot"></span>DS</a>

    <section class="notfound">
      <p class="small-caps eyebrow"><span class="dot"></span> Error</p>

      <h1 class="code">4<span class="zero"></span>4</h1>

      <h2>Deze pagina bestaat <span class="red fun">niet.</span></h2>

      <p class="terminal">
        <span class="muted">$</span> GET {{ path }}
        <span class="red">→ 404 Not Found</span><span class="cursor">_</span>
      </p>

      <p class="text">Misschien zit ze nog in mijn backlog, of klopt de link gewoon niet.</p>

      <a href="/" class="btn-arrow">
        <span class="label">Terug naar home</span>
        <span class="arrow">→</span>
      </a>
    </section>

    <span class="star">✦</span>
  </div>
</template>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 1.25rem 2rem;
}

.logo {
  font-family: var(--display);
  font-size: 1.6rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.notfound {
  min-height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 75rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.code {
  display: flex;
  align-items: center;
  font-size: clamp(8rem, 28vw, 20rem);
  line-height: 0.8;
}

.zero {
  display: inline-block;
  width: 0.62em;
  height: 0.62em;
  margin: 0 0.06em;
  border-radius: 50%;
  background: var(--red);
  animation: scaleIn 1s cubic-bezier(0.2, 0.65, 0.3, 1) both;
}

h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-top: 1.5rem;
}

.terminal {
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 0.9rem;
  background: var(--bg-soft);
  border: 1px solid var(--border);
  padding: 0.8rem 1rem;
  width: fit-content;
  max-width: 100%;
  overflow-wrap: anywhere;
  margin: 1.5rem 0 0.5rem;
}

.muted { color: var(--muted); }

.cursor {
  animation: blink 1s steps(1) infinite;
}

.text {
  color: #cfcfcf;
  margin-bottom: 2rem;
}

.star {
  position: absolute;
  right: -4rem;
  bottom: -6rem;
  font-size: 28rem;
  line-height: 1;
  color: var(--bg-soft);
  animation: spin 40s linear infinite;
  pointer-events: none;
}

@keyframes scaleIn { from { transform: scale(0); } }
@keyframes blink { 50% { opacity: 0; } }
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 48rem) {
  .page { padding: 1.25rem; }
  .star { font-size: 16rem; }
}
</style>
