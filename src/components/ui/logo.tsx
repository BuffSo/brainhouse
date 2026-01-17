'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 32 }: LogoProps) {
  const uniqueId = `logo-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('', className)}
    >
      <defs>
        <linearGradient id={`grad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>

      {/* Brain - classic side view icon style */}
      <path
        d="M52 28
           C52 22 50 16 46 12
           C42 8 36 6 30 6
           C24 6 18 8 14 12
           C10 16 8 22 8 28
           C8 32 9 35 10 38
           C8 40 7 43 7 46
           C7 50 9 54 13 56
           C17 58 22 58 26 56
           L26 58
           C26 59 28 60 32 60
           C36 60 38 59 38 58
           L38 56
           C42 58 47 58 51 56
           C55 54 57 50 57 46
           C57 43 56 40 54 38
           C55 35 56 32 56 28
           C56 26 55 24 54 22
           C54 24 53 26 52 28Z"
        fill={`url(#grad-${uniqueId})`}
      />

      {/* Brain folds - curved lines */}
      <path
        d="M18 18 C22 16 28 18 30 24 C32 30 28 36 22 38"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      <path
        d="M36 14 C42 14 46 18 46 24 C46 30 42 34 36 36"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      <path
        d="M16 32 C20 30 26 32 28 38 C30 44 26 48 20 50"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      <path
        d="M40 30 C46 30 50 34 50 40 C50 46 46 50 40 50"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}

export function LogoSimple({ className, size = 24 }: LogoProps) {
  const uniqueId = `logo-simple-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('', className)}
    >
      <defs>
        <linearGradient id={`grad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>

      {/* Simplified brain */}
      <path
        d="M52 28
           C52 18 44 8 30 8
           C16 8 8 18 8 30
           C8 36 10 40 8 46
           C8 54 16 58 26 56
           L26 58 C26 60 36 60 38 58 L38 56
           C48 58 56 54 56 46
           C54 40 56 36 56 30
           C56 28 54 26 52 28Z"
        fill={`url(#grad-${uniqueId})`}
      />

      {/* Simple folds */}
      <path
        d="M20 20 C28 18 32 26 26 34
           M38 18 C46 20 46 30 38 34
           M18 38 C26 36 28 46 22 50
           M42 36 C50 38 48 48 42 50"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}
