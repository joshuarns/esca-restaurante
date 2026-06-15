export default function AboutSection() {
  return (
    <section style={s.section}>
      <div style={s.inner}>

        {/* Label */}
        <p style={s.label}>Nuestra cocina</p>

        {/* Titular */}
        <h2 style={s.headline}>
          Sensibilidad italiana,<br />producto de mar.
        </h2>

        {/* Cuerpo */}
        <p style={s.body}>
          Nuestra inspiración proviene de las costas y del producto que ofrecen,
          los platillos toman la forma que le dan nuestros viajes, lo que nos
          gusta comer y lo que ocurre con la cocina de mar en el mundo. Esca es
          un restaurante que ofrece a sus comensales una experiencia redonda que
          cuida de todos los sentidos: desde la concepción del menú hasta la
          concepción de los espacios.
        </p>

        {/* Logo cursivo sutil */}
        <div style={s.scriptLogo}>esca</div>

        {/* CTA */}
        <a href="/equipo" style={s.cta}>
          CONOCE AL EQUIPO
          <span style={s.ctaLine} />
        </a>

      </div>
    </section>
  )
}

const s = {
  section: {
    background: '#f1eddc',
    width: '100%',
    padding: '120px 80px',
    display: 'flex', justifyContent: 'center',
  },
  inner: {
    maxWidth: 720, width: '100%',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    textAlign: 'center',
  },
  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11, fontWeight: 400,
    letterSpacing: '0.3em', textTransform: 'uppercase',
    color: '#8a7f6e', marginBottom: 28,
  },
  headline: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 'clamp(36px, 5vw, 58px)',
    fontWeight: 400, lineHeight: 1.15,
    color: '#1d1d1b', marginBottom: 40,
    letterSpacing: '-0.01em',
  },
  body: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 16, fontWeight: 300,
    lineHeight: 1.85, color: '#3a3530',
    maxWidth: 620, marginBottom: 64,
  },
  scriptLogo: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 56, color: '#c4b99a',
    lineHeight: 1, marginBottom: 52,
    userSelect: 'none',
  },
  cta: {
    display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11, fontWeight: 400,
    letterSpacing: '0.25em', textTransform: 'uppercase',
    color: '#1d1d1b', textDecoration: 'none',
  },
  ctaLine: {
    display: 'block', width: '100%', height: 1,
    background: '#1d1d1b',
  },
}
