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
  const [isMobileLangMenuOpen, setIsMobileLangMenuOpen] = React.useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = React.useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t.header.about, href: '/about' },
    { name: t.header.business, href: '/business' },
    { name: t.header.services, href: '/services', hasSubmenu: true },
    { name: t.header.portfolio, href: '/portfolio' },
    { name: t.header.contact, href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <Image
                src="/images/logo-new.png"
                alt="Brain House Logo"
                width={36}
                height={36}
                className="transition-transform group-hover:scale-105"
              />
              <span className="text-lg sm:text-xl font-bold tracking-tight leading-tight bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-clip-text text-transparent whitespace-nowrap">
                Brain House
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) =>
                item.hasSubmenu ? (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                      <Icons.ChevronDown
                        className={cn(
                          'h-3 w-3 transition-transform',
                          isServicesMenuOpen && 'rotate-180'
                        )}
                      />
                    </button>
                    {isServicesMenuOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setIsServicesMenuOpen(false)}
                        />
                        <div className="absolute left-0 top-full z-20 mt-2 w-48 rounded-lg border border-slate-200 bg-white shadow-lg ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="py-1">
                            <Link
                              href="/services"
                              onClick={() => setIsServicesMenuOpen(false)}
                              className="flex w-full items-center px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-100"
                            >
                              {t.servicesMenu?.viewAll || '전체 서비스 보기'}
                            </Link>
                            {t.servicesMenu?.items?.map((service) => (
                              <Link
                                key={service.slug}
                                href={service.hasPage ? `/services/${service.slug}` : '/services'}
                                onClick={() => setIsServicesMenuOpen(false)}
                                className="flex w-full items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )
              )}
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
                    {language === 'ko' ? '한국어' : language === 'en' ? 'English' : '日本語'}
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
                            setLanguage('ko');
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
                            setLanguage('en');
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
                        <button
                          onClick={() => {
                            setLanguage('ja');
                            setIsLangMenuOpen(false);
                          }}
                          className={cn(
                            'flex w-full items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors',
                            language === 'ja' &&
                              'bg-slate-50 font-semibold text-blue-600'
                          )}
                        >
                          日本語
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
          <div className="md:hidden flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setIsMobileLangMenuOpen(!isMobileLangMenuOpen)}
                className="flex items-center gap-1 px-2 py-1.5 rounded-md hover:bg-slate-100 transition-colors"
              >
                <Icons.Globe className="h-4 w-4 text-slate-500" />
                <span className="text-xs font-medium text-slate-700">
                  {language === 'ko' ? 'KOR' : language === 'en' ? 'ENG' : 'JPN'}
                </span>
                <Icons.ChevronDown className={cn(
                  'h-3 w-3 text-slate-400 transition-transform',
                  isMobileLangMenuOpen && 'rotate-180'
                )} />
              </button>
              {isMobileLangMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsMobileLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full z-20 mt-1 w-24 rounded-lg border border-slate-200 bg-white shadow-lg ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setLanguage('ko');
                          setIsMobileLangMenuOpen(false);
                        }}
                        className={cn(
                          'flex w-full items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors',
                          language === 'ko' && 'bg-slate-50 font-semibold text-blue-600'
                        )}
                      >
                        KOR
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setIsMobileLangMenuOpen(false);
                        }}
                        className={cn(
                          'flex w-full items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors',
                          language === 'en' && 'bg-slate-50 font-semibold text-blue-600'
                        )}
                      >
                        ENG
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('ja');
                          setIsMobileLangMenuOpen(false);
                        }}
                        className={cn(
                          'flex w-full items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors',
                          language === 'ja' && 'bg-slate-50 font-semibold text-blue-600'
                        )}
                      >
                        JPN
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
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
            {navigation.map((item) =>
              item.hasSubmenu ? (
                <div key={item.name}>
                  <button
                    onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.name}
                    <Icons.ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        mobileServicesExpanded && 'rotate-180'
                      )}
                    />
                  </button>
                  {mobileServicesExpanded && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-200 pl-3">
                      <Link
                        href="/services"
                        className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.servicesMenu?.viewAll || '전체 서비스 보기'}
                      </Link>
                      {t.servicesMenu?.items?.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.hasPage ? `/services/${service.slug}` : '/services'}
                          className="flex items-center rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.shortTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
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
