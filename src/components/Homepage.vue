<script setup lang="ts">
    import SearchTab from './SearchTab.vue';
    import Sidebar from './Sidebar.vue';
    import Table from './Table.vue';
    import Pagination from './Pagination.vue';
    
    defineProps(['data'])
</script>

<template>
    <main class="firstContainer">
        <SearchTab/>

        <div class="boxContainer">
            <Sidebar />
            <div class="tableContainer">
                <Table :lists="data"/>
                <Pagination pageNo="1"/>
            </div>
        </div>
    </main>
</template>