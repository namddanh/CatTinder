<script setup>
  import c from "../data/cats.json";
  import Card from "../components/Card.vue";
  import SwipeButtons from "../components/SwipeButtons.vue";
  import MatchModal from "../components/MatchModal.vue";
  import { ref, computed } from "vue";
  import { useLikedCats } from "../composables/useLikedCats";

  const cats = ref(c); // cat infos
  const currentIndex = ref(0); // start with first cat
  const { likedCats } = useLikedCats(); // using composable
  const dislikedCats = ref([]);
  const showMatchModal = ref(false);
  const matchedCat = ref({});
  const currentCat = computed(() => cats.value[currentIndex.value]); // provides the cat at the current position

  const swipeLeft = () => {
    dislikedCats.value.push(currentCat.value);
    nextCat();
  };

  const swipeRight = () => {
    const cat = currentCat.value;
    likedCats.value.push(cat);

    if (cat.isMatched) {
      showMatchModal.value = true;
      matchedCat.value = cat;
    } else showMatchModal.value = false;

    nextCat();
  };

  const nextCat = () => {
    if (currentIndex.value < cats.value.length - 1) {
      currentIndex.value++;
    } else {
      alert("No more cats!");
    }
  };
</script>

<template>
  <div class="cat-preview-container">
    <Card v-if="currentCat" :cat="currentCat" />
    <SwipeButtons @like="swipeRight" @dislike="swipeLeft" />
    <MatchModal v-if="showMatchModal" :matchedCat="matchedCat" />
  </div>
</template>

<style scoped>
  .cat-preview-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background-ct);
    flex: 1; /* Fills remaining space */
    overflow: auto;
  }
  h1 {
    color: #000;
  }
</style>
