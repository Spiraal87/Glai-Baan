import Hero from '@/components/sections/Hero';
import PressStrip from '@/components/sections/PressStrip';
import About from '@/components/sections/About';
import PopularDishes from '@/components/sections/PopularDishes';
import FullMenu from '@/components/sections/FullMenu';
import Gallery from '@/components/sections/Gallery';
import VisitUs from '@/components/sections/VisitUs';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#1a1a1a' }}>
      <Hero />
      <PressStrip />
      <About />
      <PopularDishes />
      <FullMenu />
      <Gallery />
      <VisitUs />
      <Footer />
    </main>
  );
}
