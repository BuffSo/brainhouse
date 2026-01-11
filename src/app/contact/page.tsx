import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHeader } from '@/components/ui/page-header';
import { Contact } from '@/components/sections/contact';

export const metadata = {
  title: 'Contact - Brain House',
  description: 'Contact Brain House - Get Started with Your Project',
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader page="contact" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
