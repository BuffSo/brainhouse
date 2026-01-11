export type Language = 'ko' | 'en';

export const translations = {
  ko: {
    header: {
      about: '회사 소개',
      business: '사업 영역',
      services: '서비스',
      portfolio: '포트폴리오',
      contact: '문의하기',
      getStarted: '상담 문의',
    },
    hero: {
      tag: 'AI Transformation Partner',
      title: '지식과 경험을 공유하는',
      subtitle: '연결된 소셜 브레인',
      description:
        '브레인하우스는 DX를 넘어 AX(AI Transformation) 시대를 선도하는 ICT 전문 파트너입니다. 28년의 독보적인 현장 경험과 AI 전문성을 바탕으로, 에이전틱 AI와 생성형 AI를 활용한 기업 혁신 전략을 제시합니다.',
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
        desc: 'DX를 넘어 AX(AI Transformation) 시대를 선도하는 성장 파트너',
        details: [
          'AI 에이전트 기반 업무 혁신 및 워크플로우 재설계',
          '에이전틱 AI·생성형 AI 도입을 통한 기업 경쟁력 강화',
          'AI-Ready 조직 문화 구축 및 인재 육성 지원',
        ],
      },
      expertise: {
        title: '핵심 역량 (Core Competency)',
        desc: 'ICT, AI, 메타버스 분야 28년 이상의 현장 경험과 노하우',
        details: [
          '국가 R&D 기획/평가 및 정책연구 풍부한 경험 보유',
          '다양한 산업군(제조, 서비스, 공공) DX 컨설팅 수행',
          '스타트업부터 중견기업까지 단계별 맞춤 성장 지원',
        ],
      },
      clients: {
        title: '주요 고객 (Clients)',
        desc: '정부 공공기관 및 혁신 기업들과 함께하고 있습니다.',
        list: [
          'KISTI',
          'KOICA',
          '대구경북연구원',
          'ETRI',
          'KISTEP',
          'KIAT',
          'KEIT',
          '경기테크노파크',
          '안산시',
          '서울바이오시스',
          '창업진흥원',
          '기술보증기금',
          'KOTRA',
          '한국연구재단',
        ],
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
            '플랫폼 서비스 기획 및 비즈니스 모델(BM) 설계',
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
            'ICT 융합 서비스 실증 및 상용화 지원',
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
          title: '소프트웨어 개발 (Software Dev)',
          description:
            '일반적인 홈페이지부터 기술 집약형 서비스까지, 기획-설계-개발-운영의 전 과정을 지원하는 맞춤형 소프트웨어 개발 서비스를 제공합니다.',
          details: [
            '기업 홈페이지 및 브랜드 사이트 기획·개발',
            '웹/모바일 애플리케이션 설계 및 개발',
            'AI·LLM 기반 서비스 기획 및 MVP 개발',
            '클라우드 기반 시스템 구축 및 운영 지원',
            '기존 시스템 고도화 및 유지보수',
          ],
        },
      ],
    },
    ourServices: {
      title: 'Our Services',
      subtitle: 'Guru형 전문 컨설팅',
      description:
        '10년 이상 경력의 시니어 전문가가 직접 수행하는 차별화된 서비스를 제공합니다.',
      items: [
        {
          title: 'ICT 전략·정책 컨설팅',
          description:
            '정부 R&D 기획부터 ICT 정책연구까지, 공공기관과 기업의 미래 경쟁력 확보를 위한 전략을 수립합니다.',
          steps: ['환경 분석', '역량 진단', '전략 수립', '실행 지원'],
        },
        {
          title: '기술사업화 컨설팅',
          description:
            '보유 기술의 시장 가치를 극대화하고, 사업화 성공을 위한 체계적인 로드맵을 제시합니다.',
          details: [
            '기술 가치 평가 및 사업화 전략 수립',
            '정부 R&D 지원사업 기획 및 제안서 작성',
            '기술 로드맵(TRM) 및 IPR 전략 설계',
            'ICT 융합 서비스 실증 및 상용화 지원',
          ],
        },
        {
          title: '창업·투자 컨설팅',
          description:
            '예비창업자부터 스케일업 기업까지, 성장 단계별 맞춤형 멘토링과 투자 유치를 지원합니다.',
          details: [
            '비즈니스 모델(BM) 수립 및 고도화 멘토링',
            '투자 유치 전략(IR) 및 기업가치 평가(Valuation)',
            'VC/AC/엔젤 네트워크 연계 및 자금조달 자문',
            'IPO 및 M&A 전략 자문',
          ],
        },
        {
          title: '소프트웨어 개발',
          description:
            '기업 홈페이지부터 AI 기반 서비스까지, 기획-설계-개발-운영의 전 과정을 원스톱으로 지원합니다.',
          details: [
            '기업 홈페이지 및 브랜드 사이트 기획·개발',
            '웹/모바일 애플리케이션 설계 및 개발',
            'AI·LLM 기반 서비스 기획 및 MVP 개발',
            '클라우드 시스템 구축 및 유지보수',
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
              title: '글로벌 시니어 테크산업 벤치마킹',
              description:
                'KOICA | 글로벌 시니어 테크산업 해외 사례 조사 및 동향 분석',
            },
            {
              title: 'K-로봇산업 육성 전략 기획',
              description:
                'KIAT | K-로봇산업 글로벌 경쟁력 확보를 위한 중장기 육성 전략 수립',
            },
            {
              title: '메타버스 콘텐츠 활성화 정책연구',
              description:
                'KOCCA | 메타버스 콘텐츠 생태계 활성화를 위한 정책 방향 연구',
            },
          ],
        },
        {
          year: '2022',
          items: [
            {
              title: '창업지원사업 멘토링 및 컨설팅',
              description:
                '다수 기업 | 예비/초기 창업 기업 사업계획서 고도화 및 멘토링',
            },
            {
              title: '시니어 메타버스 사업화 전략',
              description:
                '농진청 | 시니어 대상 메타버스 기반 서비스 사업화 전략 수립',
            },
            {
              title: 'K-로봇산업 정책연구',
              description:
                'KEIT | 로봇산업 정책 동향 분석 및 신규 정책 과제 발굴',
            },
          ],
        },
        {
          year: '2021',
          items: [
            {
              title: '중소기업 R&D 기술개발 컨설팅',
              description:
                'TIPA | 중소기업 기술개발 역량 진단 및 R&D 전략 수립 지원',
            },
            {
              title: '로봇산업 정책연구',
              description:
                'KEIT | 국내외 로봇산업 정책 분석 및 시사점 도출 연구',
            },
          ],
        },
        {
          year: '2020',
          items: [
            {
              title: '블록체인 공공 서비스 리빙랩',
              description:
                'NIA | 블록체인 기반 공공 서비스 발굴 및 실증 사업 기획',
            },
            {
              title: '중소기업 기술개발 기획',
              description:
                'TIPA | 중소기업 기술개발 지원사업 기획 및 평가 지원',
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
    pageHeader: {
      about: {
        title: '회사 소개',
        subtitle: '디지털 대전환 시대의 네비게이터',
      },
      business: {
        title: '사업 영역',
        subtitle: '성장 단계에 맞춘 4가지 핵심 솔루션',
      },
      services: {
        title: '서비스',
        subtitle: 'ICT 전문 서비스',
      },
      portfolio: {
        title: '포트폴리오',
        subtitle: '다양한 산업 분야의 성공 레퍼런스',
      },
      contact: {
        title: '문의하기',
        subtitle: '성공적인 비즈니스를 위한 첫 걸음',
      },
    },
  },
  en: {
    header: {
      about: 'About',
      business: 'Business',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    hero: {
      tag: 'AI Transformation Partner',
      title: 'Connected Social Brains',
      subtitle: 'Sharing Knowledge & Experience',
      description:
        'Brain House is your premier ICT consulting partner leading the AX (AI Transformation) era beyond DX. With over 28 years of field experience and AI expertise, we deliver enterprise innovation strategies powered by Agentic AI and Generative AI.',
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
        desc: 'Growth Partner Leading the AX (AI Transformation) Era Beyond DX',
        details: [
          'AI agent-driven business innovation and workflow redesign',
          'Enhancing enterprise competitiveness through Agentic AI & Generative AI',
          'Building AI-Ready organizational culture and talent development',
        ],
      },
      expertise: {
        title: 'Core Competency',
        desc: 'Over 28 years of expertise in ICT, AI, and Metaverse',
        details: [
          'Extensive experience in National R&D planning and policy research',
          'Diverse DX consulting (Manufacturing, Service, Public)',
          'Tailored growth support from startups to mid-sized firms',
        ],
      },
      clients: {
        title: 'Clients',
        desc: 'We collaborate with major government agencies and innovative enterprises.',
        list: [
          'KISTI',
          'KOICA',
          'ETRI',
          'KISTEP',
          'KIAT',
          'KEIT',
          'KOTRA',
          'NRF',
          'Gyeonggi Technopark',
          'Ansan City',
          'Seoul Viosys',
          'KISED',
          'KIBO',
        ],
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
          title: 'Software Development',
          description:
            'We provide customized software development services covering the entire process from planning to design, development, and operations—from simple websites to technology-intensive services.',
          details: [
            'Corporate website and brand site planning & development',
            'Web/mobile application design and development',
            'AI & LLM-powered service planning and MVP development',
            'Cloud-based system development and operation support',
            'Legacy system enhancement and maintenance',
          ],
        },
      ],
    },
    ourServices: {
      title: 'Our Services',
      subtitle: 'Guru-Type Expert Consulting',
      description:
        'Differentiated services delivered directly by senior experts with 10+ years of experience.',
      items: [
        {
          title: 'ICT Strategy & Policy Consulting',
          description:
            'From government R&D planning to ICT policy research, we establish strategies to secure future competitiveness for public institutions and enterprises.',
          steps: [
            'Environment Analysis',
            'Capability Diagnosis',
            'Strategy Development',
            'Execution Support',
          ],
        },
        {
          title: 'Technology Commercialization',
          description:
            'We maximize the market value of your technology and provide systematic roadmaps for successful commercialization.',
          details: [
            'Technology valuation and commercialization strategy',
            'Government R&D program planning and proposal writing',
            'Technology Roadmap (TRM) and IPR strategy design',
            'ICT convergence service demonstration and commercialization',
          ],
        },
        {
          title: 'Startup & Investment Consulting',
          description:
            'From pre-founders to scale-up companies, we provide tailored mentoring and investment support for each growth stage.',
          details: [
            'Business Model (BM) development and refinement mentoring',
            'Investment strategy (IR) and Valuation',
            'VC/AC/Angel network connection and fundraising advisory',
            'IPO and M&A strategy consulting',
          ],
        },
        {
          title: 'Software Development',
          description:
            'From corporate websites to AI-powered services, we provide one-stop support for the entire process of planning, design, development, and operations.',
          details: [
            'Corporate website and brand site planning & development',
            'Web/mobile application design and development',
            'AI & LLM-powered service planning and MVP development',
            'Cloud system development and maintenance',
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
              title: 'Global Senior Tech Industry Benchmarking',
              description:
                'KOICA | Research on global senior tech industry trends and case studies',
            },
            {
              title: 'K-Robot Industry Development Strategy',
              description:
                'KIAT | Mid-to-long term strategy for K-Robot industry global competitiveness',
            },
            {
              title: 'Metaverse Content Activation Policy Research',
              description:
                'KOCCA | Policy direction research for metaverse content ecosystem activation',
            },
          ],
        },
        {
          year: '2022',
          items: [
            {
              title: 'Startup Support Program Mentoring',
              description:
                'Multiple Firms | Business plan refinement and mentoring for early-stage startups',
            },
            {
              title: 'Senior Metaverse Commercialization Strategy',
              description:
                'RDA | Metaverse-based service commercialization strategy for senior citizens',
            },
            {
              title: 'K-Robot Industry Policy Research',
              description:
                'KEIT | Robot industry policy trend analysis and new policy task discovery',
            },
          ],
        },
        {
          year: '2021',
          items: [
            {
              title: 'SME R&D Technology Development Consulting',
              description:
                'TIPA | SME technology development capability diagnosis and R&D strategy support',
            },
            {
              title: 'Robot Industry Policy Research',
              description:
                'KEIT | Domestic and international robot industry policy analysis research',
            },
          ],
        },
        {
          year: '2020',
          items: [
            {
              title: 'Blockchain Public Service Living Lab',
              description:
                'NIA | Blockchain-based public service discovery and demonstration project planning',
            },
            {
              title: 'SME Technology Development Planning',
              description:
                'TIPA | SME technology development support program planning and evaluation',
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
    pageHeader: {
      about: {
        title: 'About Us',
        subtitle: 'Navigator for the Digital Era',
      },
      business: {
        title: 'Business Areas',
        subtitle: 'Four Core Solutions for Your Growth Stage',
      },
      services: {
        title: 'Services',
        subtitle: 'ICT Professional Services',
      },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Success References Across Industries',
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Your First Step to Successful Business',
      },
    },
  },
};
