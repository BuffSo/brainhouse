'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { useLanguage } from '@/contexts/language-context';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 text-slate-400 sm:py-10">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="mb-4">
            <span className="text-lg font-bold text-white sm:text-xl">
              {t.footer.companyName}
            </span>
          </Link>

          <div className="flex flex-col items-center gap-2 text-xs sm:flex-row sm:gap-6 sm:text-sm">
            <p className="flex items-center">
              <Icons.MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
              {t.footer.address}
            </p>
            <p className="flex items-center">
              <Icons.Mail className="mr-2 h-4 w-4 flex-shrink-0" />
              brainhouse26@gmail.com
            </p>
            <Link
              href="/privacy"
              className="text-slate-400 transition-colors hover:text-white"
            >
              {t.footer.links.privacy}
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-700 pt-6 text-center text-xs sm:text-sm">
          <p>{t.footer.rights}</p>
        </div>
      </Container>
    </footer>
  );
}
