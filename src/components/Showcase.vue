<template>
  <header class="header">
    <div class="tab-bar">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        class="tab"
        :class="{ active: activeTab === tab.name }"
        @click="activeTab = tab.name"
      >
        {{ tab.label }}
      </div>
    </div>
  </header>

  <div class="gallery">
    <component :is="activeComponent" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import TerrierExpo from './Showcase tabs/TerrierExpo.vue';
import SeniorStudio from './Showcase tabs/SeniorStudio.vue';
import SpringFashionShow from './Showcase tabs/SpringFashionShow.vue';

const tabs = [
  { name: 'Senior Studio', label: 'Senior Studio', component: SeniorStudio },
  { name: 'Terrier Expo', label: 'Terrier Expo', component: TerrierExpo },
  { name: 'Spring Fashion Show', label: 'Spring Fashion Show', component: SpringFashionShow },
];

const activeTab = ref('Terrier Expo');
const activeComponent = computed(() => tabs.find((t) => t.name === activeTab.value)?.component);
</script>

<style scoped>
.header {
  margin-top: 0rem;
  position: relative;
  background-color: #fceaf0;
}

.tab-bar {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  background-color: #fcdfe9;
  padding: 0.25rem 1rem;
}

.tab {
  font-family: 'DM Serif Text';
  font-weight: bold;
  font-size: 1rem;
  padding: 0.4rem 2rem;
  text-align: center;
  background: none;
  color: #ef91b5;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  border-radius: 4px;
}

.tab:hover {
  color: rgb(255, 108, 164);
}

.tab.active {
  color: rgb(255, 108, 164);
}

.gallery {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
}

.rectangle {
  width: 100%;
  min-height: 30vh;
  max-height: 350px;
  background-color: #fff7fa;
  border: 5px solid #ef91b5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
}
</style>
