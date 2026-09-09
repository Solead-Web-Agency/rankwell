/**
 * OPENAIPIXEL - Pixel publicitaire OpenAI (oaiq)
 *
 * Script de configuration fourni par OpenAI Ads, à installer dans le <head>,
 * un seul par page. Rendu comme une balise <script> brute depuis le layout
 * racine : présent tel quel dans le HTML initial de toutes les pages, ce qui
 * permet aux outils de vérification d'OpenAI de le détecter.
 *
 * `debug: true` est la valeur fournie par OpenAI (utile pour vérifier
 * l'installation). Passer à false une fois la vérification faite.
 */

export const OPENAI_PIXEL_ID = 'JwANoy3v6nkJEdvTm8DCGF';

const PIXEL_SCRIPT = `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"${OPENAI_PIXEL_ID}",debug:true});`;

const OpenAIPixel = () => (
  <script id="oaiq-pixel" dangerouslySetInnerHTML={{ __html: PIXEL_SCRIPT }} />
);

OpenAIPixel.displayName = 'OpenAIPixel';
export default OpenAIPixel;
