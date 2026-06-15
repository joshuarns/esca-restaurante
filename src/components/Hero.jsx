export default function Hero() {
  const handleScroll = () =>
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })

  return (
    <div style={s.wrapper}>
      <img
        src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=90"
        alt=""
        style={s.bg}
      />
      <div style={s.overlay} />

      {/* Centro: logo + tagline */}
      <div style={s.center}>
        <div style={s.scriptLogo}>esca</div>
        <p style={s.tagline}>COCINA DE ORIGEN</p>
      </div>

      {/* Indicador scroll — clickeable */}
      <button style={s.scrollWrap} onClick={handleScroll}>
        <span style={s.scrollText}>SCROLL</span>
        <div style={s.scrollLine} />
      </button>
    </div>
  )
}

const s = {
  wrapper: {
    position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden',
  },
  bg: {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'cover', objectPosition: 'center',
  },
  overlay: {
    position: 'absolute', inset: 0,
    background: 'rgba(10, 7, 4, 0.45)',
  },
  center: {
    position: 'absolute', top: '50%', left: '50%',
    transform: 'translate(-50%, -56%)',
    textAlign: 'center', pointerEvents: 'none', userSelect: 'none',
  },
  scriptLogo: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 120,
    color: '#ffffff',
    lineHeight: 1,
    letterSpacing: '0.02em',
  },
  tagline: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12, fontWeight: 400,
    letterSpacing: '0.35em', color: '#f1eddc',
    textTransform: 'uppercase', marginTop: 24,
  },
  scrollWrap: {
    position: 'absolute', bottom: 36, left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
    background: 'none', border: 'none', cursor: 'pointer',
  },
  scrollText: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 10, letterSpacing: '0.3em',
    color: '#f1eddc', textTransform: 'uppercase', opacity: 0.7,
  },
  scrollLine: {
    width: 1, height: 36,
    background: 'rgba(241,237,220,0.5)',
  },
}
