import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHeader } from '@/components/ui/page-header';
import { Business } from '@/components/sections/business';

export const metadata = {
  title: 'Business Areas - Brain House',
  description:
    'Brain House Business Areas - Technology, Management, Investment, Platform',
};

export default function BusinessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader page="business" backgroundImage="/images/business_bg.png" />
        <Business />
      </main>
      <Footer />
    </div>
  );
}
