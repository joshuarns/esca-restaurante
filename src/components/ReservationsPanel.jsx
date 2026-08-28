import { useState, useEffect, useRef, useCallback } from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'

const OT_SRC = 'https://www.opentable.com.mx/widget/reservation/loader?rid=1436293&type=standard&theme=tall&color=3&dark=false&iframe=true&domain=commx&lang=es-MX&newtab=false&ot_source=Restaurant%20website&cfe=true'
const ANIM_DURATION = 460

export default function ReservationsPanel() {
  const [open, setOpen]       = useState(false)
  const [closing, setClosing] = useState(false)
  const containerRef          = useRef(null)
  const { isMobile, isTablet } = useBreakpoint()

  const handleWidth  = isMobile ? 40  : isTablet ? 52  : 64
  const labelSize    = isMobile ? 12  : isTablet ? 15  : 20
  const arrowW       = isMobile ? 14  : isTablet ? 16  : 20
  const arrowH       = isMobile ? 9   : isTablet ? 10  : 12
  const arrowMT      = isMobile ? 10  : 16
  const drawerWidth  = isMobile ? '100vw' : 460
  const drawerPad    = isMobile ? '72px 28px 52px' : '80px 52px 60px'

  const handleOpen = useCallback(() => {
    setClosing(false)
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setClosing(true)
    setTimeout(() => {
      setOpen(false)
      setClosing(false)
    }, ANIM_DURATION)
  }, [])

  useEffect(() => {
    if (!open) return
    const fn = e => e.key === 'Escape' && handleClose()
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [open, handleClose])

  useEffect(() => {
    if (!open || !containerRef.current) return
    containerRef.current.innerHTML = ''
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src  = OT_SRC
    containerRef.current.appendChild(script)
  }, [open])

  return (
    <>
      {/* ── Right vertical handle ── */}
      <div style={{
        position: 'fixed', right: 0, top: 0, bottom: 0, width: handleWidth, zIndex: 40,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        borderLeft: '1px solid rgba(241,237,220,0.5)',
      }}>
        <button style={s.toggleBtn} onClick={handleOpen} aria-label="Abrir reservaciones">
          <span style={{
            writingMode: 'vertical-rl', transform: 'rotate(180deg)',
            fontSize: labelSize, letterSpacing: '0.25em', textTransform: 'uppercase',
            color: '#f1eddc', fontFamily: 'inherit', fontWeight: 300,
          }}>Reservas</span>
          <svg width={arrowH} height={arrowW}
            viewBox="0 0 12 20" fill="none"
            style={{ marginTop: arrowMT }}>
            <path d="M1 1L11 10L1 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* ── Overlay + right drawer ── */}
      {open && (
        <div
          className={closing ? 'nav-overlay-out' : 'nav-overlay-in'}
          style={s.overlay}
          onClick={handleClose}
        >
          <div
            className={closing ? 'res-drawer-out' : 'res-drawer-in'}
            style={{ ...s.drawer, width: drawerWidth, padding: drawerPad }}
            onClick={e => e.stopPropagation()}
          >
            <button style={s.closeBtn} onClick={handleClose} aria-label="Cerrar">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M0 20L20 0M0 0L20 20" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
            </button>

            <p style={s.label}>Reservaciones</p>
            <h2 style={s.title}>Reserve su mesa</h2>

            <div ref={containerRef} style={s.widget} />
          </div>
        </div>
      )}
    </>
  )
}

const s = {
  toggleBtn: {
    pointerEvents: 'all', background: 'none', border: 'none',
    cursor: 'pointer', color: '#f1eddc',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    padding: 0, fontFamily: 'inherit',
  },
  overlay: {
    position: 'fixed', inset: 0, zIndex: 200,
    display: 'flex', justifyContent: 'flex-end',
    background: 'rgba(10,7,4,0.55)',
  },
  drawer: {
    position: 'relative',
    height: '100%',
    background: '#f1eddc',
    display: 'flex', flexDirection: 'column',
    overflowY: 'auto',
  },
  closeBtn: {
    position: 'absolute', top: 28, right: 28,
    background: 'none', border: 'none', cursor: 'pointer',
    color: '#1d1d1b', padding: 8,
  },
  label: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 11, fontWeight: 400,
    letterSpacing: '0.3em', textTransform: 'uppercase',
    color: '#8a7f6e', marginBottom: 12,
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(26px, 4vw, 36px)',
    fontWeight: 400, color: '#1d1d1b',
    letterSpacing: '-0.01em', lineHeight: 1.2,
    marginBottom: 36,
  },
  widget: {
    flex: 1,
    minHeight: 0,
  },
}
