# SEO 최적화 요약

Brainhouse 웹사이트에 적용된 SEO 최적화 내용을 쉽게 설명합니다.

---

## 1. 검색엔진 크롤링 지원

### sitemap.xml
- 사이트의 모든 페이지 URL 목록을 자동 생성
- 검색엔진이 사이트 구조를 쉽게 파악할 수 있음
- 확인: `https://brainhouse.kr/sitemap.xml`

### robots.txt
- 검색엔진 크롤러에게 수집 가능한 페이지 안내
- API, 관리자 페이지 등은 크롤링 제외
- 확인: `https://brainhouse.kr/robots.txt`

---

## 2. 메타데이터 강화

### 적용 내용
- 모든 페이지에 **제목, 설명, 키워드** 체계적 설정
- 제목 형식: `페이지명 | Brain House`
- 서비스/포트폴리오 상세 페이지는 콘텐츠별 동적 메타데이터 생성

### 효과
- 검색 결과에서 페이지 내용이 명확하게 표시됨
- 검색 키워드와 매칭되어 노출 순위 향상

---

## 3. SNS 공유 최적화

### OpenGraph (OG)
- 카카오톡, 페이스북, 슬랙 등에서 링크 공유 시 미리보기 제공
- 제목, 설명, 이미지가 예쁘게 표시됨

### Twitter Cards
- 트위터/X에서 공유할 때 동일하게 적용

### OG 이미지
- 크기: 1200x630px
- 내용: 로고, "Brain House", 슬로건, 서비스 뱃지
- 위치: `src/app/opengraph-image.png`

### 이미지 수정 방법
```bash
# 1. scripts/og-image.svg 수정
# 2. 이미지 재생성
node scripts/generate-og-image.mjs
```

---

## 4. 구조화 데이터 (JSON-LD)

### 적용 내용
- Organization 스키마 추가
- 회사명, 로고, 설명, 연락처 정보 포함

### 효과
- 검색 결과에서 리치 스니펫(풍부한 정보) 표시 가능
- 브랜드 신뢰도 향상

---

## 5. 접근성 개선 (Alt 텍스트)

### 적용 내용
- 모든 배경 이미지에 의미 있는 alt 텍스트 추가
- 페이지별, 서비스별, 포트폴리오별 동적 텍스트

### 효과
- 시각장애인용 스크린리더 지원
- 검색엔진이 이미지 내용 이해 가능
- 이미지 로딩 실패 시 대체 텍스트 표시

---

## 적용 결과

| 항목 | 효과 |
|------|------|
| 검색엔진 노출 | 구글, 네이버에서 사이트가 더 잘 검색됨 |
| SNS 공유 | 전문적인 미리보기 카드 표시 |
| 브랜드 이미지 | 일관된 브랜딩으로 신뢰도 향상 |
| 접근성 | 다양한 사용자 환경 지원 |

---

## 검증 방법

### 로컬 테스트
```bash
npm run build
npm start
# http://localhost:3000/sitemap.xml
# http://localhost:3000/robots.txt
# http://localhost:3000/opengraph-image.png
```

### 온라인 도구
- [Google Rich Results Test](https://search.google.com/test/rich-results) - JSON-LD 검증
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) - OG 태그 검증
- [PageSpeed Insights](https://pagespeed.web.dev/) - SEO 점수 확인

### 배포 후 등록
- [Google Search Console](https://search.google.com/search-console)
- [Naver Search Advisor](https://searchadvisor.naver.com/)

---

## 관련 파일

```
src/app/
├── layout.tsx              # 전역 메타데이터 + JSON-LD
├── sitemap.ts              # 사이트맵
├── robots.ts               # robots.txt
├── opengraph-image.png     # OG 이미지
└── [각 페이지]/page.tsx    # 페이지별 메타데이터

scripts/
├── og-image.svg            # OG 이미지 원본
└── generate-og-image.mjs   # 이미지 변환 스크립트

docs/guide/
├── seo-optimization-guide.md    # 상세 기술 가이드
└── seo-optimization-summary.md  # 이 문서
```
