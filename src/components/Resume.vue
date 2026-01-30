<template>
  <header class="header"></header>
  <div class="resume-container">
    <!-- Resume Image -->
    <img :src="resume" alt="resume" class="resume" />

    <!-- Rectangle with LinkedIn -->
    <div class="rectangle">
      <div class="text">
        <a
          href="https://www.linkedin.com/in/emily-krajic"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.linkedin.com/in/emily-krajic
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import resume from '@/assets/resume.png';
</script>

<style scoped>
.header {
  margin-top: 1.5rem;
}
/* ------------------------------
   Container
------------------------------- */
.resume-container {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  flex: 1;
}

/* ------------------------------
   Resume Image
------------------------------- */
.resume {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 2rem auto;
  object-fit: cover;
  border-radius: 0;
  padding: 0;
  border: 5px solid #ef91b5;
}

/* ------------------------------
   Rectangle with LinkedIn
------------------------------- */
.rectangle {
  width: 100%;
  min-height: 80px;
  max-height: 120px;
  background-color: #fae3ec;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0;
  margin-bottom: 2rem;
}

/* ------------------------------
   LinkedIn Text
------------------------------- */
.text a {
  color: #0077b5;
  text-decoration: none;
  font-weight: bold;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-family: 'Roboto Condensed', sans-serif;
}

.text a:hover {
  text-decoration: underline;
}

/* ------------------------------
   Mobile Adjustments
------------------------------- */
@media (max-width: 768px) {
  .rectangle {
    min-height: 70px;
    padding: 0.75rem;
    margin-bottom: 1.5rem;
  }
  .text a {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .rectangle {
    min-height: 60px;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
  .text a {
    font-size: 1rem;
  }
}
</style>
