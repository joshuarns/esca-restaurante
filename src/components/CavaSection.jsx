import { useBreakpoint } from '../hooks/useBreakpoint'

export default function CavaSection() {
  const { isMobile, isTablet } = useBreakpoint()

  const padV = isMobile ? 72  : isTablet ? 88  : 100
  const padH = isMobile ? 52  : isTablet ? 64  : 80

  return (
    <section style={{ ...s.section, padding: `${padV}px ${padH}px` }}>
      <div style={s.inner}>

        <h2 style={s.title}>La cava de Esca</h2>

        <div style={s.divider} />

        <blockquote style={s.quote}>
          <p style={s.quoteText}>
            "La experiencia de nuestros clientes siempre va a ser especial,
            tenemos vinos que solo están aquí y que además nos permiten entablar
            conversaciones largas alrededor del vino, que es mi gran pasión".
          </p>
          <cite style={s.author}>Rolly Pavia</cite>
        </blockquote>

        <div style={s.bodyBox}>
          <p style={{ ...s.body, fontSize: isMobile ? 14 : 16 }}>
            Si los crudos son el corazón de Esca, el vino es la sangre que corre
            por las venas del restaurante. Con más de 39 bodegas importadas y 9
            productores exclusivos, la carta de vinos ofrece también vinos
            orgánicos y biodinámicos.
          </p>
        </div>

      </div>
    </section>
  )
}

const s = {
  section: {
    background: '#f1eddc',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  inner: {
    maxWidth: 700, width: '100%',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', textAlign: 'center',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(34px, 5vw, 62px)',
    fontWeight: 400, color: '#1d1d1b',
    letterSpacing: '-0.01em', lineHeight: 1.1,
    marginBottom: 24,
  },
  divider: {
    width: 48, height: 1,
    background: '#1d1d1b', opacity: 0.3,
    marginBottom: 40,
  },
  quote: {
    margin: 0, marginBottom: 44,
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', gap: 18,
  },
  quoteText: {
    fontFamily: "'Playfair Display', serif",
    fontStyle: 'italic',
    fontSize: 'clamp(16px, 2vw, 21px)',
    fontWeight: 400, lineHeight: 1.75,
    color: '#3a3530', maxWidth: 560,
  },
  author: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 12, fontWeight: 400,
    letterSpacing: '0.25em', textTransform: 'uppercase',
    color: '#8a7f6e', fontStyle: 'normal',
  },
  bodyBox: {
    borderTop: '1px solid rgba(29,29,27,0.15)',
    paddingTop: 36, width: '100%',
  },
  body: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 300, lineHeight: 1.85,
    color: '#3a3530', maxWidth: 600, margin: '0 auto',
  },
}
