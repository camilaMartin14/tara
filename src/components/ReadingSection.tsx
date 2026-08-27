import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { drawCards, getSpreads, SPREAD_KEYS } from '../utils/deck';
import type { DrawnCard, SpreadKey } from '../utils/deck';
import Spread from './Spread';
import { useLang } from '../state/LangContext';

export default function ReadingSection() {
  const { t, lang, cards } = useLang();
  const spreads = getSpreads(lang);
  const [question, setQuestion] = useState('');
  const [spreadKey, setSpreadKey] = useState<SpreadKey>('three');
  const [drawnCards, setDrawnCards] = useState<DrawnCard[] | null>(null);
  const [phase, setPhase] = useState<'input' | 'reading'>('input');

  function handleDraw() {
    if (!question.trim()) return;
    setDrawnCards(drawCards(spreads[spreadKey].count, cards));
    setPhase('reading');
  }

  function handleReset() {
    setDrawnCards(null);
    setPhase('input');
  }

  return (
    <section id="tirada" className="tara-section" style={{ maxWidth: '1240px', margin: '0 auto', padding: '90px 32px 120px' }}>
      <div style={{ marginBottom: '44px' }}>
        <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.36em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>
          {t.reading.eyebrow}
        </div>
        <h2 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(38px,4.6vw,56px)', margin: '0 0 16px', color: 'var(--ink)', textShadow: '0 0 50px var(--veil)' }}>
          {t.reading.title}
        </h2>
        <p style={{ fontSize: '20px', lineHeight: 1.6, fontWeight: 300, color: 'var(--ink-2)', margin: 0, maxWidth: '60ch' }}>
          {t.reading.subtitle}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {phase === 'input' && (
          <motion.div key="input" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '14px' }}>
                {t.reading.questionLabel}
              </label>
              <textarea
                value={question}
                onChange={e => setQuestion(e.target.value)}
                placeholder={t.reading.questionPlaceholder}
                rows={4}
                style={{
                  width: '100%', background: 'var(--veil)', border: '1px solid var(--line)', borderRadius: '8px',
                  color: 'var(--ink)', padding: '18px', fontFamily: 'Cormorant Garamond, serif', fontSize: '19px',
                  lineHeight: 1.6, outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '44px' }}>
              <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '18px' }}>
                {t.reading.spreadTypeLabel}
              </div>
              <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
                {SPREAD_KEYS.map(key => {
                  const spread = spreads[key];
                  const active = spreadKey === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSpreadKey(key)}
                      style={{
                        flex: 1, minWidth: '190px', textAlign: 'left', cursor: 'pointer',
                        border: `1px solid ${active ? 'var(--line-2)' : 'var(--line)'}`,
                        borderRadius: '8px', background: active ? 'var(--veil)' : 'transparent',
                        padding: '22px 26px', boxShadow: active ? '0 0 24px var(--veil)' : 'none',
                      }}
                    >
                      <div style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', color: active ? 'var(--ink)' : 'var(--ink-3)', marginBottom: '8px' }}>
                        {spread.label}
                      </div>
                      <div style={{ fontSize: '15px', fontStyle: 'italic', fontWeight: 300, color: 'var(--ink-3)' }}>
                        {spread.description}
                      </div>
                      <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: active ? 'var(--gold)' : 'var(--ink-4)', marginTop: '10px' }}>
                        {t.reading.cardsCount(spread.count)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                onClick={handleDraw}
                disabled={!question.trim()}
                style={{
                  fontFamily: 'Jost, sans-serif', fontSize: '13px', letterSpacing: '.18em', textTransform: 'uppercase',
                  padding: '18px 44px', borderRadius: '999px', border: 0,
                  background: question.trim() ? 'linear-gradient(100deg, var(--gold-2), var(--gold) 50%, var(--gold-3))' : 'var(--veil)',
                  color: question.trim() ? 'var(--on-gold)' : 'var(--ink-4)',
                  cursor: question.trim() ? 'pointer' : 'not-allowed',
                  boxShadow: question.trim() ? '0 10px 40px var(--veil)' : 'none',
                }}
              >
                {t.reading.drawCta}
              </button>
            </div>
          </motion.div>
        )}

        {phase === 'reading' && drawnCards && (
          <motion.div key="reading" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ border: '1px solid var(--line)', borderRadius: '8px', padding: '22px 26px', marginBottom: '32px', display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'var(--panel)' }}>
              <span style={{ fontFamily: 'Cinzel, serif', fontSize: '18px', color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }}>✦</span>
              <div>
                <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '8px' }}>
                  {t.reading.questionRecapLabel} · {spreads[spreadKey].label.toUpperCase()}
                </div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '19px', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>
                  "{question}"
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '16px' }}>
              {t.reading.instruction}
            </div>

            <Spread drawnCards={drawnCards} spreadKey={spreadKey} />

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button
                onClick={handleReset}
                style={{
                  fontFamily: 'Jost, sans-serif', fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase',
                  color: 'var(--ink-3)', background: 'transparent', border: '1px solid var(--line)', borderRadius: '999px',
                  padding: '13px 32px', cursor: 'pointer',
                }}
              >
                {t.reading.newReading}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
