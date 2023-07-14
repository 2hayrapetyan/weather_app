<template>
  <p>
    <span>{{ Math.round(temperature - 273) }}<sup> &#8451;</sup></span>
    <br /><small>{{ description }}</small>
  </p>
</template>


<script setup>
import { defineProps } from 'vue';

defineProps(['temperature','description'])

</script>
<style scoped>
sup {
  font-size: 2rem;
}
span {
  font-size: 7rem;
}
p {
  margin-bottom: 1rem;
}
</style>