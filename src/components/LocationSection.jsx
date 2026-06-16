import { useBreakpoint } from '../hooks/useBreakpoint'
import locationImg from '../img/portada.jpg'

export default function LocationSection() {
  const { isMobile, isTablet } = useBreakpoint()

  const padV = isMobile ? 72 : isTablet ? 88 : 100
  const padH = isMobile ? 24 : isTablet ? 48 : 80

  return (
    <section style={{
      ...s.section,
      padding: `${padV}px ${padH}px`,
    }}>
      <div style={{
        ...s.inner,
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 44 : 60,
      }}>

        <div style={s.textCol}>
          <h2 style={s.headline}>Donde el fuego{!isMobile && <br />} cobra vida.</h2>

          <div style={s.block}>
            <p style={s.label}>Ubicación</p>
            <p style={s.line}>Córdoba 140</p>
            <p style={s.line}>Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX</p>
          </div>

          <div style={s.block}>
            <p style={s.label}>Reservas</p>
            <p style={s.line}>+52 55 0000 0000</p>
            <p style={s.line}>hola@escarestaurante.com</p>
          </div>

          <div style={s.block}>
            <p style={s.label}>Horario</p>
            <p style={s.line}>Mar - Sáb: 13:30 – 16:00 | 20:30 – 23:30</p>
            <p style={s.line}>Dom: 13:30 – 16:30</p>
          </div>
        </div>

        <div style={s.imageCol}>
          <img src={locationImg} alt="ESCA Restaurante" style={s.image} />
        </div>

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
    maxWidth: 1100, width: '100%',
    display: 'grid', alignItems: 'center',
  },
  textCol: {
    display: 'flex', flexDirection: 'column',
  },
  headline: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(30px, 4vw, 46px)',
    fontWeight: 600, lineHeight: 1.2,
    color: '#1d1d1b', marginBottom: 40,
    letterSpacing: '-0.01em',
  },
  block: {
    marginBottom: 28,
  },
  label: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 11, fontWeight: 500,
    letterSpacing: '0.25em', textTransform: 'uppercase',
    color: '#8a7f6e', marginBottom: 10,
  },
  line: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 15, fontWeight: 400, lineHeight: 1.6,
    color: '#1d1d1b',
  },
  imageCol: {
    width: '100%',
  },
  image: {
    width: '100%', height: '100%',
    aspectRatio: '1 / 1',
    objectFit: 'cover', objectPosition: 'center',
    display: 'block',
  },
}
