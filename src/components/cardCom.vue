
<template>
    <location-part
      :city="city"
      :country="country"
      :description="description"
      :date="date"
    ></location-part>
    <degree-com
      :temperature="temperature"
      :description="description"
    ></degree-com>
    <other-info-part
      :wind="wind"
      :feels-like="feelsLike"
      :humidity="humidity"
      :visibility="visibility"
    ></other-info-part>
    <span style="display: flex; justify-content: space-between;">
      <img src="img/prev.png" alt="" @click="currentIndex--" />
      <img src="img/next.png" alt="" @click="currentIndex++" />
    </span>
</template>

<script setup>
import { ref, defineProps, onMounted, watch } from 'vue';
import otherInfoPart from "./card_parts/otherInfoPart.vue";
import degreeCom from "./card_parts/degreeCom.vue";
import locationPart from "./card_parts/locationPart.vue";

const props = defineProps({
  weatherData: Object
});

const city = ref(null);
const country = ref(null);
const description = ref(null);
const temperature = ref(null);
const visibility = ref(null);
const humidity = ref(null);
const wind = ref(null);
const feelsLike = ref(null);
const date = ref('');
const currentIndex = ref(0);

function addData() {
  const data = props.weatherData.list[currentIndex.value];
  city.value = props.weatherData.city.name;
  country.value = props.weatherData.city.country;
  description.value = data.weather[0].main;
  temperature.value = data.main.temp;
  visibility.value = data.visibility;
  humidity.value = data.main.humidity;
  feelsLike.value = data.main.feels_like;
  wind.value = data.wind.speed;
  date.value = data.dt_txt;
}

watch(currentIndex, () => {
  addData();
});

onMounted(() => {
  addData();
});
</script>

