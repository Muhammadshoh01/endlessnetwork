<template>
  <div class="grid-back">
    <div class="grid-container">
      <div
        class="grid-item"
        v-for="image in selectedEvent?.images"
        :key="image.id"
      >
        <img :src="image.url" alt="" class="w-full h-auto" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { clubsData } from "@/data/clubs";
const selectedClub = ref(null);
// const selectedEvent = selectedClub?.past_events.find(
//   (event) => event.id == route.params.id
// );
const selectedEvent = computed(() => {
  if (selectedClub.value?.past_events) {
    return selectedClub.value.past_events.find(
      (event) => event.id == route.params.id
    );
  }
  return null;
});
onMounted(() => {
  selectedClub.value = clubsData[route.params.club];
});
const route = useRoute();
</script>

<style lang="scss" scoped>
.grid-back {
  background-color: black;
  height: 100vh;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  background-color: black;
  padding: 1rem;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

.grid-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
