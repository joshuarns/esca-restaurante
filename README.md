# ESCA — React Replica

Replica fiel del sitio https://esca-restaurante.com construida con React + Vite.

## Instalación y arranque

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Stack
- React 18
- Vite 5
- CSS-in-JS inline (sin dependencias extra)

## Estructura
```
src/
  App.jsx                         # Raíz — monta todos los componentes
  main.jsx                        # Entry point
  index.css                       # Variables CSS globales + reset
  components/
    HeroSlider.jsx                # Slideshow hero pantalla completa (video/imagen)
    SideNav.jsx                   # Menú lateral izquierdo "About"
    ReservationsPanel.jsx         # CTA vertical derecho "Reservations"
    AnnouncementModal.jsx         # Modal de anuncios con cierre
    ESCALogo.jsx               # SVG del logotipo extraído del original
```

## Notas
- Los videos se sirven directamente desde el CDN de Shopify del sitio original.
- La fuente usada es DM Sans (similar a Mabry Pro que usa el original).
- Colores exactos: beige `#f1eddc`, naranja `#f05826`, negro `#1d1d1b`.
