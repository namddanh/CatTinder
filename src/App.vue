<script setup>
  import { RouterView } from "vue-router";
  import SideBar from "./components/SideBar.vue";
  import NavBar from "./components/NavBar.vue";
  import "./assets/styles/variables.css";
</script>

<template>
  <!-- <NavBar /> -->
  <div class="layout">
    <SideBar />
    <main class="main-content">
      <!-- NOTE: SWITCHES BETWEEN CARD VIEW AND LIKED VIEWS -->
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
  .layout {
    display: flex;
    height: 100vh; /* Ensure the layout takes full viewport height */
  }

  .main-content {
    flex: 1; /* Occupy remaining space */
    overflow-y: auto; /* Enable scrolling if content overflows */
  }
</style>

<!-- <font-awesome-icon icon="fa-solid fa-user" class="icon" />
    <font-awesome-icon icon="fa-solid fa-sliders" class="icon" />
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" />
    <font-awesome-icon icon="fa-solid fa-paw" class="icon" />
    <font-awesome-icon icon="fa-solid fa-icons" class="icon" />
    <font-awesome-icon icon="fa-solid fa-heart" class="icon" /> -->
<!-- 😻 -->
