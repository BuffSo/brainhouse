# 클라이언트 사이드 에러 처리 개선

> **상태: 구현 완료** (2026-01-29)

## 문제 상황
- 특정 환경에서 메인 페이지 접근 시 "Application error: a client-side exception has occurred" 에러 발생
- 로고 클릭 → `/` 경로 이동 시 발생
- 발견일: 2026-01-29

## 추정 원인

### 1. 3D/WebGL 문제 (가장 유력)
- `src/components/sections/hero.tsx`에서 Three.js 3D Scene 사용 중
- WebGL 미지원 또는 비활성화된 브라우저에서 에러 발생 가능
- 구형 그래픽 드라이버, 통합 GPU 환경에서 문제 발생 가능

### 2. 브라우저 환경
- 오래된 브라우저 (구버전 Safari, IE 등)
- 브라우저 확장 프로그램 충돌 (광고 차단기, 번역 확장 등)
- 프라이빗/시크릿 모드에서 localStorage 접근 제한

### 3. 네트워크/캐시
- JS 번들이 완전히 로드되지 않음
- 오래된 캐시와 새 배포 버전 충돌

## 구현된 해결 방안

### 방안 1: WebGL 지원 체크 및 Fallback ✅
- `hero.tsx`에 `checkWebGLSupport()` 함수 추가
- WebGL 미지원 시 3D Scene 렌더링 스킵

### 방안 2: Error Boundary 추가 ✅
- `src/components/error-boundary.tsx` 생성
- 3D Scene을 ErrorBoundary로 감싸서 에러 격리

### 방안 3: Next.js Error Page 커스텀 ✅
- `src/app/error.tsx` 생성
- 사용자 친화적 에러 메시지 및 "다시 시도" 버튼 제공

## 디버깅 시 확인사항
에러 재현 시 지인에게 확인 요청:
- [ ] 어떤 브라우저/버전 사용?
- [ ] 시크릿/프라이빗 모드 여부?
- [ ] 하드 새로고침(Ctrl+Shift+R) 시도 결과?
- [ ] 브라우저 콘솔(F12 → Console) 에러 메시지?
- [ ] 그래픽 카드 종류 (통합 GPU 여부)?

## 상태
- ~~현재: 낮음 (특정 환경에서만 발생, 재현 어려움)~~
- **구현 완료**: 3가지 방안 모두 적용됨

## 관련 파일
- `src/components/sections/hero.tsx` - 3D Scene 로딩 (WebGL 체크 추가됨)
- `src/components/3d/scene.tsx` - Three.js 3D 컴포넌트
- `src/components/error-boundary.tsx` - ErrorBoundary 컴포넌트 (신규)
- `src/app/error.tsx` - 커스텀 에러 페이지 (신규)
- `src/app/layout.tsx` - LanguageProvider 설정
