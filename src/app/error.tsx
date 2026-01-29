'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Container className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="mx-auto max-w-md">
          <div className="mb-6 text-6xl">
            <span role="img" aria-label="warning">⚠️</span>
          </div>

          <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            일시적인 오류가 발생했습니다
          </h1>

          <p className="mb-8 text-slate-300">
            페이지를 불러오는 중 문제가 발생했습니다.
            <br />
            새로고침하거나 잠시 후 다시 시도해주세요.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={reset}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'w-full sm:w-auto'
              )}
            >
              다시 시도
            </button>

            <Link
              href="/"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'w-full border-slate-600 text-white hover:bg-slate-800 sm:w-auto'
              )}
            >
              홈으로 이동
            </Link>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            문제가 계속되면 브라우저 캐시를 삭제하거나
            <br />
            다른 브라우저에서 시도해주세요.
          </p>
        </div>
      </Container>
    </div>
  );
}
