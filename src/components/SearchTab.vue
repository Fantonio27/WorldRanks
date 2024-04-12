<script setup lang="ts">
  import Icon from "../assets/Search.svg"
</script>

<template>
  <div class="searchTab">
    <h2>Found 234 countries</h2>
    
    <div class="inputContainer">
      <img :src="Icon" alt="">
      <input class="form-control form-control-md" type="text" placeholder="Search by Name, Region, Subregion">
    </div>
  </div>
</template>
