<script setup lang="ts">
import { ref } from 'vue'

const showPhoto = ref(true)

const facts = [
  { label: 'Studie', value: 'Elektronica-ICT, Odisee' },
  { label: 'Regio', value: 'Gent, België' },
  { label: 'Focus', value: 'Laravel & Vue' },
  { label: 'Op zoek naar', value: 'Stage webontwikkeling' },
]
</script>

<template>
  <section id="about" class="section">
    <h2 class="section-label reveal from-left">Over mij</h2>

    <div class="about">
      <h3 class="quote reveal">
        Goede code<br />
        is helder<br />
        denken <span class="red">zichtbaar.</span>
      </h3>

      <div class="text reveal" style="--delay: 0.15s">
        <p>
          Ik ben Noah, student Elektronica-ICT aan Odisee. Ik bouw full-stack
          webapplicaties met een Laravel-backend en een Vue-frontend, en ik hou
          van projecten waar techniek een echt probleem oplost.
        </p>

        <dl class="facts">
          <div v-for="f in facts" :key="f.label">
            <dt class="small-caps">{{ f.label }}</dt>
            <dd>{{ f.value }}</dd>
          </div>
        </dl>
      </div>

      <div class="photo-wrap reveal from-right" style="--delay: 0.3s">
        <span class="bar"></span>
        <img
          v-if="showPhoto"
          src="/about.jpg"
          alt="Noah Di Silvio"
          @error="showPhoto = false"
        />
        <span v-else class="initials">ND</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 3rem;
  align-items: center;
}

.quote {
  font-size: clamp(2.5rem, 4.5vw, 3.8rem);
  line-height: 0.95;
}

.text p {
  color: #cfcfcf;
  font-size: 0.95rem;
  margin-top: 0;
}

.facts {
  margin: 1.5rem 0 0;
}

.facts div {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--border);
}

.facts dt { color: var(--muted); }
.facts dd { margin: 0; font-size: 0.85rem; text-align: right; }

.photo-wrap {
  position: relative;
  aspect-ratio: 4 / 5;
  background: var(--bg-soft);
  display: grid;
  place-items: center;
}

.bar {
  position: absolute;
  left: -0.75rem;
  top: 20%;
  width: 0.75rem;
  height: 45%;
  background: var(--red);
}

.photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.1);
  transition: filter 0.5s;
}

.photo-wrap:hover img { filter: grayscale(0); }

.initials {
  font-family: var(--display);
  font-size: 6rem;
  color: var(--border);
}

@media (max-width: 56.25rem) {
  .about { grid-template-columns: minmax(0, 1fr); }
  .photo-wrap { max-width: 20rem; margin-left: 0.75rem; }
}

@media (hover: hover) {
  .photo-wrap img {
    filter: grayscale(1) contrast(1.1);
    transition: filter 0.5s ease;
  }

  .photo-wrap:hover img {
    filter: none;
  }
}
</style>
