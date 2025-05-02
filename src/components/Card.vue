<script setup>
  import { defineProps } from "vue";

  const { cats } = defineProps(["cats"]);
</script>

<template>
  <div v-for="cat in cats" :key="cat.id" class="cat-card">
    <img class="cat-preview-img" :src="cat.img" alt="" />
    <div class="cat-preview-description">
      <div class="cat-preview-intro">
        <h3>
          {{ cat.name }} {{ cat.age }}
          <font-awesome-icon icon="fa-solid fa-check-circle" class="icon" />
        </h3>
      </div>
      <div v-if="true" class="cat-preview-location">
        <h4>
          <font-awesome-icon icon="fa-solid fa-house" class="icon" />
          Lives in {{ cat.location }}
        </h4>
        <h4>
          <font-awesome-icon icon="fa-solid fa-location-dot" class="icon" />
          {{ Math.trunc(Math.random() * 70) }} km away
        </h4>
      </div>
      <div class="cat-preview-interests">
        <h4>
          <font-awesome-icon icon="fa-solid fa-icons" class="icon" />
          Interests
        </h4>
        <h4>Active Lifestyle, Ice Cream, Reading</h4>
      </div>
      <div class="cat-preview-height">
        <h4>
          <font-awesome-icon icon="fa-solid fa-ruler" class="icon" />
          30cm
        </h4>
      </div>
      <div class="cat-preview-looking-for">
        <h4>
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" />
          Looking for
        </h4>
        <h4>😻 Long term, open to short</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cat-card {
    display: flex;
    flex-direction: column;
    width: 750px;
    overflow: hidden;
    border-radius: 3%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }

  .cat-preview-container .cat-preview-img {
    height: 500px;
    width: 100%;
  }

  .cat-preview-description {
    align-self: left;
    text-align: left;
    padding: 10px;
    background-color: rgb(247 188 120);
  }

  .cat-preview-description h3,
  .cat-preview-description h4 {
    color: #a74c49;
    font-weight: bold;
  }
</style>
