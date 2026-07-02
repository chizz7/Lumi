// lib/cadence.ts
// Story delivery cadence — one story every N days per child profile.
// Single source of truth: change the interval here and both the API gate and
// the library UI follow. (User-facing copy says "every other day" for N = 2.)

export const STORY_INTERVAL_DAYS = 2
const STORY_INTERVAL_MS = STORY_INTERVAL_DAYS * 24 * 60 * 60 * 1000

// When the next story becomes available, given the last delivery time.
// Returns null when there are no prior deliveries (i.e. available immediately).
export function nextStoryAvailableAt(lastDeliveredAt: string | null | undefined): Date | null {
  if (!lastDeliveredAt) return null
  return new Date(new Date(lastDeliveredAt).getTime() + STORY_INTERVAL_MS)
}

// Whether a new story can be requested right now.
export function canRequestStory(lastDeliveredAt: string | null | undefined): boolean {
  const next = nextStoryAvailableAt(lastDeliveredAt)
  return !next || Date.now() >= next.getTime()
}
