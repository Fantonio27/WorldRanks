<script setup lang="ts">
import { onMounted, ref} from 'vue';

let show = ref(true);

onMounted(() => {
    setTimeout(()=>{
        show.value = false
    }, 1500)
})
</script>

<template>
    <div class="suspenseContainer">
        <template v-if="show">
            <div class="suspenseBox" v-for="n in 3" :key="n"></div>
        </template>
        <h2 v-else>No Record Found</h2>
    </div>
   
</template>