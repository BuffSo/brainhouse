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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 pt-20 pb-24 text-center sm:px-6 sm:pt-16 sm:pb-40">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center">
        <div className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 backdrop-blur-sm sm:mb-6 sm:text-sm">
          <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
          {t.hero.tag}
        </div>

        <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {t.hero.title} <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {t.hero.subtitle}
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-base text-slate-300 sm:mt-6 sm:text-lg md:text-xl">
          {t.hero.description}
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'w-full text-base sm:w-auto sm:min-w-[160px]'
            )}
          >
            {t.hero.contactBtn} <Icons.ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'w-full border-slate-700 bg-transparent text-white hover:bg-slate-800 hover:text-white sm:w-auto sm:min-w-[160px]'
            )}
          >
            {t.hero.businessBtn}
          </Link>
        </div>
      </Container>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-10">
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs uppercase tracking-widest opacity-50">
            Scroll
          </span>
          <Icons.Mouse className="h-6 w-6" />
          <Icons.ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
