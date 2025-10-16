<template>
    <section class="front-cover min-h-screen">
        <div class="pt-[80px]">
            <Logo class="flex m-auto" />
        </div>
        <div class="relative flex">
            <Image class="pt-[4em] max-h-[70vh] w-auto grow flex-1" />
            <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex justify-center items-center" @click="emit('close')">
                <span class="text-[1em] font-semibold underline text-mainBlue">VER MENU</span>
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
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
    background: linear-gradient(0.42deg, #E2BE96 3.95%, #C1A389 10.64%, #958077 21.61%, #736869 32.87%, #5B565E 44.33%, #4A4B57 56.06%, #414552 68.22%, #3E4351 81.53%);
}

.front-cover img {
    max-height: 50vh;
    width: auto;
}
</style>