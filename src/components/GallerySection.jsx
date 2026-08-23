import { useBreakpoint } from '../hooks/useBreakpoint'
import bigImg from '../img/caratula-menu-2.jpg'
import wideImg from '../img/DSCF3557.jpg'
import squareImg1 from '../img/DSCF3599.jpg'
import squareImg2 from '../img/DSCF3545.jpg'

export default function GallerySection() {
  const { isMobile, isTablet } = useBreakpoint()

  const padH = isMobile ? 0  : isTablet ? 32 : 60
  const padV = isMobile ? 32 : isTablet ? 24 : 40
  const gap  = 6

  if (isMobile) {
    return (
      <section style={{ ...s.section, padding: `${padV}px ${padH}px` }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap }}>
          <div className="gallery-item" style={{ ...s.cell, height: '70vw' }}>
            <img src={bigImg} alt="Producto de mar" style={s.img} />
          </div>
          <div className="gallery-item" style={{ ...s.cell, height: '50vw' }}>
            <img src={wideImg} alt="La Cava" style={s.img} />
          </div>
          <div style={{ display: 'flex', gap, height: '38vw' }}>
            <div className="gallery-item" style={{ ...s.cell, flex: 1 }}>
              <img src={squareImg1} alt="Interior" style={s.img} />
            </div>
            <div className="gallery-item" style={{ ...s.cell, flex: 1 }}>
              <img src={squareImg2} alt="Terraza" style={s.img} />
            </div>
          </div>
        </div>
      </section>
    )
  }

  const totalHeight  = isTablet ? 600 : 760
  const topHeight    = Math.round(totalHeight * 0.65)
  const bottomHeight = totalHeight - topHeight - gap

  return (
    <section style={{ ...s.section, padding: `${padV}px ${padH}px` }}>
      <div style={{ display: 'flex', gap, maxWidth: 1280, margin: '0 auto', height: totalHeight }}>

        <div className="gallery-item" style={{ ...s.cell, flex: 1, height: totalHeight }}>
          <img src={bigImg} alt="Producto de mar" style={s.img} />
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap }}>
          <div className="gallery-item" style={{ ...s.cell, height: topHeight }}>
            <img src={wideImg} alt="La Cava" style={s.img} />
          </div>
          <div style={{ display: 'flex', gap, height: bottomHeight }}>
            <div className="gallery-item" style={{ ...s.cell, flex: 1 }}>
              <img src={squareImg1} alt="Interior" style={s.img} />
            </div>
            <div className="gallery-item" style={{ ...s.cell, flex: 1 }}>
              <img src={squareImg2} alt="Terraza" style={s.img} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

const s = {
  section: {
    background: '#f1eddc',
    width: '100%',
  },
  cell: {
    position: 'relative', overflow: 'hidden', width: '100%',
  },
  img: {
    width: '100%', height: '100%',
    objectFit: 'cover', objectPosition: '50% 25%',
    display: 'block',
  },
}
