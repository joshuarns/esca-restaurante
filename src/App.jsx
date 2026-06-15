import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import FeaturedSection from './components/FeaturedSection'
import CavaSection from './components/CavaSection'
import SideNav from './components/SideNav'
import ReservationsPanel from './components/ReservationsPanel'
import AnnouncementModal from './components/AnnouncementModal'

export default function App() {
  return (
    <div style={{ width: '100vw', overflowX: 'hidden' }}>
      <Hero />
      <AboutSection />
      <FeaturedSection />
      <CavaSection />
      <SideNav />
      <ReservationsPanel />
      <AnnouncementModal />
    </div>
  )
}
