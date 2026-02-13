import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Brain House 개인정보처리방침. 개인정보 수집·이용 목적, 보유 기간, 이용자 권리 등을 안내합니다.',
  openGraph: {
    title: 'Privacy Policy | Brain House',
    description: 'Brain House 개인정보처리방침 안내',
    url: 'https://brainhouse.kr/privacy',
  },
  twitter: {
    title: 'Privacy Policy | Brain House',
    description: 'Brain House 개인정보처리방침 안내',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
