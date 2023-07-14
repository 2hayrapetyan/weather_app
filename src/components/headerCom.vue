
<template>
  <div>
    <img
      src="https://img.icons8.com/fluency/256/partly-cloudy-day.png"
      alt=""
    />
    <span>Weather app using Vue js</span>
  </div>
</template>
<script setup>

</script>

<style scoped>
div {
  background: rgba(255, 255, 255, 0.19);
  padding: 0.4rem 5rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  font-size: 3.5rem;
}
div img {
  width: 8rem;
  object-fit: cover;
  cursor: pointer;
}
@media (max-width: 1024px) {
div {
  font-size: 2rem;
}}
div img {
  width: 6rem;
}
</style>