<template>
  <header class="header"></header>
  <!-- Class One -->
  <div class="gallery">
    <!-- Top main image -->
    <div class="grid">
      <img
        v-for="i in 4"
        :key="i"
        :src="i % 2 === 0 ? HeadShot2 : HeadShot"
        :alt="'HeadShot ' + i"
      />
    </div>
    <div class="text">
      <p class="tabbed">Drawing</p>
      <p class="tabbed">
        She's got a smile that it seems to me Reminds me of childhood memories Where everything was
        as fresh as the bright blue sky Now and then when I see her face She takes me away to that
        special place And if I stare too long, I'd probably break down and cry Whoa, oh, oh Sweet
        child o' mine Whoa, oh, oh, oh Sweet love of mine She's got eyes of the bluest skies As if
        they thought of rain I'd hate to look into those eyes and see an ounce of pain Her hair
        reminds me of a warm, safe place Where as a child I'd hide And pray for the thunder and the
        rain to quietly pass me by Whoa, oh, oh Sweet child o' mine Whoa whoa, oh, oh, oh Sweet love
        of mine Whoa, yeah Whoa, oh, oh, oh Sweet child o' mine Whoa, oh, whoa, oh Sweet love of
        mine Whoa, oh, oh, oh
      </p>
    </div>
    <!-- 4 images underneath -->
    <div class="images">
      <img v-for="i in 22" :key="i" :src="i % 2 === 0 ? HeadShot2 : HeadShot" alt="Gallery Image" />
    </div>

    <!-- Text -->
    <div class="text">
      <p class="tabbed">Senior Studio</p>
      <p class="tabbed">
        She's got a smile that it seems to me Reminds me of childhood memories Where everything was
        as fresh as the bright blue sky Now and then when I see her face She takes me away to that
        special place And if I stare too long, I'd probably break down and cry Whoa, oh, oh Sweet
        child o' mine Whoa, oh, oh, oh Sweet love of mine She's got eyes of the bluest skies As if
        they thought of rain I'd hate to look into those eyes and see an ounce of pain Her hair
        reminds me of a warm, safe place Where as a child I'd hide And pray for the thunder and the
        rain to quietly pass me by Whoa, oh, oh Sweet child o' mine Whoa whoa, oh, oh, oh Sweet love
        of mine Whoa, yeah Whoa, oh, oh, oh Sweet child o' mine Whoa, oh, whoa, oh Sweet love of
        mine Whoa, oh, oh, oh
      </p>
    </div>
  </div>
</template>

<script setup>
import HeadShot from '@/assets/Zion.png';
import HeadShot2 from '@/assets/Glacier.png';
</script>

<style scoped>
.images {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 300px;
  grid-template-rows: 300px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  border-radius: 0;
  border: 5px solid #ef91b5;
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
.header {
  margin-top: 1.5rem;
}
/* ------------------------------
   Main Gallery Wrapper
------------------------------- */
.gallery {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  padding-top: 0;
}

/* ------------------------------
   4 Image Grid
------------------------------- */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  gap: 0;
  border: 5px solid #ef91b5;
}

.grid img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 0;
  margin: 0;
}

/* ------------------------------
   Text
------------------------------- */
.text {
  padding-top: 1rem;
  width: 100%;
  margin: 0;
  text-align: left;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.6;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
}
.tabbed {
  text-indent: 2em;
  margin-bottom: 1rem;
}

/* ------------------------------
   Mobile Layout
------------------------------- */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .grid img {
    padding: 0;
  }
}
</style>
