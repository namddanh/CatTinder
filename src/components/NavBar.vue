<template>
  <header class="cat-header">
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
</template>

<style scoped>
  .cat-header {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    background-color: var(--color-primary);
    color: var(--color-accent);
  }
</style>
