/**
 * Tracks image URLs that failed to load (404, broken file on the server)
 * so templates can fall back to a placeholder instead of the browser's
 * broken-image icon. A missing URL (`null`/`undefined`) counts as broken too.
 */
export function useImageFallback() {
  const failed = reactive(new Set<string>())

  function markFailed(src: string | null | undefined) {
    if (src) failed.add(src)
  }

  function isBroken(src: string | null | undefined) {
    return !src || failed.has(src)
  }

  return { markFailed, isBroken }
}
