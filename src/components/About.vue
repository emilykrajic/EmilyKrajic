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
        I am a creative and curious individual with a strong passion for art, design, and
        sustainable practices. From a young age, I have been drawn to hands-on making through
        crafting, sewing, and upcycling, finding fulfillment in transforming everyday materials into
        meaningful and innovative designs.
      </p>

      <p class="tabbed">
        Alongside my interest in physical design, I am deeply fascinated by technology and digital
        experiences, particularly UI/UX design. I enjoy exploring the intersection of creativity and
        functionality, using design to solve problems and enhance user interaction. I work well in
        collaborative environments, a skill developed through my experience playing collegiate
        lacrosse, which strengthened my communication, discipline, and teamwork abilities.
      </p>
      <p class="tabbed">
        I have technical skills in CSS, Java, and JavaScript, and hands-on experience working as a
        UI/UX development intern at Millennial Software Company. I have also worked at Joann
        Fabrics, where I gained practical knowledge of materials and customer-focused design. I am
        an adventurous and motivated learner who enjoys challenging myself with new tasks.
        Currently, I am seeking internships or opportunities to continue developing my skills and
        further my career as a web developer.
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
  justify-content: center; /* horizontal center */
  align-items: center;
  border: 5px solid #ef91b5;
  margin: 0 auto 1rem auto;
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
.content-wrapper {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
}

/* ------------------------------
   Text
------------------------------- */
.text {
  width: 100%;
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

/* ------------------------------
   Responsive adjustments
------------------------------- */
@media (max-width: 768px) {
  .content-wrapper {
    /* padding: 0 0.5rem; */
    width: 100%;
  }
  .tabbed {
    text-indent: 1.5rem;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    /* padding: 0 0.5rem; */
    width: 100%;
  }
  .tabbed {
    text-indent: 1rem;
  }
}
</style>
