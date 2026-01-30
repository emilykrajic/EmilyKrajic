<template>
  <div id="app">
    <header class="header">
      <!-- Mobile / Small screen -->

      <template v-if="isMobile">
        <h1 class="page-title">{{ pageTitle }}</h1>
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
          <div class="drawer-footer">
            <img :src="DrawerPic" alt="Drawer Pic" class="DrawerPic" />
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
import DrawerPic from '@/assets/Drawer.png';

import { ref, computed, onMounted, onUnmounted } from 'vue';
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

const pageTitle = computed(() => {
  return router.currentRoute.value.meta.title || '';
});
function goTo(name) {
  if (route.name !== name) {
    router.push({ name });
  }
}

function navigate(name) {
  goTo(name);
  drawerOpen.value = false;
}

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
  background-color: #fff7fa;
  display: flex;
  flex-direction: column;
}
.DrawerPic {
  position: relative;
  width: 100%;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
  display: block;
}
.drawer-footer {
  margin-top: auto;
  padding-left: 3rem;
  text-align: center;
}
.page-title {
  font-family: 'Bilbo Swash Caps', cursive;
  position: absolute;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1rem;
  font-size: 2rem;
  color: #ef91b5;
  pointer-events: none;
  font-weight: normal;
}

/* ------------------------------
   Header & Tabs
------------------------------- */
.header {
  position: relative;
  align-items: center;
  background-color: #fceaf0;
  align-items: center;
}

.tab-bar {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  background-color: #fceaf0;
  padding: 0.5rem 1rem;
}
.tab {
  font-family: 'DM Serif Text';
  font-weight: bold;
  font-size: 1rem;
  padding: 0.75rem 4rem;
  text-align: center;
  color: #fbd3e1;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;
  border-radius: 4px;
}

.tab:hover {
  background-color: #fceaf0;
  color: #ef91b5;
}

.tab.active {
  color: #ef91b5;
  background-color: #fceaf0;
}

/* ------------------------------
   Drawer
------------------------------- */
/* Hamburger */

button.hamburger {
  position: relative;
  left: 0.5rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #ef91b5;
}
.hamburger {
  position: fixed;
  color: #ef91b5;
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
  color: #ef91b5;
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
  font-size: 1.3rem;
  padding: 3rem 0rem;
  text-align: left;
  color: #fbd3e1;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;
}

.drawer-tab:hover {
  background-color: #fceaf0;
  color: #ef91b5;
}

.drawer-tab.active {
  color: #ef91b5;
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
