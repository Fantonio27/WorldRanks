<script setup lang="ts">
  import Countries from "./components/CountriesComponent.vue";
  import Logo from "./assets/Logo.svg"
</script>

<template>
  <header>
      <img :src="Logo" alt="logo">
  </header>

  <Countries />
</template>


