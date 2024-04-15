<script setup lang="ts">
    import { reactive, computed} from "vue";
    import SearchTab from "./SearchTab.vue";
    import Sidebar from "./Sidebar.vue";
    import Table from "./Table.vue";
    import Pagination from "./Pagination.vue";
    import { Country, FilterProperties} from "../utils/type";
    import { DataFiltered } from "../utils/methods";

    const props = defineProps<{ data: Country[]}>();

    let filterProperties = reactive<FilterProperties>({
        page: 1,
        sort: 'Population',
        region: ['Oceania'],
        status: {
            unmember: false,
            independent: false,
        },
        search: 'Nauru'
    })

    const filteredData = computed(()=>{
        return DataFiltered(filterProperties, props.data)
    }) 

</script>

<template>
    <main class="firstContainer">
        <SearchTab />

        <div class="boxContainer">
            <Sidebar />
            <div class="tableContainer">
                <template v-if="props.data.length != 0">
                    <Table :lists="filteredData" />
                    <Pagination/>
                </template>

                <h2 v-else>
                    ...loading
                </h2>
            </div>
        </div>
    </main>
</template>
