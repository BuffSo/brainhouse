# Resend DNS 설정 가이드

Contact 폼에서 이메일 전송을 위한 Resend 설정 가이드입니다.

## 1. Resend 계정 생성 및 API 키 발급

1. [Resend](https://resend.com) 접속
2. 회원가입 또는 로그인
3. Dashboard → API Keys → Create API Key
4. API 키 복사 (re_xxxxxxxx 형식)

## 2. 도메인 추가 및 인증 (선택사항)

> 기본적으로 `onboarding@resend.dev` 발신자로 테스트 가능합니다.
> 프로덕션에서는 자체 도메인 설정을 권장합니다.

### 도메인 추가
1. Dashboard → Domains → Add Domain
2. 도메인 입력 (예: brainhouse.kr)

### DNS 레코드 설정

Resend Dashboard에서 도메인 추가 시 제공하는 DNS 레코드를 그대로 복사하여 도메인 관리자에 추가합니다.

> Resend Dashboard → Domains → 도메인 선택 → DNS Records 탭에서 확인

일반적으로 제공되는 레코드:
- **MX 레코드**: 이메일 수신용
- **TXT 레코드 (DKIM)**: 이메일 인증용

**중요**: Resend에서 제공하는 값을 그대로 사용하세요. 임의로 레코드를 추가하지 마세요.

### 도메인 인증 확인
- DNS 레코드 추가 후 Resend Dashboard에서 "Verify" 클릭
- 인증 완료까지 최대 48시간 소요 가능

## 3. 환경변수 설정

### 로컬 개발 (.env.local)

```env
RESEND_API_KEY=re_your_api_key_here
ADMIN_EMAIL=comfamil@gmail.com
```

### Vercel Dashboard

1. Vercel 프로젝트 → Settings → Environment Variables
2. 다음 변수 추가:

| 변수명 | 값 |
|--------|-----|
| RESEND_API_KEY | re_your_api_key_here |
| ADMIN_EMAIL | comfamil@gmail.com |

3. Production, Preview, Development 모두 체크
4. Save

## 4. 이메일 발신자 설정

### 테스트 환경 (도메인 미인증)
```typescript
from: 'Brain House <onboarding@resend.dev>'
```

### 프로덕션 환경 (도메인 인증 완료)
```typescript
from: 'Brain House <contact@brainhouse.kr>'
```

`src/lib/email.ts`에서 `from` 필드 수정

## 5. 테스트

### 로컬 테스트
```bash
npm run dev
```

1. http://localhost:3000/contact 접속
2. 폼 작성 후 전송
3. 관리자 이메일 수신 확인

### Vercel 배포 후 테스트
1. 환경변수 설정 확인
2. 실제 도메인에서 폼 제출
3. 이메일 수신 확인

## 6. 트러블슈팅

### 이메일이 도착하지 않는 경우
- Resend Dashboard → Logs에서 전송 상태 확인
- API 키가 올바른지 확인
- 스팸 폴더 확인

### 500 에러 발생
- 환경변수가 올바르게 설정되었는지 확인
- Vercel 배포 후 재배포 필요할 수 있음

### DNS 인증 실패
- DNS 레코드 전파에 시간이 필요 (최대 48시간)
- 레코드 값이 정확한지 재확인

## 참고 링크
- [Resend 공식 문서](https://resend.com/docs)
- [Resend Next.js 가이드](https://resend.com/docs/send-with-nextjs)
