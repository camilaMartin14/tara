import { Link } from 'react-router-dom';
import { useLang } from '../state/LangContext';

export default function NotFound() {
  const { t } = useLang();

  return (
    <main
      style={{
        minHeight: 'calc(100vh - 68px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', textAlign: 'center', maxWidth: '560px' }}>
        <div
          style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: '420px', height: '420px', pointerEvents: 'none',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid var(--line-2)', animation: 'tara-spin 70s linear infinite' }} />
          <div style={{ position: 'absolute', inset: '46px', borderRadius: '50%', border: '1px dashed var(--line)', animation: 'tara-spin-rev 55s linear infinite' }} />
          <div style={{ position: 'absolute', inset: '92px', borderRadius: '50%', border: '1px solid var(--veil)', boxShadow: '0 0 90px var(--veil) inset', animation: 'tara-glow 6s ease-in-out infinite' }} />
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '.4em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '22px' }}>
            {t.notFound.eyebrow}
          </div>
          <div
            style={{
              fontFamily: 'Cinzel, serif', fontWeight: 400, fontSize: 'clamp(80px,14vw,150px)', lineHeight: 1,
              margin: 0, color: 'var(--ink)', textShadow: '0 0 70px var(--veil)',
            }}
          >
            {t.notFound.title}
          </div>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300,
              fontSize: '26px', color: 'var(--gold-2)', margin: '18px 0 0',
            }}
          >
            {t.notFound.subtitle}
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.7, fontWeight: 300, color: 'var(--ink-2)', margin: '20px 0 40px' }}>
            {t.notFound.body}
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              fontFamily: 'Jost, sans-serif', fontSize: '13px', letterSpacing: '.16em', textTransform: 'uppercase',
              color: 'var(--on-gold)', background: 'linear-gradient(100deg, var(--gold-2), var(--gold) 50%, var(--gold-3))',
              border: 0, borderRadius: '999px', padding: '16px 36px', cursor: 'pointer', boxShadow: '0 10px 40px var(--veil)',
            }}
          >
            {t.notFound.cta}
          </Link>
        </div>
      </div>
    </main>
  );
}
