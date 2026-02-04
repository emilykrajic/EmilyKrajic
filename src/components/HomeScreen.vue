<template>
  <!-- Hero / Featured Image -->

  <img :src="HeadShot" alt="HeadShot" class="image" />

  <!-- Profile rectangle -->
  <div class="rectangle">
    <p class="bilbo-title">Emily Krajic</p>
    <p class="text">Studio Artist and UI/UX Developer</p>
  </div>

  <!-- Scrolling gallery -->
  <div class="images">
    <img v-for="i in 22" :key="i" :src="i % 2 === 0 ? HeadShot2 : HeadShot" alt="Gallery Image" />
  </div>
</template>

<script setup>
import HeadShot from '@/assets/Zion.png';
import HeadShot2 from '@/assets/Glacier.png';
</script>

<style scoped>
/* ------------------------------
   Hero Image
------------------------------- */

.image {
  width: 100%;
  height: 50vh;
  max-height: 400px;
  object-fit: cover;
  display: block;
  border-radius: 0;
}

/* ------------------------------
   Profile Rectangle
------------------------------- */
.rectangle {
  width: 100%;
  min-height: 30vh;
  max-height: 350px;
  background-color: #fff7fa;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  padding: 1rem;
}

.bilbo-title {
  font-family: 'Bilbo Swash Caps', cursive;
  font-size: clamp(2.5rem, 10vw, 7rem);
  margin: 0;
}

.text {
  font-size: clamp(0.85rem, 1.8vw, 1rem);
  font-family: 'Roboto Condensed', sans-serif;
}

/* ------------------------------
   Horizontal Scrolling Gallery
------------------------------- */
.images {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 200px;
  grid-template-rows: 150px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  border-radius: 0;
}

.images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  scroll-snap-align: start;
  display: block;
  border-radius: 0;
}

.images::-webkit-scrollbar {
  display: none;
}

/* ------------------------------
   Mobile: ONE scrolling row
------------------------------- */
@media (max-width: 480px) {
  .images {
    grid-template-rows: 80px;
    grid-auto-columns: 120px;
  }

  .bilbo-title {
    font-size: clamp(2rem, 10vw, 3rem);
  }

  .text {
    font-size: clamp(0.8rem, 3vw, 1rem);
  }
}
</style>
