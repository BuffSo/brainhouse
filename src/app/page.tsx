import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { ServiceHighlight } from '@/components/sections/service-highlight';
import { PortfolioHighlight } from '@/components/sections/portfolio-highlight';
import { CTASection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServiceHighlight />
        <PortfolioHighlight />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
