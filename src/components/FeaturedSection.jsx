import { useBreakpoint } from '../hooks/useBreakpoint'
import menuImg from '../img/caratula-menu.jpg'
import cavaImg from '../img/caratula-la-cava.jpg'

const PANELS = [
  {
    label: 'Gastronomía',
    title: 'El Menú',
    cta: 'Ver carta',
    href: '/menu',
    img: menuImg,
    imgPosition: 'center',
  },
  {
    label: 'Vinoteca',
    title: 'La Cava',
    cta: 'Saber más',
    href: '/cava',
    img: cavaImg,
    imgPosition: 'center bottom',
  },
]

export default function FeaturedSection() {
  const { isMobile } = useBreakpoint()

  return (
    <section style={{
      ...s.section,
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    }}>
      {PANELS.map(({ label, title, cta, href, img, imgPosition }) => (
        <div key={label} style={{
          ...s.panel,
          height: isMobile ? '55vw' : '70vh',
          minHeight: isMobile ? 280 : 420,
        }} className="featured-panel">
          <img src={img} alt={title} style={{ ...s.bg, objectPosition: imgPosition }} className="featured-bg" />
          <div style={s.overlay} />
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
    gap: 16, padding: '0 24px',
  },
  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11, fontWeight: 400,
    letterSpacing: '0.3em', textTransform: 'uppercase',
    color: 'rgba(241,237,220,0.7)',
  },
  title: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 'clamp(44px, 6vw, 80px)',
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
    padding: '11px 28px',
    transition: 'background 0.2s, color 0.2s',
  },
}
