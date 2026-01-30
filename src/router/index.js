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
    meta: { title: 'Home' }
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume,
    meta: { title: 'Resume' }
  },
  {
    path: '/art',
    name: 'art',
    component: ArtWork,
    meta: { title: 'Studio Art' }
  },
  {
    path: '/side',
    name: 'side',
    component: SideProject,
    meta: { title: 'Upcycling Projects' }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { title: 'About Me' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return { top: 0 }
  }
})

export default router



