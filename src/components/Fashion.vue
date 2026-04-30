<template>
  <header class="header"></header>

  <div class="gallery">
    <div class="text">
      <p class="tabbed">
        My creative process begins with sketching my design ideas, allowing me to visualize how
        different garments and materials can be transformed. Drawing helps me plan details such as
        silhouettes, textures, and construction before I begin working with fabric. After developing
        my designs, I carefully select clothing to upcycle from thrift stores as well as items from
        my own closet. I look for pieces with interesting fabrics, colors, or structural elements
        that can be reused in new ways. By combining thoughtful design with sustainable sourcing, I
        am able to create one-of-a-kind garments that reflect both creativity and environmental
        responsibility.
      </p>
    </div>

    <div class="fashion-scroll">
      <img :src="MoodBoard3" alt="Fashion1" />
    </div>
    <p>Winter 2025</p>

    <div class="text">
      <p class="tabbed">
        This collection was created entirely from upcycled materials, with a focus on reimagining
        garments that already had a past. I enjoy the challenge and creativity involved in
        transforming something worn or forgotten into something new and wearable. My favorite piece
        in the collection is the blue ruffled romper. I was drawn to the contrast between the stiff
        denim fabric and the soft, playful movement of the ruffles. The body of the romper was
        constructed from a pair of old jeans, while the ruffles were made using leftover denim
        scraps, allowing nothing to go to waste. Another favorite look from the collection is the
        black-and-white shorts and top set, which was designed from a single pair of pants. This
        piece highlights how one garment can be completely reworked into multiple forms. Overall,
        this collection demonstrates the versatility of clothing and the many possibilities that
        exist through upcycling.
      </p>
    </div>

    <div class="rectangle">
      <p class="textCenter">Coming Soon!</p>
    </div>
    <p>Summer 2026</p>
    <div class="text">
      <p class="tabbed">
        My next collection, Nurture Nature, explores the relationship between clothing waste and its
        impact on the environment. The collection focuses on transforming upcycled and secondhand
        materials into garments that reflect different elements of the natural world. In this work,
        discarded clothing becomes a symbol of environmental deterioration caused by fashion waste.
        Each piece is designed to resemble organic forms found in nature, including soil, ocean
        foam, sunlight, and clouds. I plan to use materials such as lace and recycled cotton, along
        with free-motion embroidery, to create texture, movement, and depth within the garments.
        Through Nurture Nature, I aim to present a more fashion-forward approach to sustainability,
        highlighting how environmental awareness and innovative design can coexist.
      </p>
    </div>

    <div class="carousel-wrapper">
      <div class="carousel-track" ref="track">
        <div class="carousel-slide">
          <img :src="MoodBoard2" alt="MoodBoard2" />
        </div>
        <div class="carousel-slide">
          <img :src="MoodBoard" alt="MoodBoard" />
        </div>
      </div>
      <div class="carousel-dots">
        <span
          v-for="(_, i) in 2"
          :key="i"
          class="dot"
          :class="{ active: currentIndex === i }"
          @click="scrollToSlide(i)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import MoodBoard from '../assets/MoodBoard.png';
import MoodBoard2 from '../assets/MoodBoard2.png';
import MoodBoard3 from '../assets/Fashion1.png';

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
const imageFiles = [
  'IMG_7528.JPG',
  'IMG_7557.JPG',
  'IMG_7636.JPG',
  'IMG_7665.JPG',
  'IMG_7596.JPG',
  'IMG_7637.JPG',
  'IMG_7657.JPG',
  'IMG_7567.JPG',
  'IMG_7532.JPG',
  'IMG_7634.JPG',
  'IMG_7543.JPG',
];
const cycleImages = imageFiles.map((file) => new URL(`../assets/${file}`, import.meta.url).href);
</script>

<style scoped>
.header {
  margin-top: 1.5rem;
}

.gallery {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
}
.gallery > p {
  margin: 0;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: clamp(0.85rem, 1.8vw, 1rem);
}
/* Text */
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
.text {
  padding-top: 0;
  padding-bottom: 1rem;
  width: 100%;
  margin: 0;
  text-align: left;
  font-size: clamp(0.85rem, 1.8vw, 1rem);
  line-height: 1.6;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
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

/* Rectangle */
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

/* Grid / Hero (kept in case used elsewhere) */
.hero {
  overflow: hidden;
  border: 5px solid #ef91b5;
}
.hero img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 5px solid #ef91b5;
}
.grid img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.images {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 300px;
  grid-template-rows: 300px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  border: 5px solid #ef91b5;
}
.images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  scroll-snap-align: start;
  display: block;
}
.images::-webkit-scrollbar {
  display: none;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
