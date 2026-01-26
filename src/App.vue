<template>
  <div id="app">
    <header class="header">
      <wa-tab
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: route.name === tab.name }"
        @click="goTo(tab.name)"
      >
        {{ tab.label }}
      </wa-tab>
    </header>

    <main class="content">
      <router-view />
    </main>
    <footer class="footer">
      <p>2026 Emily Krajic</p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const tabs = [
  { name: 'home', label: 'Home' },
  { name: 'art', label: 'Art' },
  { name: 'side', label: 'Upcycling' },
  { name: 'about', label: 'About' },
  { name: 'resume', label: 'Resume' },
];

function goTo(name) {
  if (route.name !== name) {
    router.push({ name });
  }
}
</script>

<style scoped>
/* ------------------------------
   Layout
------------------------------- */
#app {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  background-color: #fceaf0;
  display: flex;
  flex-direction: column;
}

/* ------------------------------
   Header & Tabs
------------------------------- */
.header {
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

wa-tab {
  cursor: pointer;
  color: #fbd3e1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  min-width: 80px;
  max-width: 200px;
  text-align: center;
  transition: color 0.2s;
  font-family: DM Serif Text;
  font-size: 1.1rem;
  font-weight: bold;
}

wa-tab:hover {
  color: #f64187;
}

wa-tab.active {
  color: #f64187;
  font-weight: bold;
}

/* ------------------------------
   Footer
------------------------------- */
footer.footer {
  background: #ffffff;
  color: #000000;
  text-align: center;
  font-size: 0.9rem;
}

/* ------------------------------
   Responsive Design
------------------------------- */
@media (max-width: 768px) {
  .header {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
  }

  wa-tab {
    flex: 1 1 45%; /* two tabs per row on mobile */
    min-width: 100px;
    padding: 0.5rem;
    font-size: 0.85rem;
  }

  footer.footer {
    font-size: 0.8rem;
    padding: 8px;
  }
}

@media (max-width: 480px) {
  wa-tab {
    flex: 1 1 100%; /* stack tabs vertically on very small screens */
    min-width: 0;
  }
}
</style>
