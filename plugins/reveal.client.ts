/**
 * `v-reveal` — fades/slides an element in the first time it scrolls into view.
 * `v-reveal="120"` adds a 120ms delay (for staggering grids); `v-reveal:zoom` is the hero variant
 * (photo settles from a slight zoom, title rises). Skipped entirely under prefers-reduced-motion.
 * Elements mounted while hidden (`v-show` behind the cover) simply reveal once they're shown.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const observer = reduceMotion
    ? null
    : new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('is-revealed')
            observer!.unobserve(entry.target)
          })
        },
        { rootMargin: '0px 0px -6% 0px', threshold: 0.05 },
      )

  nuxtApp.vueApp.directive<HTMLElement, number | undefined>('reveal', {
    mounted(el, binding) {
      if (!observer) return
      el.classList.add(binding.arg === 'zoom' ? 'reveal-zoom' : 'reveal')
      if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
      observer.observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  })
})
