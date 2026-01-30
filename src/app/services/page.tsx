import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHeader } from '@/components/ui/page-header';
import { Services } from '@/components/sections/services';

export const metadata = {
  title: 'Services - Brain House',
  description: 'Brain House ICT Professional Services',
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader page="services" backgroundImage="/images/services_bg.webp" />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
