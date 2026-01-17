'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:mt-4 sm:text-lg">{t.contact.description}</p>
        </div>

        <div className="mx-auto mt-10 max-w-xl sm:mt-16">
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-slate-900"
              >
                {t.contact.form.firstName}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base sm:py-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-slate-900"
              >
                {t.contact.form.lastName}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base sm:py-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-slate-900"
              >
                {t.contact.form.company}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base sm:py-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-slate-900"
              >
                {t.contact.form.email}
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base sm:py-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-slate-900"
              >
                {t.contact.form.message}
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base sm:py-2 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-10">
            <Button type="submit" className="w-full py-3 text-base sm:py-2.5 sm:text-sm">
              {t.contact.form.submit}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
