'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setErrorMessage(data.error || t.contact.form.error);
        return;
      }

      setStatus('success');
      setFormData({ name: '', company: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMessage(t.contact.form.error);
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="bg-white py-16 sm:py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-lg bg-green-50 p-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-800">{t.contact.form.success}</h3>
              <Button
                type="button"
                className="mt-6"
                onClick={() => setStatus('idle')}
              >
                {t.contact.title}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:mt-4 sm:text-lg">{t.contact.description}</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl sm:mt-16">
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-slate-900"
              >
                {t.contact.form.name} <span className="text-red-500">*</span>
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.company}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base sm:py-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-slate-900"
              >
                {t.contact.form.email} <span className="text-red-500">*</span>
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base sm:py-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-slate-900"
              >
                {t.contact.form.message} <span className="text-red-500">*</span>
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base sm:py-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          {status === 'error' && errorMessage && (
            <div className="mt-4 rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          )}

          <div className="mt-8 sm:mt-10">
            <Button
              type="submit"
              className="w-full py-3 text-base sm:py-2.5 sm:text-sm"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? t.contact.form.submitting : t.contact.form.submit}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
