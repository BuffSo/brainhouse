export type Language = 'ko' | 'en';

export const translations = {
  ko: {
    header: {
      about: '회사 소개',
      business: '사업 영역',
      portfolio: '포트폴리오',
      contact: '문의하기',
      getStarted: '상담 문의',
    },
    hero: {
      tag: 'Digital Transformation Partner',
      title: '지식과 경험을 공유하는',
      subtitle: '연결된 소셜 브레인',
      description:
        '브레인하우스는 기술과 비즈니스의 경계를 허무는 ICT 전문 파트너입니다. 28년의 독보적인 현장 경험과 깊이 있는 통찰력을 바탕으로, 고객의 디지털 혁신(DX)을 성공으로 이끄는 최적의 전략을 제시합니다.',
      contactBtn: '프로젝트 문의',
      businessBtn: '서비스 보기',
    },
    about: {
      title: 'About Brain House',
      subtitle: '디지털 대전환 시대의 네비게이터',
      description:
        '브레인하우스(Brain House)는 2020년 5월, ICT 분야의 전문가들이 모여 설립한 디지털 혁신 컨설팅 기업입니다. 우리는 단순한 기술 도입을 넘어, 기술이 창출할 수 있는 비즈니스 가치에 집중합니다. 복잡한 기술 트렌드 속에서 기업이 나아가야 할 명확한 방향을 제시하고, 실질적인 성장을 돕는 파트너가 되겠습니다.',
      vision: {
        title: '비전 (Vision)',
        desc: '디지털 대전환(DX)을 선도하는 신뢰받는 성장 파트너',
        details: [
          '고객 가치 중심의 혁신 전략 수립',
          '지속 가능한 디지털 생태계 조성',
          '기술과 사람을 연결하는 소셜 브레인',
        ],
      },
      expertise: {
        title: '핵심 역량 (Core Competency)',
        desc: 'ICT, AI, 메타버스 분야 28년 이상의 현장 경험과 노하우',
        details: [
          '정부 R&D 과제 기획 및 수주 성공률 90% 이상',
          '다양한 산업군(제조, 서비스, 공공) DX 컨설팅 수행',
          '스타트업부터 중견기업까지 단계별 맞춤 성장 지원',
        ],
      },
      clients: {
        title: '주요 고객 (Clients)',
        desc: '정부 공공기관 및 혁신 기업들과 함께하고 있습니다.',
      },
    },
    business: {
      title: 'Business Areas',
      description:
        '기업의 성장 단계(예비창업 ~ 중견기업)와 필요에 맞춘 4가지 핵심 솔루션을 제공합니다.',
      services: [
        {
          title: '기술 전략 (Tech Strategy)',
          description:
            '기업이 보유한 기술의 가치를 극대화하고, 미래 기술 트렌드에 선제적으로 대응하기 위한 로드맵을 수립합니다.',
          details: [
            '기술 가치 평가 및 기술 사업화 전략 수립',
            'ICT 기반 신규 서비스/상품 기획 컨설팅',
            '정부 R&D 지원사업 기획 및 제안서 작성 지원',
            '중장기 기술 개발 로드맵(TRM) 구축',
          ],
        },
        {
          title: '경영 전략 (Management)',
          description:
            '지속 가능한 성장을 위해 기업의 내부 역량을 진단하고, 시장 환경에 맞는 최적의 비즈니스 모델을 설계합니다.',
          details: [
            'ICT 정책 조사/연구 및 시장 분석',
            '기업 역량 진단 및 경영 혁신 전략 수립',
            '기업가 정신 교육 및 사내 벤처 육성',
            '스타트업 비즈니스 모델(BM) 고도화 및 멘토링',
          ],
        },
        {
          title: '투자 전략 (Investment)',
          description:
            '성장에 필요한 자금을 적시에 확보할 수 있도록, 투자 유치 전략 수립부터 IR 자료 작성, 실전 피칭까지 밀착 지원합니다.',
          details: [
            '스타트업 투자 유치 전략 및 기업 가치 평가(Valuation)',
            '투자 제안서(IR Deck) 기획 및 디자인 컨설팅',
            'VC/AC 네트워크 연계 및 자금 조달 자문',
            'IPO 및 M&A(인수합병) 전략 자문',
          ],
        },
        {
          title: '플랫폼 비즈니스 (Platform)',
          description:
            '4차 산업혁명의 핵심인 플랫폼 비즈니스와 메타버스 등 신기술 기반의 새로운 사업 기회를 발굴하고 실현합니다.',
          details: [
            '플랫폼 서비스 기획 및 비즈니스 모델(BM) 설계',
            '메타버스/블록체인 기반 신사업 발굴 컨설팅',
            '디지털 콘텐츠 서비스화 전략 수립',
            'ICT 융합 서비스 실증 및 상용화 지원',
          ],
        },
      ],
    },
    portfolio: {
      title: 'Portfolio & Track Record',
      description:
        '브레인하우스는 다양한 산업 분야에서 성공적인 레퍼런스를 만들어가고 있습니다.',
      projects: [
        {
          year: '2023',
          items: [
            {
              title: 'AI 기반 디지털 헬스케어 플랫폼 기획',
              description:
                'S사 | 만성질환 관리를 위한 AI 맞춤형 헬스케어 서비스 BM 수립 및 UI/UX 기획',
            },
            {
              title: '스마트시티 챌린지 예비사업 컨설팅',
              description:
                'K시 | 시민 체감형 스마트시티 서비스 발굴 및 거버넌스 구축 전략 수립',
            },
            {
              title: '에듀테크 스타트업 Series A 투자 유치',
              description:
                'E사 | 30억 규모 투자 유치를 위한 IR Deck 스토리텔링 및 디자인 개선',
            },
          ],
        },
        {
          year: '2022',
          items: [
            {
              title: '공공기관 메타버스 교육 연수원 구축 자문',
              description:
                'I원 | 비대면 교육 효과 제고를 위한 메타버스 플랫폼 도입 타당성 분석 및 로드맵',
            },
            {
              title: 'ICT 규제 샌드박스 실증 특례 지원',
              description:
                'M사 | 모빌리티 서비스 규제 샌드박스 신청 논리 개발 및 대응 지원',
            },
            {
              title: '초기 창업패키지 선정 멘토링',
              description:
                '다수 기업 | 예비/초기 창업 기업 사업계획서 고도화 및 발표 코칭',
            },
          ],
        },
        {
          year: '2021',
          items: [
            {
              title: '중소기업 제조 데이터 분석 과제 기획',
              description:
                'TIPA 과제 | 제조 현장 데이터 수집/분석을 통한 공정 최적화 R&D 기획',
            },
            {
              title: '지역 소프트웨어 산업 진흥 전략 연구',
              description:
                'G재단 | 지역 특화 SW 산업 육성을 위한 중장기 발전 계획 수립 연구 용역',
            },
          ],
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      description:
        '성공적인 비즈니스를 위한 첫 걸음, 브레인하우스가 함께하겠습니다. 프로젝트 문의나 파트너십 제안 등 언제든 편하게 문의해주세요.',
      form: {
        firstName: '이름',
        lastName: '성',
        company: '회사/기관명',
        email: '이메일 주소',
        phone: '연락처',
        message: '문의 내용 (프로젝트 개요, 예산, 일정 등)',
        submit: '문의하기',
      },
    },
    footer: {
      companyName: '(주)브레인하우스',
      address: '서울시 강남구 학동로 2길 19, 세일빌딩 2층 (논현동)',
      rights: '© 2024 Brain House Co., Ltd. All rights reserved.',
      sections: {
        company: '회사 소개',
        business: '사업 영역',
        legal: '법적 고지',
      },
      links: {
        about: '소개',
        history: '연혁',
        vision: '비전',
        tech: '기술 전략',
        mgmt: '경영 전략',
        invest: '투자 전략',
        privacy: '개인정보처리방침',
        terms: '이용약관',
      },
    },
  },
  en: {
    header: {
      about: 'About',
      business: 'Business',
      portfolio: 'Portfolio',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    hero: {
      tag: 'Digital Transformation Partner',
      title: 'Connected Social Brains',
      subtitle: 'Sharing Knowledge & Experience',
      description:
        'Brain House is your premier ICT consulting partner, blurring the lines between technology and business. With over 28 years of unrivaled field experience, we provide optimal strategies to lead your Digital Transformation (DX) to success.',
      contactBtn: 'Contact Us',
      businessBtn: 'Our Services',
    },
    about: {
      title: 'About Brain House',
      subtitle: 'Navigator for the Digital Era',
      description:
        'Established in May 2020 by a group of ICT experts, Brain House is a consulting firm dedicated to digital innovation. We focus on the real business value technology creates. We aim to be a partner that provides clear direction amidst complex trends and drives tangible growth.',
      vision: {
        title: 'Vision',
        desc: 'Trusted Growth Partner Leading Digital Transformation',
        details: [
          'Innovation strategy centered on customer value',
          'Creating a sustainable digital ecosystem',
          'Social brains connecting technology and people',
        ],
      },
      expertise: {
        title: 'Core Competency',
        desc: 'Over 28 years of expertise in ICT, AI, and Metaverse',
        details: [
          'Over 90% success rate in Government R&D planning',
          'Diverse DX consulting (Manufacturing, Service, Public)',
          'Tailored growth support from startups to mid-sized firms',
        ],
      },
      clients: {
        title: 'Clients',
        desc: 'We collaborate with major government agencies and innovative enterprises.',
      },
    },
    business: {
      title: 'Business Areas',
      description:
        'We provide four core solutions tailored to your growth stage and business needs.',
      services: [
        {
          title: 'Technology Strategy',
          description:
            'We maximize the value of your technology and establish roadmaps to proactively respond to future trends.',
          details: [
            'Tech valuation and commercialization strategy',
            'ICT-based new service planning consulting',
            'Government R&D proposal support',
            'Mid-to-long term Technology Roadmap (TRM)',
          ],
        },
        {
          title: 'Management Strategy',
          description:
            'We diagnose internal capabilities and design optimal business models for sustainable growth.',
          details: [
            'ICT policy research and market analysis',
            'Corporate diagnosis and innovation strategy',
            'Entrepreneurship education and internal venture fostering',
            'Startup BM refinement and mentoring',
          ],
        },
        {
          title: 'Investment Strategy',
          description:
            'We support the entire funding process, from strategy and IR deck creation to pitching, ensuring timely capital securitization.',
          details: [
            'Startup investment strategy and Valuation',
            'IR Deck planning and design consulting',
            'VC/AC networking and fundraising advisory',
            'IPO and M&A advisory',
          ],
        },
        {
          title: 'Platform Business',
          description:
            'We discover and realize new business opportunities based on new technologies like Metaverse and Blockchain.',
          details: [
            'Platform service planning and BM design',
            'Metaverse/Blockchain business discovery',
            'Digital content servitization strategy',
            'ICT convergence service demonstration support',
          ],
        },
      ],
    },
    portfolio: {
      title: 'Portfolio & Track Record',
      description:
        'Brain House is building a legacy of success across various industries.',
      projects: [
        {
          year: '2023',
          items: [
            {
              title: 'AI Healthcare Platform Planning',
              description:
                'Company S | BM and UI/UX planning for AI-based chronic disease management service',
            },
            {
              title: 'Smart City Challenge Consulting',
              description:
                'City K | Discovery of citizen-centric smart city services and governance strategy',
            },
            {
              title: 'Edutech Startup Series A Funding',
              description:
                'Company E | IR Deck storytelling and design for 3B KRW investment attraction',
            },
          ],
        },
        {
          year: '2022',
          items: [
            {
              title: 'Metaverse Education Center Advisory',
              description:
                'Institute I | Feasibility analysis and roadmap for public metaverse education platform',
            },
            {
              title: 'ICT Regulatory Sandbox Support',
              description:
                'Company M | Logic development and support for mobility service regulatory sandbox application',
            },
            {
              title: 'Startup Package Mentoring',
              description:
                'Multiple Firms | Business plan refinement and pitch coaching for early-stage startups',
            },
          ],
        },
        {
          year: '2021',
          items: [
            {
              title: 'SME Manufacturing Data Analysis',
              description:
                'TIPA Project | R&D planning for process optimization using field data analysis',
            },
            {
              title: 'Regional SW Industry Strategy',
              description:
                'Foundation G | Research on mid-to-long term development plan for regional SW industry',
            },
          ],
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      description:
        'Your first step towards successful business. Brain House is here to help. Feel free to contact us for projects or partnerships.',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        company: 'Company/Org',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Message (Project outline, budget, schedule, etc.)',
        submit: 'Send Message',
      },
    },
    footer: {
      companyName: 'Brain House Co., Ltd.',
      address: '2F Seil Building, 19 Hakdong-ro 2-gil, Gangnam-gu, Seoul',
      rights: '© 2024 Brain House Co., Ltd. All rights reserved.',
      sections: {
        company: 'Company',
        business: 'Business',
        legal: 'Legal',
      },
      links: {
        about: 'About',
        history: 'History',
        vision: 'Vision',
        tech: 'Technical Strategy',
        mgmt: 'Management Strategy',
        invest: 'Investment Strategy',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },
  },
};
