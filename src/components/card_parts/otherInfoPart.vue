
<template>
  <div>
    <span  >
      <img src="img/eye.png" alt="" />visibility
      <strong>{{ visibility / 1000 }} km</strong></span
    >
    <span
      ><img src="img/temperature.png" alt="" />feels like {{ Math.round(feelsLike - 273) }}<strong><sup> &#8451;</sup></strong
    ></span>
    <span>
      <img src="img/humidity.png" alt="" />humidity <strong> {{ humidity }}%</strong
    ></span>
    <span><img src="img/wind.png" alt="" />wind  <strong >{{ wind }} km/h</strong></span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
  
defineProps(['feels-like','wind','visibility','humidity'])
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4rem;
}
span{
  display: flex;
  align-items: center;
}
img {
  width: 1.5rem;
  vertical-align: text-bottom;
  margin-right: 7px;
}
</style>