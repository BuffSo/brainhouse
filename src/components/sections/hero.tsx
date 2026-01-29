'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';
import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { useLanguage } from '@/contexts/language-context';
import { ErrorBoundary } from '@/components/error-boundary';

const Scene = dynamic(() => import('@/components/3d/scene'), {
  ssr: false,
  loading: () => null,
});

function checkWebGLSupport(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch {
    return false;
  }
}

export function Hero() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setWebglSupported(checkWebGLSupport());
    setMounted(true);
  }, []);

  const fadeStyle1 = { animationDelay: '0.2s', animationFillMode: 'forwards' as const };
  const fadeStyle2 = { animationDelay: '0.4s', animationFillMode: 'forwards' as const };
  const fadeStyle3 = { animationDelay: '0.6s', animationFillMode: 'forwards' as const };
  const fadeStyle4 = { animationDelay: '0.8s', animationFillMode: 'forwards' as const };
  const fadeStyle5 = { animationDelay: '1.2s', animationFillMode: 'forwards' as const };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 pt-20 pb-24 text-center sm:px-6 sm:pt-16 sm:pb-40">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900" />
      </div>

      {/* 3D Network - subtle constellation effect */}
      {mounted && webglSupported && (
        <ErrorBoundary fallback={null}>
          <div className="absolute inset-0 z-[1]">
            <Scene />
          </div>
        </ErrorBoundary>
      )}

      {/* Subtle center glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px]" />

      {/* Content */}
      <Container className="relative z-10 flex flex-col items-center">
        {/* Badge */}
        <div
          className={cn(
            'mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 backdrop-blur-sm sm:mb-6 sm:text-sm',
            'opacity-0 animate-fade-in-up'
          )}
          style={fadeStyle1}
        >
          <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-blue-400" />
          {t.hero.tag}
        </div>

        {/* Title */}
        <h1
          className="max-w-4xl text-3xl font-extrabold tracking-tight text-white opacity-0 animate-fade-in-up sm:text-5xl md:text-6xl lg:text-7xl"
          style={fadeStyle2}
        >
          {t.hero.title}
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
            {t.hero.subtitle}
          </span>
        </h1>

        {/* Description */}
        <p
          className="mt-4 max-w-2xl text-base text-slate-300 opacity-0 animate-fade-in-up sm:mt-6 sm:text-lg md:text-xl"
          style={fadeStyle3}
        >
          {t.hero.description}
        </p>

        {/* Buttons */}
        <div
          className="mt-8 flex w-full flex-col gap-3 opacity-0 animate-fade-in-up sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
          style={fadeStyle4}
        >
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'w-full text-base group relative overflow-hidden sm:w-auto sm:min-w-[160px]'
            )}
          >
            <span className="relative z-10 flex items-center">
              {t.hero.contactBtn}
              <Icons.ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'w-full border-slate-600 bg-slate-900/50 text-white backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:bg-slate-800/50 hover:text-white sm:w-auto sm:min-w-[160px]'
            )}
          >
            {t.hero.businessBtn}
          </Link>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in sm:bottom-10"
        style={fadeStyle5}
      >
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
          <div className="animate-bounce">
            <Icons.Mouse className="h-6 w-6" />
            <Icons.ChevronDown className="mx-auto h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
