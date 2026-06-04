/**
 * Shared animation variants for Framer Motion to ensure consistency
 * across the project and reduce repetitive code.
 */

export const FADE_UP = (delay = 0, y = 20) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const }
});

export const FADE_IN = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1, delay }
});

export const STAGGER_ITEM = (index: number, x = -10) => ({
  initial: { opacity: 0, x },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: index * 0.1 }
});
