import { useBreakpoint } from '../hooks/useBreakpoint'

export default function ReservationsPanel() {
  const { isMobile, isTablet } = useBreakpoint()

  const handleWidth = isMobile ? 40  : isTablet ? 52  : 64
  const labelSize   = isMobile ? 12  : isTablet ? 15  : 20
  const arrowW      = isMobile ? 14  : isTablet ? 16  : 20
  const arrowH      = isMobile ? 9   : isTablet ? 10  : 12
  const arrowMT     = isMobile ? 10  : 16

  return (
    <div style={{
      position: 'fixed', right: 0, top: 0, bottom: 0, width: handleWidth, zIndex: 40,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center',
      borderLeft: '1px solid rgba(241,237,220,0.5)',
    }}>
      <a href="https://www.sevenrooms.com/reservations/esca"
        target="_blank" rel="noreferrer" style={s.link}>
        <span style={{
          writingMode: 'vertical-rl', transform: 'rotate(180deg)',
          fontSize: labelSize, letterSpacing: '0.25em',
          textTransform: 'uppercase', fontWeight: 300,
        }}>Reservas</span>
        <svg width={arrowH} height={arrowW}
          viewBox="0 0 12 20" fill="none"
          style={{ marginTop: arrowMT }}>
          <path d="M1 1L11 10L1 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </a>
    </div>
  )
}

const s = {
  link: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    color: '#f1eddc', textDecoration: 'none',
    transition: 'opacity .2s',
  },
}
