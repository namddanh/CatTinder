<script setup>
  import c from "../data/cats.json";
  import Card from "../components/Card.vue";
  import SwipeButtons from "../components/SwipeButtons.vue";
  import MatchModal from "../components/MatchModal.vue";
  import { ref, watch, computed, onMounted } from "vue";

  const cats = ref(c); // cat infos
  const currentIndex = ref(0); // start with first cat
  const likedCats = ref([]);
  const dislikedCats = ref([]);
  const showMatchModal = ref(false);
  const matchedCat = ref({});

  const currentCat = computed(() => cats.value[currentIndex.value]); // provides the cat at the current position

  // Save to localStorage whenever likedCats changes
  watch(
    likedCats,
    () => {
      localStorage.setItem("likedCats", JSON.stringify(likedCats.value));
    },
    { deep: true }
  );

  // Load from localStorage on component mount
  onMounted(() => {
    const stored = localStorage.getItem("likedCats");
    if (stored) likedCats.value = JSON.parse(stored);
  });

  const nextCat = () => {
    if (currentIndex.value < cats.value.length - 1) {
      currentIndex.value++;
    } else {
      alert("No more cats!");
    }
  };

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
    /* width: 100vw; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: bisque;
  }
  h1 {
    color: black;
  }
</style>
