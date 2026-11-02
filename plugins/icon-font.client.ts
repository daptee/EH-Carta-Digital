/**
 * `.ms` icons render as ligature text ("arrow_forward", etc.) via the
 * "Material Symbols Outlined" font. Until that font finishes loading, the
 * browser paints the fallback font instead, which shows the raw ligature
 * text for a moment. main.css starts `.ms` at opacity:0; this plugin reveals
 * it (via the `ms-ready` class on <html>) once the font is actually ready,
 * with a timeout fallback in case loading stalls or the API is unsupported.
 */
export default defineNuxtPlugin(() => {
  const reveal = () => document.documentElement.classList.add('ms-ready')

  if (!('fonts' in document)) {
    reveal()
    return
  }

  document.fonts.ready.then(reveal).catch(reveal)
  setTimeout(reveal, 4000)
})
