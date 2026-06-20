// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import HomeScreen from '../components/Home.vue'
import Resume from '../components/Resume.vue'
import Art from '../components/Studio.vue'
import Fashion from '../components/Fashion.vue'
import About from '../components/About.vue'
import Showcases from '../components/Showcase.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeScreen,
    meta: { title: 'Home' }
  },
    {
    path: '/showcases',
    name: 'showcases',
    component: Showcases,
    meta: { title: 'Showcases' }
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
    component: Art,
    meta: { title: 'Studio Art' }
  },
  {
    path: '/fashion',
    name: 'fashion',
    component: Fashion,
    meta: { title: 'Fashion Design' }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { title: 'About Me' }
  }
]

const router = createRouter({
  history: createWebHistory('/EmilyKrajic/'),
  routes,

  scrollBehavior() {
    return { top: 0 }
  }
})

export default router



