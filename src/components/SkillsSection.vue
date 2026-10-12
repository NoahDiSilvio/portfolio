<script setup lang="ts">
const base = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const skills = [
  { name: 'PHP', icon: `${base}/php/php-original.svg` },
  { name: 'Laravel', icon: `${base}/laravel/laravel-original.svg` },
  { name: 'Vue', icon: `${base}/vuejs/vuejs-original.svg` },
  { name: 'TypeScript', icon: `${base}/typescript/typescript-original.svg` },
  { name: 'JavaScript', icon: `${base}/javascript/javascript-original.svg` },
  { name: 'HTML', icon: `${base}/html5/html5-original.svg` },
  { name: 'CSS', icon: `${base}/css3/css3-original.svg` },
  { name: 'MySQL', icon: `${base}/mysql/mysql-original.svg` },
  { name: 'Flutter', icon: `${base}/flutter/flutter-original.svg` },
  { name: 'Dart', icon: `${base}/dart/dart-original.svg` },
  { name: 'Git', icon: `${base}/git/git-original.svg` },
]

const loop = [...skills, ...skills]
</script>

<template>
  <section id="skills" class="section">
    <h2 class="section-label reveal from-left">Skills</h2>

    <div class="sliders">
      <div class="slider reveal">
        <div class="list">
          <div v-for="(skill, i) in loop" :key="'logo-' + i" class="item">
            <div class="card">
              <img :src="skill.icon" :alt="skill.name" />
              <span class="small-caps">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="slider reverse reveal">
        <div class="list">
          <div v-for="(skill, i) in loop" :key="'name-' + i" class="item text">{{ skill.name }} <span class="sep"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sliders {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 0;
}

.slider {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent);
}

.list {
  display: flex;
  width: max-content;
  animation: scroll 30s linear infinite;
}

.slider.reverse .list {
  animation-direction: reverse;
  animation-duration: 40s;
}

.slider:hover .list {
  animation-play-state: paused;
}

.item {
  flex-shrink: 0;
  margin-right: 1.5rem;
}

.card {
  width: 8.125rem;
  height: 8.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: var(--bg-soft);
  border: 1px solid var(--border);
  transition: border-color 0.3s;
}

.card img {
  width: 3rem;
  height: 3rem;
  filter: grayscale(1);
  opacity: 0.7;
  transition: filter 0.3s, opacity 0.3s;
}

.card:hover {
  border-color: var(--red);
}

.card:hover img {
  filter: grayscale(0);
  opacity: 1;
}

.text {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-family: var(--display);
  font-size: 3rem;
  line-height: 1;
  color: var(--muted);
  transition: color 0.2s;
}

.sep {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: var(--red);
  flex-shrink: 0;
}

.text:hover {
  color: var(--text);
}

@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .list { animation: none; }
}
</style>
