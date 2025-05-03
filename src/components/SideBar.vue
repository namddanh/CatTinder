<script setup></script>

<template>
  <div class="sidebar-container">
    <div class="matches-container">
      <h3 class="list-header">😻Matches😻</h3>
      <li class="list-matches">
        <ol></ol>
      </li>
    </div>
  </div>
</template>

<style scoped>
  .sidebar-container {
    height: 100vh;
    width: 300px;
    background-color: #a74c49;
    border: 5px solid bisque;
    position: absolute;
  }

  h3 {
    text-align: center;
    margin-top: 10px;
    border: 5px solid bisque;
    color: rgb(112, 78, 40);
    font-weight: bold;
    background-color: #dd7572;
  }
</style>
