<script setup lang="ts">
import { timeline } from '../data/timeline'
</script>

<template>
  <section id="timeline" class="section">
    <h2 class="section-label reveal from-left">Traject</h2>

    <ol class="timeline">
      <li v-for="(item, i) in timeline" :key="item.title" class="row reveal" :style="{ '--delay': i * 0.12 + 's' }">
        <div class="meta">
          <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="small-caps period">{{ item.period }}</span>
        </div>

        <div class="main">
          <span class="small-caps type" :class="{ stage: item.type === 'Stage' }">
            <span class="dot"></span> {{ item.type }}
          </span>
          <h3>{{ item.title }}</h3>
          <p class="place small-caps">{{ item.place }}</p>
        </div>

        <div class="details">
          <p>{{ item.description }}</p>
          <p v-if="item.tags" class="tags small-caps">{{ item.tags.join(' · ') }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
}

.row {
  display: grid;
  grid-template-columns: 10rem 1.2fr 1fr;
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--border);
  position: relative;
}

.row:first-child { padding-top: 0; }

.row::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 0;
  height: 1px;
  background: var(--red);
  transition: width 0.4s;
}

.row:hover::after { width: 100%; }

.meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.num {
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1;
  border-bottom: 1px solid var(--text);
  width: fit-content;
}

.period { color: var(--muted); }

.type {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--muted);
}

.type .dot { background: var(--muted); }
.type.stage { color: var(--red); }
.type.stage .dot { background: var(--red); }

h3 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
  margin: 0.5rem 0;
  transition: color 0.2s;
}

.row:hover h3 { color: var(--red); }

.place { color: var(--muted); margin: 0; }

.details p {
  font-size: 0.9rem;
  color: #cfcfcf;
  margin-top: 0;
}

.tags { color: var(--red); }

@media (max-width: 56.25rem) {
  .row { grid-template-columns: 1fr; gap: 1rem; }
  .meta { flex-direction: row; align-items: center; gap: 1rem; }
}
</style>
