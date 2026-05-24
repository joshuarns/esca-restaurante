import { useState, useEffect, useCallback, useRef } from 'react'
import EscaLogo from './EscaLogo'

const SLIDES = [
  {
    left:  { type: 'video', src: 'https://cdn.shopify.com/videos/c/o/v/db51e2dac221447d85a83028e2d6e0c4.mp4' },
    right: { type: 'image', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=1200&fit=crop&q=85' },
  },
  {
    left:  { type: 'image', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=1200&fit=crop&q=85' },
    right: { type: 'video', src: 'https://cdn.shopify.com/videos/c/o/v/3a997c77af084f8bbbb16524df2f497c.mp4' },
  },
  {
    left:  { type: 'video', src: 'https://cdn.shopify.com/videos/c/o/v/bc5d0f843e1041688e7c1cc3887209b7.mp4' },
    right: { type: 'image', src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=1200&fit=crop&q=85' },
  },
  {
    left:  { type: 'video', src: 'https://cdn.shopify.com/videos/c/o/v/cfd676ab3d064dceac8315f5fc4eaad7.mp4' },
    right: { type: 'video', src: 'https://cdn.shopify.com/videos/c/o/v/394691f350144428abd2a292dcdaee50.mp4' },
  },
  {
    left:  { type: 'video', src: 'https://cdn.shopify.com/videos/c/o/v/63ae85e18009448ab81358825901e094.mp4' },
    right: { type: 'image', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=1200&fit=crop&q=85' },
  },
]

const FALLBACK_COLORS = [
  ['#0a0805', '#1a120a'],
  ['#120a05', '#0a0a12'],
  ['#05100a', '#150505'],
  ['#080510', '#100808'],
  ['#100508', '#050a10'],
]

const TRANSITION_MS = 900

function MediaPanel({ media, fallbackGrad }) {
  const vidRef = useRef(null)

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.load()
      vidRef.current.play().catch(() => {})
    }
  }, [media?.src])

  const base = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }

  return (
    <div style={{
      width: '100%', height: '100%',
      background: `linear-gradient(135deg, ${fallbackGrad[0]}, ${fallbackGrad[1]})`,
    }}>
      {media?.type === 'video' ? (
        <video ref={vidRef} autoPlay muted loop playsInline style={base}>
          <source src={media.src} type="video/mp4" />
        </video>
      ) : media?.type === 'image' ? (
        <img src={media.src} alt="" style={base} loading="lazy" />
      ) : null}
    </div>
  )
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev]       = useState(null)
  const busy                  = useRef(false)
  const total                 = SLIDES.length

  const goTo = useCallback(i => {
    if (busy.current) return
    const next = ((i % total) + total) % total
    if (next === current) return
    busy.current = true
    setPrev(current)
    setCurrent(next)
    setTimeout(() => {
      setPrev(null)
      busy.current = false
    }, TRANSITION_MS + 50)
  }, [current, total])

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const id = setInterval(goNext, 7000)
    return () => clearInterval(id)
  }, [goNext])

  const slide     = SLIDES[current]
  const prevSlide = prev !== null ? SLIDES[prev] : null
  const fb        = FALLBACK_COLORS[current % FALLBACK_COLORS.length]
  const pfb       = prev !== null ? FALLBACK_COLORS[prev % FALLBACK_COLORS.length] : fb
  const anim      = prevSlide !== null

  return (
    <div style={s.wrapper}>
      <div className="hero-grid" style={{ position: 'absolute', inset: 0 }}>

        {/* Left column — click = prev slide. Exits up, enters from below */}
        <div style={s.col} onClick={goPrev}>
          {anim && (
            <div key={`xl-${prev}`} className="panel-exit-up" style={s.abs}>
              <MediaPanel media={prevSlide.left} fallbackGrad={pfb} />
            </div>
          )}
          <div key={`el-${current}`} className={anim ? 'panel-enter-up' : ''} style={s.abs}>
            <MediaPanel media={slide.left} fallbackGrad={fb} />
          </div>
        </div>

        {/* Right column — click = next slide. Exits down, enters from above */}
        <div style={s.col} onClick={goNext}>
          {anim && (
            <div key={`xr-${prev}`} className="panel-exit-down" style={s.abs}>
              <MediaPanel media={prevSlide.right} fallbackGrad={[pfb[1], pfb[0]]} />
            </div>
          )}
          <div key={`er-${current}`} className={anim ? 'panel-enter-down' : ''} style={s.abs}>
            <MediaPanel media={slide.right} fallbackGrad={[fb[1], fb[0]]} />
          </div>
        </div>

      </div>

      {/* Brand — centered at the seam, above both columns */}
      <div style={s.brand}>
        <EscaLogo color="#f1eddc" style={{ display: 'block' }} />
      </div>
    </div>
  )
}

const s = {
  wrapper: {
    position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden',
  },
  col: {
    position: 'relative', overflow: 'hidden', cursor: 'pointer',
  },
  abs: {
    position: 'absolute', inset: 0,
  },
  brand: {
    position: 'absolute', top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center', pointerEvents: 'none', userSelect: 'none',
    zIndex: 10,
  },
}
