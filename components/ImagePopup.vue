
<template>
  <div>
    <div @click="showPopup = true" class="cursor-pointer">
      <img :src="props.image"
                class="w-full h-full border-[2px] rounded-full border-[#848690] object-cover"
                alt="Icono de categoria" />
    </div>

    <div
      v-if="showPopup"
      class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
      @click.self="showPopup = false"
    >
      <div class="flex items-center relative min-w-[90%] max-w-[90%]">
        <img :src="props.image" class="w-full h-auto max-h-full rounded object-cover" alt="Imagen ampliada" />
        <button
          class="absolute top-2 right-2 text-white text-2xl font-bold"
          @click="showPopup = false"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  image: string
}>()

const showPopup = ref(false)
</script>
