<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

import HeroSection from '@/components/HeroSection.vue'
import TimelineSection from '@/components/TimelineSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import NotFound from '@/components/NotFound.vue'
import ProjectsSection from '@/components/ProjectSection.vue'

const isNotFound = !['/', '/index.html'].includes(window.location.pathname)

const navLinks = [
  { href: '#about', label: 'Over mij' },
  { href: '#projects', label: 'Projecten'},
  { href: '#services', label: 'Wat ik doe' },
  { href: '#skills', label: 'Skills' },
  { href: '#timeline', label: 'Traject' },
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

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeMenu()
}

window.addEventListener('keydown', onKeydown)
window.removeEventListener('keydown', onKeydown)
</script>

<template>
  <NotFound v-if="isNotFound" />
  <template v-else>
    <nav class="nav">
      <a href="#home" class="logo" @click="closeMenu">N<span class="dot"></span>DS</a>

      <button class="menu-toggle" :class="{ open: menuOpen }" :aria-expanded="menuOpen" aria-controls="menu" aria-label="Menu" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div id="menu" class="links" :class="{ open: menuOpen }">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="roll" :class="{ active: activeId === link.href.slice(1) }" @click="closeMenu">
          <span :data-text="link.label">{{ link.label }}</span>
        </a>
        <span class="dot"></span>
      </div>
    </nav>

  <main>
    <HeroSection />
    <AboutSection />
    <ProjectsSection/>
    <ServicesSection />
    <SkillsSection />
    <TimelineSection />
    <ContactSection />
  </main>

    <footer class="footer">
      <div class="cols">
        <div>
          <p class="small-caps muted">Socials</p>
          <a href="https://github.com/NoahDiSilvio" target="_blank" class="roll">
            <span data-text="GitHub">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/noah-di-silvio-6743633aa/" target="_blank" class="roll">
            <span data-text="LinkedIn">LinkedIn</span>
          </a>
        </div>
        <div>
          <p class="small-caps muted">Contact</p>
          <a href="mailto:noah.di.silvio7@gmail.com" class="roll">
            <span data-text="E-mail">E-mail</span>
          </a>
          <span>Gent, België</span>
        </div>
      </div>

      <div class="marquee">
        <div class="track">
          <span v-for="n in 4" :key="n">Waar backend en frontend samenkomen <span class="red">✦</span>&nbsp;</span>
        </div>
      </div>

      <div class="bottom small-caps muted">
        <span>© 2026 Noah Di Silvio</span>
        <span>Portfolio</span>
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
  backdrop-filter: blur(8px);
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

.links .active span { color: var(--red); }

.links a:hover { color: var(--red); }

.menu-toggle { display: none; }

.footer {
  border-top: 1px solid var(--border);
  padding-top: 3rem;
  overflow: hidden;
}

.cols {
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, max-content));
  justify-content: center;
  gap: 2rem 6rem;
  text-align: center;
}

.cols div {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  gap: 1rem;
  padding: 1.25rem 2rem;
  border-top: 1px solid var(--border);
}

@media (max-width: 48rem) {
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem 1.25rem;
  }

  .menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 0.375rem;
    width: 2.75rem;
    height: 2.75rem;
    padding: 0;
    background: none;
    border: 0;
    cursor: pointer;
  }

  .menu-toggle span {
    width: 1.6rem;
    height: 0.125rem;
    background: var(--text);
    transition: transform 0.3s, opacity 0.2s;
  }

  .menu-toggle span:nth-child(2) {background: var(--red);}

  .menu-toggle.open span:nth-child(1) { transform: translateY(0.5rem) rotate(45deg); }
  .menu-toggle.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .menu-toggle.open span:nth-child(3) { transform: translateY(-0.5rem) rotate(-45deg); }

  .links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: calc(100dvh - 100%);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 1rem 1.25rem;
    background: var(--bg);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-0.5rem);
    transition: opacity 0.3s, transform 0.3s, visibility 0.3s;
  }

  .links.open {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  .links a {
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border);
    font-family: var(--display);
    font-size: 2.5rem;
    letter-spacing: 0.02em;
  }

  .links .dot { display: none; }

  .cols {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
    padding: 0 1.25rem;
  }

  .bottom { padding: 1.25rem; }

  .links .roll span::after { display: none; }
  .links .roll:hover span { transform: none; color: var(--red); }
}
</style>
