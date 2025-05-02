<script setup></script>

<template>
  <header class="cat-header">
    <font-awesome-icon icon="fa-solid fa-user" class="icon" />

    <font-awesome-icon icon="fa-solid fa-sliders" class="icon" />
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" />
    <font-awesome-icon icon="fa-solid fa-paw" class="icon" />
    <font-awesome-icon icon="fa-solid fa-circle-right" class="icon" />
    <font-awesome-icon icon="fa-solid fa-circle-left" class="icon" />
    <!-- 😻 -->
    <h3>
      <font-awesome-icon
        icon="fa-solid fa-cat"
        class="icon"
      />CatTinder<font-awesome-icon icon="fa-solid fa-cat" class="icon" />
    </h3>
  </header>

  <div class="cat-preview-container">
    <div class="card-preview-card">
      <img
        class="cat-preview-img"
        src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
        alt=""
      />
      <div class="cat-preview-description">
        <div class="cat-preview-intro">
          <h3>
            Kip 3
            <font-awesome-icon icon="fa-solid fa-check-circle" class="icon" />
          </h3>
        </div>
        <div class="cat-preview-location">
          <h4>
            <font-awesome-icon icon="fa-solid fa-house" class="icon" />Lives in
            Toronto
          </h4>
          <h4>
            <font-awesome-icon icon="fa-solid fa-location-dot" class="icon" />
            27 km away
          </h4>
        </div>
        <div class="cat-preview-interests">
          <h3>
            <font-awesome-icon icon="fa-solid fa-paw" class="icon" />Interests
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cat-header {
    text-align: center;
    background-color: #a74c49;
    color: rgb(247 188 120);
  }

  .cat-preview-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: bisque;
  }

  .card-preview-card {
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
