<script setup lang="ts">
import { continents, sortBy} from "../utils/datasets";
import { defineModel } from "vue";

defineModel('properties');

</script>

<template>
  <div class="sidebar">
    <div>
      <h3>Sort by</h3>
      
      <select class="form-select" aria-label="Default select example" v-model="properties.sort">
        <option v-for="(value) in sortBy" :value="value.id">{{value.name}}</option>
      </select>
    </div>

    <div>
      <h3>Region</h3>

      <div class="regionContainer">
        <section v-for="(continent, index) in continents">
          <input type="checkbox" class="btn-check" :id="`btn-check-${index}`" v-model="properties.region" :value="continent"/>
          <label class="btn" :for="`btn-check-${index}`">{{ continent }}</label>
        </section>
      </div>
    </div>

    <div>
      <h3>Status</h3>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="flexCheckDefault" v-model="properties.status.unmember">
        <label class="form-check-label" for="flexCheckDefault">
          Member of the United Nations
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input form-check-input-lg" type="checkbox" id="flexCheckChecked" v-model="properties.status.independent">
        <label class="form-check-label" for="flexCheckChecked">
          Independent
        </label>
      </div>
    </div>
  </div>
</template>
