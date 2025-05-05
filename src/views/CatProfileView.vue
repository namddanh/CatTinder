<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute, RouterLink } from "vue-router";
  import catsData from "../data/cats.json";

  const route = useRoute();
  const cat = ref(null);

  onMounted(() => {
    const catId = parseInt(route.params.id, 10);
    cat.value = catsData.find((c) => c.id === catId);
  });
</script>

<template>
  <div class="cat-profile">
    <div class="cat-profile-img"><img :src="cat?.img" alt="Cat Image" /></div>
    <div class="cat-profile-description">
      <h2>{{ cat?.name }}</h2>
      <p><strong>Age:</strong> {{ cat?.age }}</p>
      <p><strong>Location:</strong> {{ cat?.location }}</p>
      <p><strong>Bio:</strong> {{ cat?.bio }}</p>
    </div>
    <div class="go-back-home">
      <RouterLink :to="`/`"></RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .cat-profile {
    height: 100vh;
    width: 100%;
    padding: 20px;
    background-color: var(--color-background-ct);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .cat-profile img {
    height: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 5px solid var(--color-secondary);
    border-radius: 3%;
    margin-right: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }

  .cat-profile-description {
    height: 700px;
    width: 50%;
    margin-left: 5px;
    position: relative;
    flex-direction: column;
    overflow: hidden;
    border: 5px solid var(--color-secondary);
    border-radius: 3%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    color: var(--color-background-ct);
    background-color: var(--color-text-ct);
  }

  .go-back-home {
    background-color: brown;
    height: 300px;
    width: 100px;
    cursor: pointer;
    display: inline-block;
    content: "\00d7"; /* This will render the 'X' */
  }
</style>
