import { MetadataRoute } from 'next';

const BASE_URL = 'https://brainhouse.kr';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/business',
    '/services',
    '/portfolio',
    '/contact',
    '/privacy',
  ];

  const serviceSlugs = [
    'mvp-development',
    'ax-consulting',
    'ict-strategy',
    'tech-commercialization',
    'startup-investment',
    'education-training',
    'ai-algorithm-development',
    'software-development',
  ];

  const portfolioSlugs = ['ict-strategy', 'bm-software'];

  return [
    ...staticPages.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
      priority: route === '' ? 1 : 0.8,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...portfolioSlugs.map((slug) => ({
      url: `${BASE_URL}/portfolio/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
