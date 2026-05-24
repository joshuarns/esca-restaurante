import { useState } from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function AnnouncementModal() {
  const [visible, setVisible] = useState(true)
  const { isMobile, isTablet } = useBreakpoint()

  if (!visible) return null

  const boxPad  = isMobile ? '28px 20px 24px' : isTablet ? '40px 32px 32px' : '52px 44px 40px'
  const titleSz = isMobile ? 14 : 17
  const bodySz  = isMobile ? 13 : 14

  return (
    <div style={s.overlay} onClick={e => e.target === e.currentTarget && setVisible(false)}>
      <div style={{ ...s.box, padding: boxPad }}>
        <h2 style={{ ...s.h, fontSize: titleSz }}>New Opening Times</h2>
        <p style={{ ...s.p, fontSize: bodySz }}>
          Starting from this summer our opening times are changing. From Tuesday 1st August onwards,
          our restaurant will be open for dinner from Tuesday to Saturday, and for lunch on Saturday as usual.
        </p>
        <h2 style={{ ...s.h, fontSize: titleSz, marginTop: 28 }}>Summer Break</h2>
        <p style={{ ...s.p, fontSize: bodySz }}>
          Our last day open before the holidays is Saturday 5th August. We will be back as usual
          from Tuesday 15th August.
        </p>
        <button style={s.btn} onClick={() => setVisible(false)}>CLOSE</button>
      </div>
    </div>
  )
}

const s = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 9999,
    background: 'rgba(29,29,27,0.65)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: 16,
  },
  box: {
    background: '#f1eddc',
    maxWidth: 520, width: '100%',
  },
  h: {
    fontWeight: 400,
    textTransform: 'uppercase', letterSpacing: '0.06em',
    marginBottom: 12, color: '#1d1d1b',
  },
  p: { lineHeight: 1.75, color: '#1d1d1b' },
  btn: {
    marginTop: 28, background: 'none',
    border: '1px solid #1d1d1b', padding: '10px 28px',
    fontSize: 11, letterSpacing: '0.14em',
    textTransform: 'uppercase', cursor: 'pointer',
    color: '#1d1d1b', fontFamily: 'inherit',
    transition: 'background .2s, color .2s',
  },
}
