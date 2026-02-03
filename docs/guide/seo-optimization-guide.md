# SEO 최적화 가이드

Next.js 14 App Router 기반 Brainhouse 웹사이트의 SEO 최적화 구현 가이드입니다.

## 목차

1. [현재 구현 상태](#1-현재-구현-상태)
2. [Metadata API 활용](#2-metadata-api-활용)
3. [Open Graph & Twitter Cards](#3-open-graph--twitter-cards)
4. [OG 이미지 생성](#4-og-이미지-생성)
5. [구조화 데이터 (JSON-LD)](#5-구조화-데이터-json-ld)
6. [Sitemap & Robots.txt](#6-sitemap--robotstxt)
7. [이미지 Alt 텍스트](#7-이미지-alt-텍스트)
8. [검증 방법](#8-검증-방법)
9. [체크리스트](#9-체크리스트)

---

## 1. 현재 구현 상태

### 구현 완료 항목

| 항목 | 파일 | 상태 |
|------|------|------|
| 기본 메타데이터 | `src/app/layout.tsx` | ✅ |
| title.template | `src/app/layout.tsx` | ✅ |
| keywords | `src/app/layout.tsx` | ✅ |
| OpenGraph | 모든 페이지 | ✅ |
| Twitter Cards | 모든 페이지 | ✅ |
| JSON-LD | `src/app/layout.tsx` | ✅ |
| sitemap.ts | `src/app/sitemap.ts` | ✅ |
| robots.ts | `src/app/robots.ts` | ✅ |
| OG 이미지 | `src/app/opengraph-image.png` | ✅ |
| Alt 텍스트 | 페이지 헤더, 서비스, 포트폴리오 | ✅ |

### 파일 구조

```
src/app/
├── layout.tsx              # 전역 메타데이터 + JSON-LD
├── sitemap.ts              # 사이트맵 생성
├── robots.ts               # robots.txt 생성
├── opengraph-image.png     # OG 이미지 (정적)
├── about/page.tsx          # 페이지별 메타데이터
├── business/page.tsx
├── services/page.tsx
├── services/[slug]/page.tsx  # 동적 메타데이터
├── portfolio/page.tsx
├── portfolio/[slug]/page.tsx # 동적 메타데이터
├── contact/page.tsx
└── privacy/layout.tsx      # 클라이언트 컴포넌트용 메타데이터

scripts/
├── og-image.svg            # OG 이미지 원본 SVG
└── generate-og-image.mjs   # SVG → PNG 변환 스크립트
```

---

## 2. Metadata API 활용

### 전역 메타데이터 (app/layout.tsx)

```tsx
import type { Metadata } from 'next';

const BASE_URL = 'https://brainhouse.co.kr';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Brain House | AI·ICT 전문 컨설팅',
    template: '%s | Brain House',  // 페이지별 title 템플릿
  },
  description:
    'Brain House는 AI Transformation, ICT 전략 컨설팅, MVP 개발, 기술사업화를 전문으로 하는 디지털 혁신 파트너입니다.',
  keywords: [
    'AI 컨설팅', 'ICT 전략', 'MVP 개발', '기술사업화',
    '디지털 전환', 'AX 컨설팅', '창업 컨설팅', '소프트웨어 개발',
    'Brain House', '브레인하우스',
  ],
  authors: [{ name: 'Brain House' }],
  creator: 'Brain House',
  publisher: 'Brain House',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### 페이지별 메타데이터

```tsx
// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',  // → "About | Brain House"로 렌더링
  description: 'Brain House는 AI와 ICT 기술로 기업의 디지털 전환을 이끄는 전문 파트너입니다.',
  openGraph: {
    title: 'About | Brain House',
    description: 'AI와 ICT 기술로 기업의 디지털 전환을 이끄는 전문 파트너',
    url: 'https://brainhouse.co.kr/about',
  },
  twitter: {
    title: 'About | Brain House',
    description: 'AI와 ICT 기술로 기업의 디지털 전환을 이끄는 전문 파트너',
  },
};
```

### 동적 페이지 메타데이터

```tsx
// app/services/[slug]/page.tsx
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const data = serviceData[resolvedParams.slug];

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: `${data.title} | Brain House`,
      description: data.description,
      url: `https://brainhouse.co.kr/services/${resolvedParams.slug}`,
    },
    twitter: {
      title: `${data.title} | Brain House`,
      description: data.description,
    },
  };
}
```

---

## 3. Open Graph & Twitter Cards

### layout.tsx 설정

```tsx
openGraph: {
  type: 'website',
  locale: 'ko_KR',
  url: BASE_URL,
  siteName: 'Brain House',
  title: 'Brain House | AI·ICT 전문 컨설팅',
  description: 'AI Transformation, ICT 전략 컨설팅, MVP 개발, 기술사업화를 전문으로 하는 디지털 혁신 파트너',
  images: [
    {
      url: '/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Brain House - AI·ICT 전문 컨설팅',
    },
  ],
},
twitter: {
  card: 'summary_large_image',
  title: 'Brain House | AI·ICT 전문 컨설팅',
  description: 'AI Transformation, ICT 전략 컨설팅, MVP 개발, 기술사업화를 전문으로 하는 디지털 혁신 파트너',
  images: ['/opengraph-image.png'],
},
```

---

## 4. OG 이미지 생성

### 파일 위치 옵션

| 방식 | 위치 | 특징 |
|------|------|------|
| **App Router (현재)** | `src/app/opengraph-image.png` | Next.js가 자동 인식, 권장 |
| 전통적 | `public/og-image.png` | metadata에서 직접 경로 지정 필요 |

Next.js App Router에서는 `opengraph-image.png` 파일명 규칙을 따르면 자동으로 인식됩니다.

### OG 이미지 생성 방법

**1. SVG 원본 수정** (`scripts/og-image.svg`)

```svg
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <!-- 배경, 텍스트, 뱃지 등 -->
</svg>
```

**2. PNG 변환 스크립트** (`scripts/generate-og-image.mjs`)

```javascript
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svgPath = join(__dirname, 'og-image.svg');
const logoPath = join(__dirname, '..', 'public', 'images', 'logo.png');
const outputPath = join(__dirname, '..', 'src', 'app', 'opengraph-image.png');

const svgBuffer = readFileSync(svgPath);

// Logo position
const logoSize = 50;
const logoX = 480;
const logoY = 40;

const resizedLogo = await sharp(logoPath)
  .resize(logoSize, logoSize)
  .toBuffer();

sharp(svgBuffer)
  .resize(1200, 630)
  .composite([
    {
      input: resizedLogo,
      top: logoY,
      left: logoX,
    },
  ])
  .png()
  .toFile(outputPath)
  .then(() => console.log('OG image generated:', outputPath))
  .catch((err) => console.error('Error:', err));
```

**3. 이미지 재생성**

```bash
node scripts/generate-og-image.mjs
```

### OG 이미지 요구사항

- **크기**: 1200x630px (권장)
- **포맷**: PNG
- **파일 크기**: 8MB 이하
- **내용**: 로고, 타이틀, 서비스 뱃지 포함

---

## 5. 구조화 데이터 (JSON-LD)

### Organization 스키마 (app/layout.tsx)

```tsx
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Brain House',
  alternateName: '브레인하우스',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  description: 'AI Transformation, ICT 전략 컨설팅, MVP 개발, 기술사업화를 전문으로 하는 디지털 혁신 파트너',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Korean', 'English'],
  },
};

// RootLayout에서 삽입
<head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationJsonLd),
    }}
  />
