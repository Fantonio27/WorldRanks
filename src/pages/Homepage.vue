<script setup lang="ts">
    import { ref} from "vue";
    import SearchTab from "../components/SearchTab.vue";
    import Sidebar from "../components/Sidebar.vue";
    import Table from "../components/Table.vue";
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
        search: '',
    })

    const filteredData = () => {
        return DataFiltered(filterProperties.value, props.data)
    }

    // watch(filterProperties.value, ()=>{
    //     console.log(filterProperties.value.page)
    // })
 
</script>

<template>
    <main class="boxContainer-home">
        <SearchTab v-model:search="filterProperties.search" :numberFound="filteredData().length"/>

        <div class="boxContainer">
            <Sidebar v-model:properties="filterProperties"/>
            <div class="tableContainer">
                <Table :lists="filteredData().data" :filter="filterProperties" :length="filteredData().length"/>
            </div>
        </div>
    </main>
</template>
