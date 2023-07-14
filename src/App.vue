<template>
  <body>
    <header-com></header-com>
    <section>
     <base-card><card-com v-if="!isLoading && data" :weatherData="data"></card-com></base-card> 
      <adding-location v-if="!isLoading && data"></adding-location>
      <div v-if="isLoading">Loading...</div>
    </section>
  </body>
</template>

<script setup>
import { ref, onMounted } from "vue";
import headerCom from "./components/headerCom.vue";
import cardCom from "./components/cardCom.vue";
import addingLocation from "./components/addingLocation.vue";
import { getCurrentLocation, getWeatherThisCity } from "./functions/helper";

const data = ref(null);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const city = await getCurrentLocation();
    const storedData = JSON.parse(localStorage.getItem("data"));
    const responseData = await fetchWeatherData(city, storedData);
    if (shouldUpdateLocalStorage(storedData, responseData)) {
      localStorage.setItem("data", JSON.stringify(responseData));
    }
    data.value = responseData;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});

async function fetchWeatherData(city, storedData) {
  if (!storedData || JSON.stringify(storedData) !== JSON.stringify(data)) {
    return await getWeatherThisCity(city);
  }
  return storedData;
}

function shouldUpdateLocalStorage(storedData, responseData) {
  return (
    !storedData || JSON.stringify(storedData) !== JSON.stringify(responseData)
  );
}
</script>

<style>
:root {
  --black: #000;
  --white: #ffffff;
}
@import url(https://fonts.googleapis.com/css?family=Poppins:100,200,300,regular,500,600,700,800,900);
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-block-start: 0;
  margin-block-end: 0;
}
body {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #6531bd;
  font-size: 1rem;
  font-family: "Poppins";
  color: var(--white);
}
section {
  width: 60%;
  margin: 8rem auto;
  display: flex;
  gap: 2rem;
}
@media (max-width: 1024px) {
section {
  flex-direction: column;
}

}
</style>
