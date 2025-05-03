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
    <div class="swiper-left" @click="emitLike()">
      <font-awesome-icon icon="fa-solid fa-circle-left" class="icon" />
    </div>
    <div class="swiper-right" @click="emitDislike()">
      <font-awesome-icon icon="fa-solid fa-circle-right" class="icon" />
    </div>
  </div>
</template>

<style scoped>
  .swiper-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 20px;
    color: #a74c49;
    font-size: 50px;
  }

  .swiper-left,
  .swiper-right {
    color: #a74c49;
    cursor: pointer;
    font-size: 50px;
    transition: transform 0.2s ease;
  }

  .swiper-left:hover,
  .swiper-right:hover {
    transform: scale(1.2);
  }
</style>
