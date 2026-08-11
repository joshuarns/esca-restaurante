import { useBreakpoint } from '../hooks/useBreakpoint'
import escaLogo from '../img/esca-logo-white.png'

export default function AboutSection() {
  const { isMobile, isTablet } = useBreakpoint()

  const padV = isMobile ? 72  : isTablet ? 100 : 120
  const padH = isMobile ? 52  : isTablet ? 64  : 80
  const bodySize = isMobile ? 14 : 16

  return (
    <section style={{ ...s.section, padding: `${padV}px ${padH}px` }}>
      <div style={s.inner}>

        <p style={s.label}>Nuestra cocina</p>

        <h2 style={s.headline}>
          Sensibilidad italiana,{isMobile ? ' ' : <br />}producto de mar
        </h2>

        <p style={{ ...s.body, fontSize: bodySize }}>
          Nuestra inspiración proviene de las costas mexicanas y del producto que ofrecen,
          los platillos toman la forma que le dan nuestros viajes, lo que nos
          gusta comer y lo que ocurre con la cocina de mar en el mundo. Esca es
          un restaurante que ofrece a sus comensales una experiencia redonda que
          cuida de todos los sentidos: desde la concepción del menú hasta el
          diseño de los espacios.
        </p>

        <img
          src={escaLogo}
          alt="esca"
          style={{ width: isMobile ? 100 : 140, opacity: 0.35, filter: 'sepia(1) brightness(0.6)', marginBottom: 44 }}
        />

      </div>
    </section>
  )
}

const s = {
  section: {
    background: '#f1eddc',
    width: '100%',
    display: 'flex', justifyContent: 'center',
  },
  inner: {
    maxWidth: 720, width: '100%',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    textAlign: 'center',
  },
  label: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 11, fontWeight: 400,
    letterSpacing: '0.3em', textTransform: 'uppercase',
    color: '#8a7f6e', marginBottom: 24,
  },
  headline: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(30px, 5vw, 58px)',
    fontWeight: 400, lineHeight: 1.15,
    color: '#1d1d1b', marginBottom: 36,
    letterSpacing: '-0.01em',
  },
  body: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 300, lineHeight: 1.85,
    color: '#3a3530', maxWidth: 620, marginBottom: 52,
  },
  cta: {
    display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 11, fontWeight: 400,
    letterSpacing: '0.25em', textTransform: 'uppercase',
    color: '#1d1d1b', textDecoration: 'none',
  },
  ctaLine: {
    display: 'block', width: '100%', height: 1,
    background: '#1d1d1b',
  },
}
