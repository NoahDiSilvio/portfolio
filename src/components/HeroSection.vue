<script setup lang="ts">
import { ref } from 'vue'

const showPhoto = ref(true)
const focus = ['Backend', 'Frontend', 'Databases', 'Mobile']
</script>

<template>
  <section id="home" class="hero">
    <div class="visual">
      <div class="circle"></div>
      <template v-if="showPhoto">
        <img src="/me.jpg" alt="Noah Di Silvio" class="photo" @error="showPhoto = false" />
        <img src="/me.jpg" alt="" aria-hidden="true" class="photo color" />
      </template>
    </div>

    <div class="content">
      <p class="small-caps eyebrow"><span class="dot"></span> Portfolio</p>
      <h1>Full-stack<br />web<br />developer</h1>
      <p class="tagline">
        Student Elektronica-ICT aan Odisee.
      </p>
    </div>

    <ul class="side">
      <li v-for="item in focus" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.photo.color {
  filter: none;
  mix-blend-mode: normal;
  opacity: 0;
  animation: none;
  transition: opacity 0.6s ease;
}

.visual:hover .photo.color {
  opacity: 1;
}

.content {
  position: relative;
  z-index: 2;
  pointer-events: none;
}

.content a {
  pointer-events: auto;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

h1 {
  font-size: clamp(4rem, 12vw, 9.5rem);
  line-height: 0.88;
}

.tagline {
  margin: 1.5rem 0 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.visual {
  position: absolute;
  right: 8%;
  top: 50%;
  transform: translateY(-50%);
  width: min(45vw, 30rem);
  aspect-ratio: 1;
}

.circle {
  position: absolute;
  inset: 0;
  border-radius: 50%;
}

.photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  filter: grayscale(1) contrast(1.1);
  mix-blend-mode: luminosity;
}

.side {
  position: absolute;
  right: 0;
  bottom: 15%;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: right;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  z-index: 2;
}


@media (max-width: 48rem) {
  .visual { right: -20%; opacity: 0.5; width: 80vw; }
  .side { display: none; }
}

.content > * {
  opacity: 0;
  animation: fadeUp 0.9s cubic-bezier(0.2, 0.65, 0.3, 1) forwards;
}
.content > *:nth-child(2) { animation-delay: 0.15s; }
.content > *:nth-child(3) { animation-delay: 0.3s; }
.content > *:nth-child(4) { animation-delay: 0.45s; }

.circle {
  animation: scaleIn 1.2s cubic-bezier(0.2, 0.65, 0.3, 1) forwards;
  transform: scale(0);
}

.photo {
  opacity: 0;
  animation: fadeIn 1s 0.6s ease forwards;
}

.side {
  opacity: 0;
  animation: fadeIn 1s 0.9s ease forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(2.5rem); }
  to { opacity: 1; transform: none; }
}

@keyframes scaleIn {
  to { transform: scale(1); }
}

@keyframes fadeIn {
  to { opacity: 1; }
}

@media (hover: hover) {
  .photo {
    filter: grayscale(1) contrast(1.1);
    transition: filter 0.6s ease;
  }

  .visual:hover .photo {
    filter: none;
  }
}
</style>
