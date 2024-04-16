<script setup lang="ts">
    import { ref, computed} from "vue";
    import SearchTab from "./SearchTab.vue";
    import Sidebar from "./Sidebar.vue";
    import Table from "./Table.vue";
    import Pagination from "./Pagination.vue";
    import { Country, FilterProperties} from "../utils/type";
    import { DataFiltered } from "../utils/methods";

    const props = defineProps<{ data: Country[]}>();

    let filterProperties = ref<FilterProperties>({
        page: 1,
        sort: 'Name',
        region: [],
        status: 
        {
            unmember: false,
            independent: true,
        }
        ,
        search: ''
    })

    const filteredData = computed(()=>{
        return DataFiltered(filterProperties.value, props.data)
    }) 

    // watch(filterProperties.value, ()=>{console.log(filterProperties.value)})
</script>

<template>
    <main class="firstContainer">
        <SearchTab v-model:search="filterProperties.search" :numberFound="props.data.length"/>

        <div class="boxContainer">
            <Sidebar v-model:properties="filterProperties"/>
            <div class="tableContainer">
                <template v-if="props.data.length != 0">
                    <Table :lists="filteredData" />
                    <Pagination :pageNo="filterProperties.page"/>
                </template>

                <h2 v-else>
                    ...loading
                </h2>
            </div>
        </div>
    </main>
</template>
