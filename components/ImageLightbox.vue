<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(4,6,9,0.85)] p-8 backdrop-blur-[6px]"
    @click.self="emit('close')"
  >
    <button
      type="button"
      class="absolute right-8 top-8 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/10 text-cream"
      aria-label="Cerrar"
      @click="emit('close')"
    >
      <span class="ms text-[30px]">close</span>
    </button>
    <img :src="props.src" alt="" class="max-h-full max-w-full rounded-[24px] object-contain" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ src: string }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') emit('close')
}

// Freeze the menu behind the overlay while it's open.
onMounted(() => {
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>
