<script setup>
  import { computed } from "vue";
  import { useLikedCats } from "../composables/useLikedCats";
  import { RouterLink } from "vue-router";

  const { likedCats } = useLikedCats();

  const matchedCats = computed(() =>
    likedCats.value.filter((cat) => cat.isMatched)
  );

  console.log(matchedCats);
</script>

<template>
  <div class="sidebar-container">
    <div class="matches-container">
      <h3 class="list-header">😻Matches😻</h3>
      <div class="match-list-wrapper">
        <ul v-for="cat in matchedCats" :key="cat.id" class="list-matches">
          <li>
            <!-- :to="{ name: 'cat-profile', params: { id: cat.id } }" -->
            <RouterLink :to="`/cat/${cat.id}`">
              {{ cat.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <h3 class="list-footer">
        <font-awesome-icon icon="fa-solid fa-cat" class="icon" />
        CatTinder
        <font-awesome-icon
          :icon="['fas', 'cat']"
          flip="horizontal"
          class="icon"
        />
      </h3>
    </div>
  </div>
</template>

<style scoped>
  .sidebar-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 300px;
    background-color: var(--color-primary);
    border: 5px solid var(--color-background-ct);
    position: relative;
    overflow-y: auto;
  }

  .matches-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .match-list-wrapper {
    flex-grow: 1;
    overflow-y: auto;
  }

  .list-header {
    text-align: center;
    margin-top: 10px;
    border: 5px solid var(--color-background-ct);
    color: var(--color-background-ct);
    font-weight: bold;
    background-color: var(--color-secondary);
  }

  .list-matches {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .list-matches li {
    padding: 10px;
    border-bottom: 1px solid var(--color-background-ct);
    color: white;
  }

  .list-matches a {
    color: #fff;
    text-decoration: none;
  }

  .list-matches a:hover {
    text-decoration: underline;
  }

  .list-footer {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 5px solid var(--color-background-ct);
    color: var(--color-background-ct);
    font-weight: bold;
    background-color: var(--color-secondary);
  }
</style>
