import { useBreakpoint } from '../hooks/useBreakpoint'

export default function EscaLogo({ color = 'currentColor', style, className }) {
  const { isMobile, isTablet } = useBreakpoint()

  const titleSize = isMobile ? 34 : isTablet ? 52 : 72
  const subSize   = isMobile ? 11 : isTablet ? 13 : 16

  return (
    <div style={{ ...style, color, textAlign: 'center' }} className={className}>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        fontSize: titleSize,
        letterSpacing: '0.4em',
        textTransform: 'uppercase',
        lineHeight: 1,
      }}>
        ESCA
      </div>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        fontSize: subSize,
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        marginTop: 8,
        opacity: 0.85,
      }}>
        Restaurante
      </div>
    </div>
  )
}
