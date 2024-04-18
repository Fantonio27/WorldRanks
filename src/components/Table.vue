<script setup lang="ts">
    import LoadingBar from "./LoadingSet.vue";
    import Pagination from "./Pagination.vue";
    import { Country, FilterProperties} from "../utils/type";
    
    const props = defineProps<{lists: Country[], filter: FilterProperties}>();

    const changePageNo = (action: number, num?: number) => {
        switch(action){
            case 1:
                props.filter.page -= 1        //Previous
                break;
            case 2: 
                props.filter.page += 1        //Next
                break; 
            case 3: 
                props.filter.page = num || 1;  //Choose Page
                break;
            }
    }
</script>

<template>
  <div>
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
        <template v-if="lists.length != 0">
          <tr v-for="(list, index) in lists" :key="index" class="rowBox">
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

    <template v-if="lists.length > 1">
      <Pagination 
        :pageNo="filter.page" 
        :length="lists.length" 
        @onClick="changePageNo"/> 
    </template> 
  </div>
 
</template>
