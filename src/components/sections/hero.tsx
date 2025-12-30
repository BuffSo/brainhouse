'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';

import { Button, buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { useLanguage } from '@/contexts/language-context';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16 text-center">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm">
          <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
          {t.hero.tag}
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          {t.hero.title} <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {t.hero.subtitle}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'min-w-[160px] text-base'
            )}
          >
            {t.hero.contactBtn} <Icons.ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="#business"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'min-w-[160px] border-slate-700 bg-transparent text-white hover:bg-slate-800 hover:text-white'
            )}
          >
            {t.hero.businessBtn}
          </Link>
        </div>
      </Container>
    </section>
  );
}
