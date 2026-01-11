'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@/components/ui/icons';

import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';
import { Button, buttonVariants } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navigation = [
    { name: t.header.about, href: '/about' },
    { name: t.header.business, href: '/business' },
    { name: t.header.services, href: '/services' },
    { name: t.header.portfolio, href: '/portfolio' },
    { name: t.header.contact, href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-6 w-6 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Brain House Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">
                Brain House
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
              {/* Desktop Language Selector */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-2 hover:bg-slate-100 data-[state=open]:bg-slate-100"
                >
                  <Icons.Globe className="h-4 w-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-700">
                    {language === 'ko' ? '한국어' : 'English'}
                  </span>
                  <Icons.ChevronDown className="h-3 w-3 text-slate-400" />
                </Button>

                {isLangMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsLangMenuOpen(false)}
                    />
                    <div className="absolute right-0 top-full z-20 mt-2 w-32 rounded-lg border border-slate-200 bg-white shadow-lg ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="py-1">
                        <button
                          onClick={() => {
                            if (language !== 'ko') toggleLanguage();
                            setIsLangMenuOpen(false);
                          }}
                          className={cn(
                            'flex w-full items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors',
                            language === 'ko' &&
                              'bg-slate-50 font-semibold text-blue-600'
                          )}
                        >
                          한국어
                        </button>
                        <button
                          onClick={() => {
                            if (language !== 'en') toggleLanguage();
                            setIsLangMenuOpen(false);
                          }}
                          className={cn(
                            'flex w-full items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors',
                            language === 'en' &&
                              'bg-slate-50 font-semibold text-blue-600'
                          )}
                        >
                          English
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: 'sm' }))}
              >
                {t.header.getStarted}
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-2"
            >
              <Icons.Globe className="h-5 w-5 text-slate-500" />
              <div className="flex items-center text-xs font-medium">
                <span
                  className={cn(
                    language === 'ko'
                      ? 'font-bold text-slate-900'
                      : 'text-slate-400'
                  )}
                >
                  KOR
                </span>
                <span className="mx-1 text-slate-300">|</span>
                <span
                  className={cn(
                    language === 'en'
                      ? 'font-bold text-slate-900'
                      : 'text-slate-400'
                  )}
                >
                  ENG
                </span>
              </div>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <Icons.X className="h-6 w-6" />
              ) : (
                <Icons.Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </Container>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className={cn(buttonVariants({ className: 'w-full' }))}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.header.getStarted}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
