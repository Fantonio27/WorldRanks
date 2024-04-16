<script setup lang="ts">
import { ref, defineProps} from "vue";
// const props = defineProps(['qNo'])
const pageNumber = defineProps<{pageNo : number}>()
// const array = [1, 2, 3];
// // let numbers = array.map((n) => n * 1);
// // console.log(numbers);
let nu = ref(1);

// console.log(nu.value);

// const pageNo = computed((n)=>{
//   return nu.value > 3 ? n + (nu.value - 1) : n 
//   })

</script>

<template>
  <div class="paginationContainer">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" @click="nu--">Previous</a></li>
        <li v-for="n in 3" class="page-item">
          <a :class="`page-link ${n == pageNumber.pageNo && 'active'}`">{{n}}</a>
        </li>
        <li class="page-item" @click="nu++">
          <a class="page-link">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
