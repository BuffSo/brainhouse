import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHeader } from '@/components/ui/page-header';
import { Portfolio } from '@/components/sections/portfolio';

export const metadata = {
  title: 'Portfolio - Brain House',
  description: 'Brain House Portfolio and Track Record',
};

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          page="portfolio"
          backgroundImage="/images/portfolio_bg.png"
        />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
