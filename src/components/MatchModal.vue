<script setup>
  import { defineProps } from "vue";

  const { matchedCat } = defineProps(["matchedCat"]);
</script>

<template>
  <div class="match-modal">
    <p>🎉You matched with {{ matchedCat.name }}!</p>
  </div>
</template>

<style scoped>
  .match-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border: 2px solid #a74c49;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }

  .match-modal p {
    color: black;
  }
</style>
