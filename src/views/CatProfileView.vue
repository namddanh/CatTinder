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
      <h2>Name: {{ cat?.name }}</h2>
      <h2><strong>Age:</strong> {{ cat?.age }}</h2>
      <h2><strong>Location:</strong> {{ cat?.location }}</h2>
      <h2><strong>Bio:</strong> {{ cat?.bio }}</h2>
    </div>

    <RouterLink to="/">
      <button class="go-back-home">
        <span class="back"></span>
        <span class="front"></span>
      </button>
    </RouterLink>
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
    text-align: center;
    height: 700px;
    width: 50%;
    margin-left: 5px;
    position: relative;
    flex-direction: column;
    overflow: hidden;
    border-radius: 3%;
    border: 5px solid var(--color-secondary);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    color: var(--color-background-ct);
    background-color: var(--color-text-ct);
  }

  /* .go-back-home {
    background-color: var(--color-urgent);
    height: 300px;
    width: 100px;
    cursor: pointer;
    display: inline-block;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  } */

  .go-back-home {
    --primary: 255, 90, 120;
    --secondary: 150, 50, 60;
    width: 60px;
    height: 50px;
    border: none;
    outline: none;
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    outline: 10px solid rgb(var(--primary), 0.5);
    border-radius: 100%;
    position: relative;
    margin-left: 25px;
    margin-right: 25px;
    transition: 0.3s;
  }

  .go-back-home .back {
    background: rgb(var(--secondary));
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .go-back-home .front {
    background: linear-gradient(
      0deg,
      rgba(var(--primary), 0.6) 20%,
      rgba(var(--primary)) 50%
    );
    box-shadow: 0 0.5em 1em -0.2em rgba(var(--secondary), 0.5);
    border-radius: 100%;
    position: absolute;
    border: 1px solid rgb(var(--secondary));
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: inherit;
    transform: translateY(-15%);
    transition: 0.15s;
    color: rgb(var(--secondary));
  }

  .go-back-home:active .front {
    transform: translateY(0%);
    box-shadow: 0 0;
  }
</style>
