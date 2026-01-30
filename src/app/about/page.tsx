import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHeader } from '@/components/ui/page-header';
import { About } from '@/components/sections/about';

export const metadata = {
  title: 'About - Brain House',
  description: 'Brain House - Digital Transformation Partner',
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader page="about" backgroundImage="/images/about_bg.webp" />
        <About />
      </main>
      <Footer />
    </div>
  );
}
