<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects'

function span(i: number, total: number): number {
  const rest = total % 3
  if (rest === 1 && total >= 4 && i >= total - 4) return 3
  if (rest === 2 && i >= total - 2) return 3
  return 2
}
</script>

<template>
  <section id="projects" class="section">
    <h2 class="section-label reveal from-left">Projecten</h2>

    <div class="grid">
      <ProjectCard
        v-for="(p, i) in projects"
        :key="p.title"
        :project="p"
        :index="i"
        class="reveal"
        :style="{ '--delay': i * 0.1 + 's', '--span': span(i, projects.length) }"
      />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 2.5rem 2rem;
}

.grid > * {
  grid-column: span var(--span, 2);
}


@media (max-width: 62.5rem) {
  .grid > * { grid-column: span 3; }
}
@media (max-width: 37.5rem) {
  .grid > * { grid-column: span 6; }
}
</style>
