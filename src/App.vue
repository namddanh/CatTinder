<script setup>
  import { RouterView } from "vue-router";
  import SideBar from "./components/SideBar.vue";
  import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />

  <SideBar />

  <!-- NOTE: SWITCHES BETWEEN CARD VIEW AND LIKED VIEWS -->
  <RouterView />
</template>

<style scoped></style>

<!-- <font-awesome-icon icon="fa-solid fa-user" class="icon" />
    <font-awesome-icon icon="fa-solid fa-sliders" class="icon" />
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" />
    <font-awesome-icon icon="fa-solid fa-paw" class="icon" />
    <font-awesome-icon icon="fa-solid fa-icons" class="icon" />
    <font-awesome-icon icon="fa-solid fa-heart" class="icon" /> -->
<!-- 😻 -->
