<script setup>
  const emit = defineEmits(["like", "dislike"]);

  const emitLike = () => {
    emit("like");
  };

  const emitDislike = () => {
    emit("dislike");
  };
</script>

<template>
  <div class="swiper-container">
    <div class="swiper-left" @click="emitDislike()">
      <font-awesome-icon icon="fa-solid fa-thumbs-down" class="icon" />
    </div>
    <div class="swiper-right" @click="emitLike()">
      <font-awesome-icon icon="fa-solid fa-heart" class="icon" />
    </div>
  </div>
</template>

<style scoped>
  .swiper-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 20px;
    font-size: 50px;
  }

  .swiper-left,
  .swiper-right {
    color: var(--color-primary);
    cursor: pointer;
    font-size: 50px;
    transition: transform 0.2s ease;
  }

  .swiper-left:hover,
  .swiper-right:hover {
    transform: scale(1.2);
  }
</style>