</head>
```

---

## 6. Sitemap & Robots.txt

### sitemap.ts

```tsx
// src/app/sitemap.ts
import { MetadataRoute } from 'next';

const BASE_URL = 'https://brainhouse.co.kr';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/about', '/business', '/services', '/portfolio', '/contact', '/privacy'];

  const serviceSlugs = [
    'mvp-development', 'ax-consulting', 'ict-strategy',
    'tech-commercialization', 'startup-investment', 'education-training',
    'ai-algorithm-development', 'software-development',
  ];

  const portfolioSlugs = ['ict-strategy', 'bm-software'];

  return [
    ...staticPages.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
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
```

### robots.ts

```tsx
// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: 'https://brainhouse.co.kr/sitemap.xml',
  };
}
```

---

## 7. 이미지 Alt 텍스트

### 페이지 헤더 (page-header.tsx)

```tsx
const pageAltTexts: Record<PageKey, string> = {
  about: 'Brain House 회사 소개 페이지 배경 이미지',
  business: 'Brain House 사업 영역 페이지 배경 이미지',
  services: 'Brain House 서비스 페이지 배경 이미지',
  portfolio: 'Brain House 포트폴리오 페이지 배경 이미지',
  contact: 'Brain House 문의하기 페이지 배경 이미지',
  privacy: 'Brain House 개인정보처리방침 페이지 배경 이미지',
};

