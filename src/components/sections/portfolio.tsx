'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { useLanguage } from '@/contexts/language-context';

export function Portfolio() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);

  if (!t.portfolio.categories) return null;

  return (
    <section id="portfolio" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.portfolio.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t.portfolio.description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {t.portfolio.categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                activeCategory === index
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        <div className="mt-8 text-center">
          <p className="text-slate-500">
            {t.portfolio.categories[activeCategory].description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.portfolio.categories[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <span className="ml-2 shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                  {item.year}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                {item.client}
              </p>
            </div>
          ))}
        </div>

        {/* Project Count */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400">
            {t.portfolio.categories[activeCategory].items.length} projects
          </p>
        </div>
      </Container>
    </section>
  );
}
