<script setup lang="ts">
    import { ref,  watch} from "vue";
    import SearchTab from "./SearchTab.vue";
    import Sidebar from "./Sidebar.vue";
    import Table from "./Table.vue";
    // import Pagination from "./Pagination.vue";
    import { Country, FilterProperties} from "../utils/type";
    import { DataFiltered } from "../utils/methods";

    const props = defineProps<{ data: Country[]}>();

    let filterProperties = ref<FilterProperties>({
        page: 1,
        sort: 'population',
        region: [],
        status: 
        {
            unmember: false,
            independent: false,
        },
        search: ''
    })

    const filteredData = () => {
        return DataFiltered(filterProperties.value, props.data)
    }

    watch(filterProperties.value, ()=>{
        console.log(filterProperties.value.page)
    })

 
</script>

<template>
    <main class="firstContainer">
        <SearchTab v-model:search="filterProperties.search" :numberFound="props.data.length"/>

        <div class="boxContainer">
            <Sidebar v-model:properties="filterProperties"/>
            <div class="tableContainer">
                <Table :lists="filteredData()" :filter="filterProperties"/>
            </div>
        </div>
    </main>
</template>
