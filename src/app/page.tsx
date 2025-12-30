import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Business } from '@/components/sections/business';
import { Portfolio } from '@/components/sections/portfolio';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Business />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
