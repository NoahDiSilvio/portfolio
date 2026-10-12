<script setup lang="ts">
import type { Project } from '../data/projects'

defineProps<{ project: Project; index: number }>()
</script>

<template>
  <article class="card">
    <header>
      <span class="num">{{ String(index + 1).padStart(2, '0') }}</span>
      <div class="small-caps">
        <div>{{ project.title }}</div>
        <div class="muted">{{ project.type }}</div>
      </div>
    </header>

    <div class="thumb">
      <img v-if="project.image" :src="project.image" :alt="project.title" />
      <span v-else class="placeholder">{{ project.title }}</span>
    </div>

    <p class="desc">{{ project.description }}</p>
    <p class="tech small-caps">{{ project.tech.join(' · ') }}</p>

    <div class="links small-caps">
      <a v-if="project.github" :href="project.github" target="_blank">GitHub ↗</a>
      <a v-if="project.demo" :href="project.demo" target="_blank">Demo ↗</a>
    </div>
  </article>
</template>

<style scoped>
header {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.num {
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1;
  border-bottom: 1px solid var(--text);
}

.muted { color: var(--muted); }

.thumb {
  aspect-ratio: 16 / 10;
  background: var(--bg-soft);
  border: 1px solid var(--border);
  display: grid;
  place-items: center;
  overflow: hidden;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.6);
  transition: filter 0.3s, transform 0.3s;
}

.card:hover .thumb img {
  filter: grayscale(0);
  transform: scale(1.03);
}

.placeholder {
  font-family: Georgia, serif;
  font-size: 2rem;
  font-style: italic;
  color: var(--muted);
}

.desc {
  font-size: 0.9rem;
  margin: 1rem 0 0.5rem;
}

.tech { color: var(--red); }

.links { display: flex; gap: 1rem; }
.links a:hover { color: var(--red); }

@media (hover: hover) {
  .thumb img {
    filter: grayscale(0.6);
    transition: filter 0.3s, transform 0.3s;
  }

  .card:hover .thumb img {
    filter: none;
  }
}
</style>
