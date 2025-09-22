<template>
    <section class="front-cover">
        <div class="pt-[132px]">
            <Logo class="flex m-auto" />
        </div>
        <div class="relative">
            <Image class="pt-[4em]" />
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center" @click="emit('close')">
                <span class="text-[2em] font-semibold underline text-mainBlue">VER MENU</span>
                <IconsRightArrow />
            </div>
        </div>
        
    </section>
</template>

<script setup lang="ts">
import type { FrontCoverEmits } from '~/types/FrontCover';


const emit = defineEmits<FrontCoverEmits>()
</script>

<style scoped>
.front-cover {
    min-height: 100vh;
    max-height: 100vh;
    background: linear-gradient(0.42deg, #E2BE96 3.95%, #C1A389 10.64%, #958077 21.61%, #736869 32.87%, #5B565E 44.33%, #4A4B57 56.06%, #414552 68.22%, #3E4351 81.53%);
}
</style>