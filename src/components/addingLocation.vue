<template>
  <base-card class="add">
    <div class="plus" v-if="clicked">
      <button @click="changeClicked"><img src="img/plus.png" alt="" /></button>
      <p>add new location <br /><small>( city name )</small></p>
    </div>
    <div v-else>
      <form @submit.prevent="search" v-if="!isData">
        <input type="text" v-model="city" />
        <button class="search">search</button>
      </form>
      <cardCom v-else :weatherData="newCityData"> </cardCom>
      <button @click="deleteCity" v-show="isData" class="delete">delete</button>
    </div>
  </base-card>
</template>

<script setup>
import { computed, ref } from 'vue';
import { getWeatherThisCity } from '../functions/helper.js'
import cardCom from './cardCom.vue'


const city = ref('')
const newCityData = ref(null)
const clicked = ref(true)
const error = ref('')
const isData = computed(() =>{
  
  return newCityData.value !== null
})

function changeClicked() {
  clicked.value = false
}

function deleteCity() {
  newCityData.value = null
}
function search() {
  getWeatherThisCity(city.value)
  .then(res => {
        if(res !== null && res !== 'undefined') {
          newCityData.value = res
        }else{
         error.value = 'city not found'
        }
        city.value = ''
      })
}

</script>

<style scoped>
.add {
  position: relative;
  min-width: 400px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.plus {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
button {
  background: none;
  outline: none;
  border: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
}
.delete {
  position: absolute;
  bottom: 20px;
  right: 40%;
  cursor: pointer;
  border: 1px solid #afb4c8;
  padding: 0.3rem 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  font-size: 1.3rem;
}
.delete:hover {
  background: #afb4c8;
  color: black;
}
.search {
  padding: 0.3rem 1rem;
  background: green;
  border-radius: 0.6rem;
  margin-left: 1rem;
}
form input {
  padding: 0.3rem 1rem;
  font-family: inherit;
  font-size: inherit;
  border: none;
  outline: none;
  border-radius: 0.6rem;
}
img {
  background: #7564a4;
  padding: 50px;
  border-radius: 50%;
  transition: box-shadow 0.3s;
}
small {
  font-size: 0.9rem;
}
img:hover {
  box-shadow: 0 0 12px #e4e1ee;
  cursor: pointer;
}
p {
  font-size: 1.4rem;
}
@media (max-width: 1024px) {
  .delete {
  position: absolute;
  bottom: 10px;
  right: 40%;
  cursor: pointer;
  border: 1px solid #afb4c8;
  padding: 0.3rem 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  font-size: 1.3rem;
}
}
</style>
