import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { PageHeaderContent } from './page-header-content';

type PageKey = 'about' | 'business' | 'services' | 'portfolio' | 'contact';

interface PageHeaderProps {
  page: PageKey;
  backgroundImage?: string;
}

export function PageHeader({ page, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-16 pt-24 sm:px-6 sm:py-20 sm:pt-32 min-h-[260px] flex flex-col justify-center">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-900/90" />
        </>
      )}
      <Container className="relative z-10 text-center">
        <PageHeaderContent page={page} />
      </Container>
    </section>
  );
}
