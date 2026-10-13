<script setup lang="ts">
import type { Project } from '../data/projects'

defineProps<{ project: Project; index: number }>()
</script>

<template>
  <article class="card">
    <header class="top">
      <span class="num">{{ String(index + 1).padStart(2, '0') }}</span>
      <span class="type small-caps"><span class="dot"></span>{{ project.type }}</span>
    </header>

    <div class="thumb">
      <span v-if="project.status" class="status small-caps">{{ project.status }}</span>
      <img v-if="project.image" :src="project.image" :alt="`Screenshot van ${project.title}`" />
      <span v-else class="placeholder">{{ project.title }}</span>
    </div>

    <h3 class="title">{{ project.title }}</h3>

    <p class="desc">{{ project.description }}</p>

    <ul class="tech">
      <li v-for="t in project.tech" :key="t">{{ t }}</li>
    </ul>

    <div class="links">
      <a v-if="project.demo" :href="project.demo" target="_blank" class="demo">
        Live demo <span>↗</span>
      </a>
      <a v-if="project.github" :href="project.github" target="_blank" class="code small-caps">
        Bekijk code ↗
      </a>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: grid;
  grid-row: span 6;
  grid-template-rows: subgrid;
  row-gap: 0;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid var(--border);
}

.num {
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1;
  border-bottom: 1px solid var(--text);
}

.type {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--muted);
  text-align: right;
}

.thumb {
  position: relative;
  aspect-ratio: 16 / 10;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 1px solid var(--border);
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s, filter 0.4s;
}

.placeholder {
  padding: 1rem;
  font-family: var(--display);
  font-size: 2.5rem;
  color: var(--border);
  text-align: center;
  text-transform: uppercase;
}

.title {
  margin-top: 1.5rem;
  font-size: clamp(2rem, 3vw, 2.75rem);
  line-height: 0.95;
  transition: color 0.2s, transform 0.3s;
}

.desc {
  margin: 0.75rem 0 1.25rem;
  font-size: 0.9rem;
  color: #cfcfcf;
}

.tech {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 0.4rem;
  margin: 0 0 1.5rem;
  padding: 0;
  list-style: none;
}

.tech li {
  padding: 0.25rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: 62.438rem;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-self: start;
  gap: 1.25rem;
}

.demo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 62.438rem;
  background: var(--red);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.demo span { transition: transform 0.2s; }

.code {
  border-bottom: 1px solid var(--muted);
  padding-bottom: 0.15rem;
  color: var(--muted);
  transition: color 0.2s, border-color 0.2s;
}

.status {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 1;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: var(--bg);
  color: var(--text);
  font-size: 0.65rem;
}

@media (hover: hover) {
  .thumb img { filter: grayscale(0.6); }

  .card:hover .thumb img { filter: none; transform: scale(1.04); }
  .card:hover .title { color: var(--red); transform: translateX(0.5rem); }

  .demo:hover span { transform: translate(0.125rem, -0.125rem); }
  .code:hover { color: var(--text); border-color: var(--text); }
}
</style>
