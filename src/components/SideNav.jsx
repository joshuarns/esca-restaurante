import { useState, useEffect, useCallback } from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'

const NAV_PRIMARY = [
  { label: 'Restaurant', href: '/restaurant/' },
  { label: 'Cellar',     href: '/cellar/'     },
  { label: 'Events',     href: '/events/'     },
  { label: 'Journal',    href: '/journal/'    },
]
const NAV_SECONDARY = [
  { label: 'FAQs',       href: '/faqs/'       },
  { label: 'Contact',    href: '/contact/'    },
  { label: 'Gift Cards', href: 'https://squareup.com/gift/MLJP0JSYHM240/order' },
]

const ANIM_DURATION = 460

export default function SideNav() {
  const [open, setOpen]       = useState(false)
  const [closing, setClosing] = useState(false)
  const { isMobile, isTablet } = useBreakpoint()

  const handleWidth   = isMobile ? 40  : isTablet ? 52  : 64
  const labelSize     = isMobile ? 12  : isTablet ? 15  : 20
  const arrowW        = isMobile ? 14  : isTablet ? 16  : 20
  const arrowH        = isMobile ? 9   : isTablet ? 10  : 12
  const arrowMT       = isMobile ? 10  : 16
  const drawerPad     = isMobile
    ? '60px 20px 40px 28px'
    : isTablet
    ? '72px 40px 48px 64px'
    : '80px 60px 52px 140px'
  const primarySize   = isMobile ? 28  : isTablet ? 40  : 56

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

  return (
    <>
      {/* ── Left vertical handle ── */}
      <div style={{
        position: 'fixed', left: 0, top: 0, bottom: 0, width: handleWidth, zIndex: 40,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        borderRight: '1px solid rgba(241,237,220,0.5)',
      }}>
        <button style={s.toggleBtn} onClick={handleOpen} aria-label="Open menu">
          <span style={{
            writingMode: 'vertical-rl', transform: 'rotate(180deg)',
            fontSize: labelSize, letterSpacing: '0.25em', textTransform: 'uppercase',
            color: '#f1eddc', fontFamily: 'inherit', fontWeight: 300,
          }}>Acerca de</span>
          <svg width={arrowH} height={arrowW}
            viewBox="0 0 12 20" fill="none"
            style={{ marginTop: arrowMT }}>
            <path d="M1 1L11 10L1 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* ── Fullscreen drawer ── */}
      {open && (
        <div
          className={closing ? 'nav-overlay-out' : 'nav-overlay-in'}
          style={s.overlay}
        >
          <div
            className={closing ? 'nav-drawer-out' : 'nav-drawer-in'}
            style={{ ...s.drawer, padding: drawerPad }}
          >
            {/* Close X */}
            <button style={s.closeBtn} onClick={handleClose} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M0 20L20 0M0 0L20 20" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
            </button>

            {/* Primary nav */}
            <nav>
              <ul style={s.primary}>
                {NAV_PRIMARY.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="link-underline"
                      style={{ ...s.primaryItem, fontSize: primarySize }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Secondary links */}
            <ul style={s.secondary}>
              {NAV_SECONDARY.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} style={s.secondaryItem}>{label}</a>
                </li>
              ))}
            </ul>
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
    display: 'flex',
  },
  drawer: {
    position: 'relative',
    width: '100%', height: '100%',
    background: '#1d1d1b',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'flex-start',
    overflowY: 'auto',
  },
  closeBtn: {
    position: 'absolute', top: 28, right: 28,
    background: 'none', border: 'none', cursor: 'pointer',
    color: '#f1eddc', padding: 8,
  },
  primary: {
    display: 'flex', flexDirection: 'column', gap: 0,
  },
  primaryItem: {
    fontWeight: 300, color: '#f1eddc',
    textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.2,
    display: 'inline-block',
  },
  secondary: {
    display: 'flex', flexDirection: 'column', gap: 6,
    marginTop: 'auto',
  },
  secondaryItem: {
    fontSize: 13, color: '#f1eddc', opacity: 0.65, letterSpacing: '0.06em',
  },
}
