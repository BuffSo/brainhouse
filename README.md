# Brain House

디지털 트랜스포메이션 파트너, 브레인하우스 회사 소개 웹사이트

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **3D Graphics**: Three.js + @react-three/fiber
- **Email**: Resend
- **Font**: Pretendard

## Features

- 반응형 싱글 페이지 애플리케이션 (SPA)
- 다국어 지원 (한국어/영어/일본어)
- 다크 테크 테마 디자인
- 인터랙티브 3D 요소
- 문의 폼 이메일 발송

## Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## Project Structure

```
src/
├── app/              # Next.js App Router
├── components/
│   ├── 3d/           # Three.js 컴포넌트
│   ├── layout/       # Header, Footer
│   ├── sections/     # 페이지 섹션 (Hero, About, Business, Services, Portfolio, Contact)
│   └── ui/           # 재사용 가능한 UI 컴포넌트
├── contexts/         # React Context (언어 설정)
├── data/             # 번역 데이터
└── lib/              # 유틸리티 함수
```

## Environment Variables

`.env.local` 파일에 다음 환경 변수를 설정하세요:

```
RESEND_API_KEY=your_resend_api_key
```

## Design System

- **Primary Color**: `#064E9B` (Deep Corporate Blue)
- **Base**: `slate-900`
- **Accent**: `blue-400`, `cyan-300`

## Commit Convention

| Type | Description |
|------|-------------|
| `feat:` | 새로운 기능 |
| `fix:` | 버그 수정 |
| `style:` | 스타일 변경 |
| `refactor:` | 코드 리팩토링 |
| `docs:` | 문서 수정 |
