// One-off script: translates the Spanish card meanings in src/data/cards.ts
// into English and writes the result to src/data/cards.en.json.
//
// Run with: node scripts/translate-cards.mjs
//
// This is NOT run at build/runtime — it's a local codegen step. Re-run it
// whenever src/data/cards.ts changes and the English cache needs updating.

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { translate } from 'google-translate-api-x';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, '../src/data/cards.en.json');
const CHUNK_CHAR_LIMIT = 4000;

const { cards } = await import('../src/data/cards.ts');

// Build a flat { key: text } map of everything that needs translating.
const strings = {};
for (const card of cards) {
  strings[`${card.id}__up_desc`] = card.uprightMeaning.description;
  strings[`${card.id}__up_kw`] = card.uprightMeaning.keywords.join(' | ');
  strings[`${card.id}__rev_desc`] = card.reversedMeaning.description;
  strings[`${card.id}__rev_kw`] = card.reversedMeaning.keywords.join(' | ');
}

const entries = Object.entries(strings);

// Split into chunks under the API's per-request character budget.
const chunks = [];
let current = {};
let currentLen = 0;
for (const [key, text] of entries) {
  const len = text.length;
  if (currentLen + len > CHUNK_CHAR_LIMIT && Object.keys(current).length > 0) {
    chunks.push(current);
    current = {};
    currentLen = 0;
  }
  current[key] = text;
  currentLen += len;
}
if (Object.keys(current).length > 0) chunks.push(current);

console.log(`Translating ${entries.length} strings in ${chunks.length} chunks...`);

const translated = {};
for (let i = 0; i < chunks.length; i++) {
  const chunk = chunks[i];
  const res = await translate(chunk, { from: 'es', to: 'en' });
  for (const key of Object.keys(chunk)) {
    translated[key] = res[key].text;
  }
  console.log(`  chunk ${i + 1}/${chunks.length} done (${Object.keys(chunk).length} strings)`);
}

const out = cards.map(card => ({
  id: card.id,
  uprightMeaning: {
    keywords: translated[`${card.id}__up_kw`].split('|').map(s => s.trim()),
    description: translated[`${card.id}__up_desc`],
  },
  reversedMeaning: {
    keywords: translated[`${card.id}__rev_kw`].split('|').map(s => s.trim()),
    description: translated[`${card.id}__rev_desc`],
  },
}));

writeFileSync(OUT_PATH, JSON.stringify(out, null, 2) + '\n', 'utf-8');
console.log(`Wrote ${out.length} translated cards to ${OUT_PATH}`);
