<template>
  <header class="header"></header>
  <div class="gallery">
    <div class="rectangle">
      <p class="textCenter">Senior Studio - Coming Soon!</p>
    </div>
  </div>
</template>

<script setup></script>

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
</style>
