/**
 * OAIQ - Helpers d'événements du pixel OpenAI Ads
 *
 * Le script de configuration (OpenAIPixel) définit `window.oaiq` dès le <head> :
 * avant le chargement du SDK c'est une file d'attente, les appels sont donc
 * toujours sûrs côté client.
 *
 * Événements de conversion déclarés dans OpenAI Ads :
 * - registration_completed (standard) : envoi du formulaire de contact / lead
 * - clic-telephone (custom) : clic « Afficher le numéro » ou sur le bouton d'appel mobile
 */

type OaiqFn = (...args: unknown[]) => void;

export const OAIQ_EVENTS = {
  REGISTRATION_COMPLETED: 'registration_completed',
} as const;

export const OAIQ_CUSTOM_EVENTS = {
  PHONE_CLICK: 'clic-telephone',
} as const;

export type OaiqEvent = (typeof OAIQ_EVENTS)[keyof typeof OAIQ_EVENTS];
export type OaiqCustomEvent = (typeof OAIQ_CUSTOM_EVENTS)[keyof typeof OAIQ_CUSTOM_EVENTS];

function getOaiq(): OaiqFn | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as { oaiq?: OaiqFn };
  return typeof w.oaiq === 'function' ? w.oaiq : null;
}

/**
 * Envoie un événement de conversion au pixel OpenAI.
 * No-op côté serveur ou si le pixel n'est pas installé.
 */
export function oaiqMeasure(
  eventName: OaiqEvent,
  params: Record<string, unknown> = { type: 'customer_action' }
): void {
  const oaiq = getOaiq();
  if (!oaiq) return;
  try {
    oaiq('measure', eventName, params);
  } catch {
    // Le tracking ne doit jamais casser le parcours utilisateur
  }
}

/**
 * Envoie un événement de conversion personnalisé au pixel OpenAI.
 * Format attendu : oaiq("measure", "custom", { type: "custom" }, { custom_event_name })
 */
export function oaiqMeasureCustom(customEventName: OaiqCustomEvent): void {
  const oaiq = getOaiq();
  if (!oaiq) return;
  try {
    oaiq('measure', 'custom', { type: 'custom' }, { custom_event_name: customEventName });
  } catch {
    // Le tracking ne doit jamais casser le parcours utilisateur
  }
}
