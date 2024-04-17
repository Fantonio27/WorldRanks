<script setup lang="ts">
    import LoadingBar from "./LoadingSet.vue";
    defineProps(["lists"]);
</script>

<template>
  <table class="table table-dark table-borderless">
    <thead>
      <tr>
        <th scope="col">Flag</th>
        <th scope="col">Name</th>
        <th scope="col">Population</th>
        <th scope="col">Area (km²)</th>
        <th scope="col">Region</th>
      </tr>
    </thead>
    <tbody >
      <template v-if="lists.length == 0">
        <tr v-for="(list, index) in lists" :key="index">
          <th scope="row">
            <img :src="list.flags.svg" :alt="list.flags.alt" class="flag" />
          </th>
          <td>{{ list.name.common }}</td>
          <td>{{ list.population }}</td>
          <td>{{ list.area }}</td>
          <td>{{ list.region }}</td>
        </tr>
      </template>

      <template v-else>
        <LoadingBar/> 
      </template>
    </tbody>
  </table>
</template>
