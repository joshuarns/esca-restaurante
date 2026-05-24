import HeroSlider from './components/HeroSlider'
import SideNav from './components/SideNav'
import ReservationsPanel from './components/ReservationsPanel'
import AnnouncementModal from './components/AnnouncementModal'

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <HeroSlider />
      <SideNav />
      <ReservationsPanel />
      <AnnouncementModal />
    </div>
  )
}
