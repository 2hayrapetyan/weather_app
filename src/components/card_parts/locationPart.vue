 <template>
  <div>
    <img :src="icon" alt="" />
    <p>
      <span class="location">{{ city }}, <strong>{{ country }}</strong></span>
      <br /><span>{{ date }}</span>
    </p>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { getWeatherIconUrl } from "../../functions/helper.js";

const props = defineProps(["city", "country", "description", "date"]);

const icon = computed(() => {
  return getWeatherIconUrl(props.description);
});
</script>


<style scoped>
img {
  width: 4.5rem;
  display: block;
}
div {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
span {
  font-size: 1rem;
}
.location {
  font-size: 2rem;
}
</style>