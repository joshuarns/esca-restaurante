const PANELS = [
  {
    label: 'Gastronomía',
    title: 'El Menú',
    cta: 'Ver carta',
    href: '/menu',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=85',
  },
  {
    label: 'Vinoteca',
    title: 'La Cava',
    cta: 'Saber más',
    href: '/cava',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=85',
  },
]

export default function FeaturedSection() {
  return (
    <section style={s.section}>
      {PANELS.map(({ label, title, cta, href, img }) => (
        <div key={label} style={s.panel} className="featured-panel">
          {/* Imagen de fondo */}
          <img src={img} alt={title} style={s.bg} className="featured-bg" />
          <div style={s.overlay} />

          {/* Contenido centrado */}
          <div style={s.content}>
            <p style={s.label}>{label}</p>
            <h3 style={s.title}>{title}</h3>
            <a href={href} style={s.btn} className="featured-btn">{cta}</a>
          </div>
        </div>
      ))}
    </section>
  )
}

const s = {
  section: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '70vh',
    minHeight: 480,
  },
  panel: {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'cover', objectPosition: 'center',
    transition: 'transform 0.6s ease',
  },
  overlay: {
    position: 'absolute', inset: 0,
    background: 'rgba(10, 7, 4, 0.5)',
  },
  content: {
    position: 'relative', zIndex: 1,
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', textAlign: 'center',
    gap: 20, padding: '0 32px',
  },
  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11, fontWeight: 400,
    letterSpacing: '0.3em', textTransform: 'uppercase',
    color: 'rgba(241,237,220,0.7)',
  },
  title: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 'clamp(52px, 6vw, 80px)',
    fontWeight: 400, color: '#ffffff',
    lineHeight: 1.1, letterSpacing: '0.02em',
  },
  btn: {
    marginTop: 8,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11, fontWeight: 400,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#f1eddc', textDecoration: 'none',
    border: '1px solid rgba(241,237,220,0.6)',
    padding: '12px 32px',
    transition: 'background 0.2s, color 0.2s',
  },
}
