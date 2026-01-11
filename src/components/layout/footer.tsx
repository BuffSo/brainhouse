'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { useLanguage } from '@/contexts/language-context';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 py-12 text-slate-400">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <span className="text-xl font-bold text-white">
                {t.footer.companyName}
              </span>
            </Link>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <Icons.MapPin className="mr-2 h-4 w-4" />
                {t.footer.address}
              </p>
              <p className="flex items-center">
                <Icons.Phone className="mr-2 h-4 w-4" />
                070-4355-5498
              </p>
              <p className="flex items-center">
                <Icons.Mail className="mr-2 h-4 w-4" />
                comfamil@gmail.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.sections.company}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  {t.footer.links.about}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  {t.footer.links.history}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  {t.footer.links.vision}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.sections.business}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/business" className="hover:text-white">
                  {t.footer.links.tech}
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-white">
                  {t.footer.links.mgmt}
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-white">
                  {t.footer.links.invest}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.sections.legal}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  {t.footer.links.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t.footer.links.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          <p>{t.footer.rights}</p>
        </div>
      </Container>
    </footer>
  );
}
