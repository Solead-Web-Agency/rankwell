/**
 * API LEAD - Réception des formulaires des landing pages
 * URL: POST /api/lead
 *
 * Valide le payload envoyé par LeadModal puis le transmet au webhook
 * défini dans la variable d'environnement LEAD_WEBHOOK_URL (Make, Zapier, n8n...).
 *
 * Pourquoi une route API plutôt qu'un appel direct au webhook depuis le navigateur :
 * - pas de problème CORS
 * - l'URL du webhook n'est jamais exposée côté client (anti-spam)
 * - validation serveur + honeypot
 *
 * Sans LEAD_WEBHOOK_URL :
 * - en développement : le lead est loggé en console et l'API répond ok (simulation)
 * - en production : réponse 503, le formulaire affiche le message d'erreur (lead non perdu en silence)
 */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_LENGTH = 500;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown): string {
  return typeof value === 'string' ? value.trim().slice(0, MAX_LENGTH) : '';
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot rempli = bot : on répond ok sans rien transmettre
  if (clean(body.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    formId: clean(body.formId) || 'unknown',
    source: clean(body.source),
    page: clean(body.page),
    locale: clean(body.locale) || 'fr',
    name: clean(body.name),
    email: clean(body.email),
    phone: clean(body.phone),
    website: clean(body.website),
    budget: clean(body.budget),
    consent: body.consent === true,
    submittedAt: new Date().toISOString(),
    userAgent: request.headers.get('user-agent') ?? '',
    referer: request.headers.get('referer') ?? '',
  };

  if (!lead.name || !lead.email || !lead.phone) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(lead.email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }
  if (!lead.consent) {
    return NextResponse.json({ ok: false, error: 'consent_required' }, { status: 400 });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[api/lead] LEAD_WEBHOOK_URL absent : lead simulé', lead);
      return NextResponse.json({ ok: true, simulated: true });
    }
    console.error('[api/lead] LEAD_WEBHOOK_URL non configuré : lead non transmis', lead.email);
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(`[api/lead] webhook HTTP ${response.status}`);
      return NextResponse.json({ ok: false, error: 'webhook_failed' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[api/lead] webhook injoignable', error);
    return NextResponse.json({ ok: false, error: 'webhook_unreachable' }, { status: 502 });
  }
}
