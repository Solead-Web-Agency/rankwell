/**
 * OAIQ - Helpers d'événements du pixel OpenAI Ads
 *
 * Le script de configuration (OpenAIPixel) définit `window.oaiq` dès le <head> :
 * avant le chargement du SDK c'est une file d'attente, les appels sont donc
 * toujours sûrs côté client.
 *
 * Événements de conversion déclarés dans OpenAI Ads :
 * - registration_completed : envoi du formulaire de contact / lead
 */

type OaiqFn = (...args: unknown[]) => void;

export const OAIQ_EVENTS = {
  REGISTRATION_COMPLETED: 'registration_completed',
} as const;

export type OaiqEvent = (typeof OAIQ_EVENTS)[keyof typeof OAIQ_EVENTS];

/**
 * Envoie un événement de conversion au pixel OpenAI.
 * No-op côté serveur ou si le pixel n'est pas installé.
 */
export function oaiqMeasure(
  eventName: OaiqEvent,
  params: Record<string, unknown> = { type: 'customer_action' }
): void {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { oaiq?: OaiqFn };
  if (typeof w.oaiq !== 'function') return;
  try {
    w.oaiq('measure', eventName, params);
  } catch {
    // Le tracking ne doit jamais casser le parcours utilisateur
  }
}
