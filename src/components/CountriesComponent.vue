<script setup lang="ts">
    import SearchTab from './SearchTab.vue';
    import Sidebar from './Sidebar.vue';
    import Table from './Table.vue';

    defineProps(['data'])
</script>

<template>
    <main class="firstContainer">
        {{data}}
        <SearchTab :prop="data"/>

        <div class="boxContainer">
            <Sidebar />
            <Table />
        </div>
    </main>
</template>