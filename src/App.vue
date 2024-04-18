<script setup lang="ts">
  import { onMounted, ref} from "vue";
  import Homepage from "./pages/Homepage.vue";
  import CountryPage from "./pages/CountryInfo.vue"
  import {FetchData} from "./utils/methods"
  import { Country } from "./utils/type"
  import Logo from "./assets/Logo.svg";

  let dataform = ref<Country[]>([])
  let params = new URLSearchParams(window.location.search).get('country')

  onMounted(async() => {
      const data = await FetchData(params)
      setTimeout(()=> {dataform.value = data;}, 1000)
  })

</script>

<template>
  <header>
      <img :src="Logo" alt="logo">
  </header>
  <component :is="!params? Homepage :  CountryPage" :data="dataform"/>
</template>


