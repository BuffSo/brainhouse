'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { useLanguage } from '@/contexts/language-context';

export function Portfolio() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);

  if (!t.portfolio.categories) return null;

  return (
    <section id="portfolio" className="bg-slate-50 py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {t.portfolio.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:mt-4 sm:text-lg">
            {t.portfolio.description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-12 sm:gap-4">
          {t.portfolio.categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:px-6 sm:py-3 sm:text-sm ${
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
        <div className="mt-4 text-center sm:mt-8">
          <p className="text-sm text-slate-500 sm:text-base">
            {t.portfolio.categories[activeCategory].description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-6 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {t.portfolio.categories[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg sm:p-6"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors sm:text-base">
                  {item.title}
                </h3>
                <span className="ml-2 shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 sm:px-2.5">
                  {item.year}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500 sm:mt-3 sm:text-sm">
                {item.client}
              </p>
            </div>
          ))}
        </div>

        {/* Project Count */}
        <div className="mt-6 text-center sm:mt-8">
          <p className="text-xs text-slate-400 sm:text-sm">
            {t.portfolio.categories[activeCategory].items.length} projects
          </p>
        </div>
      </Container>
    </section>
  );
}
