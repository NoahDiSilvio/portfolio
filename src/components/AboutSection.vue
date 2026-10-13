<script setup lang="ts">
import { ref } from 'vue'

const showPhoto = ref(true)
const base = import.meta.env.BASE_URL

const facts = [
  { label: 'Studie', value: 'Elektronica-ICT, Odisee' },
  { label: 'Regio', value: 'Gent, België' },
  { label: 'Focus', value: 'Laravel & Vue' },
  { label: 'Graag bezig met', value: 'Backend & API’s' },
]

const hobbies = ['Voetbal', 'Muziek', 'Vrienden']
</script>

<template>
  <section id="about" class="section">
    <h2 class="section-label reveal from-left">Over mij</h2>

    <div class="about">
      <div class="photo-wrap reveal from-left" style="--delay: 0.1s">
        <span class="bar"></span>
        <img
          v-if="showPhoto"
          :src="`${base}about.jpg`"
          alt="Noah Di Silvio"
          @error="showPhoto = false"
        />
        <span v-else class="initials">ND</span>
      </div>

      <div class="content">
        <h3 class="quote reveal">
          Goede code is helder<br />
          denken <span class="red fun">zichtbaar.</span>
        </h3>

        <p class="intro reveal" style="--delay: 0.1s">
          Ik ben Noah, student Elektronica-ICT aan Odisee. Ik bouw full-stack
          webapplicaties met een Laravel-backend en een Vue-frontend, en ik hou
          van projecten waar techniek een echt probleem oplost.
        </p>

        <div class="details">
          <div class="reveal" style="--delay: 0.2s">
            <p class="label small-caps">In het kort</p>
            <dl class="facts">
              <div v-for="f in facts" :key="f.label">
                <dt class="small-caps">{{ f.label }}</dt>
                <dd>{{ f.value }}</dd>
              </div>
            </dl>
          </div>

          <div class="reveal" style="--delay: 0.3s">
            <p class="label small-caps">Buiten het scherm</p>
            <ul class="hobbies">
              <li v-for="hobby in hobbies" :key="hobby">{{ hobby }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(2.5rem, 5vw, 5rem);
  align-items: start;
}

.photo-wrap {
  position: relative;
  aspect-ratio: 4 / 5;
  margin-left: 0.75rem;
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
}

.initials {
  font-family: var(--display);
  font-size: 6rem;
  color: var(--border);
}

.quote {
  font-size: clamp(2.75rem, 5vw, 4.5rem);
  line-height: 0.92;
}

.intro {
  max-width: 38rem;
  margin: 1.75rem 0 0;
  color: #cfcfcf;
  font-size: 1rem;
}

.details {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.label {
  margin: 0 0 1rem;
  color: var(--muted);
}

.facts {
  margin: 0;
}

.facts div {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.55rem 0;
  border-bottom: 1px solid var(--border);
}

.facts div:first-child { padding-top: 0; }
.facts dt { color: var(--muted); }
.facts dd { margin: 0; font-size: 0.85rem; text-align: right; }

.hobbies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0;
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: var(--fun);
  font-size: clamp(1.75rem, 2.5vw, 2.25rem);
  line-height: 1.1;
  text-transform: none;
}

.hobbies li:not(:last-child)::after {
  content: '✦';
  margin: 0 0.6rem;
  color: var(--red);
  font-size: 0.6em;
  vertical-align: middle;
}

@media (hover: hover) {
  .photo-wrap img {
    filter: grayscale(1) contrast(1.1);
    transition: filter 0.5s ease;
  }

  .photo-wrap:hover img { filter: none; }
}

@media (max-width: 56.25rem) {
  .about { grid-template-columns: minmax(0, 1fr); }
  .photo-wrap { max-width: 20rem; }
}

@media (max-width: 37.5rem) {
  .details {
    grid-template-columns: minmax(0, 1fr);
    gap: 2rem;
  }
}
</style>
