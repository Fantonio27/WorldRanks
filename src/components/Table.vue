<script setup lang="ts">
// import Item from './Item.vue';

defineProps(["lists"]);
</script>

<template>
  <!-- <div class="tableContainer"> -->
  <table class="table table-dark table-borderless">
    <!-- table-bordered -->
    <thead>
      <tr>
        <th scope="col">Flag</th>
        <th scope="col">Name</th>
        <th scope="col">Population</th>
        <th scope="col">Area (km²)</th>
        <th scope="col">Region</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(list, index) in lists" :key="index">
        <th scope="row">
          <img :src="list.flags.svg" :alt="list.flags.alt" class="flag" />
        </th>
        <td>{{ list.name.common }}</td>
        <td>{{ list.population }}</td>
        <td>{{ list.area }}</td>
        <td>{{ list.region }}</td>
      </tr>
    </tbody>
  </table>
  <!-- </div> -->
  <!-- <div class="tableuw">
        <ul>
            <li>Flag</li>
            <li>Name</li>
            <li>Population</li>
            <li>Area (km²)</li>
            <li></li>
        </ul>
        <Item />
    </div> -->
</template>
