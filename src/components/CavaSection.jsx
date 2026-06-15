export default function CavaSection() {
  return (
    <section style={s.section}>
      <div style={s.inner}>

        {/* Título */}
        <h2 style={s.title}>La cava de Esca</h2>

        {/* Divisor */}
        <div style={s.divider} />

        {/* Cita */}
        <blockquote style={s.quote}>
          <p style={s.quoteText}>
            "La experiencia de nuestros clientes siempre va a ser especial,
            tenemos vinos que solo están aquí y que además nos permiten entablar
            conversaciones largas alrededor del vino, que es mi gran pasión".
          </p>
          <cite style={s.author}>Rolly Pavia</cite>
        </blockquote>

        {/* Cuerpo */}
        <div style={s.bodyBox}>
          <p style={s.body}>
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
    padding: '100px 80px',
    display: 'flex',
    justifyContent: 'center',
  },
  inner: {
    maxWidth: 700,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 'clamp(40px, 5vw, 62px)',
    fontWeight: 400,
    color: '#1d1d1b',
    letterSpacing: '-0.01em',
    lineHeight: 1.1,
    marginBottom: 28,
  },
  divider: {
    width: 48,
    height: 1,
    background: '#1d1d1b',
    opacity: 0.3,
    marginBottom: 48,
  },
  quote: {
    margin: 0,
    marginBottom: 48,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  quoteText: {
    fontFamily: "'DM Serif Display', serif",
    fontStyle: 'italic',
    fontSize: 'clamp(17px, 2vw, 21px)',
    fontWeight: 400,
    lineHeight: 1.75,
    color: '#3a3530',
    maxWidth: 580,
  },
  author: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: '#8a7f6e',
    fontStyle: 'normal',
  },
  bodyBox: {
    borderTop: '1px solid rgba(29,29,27,0.15)',
    paddingTop: 40,
    width: '100%',
  },
  body: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 1.85,
    color: '#3a3530',
    maxWidth: 600,
    margin: '0 auto',
  },
}
