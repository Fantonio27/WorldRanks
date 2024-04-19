<script setup lang="ts">
const props = defineProps<{pageNo : number, length: number}>()

defineEmits<{
  onClick: [action: number, num?: number]
}>()

let numberofPage = Math.ceil(props.length / 10)
// const cscsc = (n:number) =>{
//   return pageNumber.pageNo > 3? n + (pageNumber.pageNo - 1) : n 

//   // return csac.value.map((number)=>{
//   //   return number * pageNumber.pageNo
//   // })
// }1
const pagination = () =>{
  let length = numberofPage - 2;
  const array = Array.from({length: 3}, (_, index)=> index + (length > props.pageNo?  0 : 1))
  return array
}
</script>

<template>
  <div class="paginationContainer">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" @click="$emit('onClick', 1)">Previous</a></li>
        <template v-if="numberofPage != 2">
          <li v-for="n in pagination()" class="page-item" >
            <button :class="`page-link ${(n+1) == props.pageNo && 'active'}`" @click="$emit('onClick', 3, n + 1)" >{{n+1}}</button>
          </li>
        </template>      
         <!-- <li v-for="item in cscsc()" class="page-item">
          <button :class="`page-link ${item == pageNumber.pageNo && 'active'}`">{{item}}</button>
        </li> -->
        <li class="page-item">
          <a class="page-link" @click="$emit('onClick', 2)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

// @click="$emit('onClick', 3, pageNo(n))"
