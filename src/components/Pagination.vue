<script setup lang="ts">
import {ref} from "vue"
const pageNumber = defineProps<{pageNo : number, length: number}>()

defineEmits<{
  onClick: [action: number, num?: number]
}>()

let csac = ref([2,2,3])

const cscsc = () =>{
  // return pageNumber.pageNo > 3 ? n + (pageNumber.pageNo - 1) : n 

  return csac.value.map((number)=>{
    return number * pageNumber.pageNo
  })
}

</script>

<template>
  <!-- {{pageNo}} -->
  <div class="paginationContainer">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" @click="$emit('onClick', 1)">Previous</a></li>
        <!-- <li v-for="n in 3" class="page-item">
          <button :class="`page-link ${n == pageNumber.pageNo && 'active'}`"  @click="$emit('onClick', 3, pageNo(n))">{{pageNo(n)}}</button>
        </li> -->
         <li v-for="item in cscsc()" class="page-item">
          <button :class="`page-link ${item == pageNumber.pageNo && 'active'}`">{{item}}</button>
        </li>
        <li class="page-item">
          <a class="page-link" @click="$emit('onClick', 2)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
