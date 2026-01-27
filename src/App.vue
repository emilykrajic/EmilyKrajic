<template>
  <div id="app">
    <header class="header">
      <!-- Mobile / Small screen -->
      <template v-if="isMobile">
        <!-- Hamburger button -->
        <button class="hamburger" @click="drawerOpen = true">☰</button>

        <!-- Custom drawer -->
        <div class="custom-drawer" :class="{ open: drawerOpen }">
          <div class="drawer-body">
            <button
              v-for="tab in tabs"
              :key="tab.name"
              :class="['drawer-tab', { active: route.name === tab.name }]"
              @click="navigate(tab.name)"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Overlay -->
        <div class="drawer-overlay" v-if="drawerOpen" @click="drawerOpen = false"></div>
      </template>

      <!-- Desktop tabs -->
      <template v-else>
        <div class="tab-bar">
          <div
            v-for="tab in tabs"
            :key="tab.name"
            class="tab"
            :class="{ active: route.name === tab.name }"
            @click="goTo(tab.name)"
          >
            {{ tab.label }}
          </div>
        </div>
      </template>
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
import { ref, onMounted, onUnmounted } from 'vue';
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

const drawerOpen = ref(false);
const isMobile = ref(false);

function goTo(name) {
  if (route.name !== name) {
    router.push({ name });
  }
}

function navigate(name) {
  goTo(name);
  drawerOpen.value = false;
}

// screen size detection
function checkScreen() {
  isMobile.value = window.innerWidth <= 900;
}

onMounted(() => {
  checkScreen();
  window.addEventListener('resize', checkScreen);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreen);
});
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
  background-color: #fceaf0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

/* ------------------------------
   Desktop Tabs (match drawer style)
------------------------------- */
/* ------------------------------
   Horizontal Desktop Tabs
------------------------------- */
.tab-bar {
  display: flex; /* horizontal layout */
  justify-content: center; /* center tabs in header */
  gap: 0.5rem; /* spacing between tabs */
  background-color: #fceaf0; /* same as header */
  padding: 0.5rem 1rem;
}

/* Individual tab */
.tab {
  font-family: 'DM Serif Text';
  font-weight: bold;
  font-size: 1rem;
  padding: 0.75rem 4rem; /* adjust vertical/horizontal padding for horizontal layout */
  text-align: center; /* center text horizontally */
  color: #fbd3e1;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;
  border-radius: 4px; /* optional: rounded corners like buttons */
}

.tab:hover {
  background-color: #fceaf0;
  color: #f64187;
}

.tab.active {
  color: #f64187;
  background-color: #fceaf0;
}

/* ------------------------------
   Drawer
------------------------------- */
/* Hamburger */
.hamburger {
  top: 0.5rem;
  left: 0.5rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #f64187;
}

/* Custom drawer */
.custom-drawer {
  position: fixed;
  top: 0;
  left: -260px;
  width: 260px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: left 0.3s ease;
  z-index: 200;
}

.custom-drawer.open {
  left: 0;
}

/* Drawer overlay */
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 150;
}

/* Drawer header */
.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-family: 'DM Serif Text';
  font-weight: bold;
  font-size: 1.1rem;
  color: #f64187;
  border-bottom: 1px solid #fbd3e1;
}

/* Drawer body / tabs */
.drawer-body {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.drawer-tab {
  font-family: 'DM Serif Text';
  font-weight: bold;
  font-size: 1rem;
  padding: 2rem 0rem;
  text-align: left;
  color: #fbd3e1;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;
}

.drawer-tab:hover {
  background-color: #fceaf0;
  color: #f64187;
}

.drawer-tab.active {
  color: #f64187;
  background-color: #fceaf0;
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
    min-width: 100px;
    padding: 0.5rem;
    font-size: 0.85rem;
  }

  footer.footer {
    font-size: 0.8rem;
    padding: 8px;
  }
}

@media (max-width: 100px) {
  wa-tab {
    min-width: 30px;
    padding: 0.5rem;
    font-size: 0.85rem;
  }
}
</style>
