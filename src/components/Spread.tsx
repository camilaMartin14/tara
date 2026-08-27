import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardFlip from './CardFlip';
import { getSpreads } from '../utils/deck';
import type { DrawnCard, SpreadKey } from '../utils/deck';
import { generateSynthesis } from '../utils/reading';
import { useLang } from '../state/LangContext';

interface Props {
  drawnCards: DrawnCard[];
  spreadKey: SpreadKey;
}

export default function Spread({ drawnCards, spreadKey }: Props) {
  const { t, lang } = useLang();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [revealedSet, setRevealedSet] = useState<Set<number>>(new Set());
  const [showSynthesis, setShowSynthesis] = useState(false);
  const spread = getSpreads(lang)[spreadKey];
  const allRevealed = revealedSet.size === drawnCards.length;
  const synthesis = generateSynthesis(drawnCards, spreadKey, lang);

  const handleReveal = (idx: number) => {
    setRevealedSet(prev => new Set(prev).add(idx));
  };

  const handleCardClick = (idx: number) => {
    if (revealedSet.has(idx)) {
      setExpandedIdx(expandedIdx === idx ? null : idx);
    }
  };

  const expanded = expandedIdx !== null ? drawnCards[expandedIdx] : null;
  const expandedMeaning = expanded ? (expanded.reversed ? expanded.card.reversedMeaning : expanded.card.uprightMeaning) : null;

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center', padding: '32px 0' }}>
        {drawnCards.map((drawn, idx) => (
          <div key={drawn.card.id} onClick={() => handleCardClick(idx)}>
            <CardFlip
              drawnCard={drawn}
              position={spread.positions[idx]}
              delay={idx}
              onReveal={() => handleReveal(idx)}
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {expanded && expandedMeaning && (
          <motion.div
            key={expandedIdx}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ border: '1px solid var(--line)', borderRadius: '6px', padding: '28px 32px', margin: '0 0 24px', background: 'var(--panel)' }}>
              <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '10px' }}>
                {spread.positions[expandedIdx!]}
              </div>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: '24px', color: 'var(--ink)', margin: '0 0 4px' }}>
                {expanded.card.name}
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '16px', color: expanded.reversed ? 'var(--violet)' : 'var(--gold)', marginLeft: '14px' }}>
                  {expanded.reversed ? `↓ ${t.reading.reversed}` : `↑ ${t.reading.upright}`}
                </span>
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '16px 0' }}>
                {expandedMeaning.keywords.map(kw => (
                  <span
                    key={kw}
                    style={{
                      fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase',
                      color: 'var(--ink-2)', border: '1px solid var(--line)', borderRadius: '999px', padding: '7px 14px', background: 'var(--veil)',
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <p style={{ fontSize: '19px', lineHeight: 1.7, fontWeight: 300, color: 'var(--ink-2)', margin: 0 }}>
                {expandedMeaning.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {allRevealed && synthesis && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ marginTop: '16px' }}>
            {!showSynthesis ? (
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => setShowSynthesis(true)}
                  style={{
                    fontFamily: 'Jost, sans-serif', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase',
                    color: 'var(--ink)', background: 'var(--veil)', border: '1px solid var(--line-2)', borderRadius: '999px',
                    padding: '15px 32px', cursor: 'pointer', whiteSpace: 'nowrap',
                  }}
                >
                  ✦ {t.reading.synthesisCta} ✦
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'relative', overflow: 'hidden', border: '1px solid var(--line-2)', borderRadius: '6px',
                  padding: '32px 36px', background: 'var(--premium)',
                }}
              >
                <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.36em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px', textAlign: 'center' }}>
                  ✦ {t.reading.synthesisTitle} ✦
                </div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '20px', lineHeight: 1.85, color: 'var(--ink)', margin: 0, textAlign: 'center' }}>
                  {synthesis}
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
