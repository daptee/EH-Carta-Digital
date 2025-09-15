<template>
    <main>
        <FrontCover v-if="showFrontCover" @close="showFrontCover = false" />
        <section class="flex flex-col header-section">
            <Header />
            <HeaderCategory />
        </section>
    </main>
</template>

<script setup lang="ts">

const showFrontCover = ref(false)
</script>

<style scoped>
.header-section {
    background: linear-gradient(
      357.82deg, 
      #958077 5.36%, 
      #8C7973 12.18%, 
      #736869 18.7%, 
      #5B565E 24.92%, 
      #4A4B57 30.85%, 
      #414552 37.65%, 
      #3E4351 44.18%
    );
};
</style>