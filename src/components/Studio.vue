<template>
  <header class="header"></header>
  <!-- Class One -->
  <div class="gallery">
    <img :src="StudioArt1" alt="Studio Art" class="studio-img" />
    <div class="text">
      <p class="tabbed">
        In Drawing One, I created a piece inspired by the struggles of being a woman. These
        challenges include societal pressures to conform to an “ideal” figure, as well as the
        difficulty of choosing clothing that effectively conveys one’s identity and personal
        message. For this assignment, which focused on developing an archipelago installation, I
        expanded upon my still life drawing skills by creating multiple “islands,” each contributing
        to the overall narrative. Through this arrangement, I aimed to visually communicate the
        complexity and fragmentation of these experiences. Additionally, I designed the installation
        to evoke the feeling of entering a woman’s personal space. By doing so, I sought to immerse
        the viewer in an intimate environment that reflects both the internal and external pressures
        women face.
      </p>
    </div>
    <div class="rectangle">
      <p class="textCenter">Coming Soon!</p>
    </div>
    <!-- Text -->
    <div class="text">
      <!-- <p class="tabbed">
        She's got a smile that it seems to me Reminds me of childhood memories Where everything was
        as fresh as the bright blue sky Now and then when I see her face She takes me away to that
        special place And if I stare too long, I'd probably break down and cry Whoa, oh, oh Sweet
        child o' mine Whoa, oh, oh, oh Sweet love of mine She's got eyes of the bluest skies As if
        they thought of rain I'd hate to look into those eyes and see an ounce of pain Her hair
        reminds me of a warm, safe place Where as a child I'd hide And pray for the thunder and the
        rain to quietly pass me by Whoa, oh, oh Sweet child o' mine Whoa whoa, oh, oh, oh Sweet love
        of mine Whoa, yeah Whoa, oh, oh, oh Sweet child o' mine Whoa, oh, whoa, oh Sweet love of
        mine Whoa, oh, oh, oh
      </p> -->
    </div>
  </div>
</template>

<script setup>
import StudioArt1 from '@/assets/StudioArt1.png';
import StudioArt2 from '@/assets/StudioArt1.png';
</script>

<style scoped>
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
.studio-img {
  width: 100%;
  height: 650px;
  object-fit: cover;
  display: block;
  border: 5px solid #ef91b5;
  border-radius: 0;
  margin: 0 auto;
}

.studio-img::-webkit-scrollbar {
  display: none;
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
  font-size: clamp(0.85rem, 1.8vw, 1rem);
  line-height: 1.6;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
}
.textCenter {
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
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
  .studio-img {
    width: 100%;
    height: 400px;
  }

  .grid img {
    padding: 0;
  }
}
</style>
