<template>
  <header class="header"></header>

  <div class="content-wrapper">
    <!-- Video -->
    <div class="video-wrapper">
      <video class="video" autoplay muted loop playsinline>
        <source src="/demo.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- About Text -->
    <div class="text">
      <p class="tabbed">
        I am a creative and curious individual with a deep passion for art, design, and sustainable
        practices. From a young age, I’ve been drawn to crafting, sewing, and upcycling, finding joy
        in transforming everyday materials into something unique and meaningful.
      </p>

      <p class="tabbed">
        Alongside my love for hands on artistic creation, I am deeply fascinated by technology and
        digital design, particularly UI/UX design.
      </p>
    </div>
  </div>
</template>

<style scoped>
.header {
  margin-top: 1.5rem;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
}

/* ------------------------------
   Video wrapper fills container
------------------------------- */
.video-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 5px solid #f64187;
}

.video-wrapper .video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

/* ------------------------------
   Text
------------------------------- */
.text {
  width: 100%;
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
   Responsive adjustments
------------------------------- */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 0 0.75rem;
  }
  .tabbed {
    text-indent: 1.5rem;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    padding: 0 0.5rem;
  }
  .tabbed {
    text-indent: 1rem;
  }
}
</style>
