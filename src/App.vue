<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import HeroSection from '@/components/HeroSection.vue'
import TimelineSection from '@/components/TimelineSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import NotFound from '@/components/NotFound.vue'

const isNotFound = !['/', '/index.html'].includes(window.location.pathname)

const navLinks = [
  { href: '#timeline', label: 'Traject' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Wat ik doe' },
  { href: '#about', label: 'Over mij' },
  { href: '#contact', label: 'Contact' },
]

const activeId = ref('home')
const progress = ref(0)

function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? window.scrollY / max : 0
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target

        if (entry.isIntersecting) {
          el.classList.add('visible')
          el.classList.remove('above')
        } else {
          el.classList.remove('visible')
          el.classList.toggle('above', entry.boundingClientRect.top < 0)
        }
      })
    },
    { threshold: 0.15 }
  )

  document.querySelectorAll('.reveal, .section').forEach((el) => observer.observe(el))

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeId.value = entry.target.id
      })
    },
    { rootMargin: '-50% 0px -50% 0px' }
  )

  document.querySelectorAll('section[id]').forEach((el) => sectionObserver.observe(el))
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const minTime = new Promise((resolve) => setTimeout(resolve, 1200))

const pageLoaded = new Promise((resolve) => {
  if (document.readyState === 'complete') resolve(null)
  else window.addEventListener('load', () => resolve(null), { once: true })
})

Promise.all([minTime, pageLoaded, document.fonts.ready]).then(() => {
  document.documentElement.classList.add('loaded')
  setTimeout(() => document.getElementById('loader')?.remove(), 900)
})
</script>

<template>
  <NotFound v-if="isNotFound" />
  <template v-else>
  <nav class="nav">
    <a href="#home" class="logo">N<span class="dot"></span>DS</a>
    <div class="links">
      <a v-for="link in navLinks" :key="link.href" :href="link.href" class="roll">
        <span :data-text="link.label">{{ link.label }}</span>
      </a>
      <span class="dot"></span>
    </div>
  </nav>

  <main>
    <HeroSection />
    <TimelineSection />
    <SkillsSection />
    <ServicesSection />
    <AboutSection />
    <ContactSection />
  </main>

  <footer class="footer">
    <div class="cols">
      <div>
        <p class="small-caps muted">Pagina's</p>
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="roll">
          <span :data-text="link.label">{{ link.label }}</span>
        </a>
      </div>
      <div>
        <p class="small-caps muted">Socials</p>
        <a href="https://github.com/NoahDiSilvio" target="_blank" class="roll"><span data-text="GitHub">GitHub</span></a>
        <a href="https://www.linkedin.com/in/noah-di-silvio-6743633aa/" target="_blank" class="roll"><span data-text="LinkedIn">LinkedIn</span></a>
      </div>
      <div>
        <p class="small-caps muted">Locatie</p>
        <span>Gent, België</span>
      </div>
    </div>

    <div class="marquee">
      <div class="track">
        <span v-for="n in 4" :key="n">Waar backend en frontend samenkomen <span class="red">●</span>&nbsp;</span>
      </div>
    </div>
    <div class="bottom small-caps muted">
      <span>© 2026 Noah Di Silvio</span>
      <a href="#home">Terug naar boven ↑</a>
    </div>
  </footer>
  </template>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
  background: rgba(13, 13, 13, 0.85);
  backdrop-filter: blur(0.5rem);
}

.logo {
  font-family: var(--display);
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.links {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.links a:hover { color: var(--red); }

.footer {
  border-top: 1px solid var(--border);
  padding-top: 4rem;
  overflow: hidden;
}

.cols {
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
}

.cols div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
}

.muted { color: var(--muted); }

.marquee {
  margin: 4rem 0 2rem;
}

.track {
  display: flex;
  width: max-content;
  font-family: var(--display);
  font-size: clamp(3rem, 9vw, 8rem);
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
  animation: marquee 25s linear infinite;
}

@keyframes marquee {
  to { transform: translateX(-50%); }
}

.bottom {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-top: 1px solid var(--border);
}

@media (max-width: 48rem) {
  .cols { grid-template-columns: minmax(0, 1fr); }
}

@media (max-width: 48rem) {
  .links a { display: none; }
  .footer { flex-direction: column; gap: 0.5rem; text-align: center; }
}
</style>
