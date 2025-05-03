<script setup>
  import c from "./data/cats.json";
  import Card from "./components/Card.vue";
  import SwipeButtons from "./components/SwipeButtons.vue";
  import { ref, watch, computed } from "vue";

  const cats = ref(c); // cat infos
  console.log("c", c);
  console.log("cats", cats);
  console.log("cats.value", cats.value);
  console.log("cats.value[0]", cats.value[0]);
  console.log("cats.value.length", cats.value.length);
  const currentIndex = ref(0); // start with first cat
  const likedCats = ref([]);
  const dislikedCats = ref([]);

  const currentCat = computed(() => cats.value[currentIndex.value]); // provides the cat at the current position

  watch(currentCat, (newCat, oldCat) =>
    console.log(`Switch from ${oldCat} to ${newCat}`)
  ); // lets me know when we switch to a new cat

  console.log(currentIndex.value);
  console.log(cats.value.length - 1);

  const nextCat = () => {
    if (currentIndex.value < cats.value.length - 1) {
      currentIndex.value++;
    } else {
      alert("No more cats!");
    }

    // return currentCat.value < cats.value.length - 1
    //   ? currentIndex.value++
    //   : alert("No more cats!");

    // if (currentIndex.value > cats.value.length) return;
    // currentIndex.value++;
  };

  const swipeLeft = () => {
    dislikedCats.value.push(currentCat.value);
    nextCat();
  };

  const swipeRight = () => {
    likedCats.value.push(currentCat.value);
    nextCat();
  };
</script>

<template>
  <header class="cat-header">
    <font-awesome-icon icon="fa-solid fa-user" class="icon" />
    <font-awesome-icon icon="fa-solid fa-sliders" class="icon" />
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" />
    <font-awesome-icon icon="fa-solid fa-paw" class="icon" />
    <font-awesome-icon icon="fa-solid fa-icons" class="icon" />
    <font-awesome-icon icon="fa-solid fa-heart" class="icon" />
    <!-- 😻 -->
    <h3>
      <font-awesome-icon icon="fa-solid fa-cat" class="icon" />
      CatTinder
      <font-awesome-icon
        :icon="['fas', 'cat']"
        flip="horizontal"
        class="icon"
      />
    </h3>
  </header>

  <div class="cat-preview-container">
    <Card v-if="currentCat" :cat="currentCat" />
    <SwipeButtons @like="swipeRight" @dislike="swipeLeft" />
  </div>
</template>

<style scoped>
  .cat-header {
    text-align: center;
    background-color: #a74c49;
    color: rgb(247 188 120);
  }

  .cat-preview-container {
    height: 100vh;
    /* width: 100vw; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: bisque;
  }
</style>
