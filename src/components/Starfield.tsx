export default function Starfield() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        backgroundImage: `
          radial-gradient(1.2px 1.2px at 20% 30%, var(--silver) 50%, transparent 51%),
          radial-gradient(1px 1px at 70% 20%, var(--violet) 50%, transparent 51%),
          radial-gradient(1.4px 1.4px at 40% 70%, var(--silver) 50%, transparent 51%),
          radial-gradient(1px 1px at 85% 60%, var(--gold) 50%, transparent 51%),
          radial-gradient(1px 1px at 10% 80%, var(--silver) 50%, transparent 51%),
          radial-gradient(1.2px 1.2px at 55% 45%, var(--silver) 50%, transparent 51%)
        `,
        backgroundSize: '600px 600px, 420px 420px, 760px 760px, 520px 520px, 340px 340px, 900px 900px',
        opacity: 'var(--stars-opacity)',
        animation: 'tara-twinkle 7s ease-in-out infinite',
      }}
    />
  );
}
