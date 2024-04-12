<script setup lang="ts">
  import Countries from "./components/CountriesComponent.vue";
  import Logo from "./assets/Logo.svg";

  // import { onMounted, ref} from "vue";

  // let dataform = ref()

  // onMounted(async() => {
  //     const response = await fetch("https://restcountries.com/v3.1/all?fields=flags,name,population,area,region,capital,subregion,languages,currencies,continents,borders");
  //     const data = await response.json()

  //     dataform.value = data
  // })
</script>

<template>
  <header>
      <img :src="Logo" alt="logo">
  </header>

  <Countries data="dataform"/>
</template>


