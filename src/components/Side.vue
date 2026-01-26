<template>
  <header class="header"></header>
  <!-- Class One -->
  <div class="gallery">
    <!-- Top main image -->
    <div class="hero">
      <img :src="MoodBoard" alt="MoodBoard" />
    </div>

    <div class="text">
      <p class="tabbed">
        Upcycling is the process of transforming old, worn, or unwanted clothing into new and unique
        garments. I am drawn to upcycling because it offers a creative and sustainable way to reduce
        textile waste and prevent usable materials from ending up in landfills. Instead of
        discarding clothing that has reached the end of its original life, upcycling allows me to
        reimagine and repurpose it into something fresh, functional, and meaningful. This process
        not only benefits the environment but also encourages individuality and creativity in
        fashion.
      </p>
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
    <!-- 4 images underneath -->
    <div class="images">
      <img v-for="i in 22" :key="i" :src="i % 2 === 0 ? HeadShot2 : HeadShot" alt="Gallery Image" />
    </div>

    <!-- Text -->
    <div class="text">
      <p class="tabbed">
        She's got a smile that it seems to me Reminds me of childhood memories Where everything was
        as fresh as the bright blue sky Now and then when I see her face She takes me away to that
        special place And if I stare too long, I'd probably break down and cry Whoa, oh, oh Sweet
        child o' mine Whoa, oh, oh, oh Sweet love of mine She's got eyes of the bluest skies As if
        they thought of rain I'd hate to look into those eyes and see an ounce of pain Her hair
        reminds me of a warm, safe place Where as a child I'd hide And pray for the thunder and the
        rain to quietly pass me by Whoa, oh, oh Sweet child o' mine Whoa whoa, oh, oh, oh Sweet love
        of mine Whoa, yeah Whoa, oh, oh, oh Sweet child o' mine Whoa, oh, whoa, oh Sweet love of
        mine Whoa, oh, oh, oh Sweet child o' mine Ooh, yeah Ooh, sweet love of mine Where do we go?
        Where do we go now? Where do we go? Ooh, oh, where do we go? Where do we go now? Oh, where
        do we go now? Where do we go? (Sweet child) Where do we go now? Ay, ay, ay, ay, ay, ay, ay,
        ay Where do we go now? Ah, ah Where do we go? Oh, where do we go now? Oh, where do we go?
        Oh, where do we go now? Where do we go? Oh, where do we go now? Now, now, now, now, now,
        now, now Sweet child Sweet child of mine
      </p>
      <p class="tabbed">
        She's got a smile that it seems to me Reminds me of childhood memories Where everything was
        as fresh as the bright blue sky Now and then when I see her face She takes me away to that
        special place And if I stare too long, I'd probably break down and cry Whoa, oh, oh Sweet
        child o' mine Whoa, oh, oh, oh Sweet love of mine She's got eyes of the bluest skies As if
        they thought of rain I'd hate to look into those eyes and see an ounce of pain Her hair
        reminds me of a warm, safe place Where as a child I'd hide And pray for the thunder and the
        rain to quietly pass me by Whoa, oh, oh Sweet child o' mine Whoa whoa, oh, oh, oh Sweet love
        of mine Whoa, yeah Whoa, oh, oh, oh Sweet child o' mine Whoa, oh, whoa, oh Sweet love of
        mine Whoa, oh, oh, oh Sweet child o' mine Ooh, yeah Ooh, sweet love of mine Where do we go?
        Where do we go now? Where do we go? Ooh, oh, where do we go? Where do we go now? Oh, where
        do we go now? Where do we go? (Sweet child) Where do we go now? Ay, ay, ay, ay, ay, ay, ay,
        ay Where do we go now? Ah, ah Where do we go? Oh, where do we go now? Oh, where do we go?
        Oh, where do we go now? Where do we go? Oh, where do we go now? Now, now, now, now, now,
        now, now Sweet child Sweet child of mine
      </p>
    </div>
  </div>
</template>

<script setup>
import HeadShot from '@/assets/Zion.png';
import MoodBoard from '@/assets/MoodBoard.png';
import HeadShot2 from '@/assets/Glacier.png';
</script>

<style scoped>
.header {
  margin-top: 1.5rem;
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
  border-radius: 0;
  border: 5px solid #f64187;
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
   Top Single Image / Hero
------------------------------- */
.hero {
  overflow: hidden;
  border: 5px solid #f64187;
}

.hero img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0;
  display: block;
  margin: 0;
}

/* ------------------------------
   4 Image Grid
------------------------------- */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  gap: 0;
  border: 5px solid #f64187;
}

.grid img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 0;
  margin: 0; /* flush with each other */
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

  .grid img,
  .hero img {
    padding: 0;
  }
}
</style>
