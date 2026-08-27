import { useEffect, useRef, useState } from 'react';
import { useLang } from '../state/LangContext';

const HOVER_OPEN_DELAY = 180;

export default function FAQSection() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  function scheduleOpen(i: number) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpenIndex(i), HOVER_OPEN_DELAY);
  }

  function cancelScheduledOpen(i: number) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenIndex(current => (current === i ? null : current));
  }

  return (
    <section id="faq" className="tara-section" style={{ maxWidth: '860px', margin: '0 auto', padding: '90px 32px 120px' }}>
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.36em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>
          {t.faq.eyebrow}
        </div>
        <h2 style={{ fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(32px,4vw,44px)', margin: 0, color: 'var(--ink)', textShadow: '0 0 50px var(--veil)' }}>
          {t.faq.title}
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {t.faq.items.map(([question, answer], i) => {
          const open = openIndex === i;
          return (
            <div
              key={question}
              onMouseEnter={() => scheduleOpen(i)}
              onMouseLeave={() => cancelScheduledOpen(i)}
              className="tara-faq-card"
              style={{
                border: `1px solid ${open ? 'var(--line-2)' : 'var(--line)'}`,
                borderRadius: '8px',
                background: 'var(--panel)',
              }}
            >
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', width: '100%',
                  textAlign: 'left', background: 'none', border: 0, cursor: 'pointer', font: 'inherit', color: 'inherit',
                  padding: '22px 26px',
                }}
              >
                <span style={{ fontFamily: 'Cinzel, serif', fontSize: '18px', color: 'var(--ink)' }}>
                  {question}
                </span>
                <span
                  style={{
                    flexShrink: 0, fontFamily: 'Jost, sans-serif', fontSize: '18px', color: 'var(--gold)',
                    transition: 'transform .5s ease', transform: open ? 'rotate(45deg)' : 'none',
                  }}
                >
                  +
                </span>
              </button>
              <div className={`tara-faq-answer${open ? ' tara-faq-answer-open' : ''}`}>
                <p style={{ fontSize: '17px', lineHeight: 1.7, fontWeight: 300, color: 'var(--ink-2)', margin: 0, padding: '0 26px 24px' }}>
                  {answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
