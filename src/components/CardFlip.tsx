import { useState } from 'react';
import { motion } from 'framer-motion';
import type { DrawnCard } from '../utils/deck';
import { useLang } from '../state/LangContext';

interface Props {
  drawnCard: DrawnCard;
  position: string;
  delay?: number;
  onReveal?: () => void;
}

export default function CardFlip({ drawnCard, position, delay = 0, onReveal }: Props) {
  const { t } = useLang();
  const [revealed, setRevealed] = useState(false);

  const handleReveal = (e: React.MouseEvent) => {
    if (!revealed) {
      e.stopPropagation();
      setRevealed(true);
      onReveal?.();
    }
  };

  return (
    <div style={{ width: '220px' }}>
      <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px', textAlign: 'center' }}>
        {position}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay * 0.15, duration: 0.5 }}
        style={{ perspective: '1400px', height: '340px', cursor: revealed ? 'default' : 'pointer' }}
        onClick={handleReveal}
      >
        <motion.div
          animate={{ rotateY: revealed ? 180 : 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
        >
          {/* Back */}
          <div
            style={{
              position: 'absolute', inset: 0, backfaceVisibility: 'hidden', borderRadius: '16px', padding: '9px',
              background: 'linear-gradient(160deg, var(--silver), var(--violet))', boxShadow: '0 30px 70px var(--shadow)',
            }}
          >
            <div style={{ position: 'absolute', inset: '9px', borderRadius: '9px', background: 'var(--card-back)', display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: '14px', border: '1px solid var(--line-2)', borderRadius: '5px' }} />
              <div style={{ width: '76px', height: '76px', borderRadius: '50%', border: '1px solid var(--gold)', display: 'grid', placeItems: 'center', animation: 'tara-glow 4s ease-in-out infinite' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, var(--gold-2), var(--violet) 70%)', boxShadow: '0 0 40px var(--line-2)' }} />
              </div>
              <div style={{ position: 'absolute', width: '120px', height: '120px', borderRadius: '50%', border: '1px dashed var(--line)', animation: 'tara-spin 30s linear infinite' }} />
            </div>
          </div>

          {/* Front */}
          <div
            style={{
              position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', borderRadius: '16px', padding: '9px',
              background: 'linear-gradient(160deg, var(--gold-2), var(--violet))', boxShadow: '0 30px 70px var(--shadow), 0 0 70px var(--veil)',
            }}
          >
            <div style={{ position: 'absolute', inset: '9px', borderRadius: '9px', overflow: 'hidden' }}>
              <img
                src={drawnCard.card.imageUrl}
                alt={drawnCard.card.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transform: drawnCard.reversed ? 'rotate(180deg)' : 'none' }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div style={{ marginTop: '18px', minHeight: '70px', textAlign: 'center' }}>
        {revealed ? (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div style={{ fontFamily: 'Cinzel, serif', fontSize: '19px', color: 'var(--ink)' }}>{drawnCard.card.name}</div>
            <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: drawnCard.reversed ? 'var(--violet)' : 'var(--gold)', marginTop: '6px' }}>
              {drawnCard.reversed ? `↓ ${t.reading.reversed}` : `↑ ${t.reading.upright}`}
            </div>
          </motion.div>
        ) : (
          <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-4)' }}>
            {t.reading.tapToReveal}
          </div>
        )}
      </div>
    </div>
  );
}
