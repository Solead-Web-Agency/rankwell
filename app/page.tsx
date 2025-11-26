import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
    </main>
  );
}