<Image
  src={backgroundImage}
  alt={pageAltTexts[page]}
  fill
  className="object-cover opacity-60"
  priority
/>
```

### 동적 페이지 (service-detail.tsx, portfolio-detail.tsx)

```tsx
// 서비스 상세
<Image
  src={backgroundImage}
  alt={`${serviceDetails.title} 서비스 페이지 배경 이미지`}
  ...
/>

// 포트폴리오 상세
<Image
  src={backgroundImage}
  alt={`${menuItem.title} 포트폴리오 페이지 배경 이미지`}
  ...
/>
```

---

## 8. 검증 방법

### 로컬 테스트

```bash
npm run build   # 빌드 오류 확인
npm start       # 프로덕션 서버 시작
```

### URL 확인

- `http://localhost:3000/sitemap.xml` - 사이트맵
- `http://localhost:3000/robots.txt` - robots.txt
- `http://localhost:3000/opengraph-image.png` - OG 이미지

### 브라우저 DevTools

1. Elements → `<head>` 섹션에서 확인:
   - `og:title`, `og:description`, `og:image`
   - `twitter:card`, `twitter:title`, `twitter:image`
2. `<script type="application/ld+json">` 확인

### 온라인 검증 도구

- [Google Rich Results Test](https://search.google.com/test/rich-results) - JSON-LD 검증
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) - OG 태그 검증
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Twitter 카드 검증
- [PageSpeed Insights](https://pagespeed.web.dev/) - Lighthouse SEO 점수

### 검색엔진 등록

배포 후 진행:
- [Google Search Console](https://search.google.com/search-console)
- [Naver Search Advisor](https://searchadvisor.naver.com/)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

---

## 9. 체크리스트

### 기본 SEO

- [x] `metadataBase` 설정
- [x] `title.template` 패턴 적용
- [x] `description` 최적화
- [x] `keywords` 추가
- [x] `robots` 설정

### Open Graph & Twitter

- [x] OpenGraph 메타데이터 (전역 + 페이지별)
- [x] Twitter Cards 메타데이터
- [x] OG 이미지 (1200x630px)

### 기술적 SEO

- [x] `sitemap.ts` 생성
- [x] `robots.ts` 생성
- [x] JSON-LD 구조화 데이터
- [x] 동적 페이지 메타데이터 (`generateMetadata`)
- [x] 이미지 alt 텍스트 최적화

### 추후 작업

- [ ] Google Search Console 등록
- [ ] Naver Search Advisor 등록
- [ ] Google Analytics / Vercel Analytics 설정
- [ ] 다국어 SEO (hreflang) - 필요시

---

## 참고 자료

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js File-based Metadata](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
- [Google Search Central](https://developers.google.com/search/docs)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
