<script setup lang="ts">

const services = [
  {
    title: 'Backend',
    tagline: 'Een stevige basis onder elke app.',
    text: 'REST API’s, authenticatie, validatie en databankontwerp met Laravel en MySQL.',
    tags: ['Laravel', 'PHP', 'MySQL'],
  },
  {
    title: 'Frontend',
    tagline: 'Interfaces die snel en logisch aanvoelen.',
    text: 'Single page applications met Vue 3 en TypeScript, gekoppeld aan een eigen API.',
    tags: ['Vue 3', 'TypeScript', 'CSS'],
  },
  {
    title: 'Mobile',
    tagline: 'Eén codebase, twee platformen.',
    text: 'Cross-platform apps met Flutter en Dart.',
    tags: ['Flutter', 'Dart'],
  },
  {
    title: 'DevOps',
    tagline: 'Van commit tot live.',
    text: 'Versiebeheer met Git, CI/CD-pipelines en deployment.',
    tags: ['Git', 'CI/CD'],
  },
]
</script>

<template>
  <section id="services" class="section">
    <h2 class="section-label reveal from-left">Wat ik doe</h2>
      <div class="services">
        <details
          v-for="(s, i) in services"
          :key="s.title"
          class="service reveal"
          :style="{ '--delay': i * 0.1 + 's' }"
        >
          <summary>
            <span class="num small-caps">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ s.title }}</h3>
            <span class="tagline">{{ s.tagline }}</span>
            <span class="plus">+</span>
          </summary>

          <div class="body">
            <p>{{ s.text }}</p>
            <p class="small-caps red">{{ s.tags.join(' · ') }}</p>
          </div>
        </details>
      </div>
  </section>
</template>

<style scoped>
.service {
  border-bottom: 1px solid var(--border);
}

.service summary {
  display: grid;
  grid-template-columns: 3.125rem minmax(0, 1fr) minmax(0, 1.2fr) 2.5rem;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 0;
  cursor: pointer;
  list-style: none;
}

.service summary::-webkit-details-marker { display: none; }

.service h3 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
  transition: color 0.2s, transform 0.3s;
}

.service summary:hover h3 {
  color: var(--red);
  transform: translateX(0.5rem);
}

.num, .tagline { color: var(--muted); }
.tagline { font-size: 0.9rem; }

.plus {
  font-size: 1.8rem;
  font-weight: 300;
  text-align: right;
  transition: transform 0.3s, color 0.3s;
}

.service[open] .plus {
  transform: rotate(45deg);
  color: var(--red);
}

.body {
  padding: 0 0 1.5rem 4.125rem;
  max-width: 37.5rem;
  animation: open 0.4s ease;
}

.body p { margin: 0 0 0.5rem; color: #cfcfcf; }

@keyframes open {
  from { opacity: 0; transform: translateY(-0.625rem); }
  to { opacity: 1; transform: none; }
}

@media (max-width: 43.75rem) {
  .service summary { grid-template-columns: 2.5rem minmax(0, 1fr) 1.875rem; }
  .tagline { display: none; }
  .body { padding-left: 0; }
}
</style>
