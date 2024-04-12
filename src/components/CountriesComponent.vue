<script setup lang="ts">
    import SearchTab from './SearchTab.vue';
    import Sidebar from './Sidebar.vue';
    import Table from './Table.vue';
</script>

<template>
    <main class="firstContainer">
        <SearchTab />

        <div class="boxContainer">
            <Sidebar />
            <Table />
        </div>
    </main>
</template>