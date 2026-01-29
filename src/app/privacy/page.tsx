'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';
import { useLanguage } from '@/contexts/language-context';

export default function PrivacyPage() {
  const { t } = useLanguage();
  const { pageHeader, lastUpdated, intro, sections } = t.privacy;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-16 pt-24 sm:px-6 sm:py-20 sm:pt-32">
          <Container className="text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {pageHeader.title}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300 sm:mt-4 sm:text-lg">
              {pageHeader.subtitle}
            </p>
          </Container>
        </section>

        <section className="bg-slate-900 px-4 py-12 sm:px-6 sm:py-16">
          <Container className="max-w-4xl">
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
              <p className="mb-6 text-sm text-slate-400">{lastUpdated}</p>
              <p className="mb-8 text-slate-300">{intro}</p>

              <div className="space-y-8">
                <Section
                  title={sections.purpose.title}
                  content={sections.purpose.content}
                  items={sections.purpose.items}
                />

                <Section
                  title={sections.items.title}
                  content={sections.items.content}
                  items={sections.items.items}
                />

                <Section
                  title={sections.retention.title}
                  content={sections.retention.content}
                  items={sections.retention.items}
                />

                <Section
                  title={sections.rights.title}
                  content={sections.rights.content}
                />

                <Section
                  title={sections.security.title}
                  content={sections.security.content}
                  items={sections.security.items}
                />

                <div>
                  <h2 className="mb-3 text-lg font-semibold text-white">
                    {sections.officer.title}
                  </h2>
                  <p className="mb-3 text-slate-300">{sections.officer.content}</p>
                  <ul className="space-y-1 text-slate-300">
                    <li>{sections.officer.name}</li>
                    <li>{sections.officer.position}</li>
                    <li>{sections.officer.email}</li>
                  </ul>
                </div>

                <Section
                  title={sections.changes.title}
                  content={sections.changes.content}
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Section({
  title,
  content,
  items,
}: {
  title: string;
  content: string;
  items?: string[];
}) {
  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold text-white">{title}</h2>
      <p className="text-slate-300">{content}</p>
      {items && items.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
