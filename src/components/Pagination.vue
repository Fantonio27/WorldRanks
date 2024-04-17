<script setup lang="ts">

const pageNumber = defineProps<{pageNo : number, length: number}>()

defineEmits<{
  onClick: [action: number, num?: number]
}>()

const pageNo = (n:number) =>{
  return pageNumber.pageNo > 3 ? n + (pageNumber.pageNo - 1) : n 
}
</script>

<template>
  <div class="paginationContainer">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" @click="$emit('onClick', 1)">Previous</a></li>
        <li v-for="n in 3" class="page-item">
          <button :class="`page-link ${n == pageNumber.pageNo && 'active'}`"  @click="$emit('onClick', 3, pageNo(n))">{{pageNo(n)}}</button>
        </li>
        <li class="page-item">
          <a class="page-link" @click="$emit('onClick', 2)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
