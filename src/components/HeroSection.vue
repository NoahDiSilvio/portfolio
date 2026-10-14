<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const showPhoto = ref(true)
const focus = ['Backend', 'Frontend', 'Databases', 'Mobile']

const lines = ['Full-stack', 'web', 'developer']
const total = lines.join('').length
const count = ref(0)
let timer: number | undefined

const typed = computed(() => {
  let left = count.value
  return lines.map((line) => {
    const n = Math.min(left, line.length)
    left -= n
    return { shown: line.slice(0, n), rest: line.slice(n) }
  })
})

const activeLine = computed(() => {
  const i = typed.value.findIndex((l) => l.rest.length > 0)
  return i === -1 ? lines.length - 1 : i
})

function startTyping() {
  timer = window.setInterval(() => {
    count.value++
    if (count.value >= total) clearInterval(timer)
  }, 70)
}

function startAfterLoader() {
  setTimeout(startTyping, 600)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    count.value = total
    return
  }

  if (document.documentElement.classList.contains('loaded')) {
    startAfterLoader()
  } else {
    window.addEventListener('app-loaded', startAfterLoader, { once: true })
  }
})

onUnmounted(() => {
  clearInterval(timer)
  window.removeEventListener('app-loaded', startAfterLoader)
})
</script>

<template>
  <section id="home" class="hero">
    <div class="content">
      <p class="small-caps eyebrow"><span class="dot"></span>Portfolio</p>
      <h1 :aria-label="lines.join(' ')">
        <span v-for="(line, i) in typed" :key="i" class="line" aria-hidden="true">
          {{ line.shown }}<span v-if="i === activeLine" class="caret"></span><span class="rest">{{ line.rest }}</span>
        </span>
      </h1>
      <p class="tagline">
        Noah Di Silvio · Student
      </p>
      <div class="actions">
        <a href="#projects" class="btn-arrow">
          <span class="label">Bekijk mijn werk</span>
          <span class="arrow">→</span>
        </a>
        <a :href="`/cv.pdf`" download="CV-Noah-Di-Silvio.pdf" class="btn-outline">
          Download CV <span>↓</span>
        </a>
      </div>
    </div>
    <div class="visual">
      <img
        v-if="showPhoto"
        src="/me.jpg"
        alt="Noah Di Silvio"
        class="photo"
        @error="showPhoto = false"
      />
    </div>

    <ul class="side">
      <li v-for="item in focus" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(2rem, 4vw, 4rem);
  min-height: calc(100svh - 5.5rem);
  padding: 3rem 0 5rem;
}

.content {
  position: relative;
  z-index: 2;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem;
}

h1 {
  font-family: var(--fun);
  font-size: clamp(3rem, 6.2vw, 6rem);
  line-height: 1;
  letter-spacing: 0;
}

.line { display: block; }
.rest { visibility: hidden; }

.caret {
  display: inline-block;
  width: 0.06em;
  height: 0.75em;
  margin-left: 0.04em;
  background: currentColor;
  animation: blink 0.8s steps(1) infinite;
}

.tagline {
  margin: 1.5rem 0 2.25rem;
  color: #cfcfcf;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.25rem 2rem;
}

.visual {
  justify-self: end;
  width: 100%;
  max-width: 28rem;
  aspect-ratio: 1;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.side {
  position: absolute;
  right: 0;
  bottom: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-align: right;
  text-transform: uppercase;
  color: var(--muted);
}

/* intro-animaties */
.content > * {
  opacity: 0;
  animation: fadeUp 0.9s cubic-bezier(0.2, 0.65, 0.3, 1) forwards;
}

.content > h1 {
  opacity: 1;
  animation: none;
}

.content > .tagline { animation-delay: 2s; }
.content > .actions { animation-delay: 2.2s; }

.photo {
  opacity: 0;
  animation: fadeIn 1s 0.4s ease forwards;
}

.side {
  opacity: 0;
  animation: fadeIn 1s 2.4s ease forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(2.5rem); }
  to { opacity: 1; transform: none; }
}

@keyframes fadeIn { to { opacity: 1; } }
@keyframes blink { 50% { opacity: 0; } }

/* zwart-wit + kleur bij hover, enkel met muis */
@media (hover: hover) {
  .photo {
    filter: grayscale(1) contrast(1.1);
    transition: filter 0.6s ease;
  }

  .visual:hover .photo { filter: none; }
}

/* gsm: foto boven de tekst */
@media (max-width: 48rem) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 2rem;
    min-height: auto;
    padding: 2rem 0 3.5rem;
  }

  .visual {
    order: -1;
    justify-self: start;
    max-width: 15rem;
  }

  .side { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .content > *,
  .photo,
  .side {
    opacity: 1;
    animation: none;
  }
}
</style>
