<script setup lang="ts">
  import Icon from "../assets/Search.svg"
  import {defineModel, defineProps} from "vue"

  const input = defineModel('search')
  defineProps<{numberFound: number}>()
</script>

<template>
  <div class="searchTab">
    <h2>Found {{numberFound}} countries</h2>
    
    <div class="inputContainer">
      <img :src="Icon" alt="SearchIcon">
      <input class="form-control form-control-md" type="text" placeholder="Search by Name, Region, Subregion" v-model="input">
    </div>
  </div>
</template>
