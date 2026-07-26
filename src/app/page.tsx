import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import CollectionCarousel from '@/components/home/CollectionCarousel';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Benefits from '@/components/home/Benefits';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import CtaBand from '@/components/home/CtaBand';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-hh-ink">
      <Navbar />
      <Hero />
      <CollectionCarousel />
      <FeaturedProducts />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CtaBand />
      <Footer />
    </main>
  );
}
