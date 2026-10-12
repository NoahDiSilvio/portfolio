<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects'
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
        :style="{ '--delay': i * 0.1 + 's' }"
      />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 18rem), 1fr));
  gap: 1.5rem;
}

.more {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

.star {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: var(--red);
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  transition: transform 0.3s;
}

.more:hover .star { transform: rotate(90deg); }

@media (max-width: 62.5rem) {
  .grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 37.5rem) {
  .grid { grid-template-columns: 1fr; }
}
</style>
