// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import HomeScreen from '../components/HomeScreen.vue'
import Resume from '../components/Resume.vue'
import ArtWork from '../components/ArtWork.vue'
import SideProject from '../components/Side.vue'
import About from '../components/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeScreen,
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume,
  },
  {
    path: '/art',
    name: 'art',
    component: ArtWork,
  },
  {
    path: '/side',
    name: 'side',
    component: SideProject,
  },
  {
    path: '/homescreen',
    name: 'homescreen',
    component: HomeScreen,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return { top: 0 }
  }
})

export default router



