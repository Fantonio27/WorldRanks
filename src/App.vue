<script setup lang="ts">
  import Homepage from "./components/Homepage.vue";
  // import CountryPage from "./components/CountryInfo.vue"
  import {type Country} from "./utils/type"
  import Logo from "./assets/Logo.svg";

  import { onMounted, ref} from "vue";

  let dataform = ref()
  let country = ref("India")

  onMounted(async() => {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=flags,name,population,area,region,capital,subregion,languages,currencies,continents,borders");
      const data = await response.json()

      dataform.value = data
  })

  let filtered = () => {
    return country.value? dataform.value?.filter((val: Country)=> val.name.common == "Philippines") : dataform.value?.slice(0,11)
  }

</script>

<template>
  <header>
      <img :src="Logo" alt="logo">
  </header>
  <Homepage :data="filtered()"/>
  <!-- <component :is="country? CountryPage :  Homepage" :data="filtered" /> -->
  
</template>


