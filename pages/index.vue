<template>
    <main class="flex">
        <FrontCover v-if="showFrontCover" @close="showFrontCover = false" />

        <Header />
    </main>
</template>

<script setup lang="ts">

const showFrontCover = ref(false)
</script>