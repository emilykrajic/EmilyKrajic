<template>
  <header class="header"></header>

  <div class="gallery">
    <div class="carousel-wrapper">
      <div class="carousel-track" ref="track">
        <div class="carousel-slide">
          <img :src="Expo1" alt="Expo1" />
        </div>
        <div class="carousel-slide">
          <img :src="Expo2" alt="Expo2" />
        </div>
        <div class="carousel-slide">
          <img :src="Expo5" alt="Expo5" />
        </div>
        <div class="carousel-slide">
          <img :src="Expo4" alt="Expo4" />
        </div>
      </div>
      <div class="carousel-dots">
        <span
          v-for="(_, i) in 4"
          :key="i"
          class="dot"
          :class="{ active: currentIndex === i }"
          @click="scrollToSlide(i)"
        />
      </div>
    </div>
    <div class="text">
      <p class="tabbed">
        On April 17, 2026, I was selected to participate in the Terrier Expo, where I presented my
        project titled “Renewed Threads.” This presentation showcased the work I have developed over
        the past year, with a focus on upcycling and sustainable design. 
             <p class="tabbed"> As part of my display, I
        created a design board featuring illustrations, material experiments, and process work that
        highlighted the evolution of my ideas. I also wore a romper that I designed and constructed
        from upcycled denim, along with additional upcycled accessories to fully embody the concept.
        </p>
         <p class="tabbed">
        My presentation was interactive, allowing viewers to engage directly with my work. Attendees
        were encouraged to ask questions, discuss my process, and physically interact with the
        pieces, creating a more immersive and personal experience.
      </p>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Expo1 from '@/assets/TerrierExpo1.JPG';
import Expo2 from '@/assets/TerrierExpo2.JPG';
import Expo4 from '@/assets/TerrierExpo4.JPG';
import Expo5 from '@/assets/TerrierExpo5.JPG';
// Carousel
const track = ref(null);
const currentIndex = ref(0);

function scrollToSlide(index) {
  const slide = track.value?.children[index];
  slide?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
}

function onScroll() {
  if (!track.value) return;
  currentIndex.value = Math.round(track.value.scrollLeft / track.value.offsetWidth);
}

onMounted(() => track.value?.addEventListener('scroll', onScroll));
onBeforeUnmount(() => track.value?.removeEventListener('scroll', onScroll));

// Images
</script>

<style scoped>
.header {
  margin-top: 1.5rem;
}

.text {
  padding-top: 1rem;
  width: 100%;
  margin: 0;
  text-align: left;
  font-size: clamp(0.85rem, 1.8vw, 1rem);
  line-height: 1.6;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
}
.tabbed {
  text-indent: 2em;
  margin-bottom: 1rem;
}

/* Fashion scroll */
.fashion-scroll {
  width: 100%;
  height: 250px;
  overflow-x: auto;
  overflow-y: hidden;
  border: 5px solid #ef91b5;
  box-sizing: border-box;
  scrollbar-width: none;
}
.fashion-scroll::-webkit-scrollbar {
  display: none;
}
.fashion-scroll img {
  height: 100%;
  width: auto;
  min-width: 1500px;
  display: block;
  object-fit: cover;
}

/* Carousel */
/* Remove border from wrapper */
.carousel-wrapper {
  position: relative;
  box-sizing: border-box;
}

.carousel-track {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  border: 5px solid #ef91b5;
  height: clamp(280px, 55vw, 600px); /* ← replaces height: 600px */
}
.carousel-track::-webkit-scrollbar {
  display: none;
}
.carousel-slide {
  flex: 0 0 100%;
  scroll-snap-align: start;
}
.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0;
}
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 12px 0;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
  transition: background 0.2s;
}
.dot.active {
  background: #ef91b5;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
