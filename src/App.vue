<script setup lang="ts">
  import { onMounted, ref} from "vue";
  import Homepage from "./components/Homepage.vue";
  import CountryPage from "./components/CountryInfo.vue"
  import { WorldLists } from "./utils/methods"
  import { Country } from "./utils/type"
  import Logo from "./assets/Logo.svg";

  let dataform = ref<Country[]>([])
  let page = new URLSearchParams(window.location.search).get('country')

  onMounted(async() => {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=flags,name,population,area,region,capital,subregion,languages,currencies,continents,borders ,unMember");
      const data = await response.json()

      let filtered = WorldLists(page, data)
      setTimeout(()=> {dataform.value = filtered;}, 1000)
  })

</script>

<template>
  <header>
      <img :src="Logo" alt="logo">
  </header>
  <component :is="!page? Homepage :  CountryPage" :data="dataform"/>
</template>


