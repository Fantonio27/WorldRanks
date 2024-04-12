<script setup lang="ts">
import { continents } from "../utils/datasets"
</script>

<template>
  <div class="sidebar">
    <div>
      <h3>Sort by</h3>
      <select class="form-select" aria-label="Default select example">
        <option value="Population">Population</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div>
      <h3>Region</h3>

      <div class="regionContainer">
        <section v-for="(continent, index) in continents">
          <input type="checkbox" class="btn-check" :id="`btn-check-${index}`" autocomplete="off">
          <label class="btn" :for="`btn-check-${index}`">{{ continent }}</label>
        </section>
      </div>
    </div>

    <div>
      <h3>Status</h3>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Member of the United Nations
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input form-check-input-lg" type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">
          Independent
        </label>
      </div>
    </div>
  </div>
</template>
