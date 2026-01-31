export type Language = 'ko' | 'en' | 'ja';

export const translations = {
  ko: {
    serviceHighlight: {
      title: '핵심 서비스',
      description:
        'Tech Domain별 사업 아이템을 기획하고 MVP를 개발하여 시장 검증까지 지원합니다. 28년의 ICT 현장 경험을 바탕으로 실현 가능한 비즈니스 모델을 설계합니다.',
      viewMore: '자세히 보기',
      axPillars: {
        efficiency: '내부 효율화',
        cx: 'CX 고도화',
        revenue: '신규 수익',
      },
    },
    portfolioHighlight: {
      title: '주요 프로젝트',
      description: '다양한 산업 분야에서 성공적으로 수행한 프로젝트',
      viewAll: '전체 프로젝트 보기',
    },
    ctaSection: {
      title: '프로젝트를 시작할 준비가 되셨나요?',
      description: '전문 컨설턴트가 비즈니스 성장을 함께 합니다',
      button: '문의하기',
    },
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
        '각 분야 전문가가 직접 수행하는 Guru형 컨설팅으로 차별화된 서비스를 제공합니다.',
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
      title: 'Portfolio',
      description:
        '브레인하우스는 공공기관·기업의 ICT 전략 수립부터 스타트업의 서비스 개발까지 다양한 프로젝트를 수행하고 있습니다.',
      categories: [
        {
          id: 'ict-strategy',
          title: 'ICT 전략·정책 컨설팅',
          description: '정부 R&D 기획, 기술사업화 전략, 정책연구 등',
          items: [
            {
              title: '유무선 통신 소프트웨어 하우스 체계 개발',
              client: 'IITP',
              year: '2025',
            },
            {
              title:
                '인공지능 기반 모바일에지 클라우드 서비스 플랫폼 사업화 전략 컨설팅',
              client: 'ICT기업',
              year: '2024',
            },
            {
              title: '클라우드 네트워킹 서비스 플랫폼의 기술사업화 전략 수립',
              client: 'ICT기업',
              year: '2024',
            },
            {
              title: '디지털 웰니스 생태계 구축 기술개발 지원체계 기획',
              client: '한국연구재단',
              year: '2023',
            },
            {
              title: '초연결 리빙랩 운영 및 플랫폼 자립화 전략 수립',
              client: '한국네트워크산업협회',
              year: '2023',
            },
            {
              title: '스마트시티 해외진출 전략 조사용역',
              client: 'KOTRA',
              year: '2023',
            },
            {
              title:
                '디지털 헬스케어·디지털 치료제 ICT융합 기술 및 산업 동향 분석',
              client: '산업융합원',
              year: '2023',
            },
            {
              title: '경북·Apple 스마트 제조 혁신전략 수립',
              client: '대구경북연구원',
              year: '2022',
            },
            {
              title:
                '초연결 네트워킹 인프라 기반 서비스·BM 및 PoC 활용 성과창출 전략',
              client: 'KANI',
              year: '2022',
            },
            {
              title: 'IT 분야 Community 버전 국내·외 서비스 리서치',
              client: '한국과학기술정보연구원',
              year: '2022',
            },
            {
              title:
                '초연결 네트워킹 서비스의 리빙랩 구축 및 운영 방안 조사·분석 연구',
              client: 'KANI',
              year: '2021',
            },
            {
              title:
                'ICT 기술사업화 전략 컨설팅 (VR, AI, 메타버스 비즈니스 모델 발굴)',
              client: 'ICT기업',
              year: '2021',
            },
            {
              title: '기술수준평가 (초연결 사물인터넷 기술)',
              client: 'KISTEP',
              year: '2020',
            },
            {
              title: '인공지능 기반 네트워크 플랫폼 기술사업화 전략 컨설팅',
              client: 'ICT기업',
              year: '2020',
            },
            {
              title:
                'ICT 기술사업화 전략 컨설팅 (ICT 기반 기업성장 로드맵 수립)',
              client: 'ICT기업',
              year: '2020',
            },
          ],
        },
        {
          id: 'bm-software',
          title: '비즈니스모델 기획 및 소프트웨어 개발',
          description: '플랫폼 서비스 기획, BM 수립, MVP 개발 등',
          items: [
            {
              title: 'AI 기반 맞춤형 문해력 학습 플랫폼',
              client: 'N사',
              year: '2023',
            },
            {
              title: '디지털 치료제(DTx) 기술개발 로드맵 수립',
              client: 'M사',
              year: '2023',
            },
            {
              title: '메타버스 신규 사업 발굴 및 사업화 전략',
              client: 'J사',
              year: '2022',
            },
            {
              title: 'AI 실시간 온라인 스터디 서비스 사업화',
              client: 'M사',
              year: '2022',
            },
            {
              title: '헬스케어 서비스 글로벌 진출전략 수립',
              client: 'A사',
              year: '2022',
            },
            {
              title: '당뇨·비만 식단관리 플랫폼',
              client: 'C사',
              year: '2021',
            },
            {
              title: '외국인 의료서비스 플랫폼',
              client: 'A사',
              year: '2021',
            },
            {
              title: '노인·장애인 돌봄 서비스 플랫폼',
              client: 'I사',
              year: '2021',
            },
            {
              title: 'VR 기반 예술 작품 전시 플랫폼',
              client: 'O사',
              year: '2020',
            },
            {
              title: 'Virtual Avatar 3D 캐릭터 방송 서비스',
              client: 'V사',
              year: '2020',
            },
            {
              title: '푸드 Tech 플랫폼 사업화 컨설팅',
              client: 'M사',
              year: '2020',
            },
            {
              title: '인디 개발자용 브라우저 멀티 게임 제작 툴',
              client: 'I사',
              year: '2020',
            },
            {
              title:
                '팬과 아티스트를 직접 연결하는 엔터테인먼트 블록체인 투자 플랫폼',
              client: 'E사',
              year: '2020',
            },
            {
              title: '외국인 여행자 다국어 지원 택시투어 플랫폼',
              client: 'U사',
              year: '2020',
            },
            {
              title: 'AR 디지털콘텐츠 개발 (볼슈팅, 트램플린)',
              client: 'J사',
              year: '2019',
            },
            {
              title: '분산에너지 관리 및 운영 플랫폼 개발',
              client: 'E사',
              year: '2019',
            },
            {
              title: '머신러닝 기반 무인 외국동전 포인트 전환 키오스크',
              client: 'C사',
              year: '2019',
            },
            {
              title: 'VR(가상현실) 피트니스 서비스',
              client: 'F사',
              year: '2019',
            },
            {
              title: '중소기업을 위한 인플루언서 마케팅 플랫폼',
              client: 'I사',
              year: '2019',
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
        name: '이름',
        company: '회사/기관명',
        email: '이메일 주소',
        message: '문의 내용 (프로젝트 개요, 예산, 일정 등)',
        submit: '문의하기',
        submitting: '전송 중...',
        success:
          '문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.',
        error: '메시지 전송에 실패했습니다. 잠시 후 다시 시도해주세요.',
      },
    },
    footer: {
      companyName: '(주)브레인하우스',
      address: '서울시 강남구 학동로 2길 19, 세일빌딩 2층 (논현동)',
      rights: '© 2026 Brain House Co., Ltd. All rights reserved.',
      sections: {
        company: '회사 소개',
        business: '사업 영역',
        legal: '법적 고지',
      },
      links: {
        about: '소개',
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
      privacy: {
        title: '개인정보처리방침',
        subtitle: '개인정보 보호에 관한 안내',
      },
    },
    servicesMenu: {
      viewAll: '전체 서비스 보기',
      items: [
        {
          slug: 'mvp-development',
          title: '아이템 기획 & MVP',
          shortTitle: 'MVP 개발',
          hasPage: true,
        },
        {
          slug: 'ax-consulting',
          title: 'AX 컨설팅',
          shortTitle: 'AX 컨설팅',
          hasPage: true,
        },
        {
          slug: 'ict-strategy',
          title: 'ICT 전략·정책 컨설팅',
          shortTitle: 'ICT 전략',
          hasPage: true,
        },
        {
          slug: 'tech-commercialization',
          title: '기술사업화 컨설팅',
          shortTitle: '기술사업화',
          hasPage: true,
        },
        {
          slug: 'startup-investment',
          title: '창업·투자 컨설팅',
          shortTitle: '창업·투자',
          hasPage: true,
        },
        {
          slug: 'software-development',
          title: '소프트웨어 개발',
          shortTitle: 'SW 개발',
          hasPage: true,
        },
      ],
    },
    serviceDetailUI: {
      notFound: '서비스를 찾을 수 없습니다',
      viewAllServices: '전체 서비스 보기',
      comingSoonMessage: '상세 내용이 준비 중입니다. 곧 업데이트 예정입니다.',
      targetCustomersLabel: 'Target Customers',
      targetCustomersTitle: '서비스 대상 고객',
      processLabel: 'Process',
      processTitle: '서비스 진행 프로세스',
      techDomainsLabel: 'Tech Domains',
      techDomainsTitle: '지원 가능한 Tech Domain',
      techDomainsDescription:
        '다양한 산업 분야에서 혁신적인 사업 아이템을 발굴하고 MVP를 개발합니다.',
      ctaTitle: '프로젝트를 시작해 보세요',
      ctaDescription: '브레인하우스와 함께 혁신적인 서비스를 만들어 보세요.',
      ctaButton: '프로젝트 문의하기',
      ctaViewAll: '전체 서비스 보기 →',
    },
    serviceDetails: {
      'mvp-development': {
        title: '사업 아이템 기획(발굴) 및 MVP 개발',
        subtitle: 'Tech Domain별 사업 아이템 기획 및 MVP 개발 서비스',
        description:
          '다양한 테크 도메인에서 사업 아이템을 발굴하고, 빠른 시장 검증을 위한 MVP(Minimum Viable Product)를 개발합니다. 28년의 ICT 현장 경험을 바탕으로 실현 가능한 비즈니스 모델을 설계하고, AI 기술을 활용한 혁신적인 서비스를 구현합니다.',
        targetCustomers: [
          '프리랜서',
          '퇴사준비자',
          '예비창업자',
          '초기창업자',
          '스타트업',
          '중소기업',
          '중견기업',
        ],
        processSteps: [
          '아이디어 발굴',
          '시장 분석',
          'BM 설계',
          'MVP 개발',
          '시장 검증',
        ],
        techDomains: [
          {
            id: 'ax',
            name: 'AX (AI Transformation)',
            icon: 'Brain',
            examples: [
              'AI 기반 대화형 쇼핑 비서가 탑재된 쇼핑몰 통합 솔루션 서비스',
              '시니어를 위한 AI 기반 영상 자서전(라이프 스토리) 제작 플랫폼',
              'AI 기반 데이터분석과 오류검증, SaaS시스템이 합류된 스토리텔링 관리 도구',
              'AI 활용한 이력서 관리 및 매칭 시스템',
              'AI 기술이 적용된 고객경험 통찰 인공지능 (CX Insight AI)',
            ],
          },
          {
            id: 'o2o',
            name: 'O2O (Online to Offline)',
            icon: 'Store',
            examples: [
              '차량의 매입부터 상품화 및 판매까지 한 번에 제공하는 올인원 서비스',
              '위치 기반 몰입형 메타버스 플랫폼',
              '디지털 마케팅 중개 플랫폼',
              '비대면 무인 상점 기반 중고 거래 플랫폼',
              '크롤링을 이용한 인스타툰(짧은툰) 어그리게이션 및 큐레이션 플랫폼 서비스',
              '지오캐싱(geocaching)을 활용한 위치기반 SNS',
              'GPS 기반 기프티콘 지갑 및 기프티콘 활용한 광고·홍보 서비스',
            ],
          },
          {
            id: 'wellnesstech',
            name: '웰니스테크',
            icon: 'Heart',
            examples: [
              '시니어를 위한 멘탈 케어 메이트 매칭 웰니스 플랫폼',
              '데이터 기반 개인 맞춤형 건강관리 및 건강기능식품 구독 서비스',
              '음성 분석 기반 정신질환 디지털 치료기기',
              '성인ADHD 치료를 위한 모바일 어플리케이션',
              'AI 기반 심리 건강 관리 플랫폼',
              'AI 기반 아동·청소년 심리 상담 애플리케이션',
              'RFID/QR 기반의 실버카 연동 신체활동 측정 및 포인트 적립의 노인 맞춤형 헬스케어 리워드 시스템',
              '수면 중 신체정보(안구/뒤척임/체온/소음/코골이 등) 추적 기술이 적용된 AI기반 수면 안대, 배게 및 모바일 어플리케이션',
              '고령자 및 취약 계층 위한 맞춤형 안전 모니터링과 케어를 제공하는 AI 기반 돌봄 서비스',
            ],
          },
          {
            id: 'traveltech',
            name: '트래블테크',
            icon: 'Plane',
            examples: [
              'AR(증강현실)과 메타버스 게임을 접목시킨 로컬 투어 어플리케이션',
            ],
          },
          {
            id: 'sportstech',
            name: '스포츠테크',
            icon: 'Trophy',
            examples: [
              '웹 서비스 기술이 적용된 클라이밍 플랫폼 서비스',
              '장거리 산행을 쉽게 해주는 버스 픽업 서비스',
              '생활체육 종합 플랫폼 O2O + 소셜 서비스',
              '실시간 스포츠 경기 분석 대화형 챗봇 서비스',
              'NFC 기반 자동 운동 루틴 기록, 위치기반 헬스 트레이너 매칭 및 교육용 헬스 플랫폼 서비스',
            ],
          },
          {
            id: 'foodtech',
            name: '푸드테크',
            icon: 'Utensils',
            examples: [
              'AI기술과 빅데이터 기술을 접목한 음식 추천 서비스',
              '대체육을 사용한 고객 맞춤형 비건 밀키트',
              '개인화 AI 기반 3인 미만 가구 대상 구독형 생수 배송 B2C 서비스',
            ],
          },
          {
            id: 'proptech',
            name: '프롭테크',
            icon: 'Building',
            examples: [
              'AI·IoT 결합한 개인 맞춤형 인테리어 앱 서비스',
              'cGAN AI를 활용한 인테리어 중개 플랫폼',
            ],
          },
          {
            id: 'fintech',
            name: '핀테크',
            icon: 'Wallet',
            examples: [
              '펌뱅킹 기술에 AI가 적용된 자산 최적화 기능의 자산 관리 플랫폼',
            ],
          },
          {
            id: 'insurtech',
            name: '인슈테크',
            icon: 'Umbrella',
            examples: [
              '맞춤형 보험 추천 플랫폼',
              '보험 청구 자동화 시스템',
              '디지털 보험 가입 서비스',
              'AI 기반 리스크 분석 솔루션',
            ],
          },
          {
            id: 'edutech',
            name: '에듀테크',
            icon: 'GraduationCap',
            examples: [
              '초중고 대상 게이미피케이션 기반의 코딩 학습 앱 서비스',
              '머신러닝 기술이 적용된 요약본 및 기출문제 생성 기능의 스터디 서비스',
              '기업 확정 연계형 SW(소프트웨어) 개발자 교육 플랫폼',
              '시니어를 위한 영어 스피킹 과외 매칭 플랫폼',
              '전문가가 목표 도전을 도와주는 비대면 자기계발 플랫폼',
            ],
          },
          {
            id: 'legaltech',
            name: '리걸테크',
            icon: 'Scale',
            examples: ['AI 기반 지능형 법률 문서 플랫폼 및 리걸테크 서비스'],
          },
          {
            id: 'pettech',
            name: '펫테크',
            icon: 'PawPrint',
            examples: [
              'AI 기반 슬개골 탈구를 진단하는 동물 진단 앱',
              '유기동물 보호소와 연계된 종합 펫 플랫폼',
              '반려동물용 스마트 웨어러블 디바이스를 활용한 종합 펫케어 플랫폼',
            ],
          },
          {
            id: 'agtech',
            name: '애그테크',
            icon: 'Leaf',
            examples: [
              '자율농기계 사용 컨설팅 및 판매 중개 플랫폼',
              'IoT 기반 스마트 과일 재배 시스템',
            ],
          },
          {
            id: 'fashiontech',
            name: '패션테크',
            icon: 'Shirt',
            examples: [
              '1인 디자이너 및 소규모 패션 브랜드를 위한 원스톱 의류 디자인·생산 플랫폼',
              '가상 피팅 서비스를 제공하는 어플리케이션',
            ],
          },
        ],
      },
      'ax-consulting': {
        title: 'AX 컨설팅',
        subtitle: 'AI Transformation 전략 컨설팅',
        description:
          'AI가 단순한 도구를 넘어 비즈니스 핵심으로 자리잡는 AX(AI Transformation) 시대. 브레인하우스는 28년의 ICT 현장 경험과 AI 전문성을 바탕으로, 기업의 AI 전환을 위한 전략 수립부터 실행까지 체계적으로 지원합니다.',
        physicalAI: {
          sectionTitle: 'Physical AI 시대의 도래',
          description:
            'AI가 소프트웨어 영역을 넘어 물리 세계로 확장되는 이른바 피지컬 AI(Physical AI) 시대가 도래했습니다. 휴머노이드, 산업용 로봇, AGV/AMR 등 다양한 형태의 Physical AI가 제조, 물류, 서비스 현장에서 활용되고 있습니다.',
          types: [
            {
              name: '휴머노이드',
              description:
                '인간과 유사한 형태로 다양한 환경에서 유연하게 작업 수행',
            },
            {
              name: '산업용 로봇',
              description: '제조 공정에 특화된 고정밀 자동화 로봇',
            },
            {
              name: 'AGV/AMR',
              description: '물류 센터, 창고에서 자율 주행하며 물품 이동',
            },
          ],
          coreTech: [
            { name: 'AI 칩', description: 'GPU, NPU 등 AI 연산 특화 프로세서' },
            {
              name: '엣지 컴퓨팅',
              description: '실시간 응답성 확보를 위한 분산 처리',
            },
            {
              name: '네트워크 인프라',
              description: 'TSN, 5G 등 초저지연 통신 기술',
            },
          ],
          expertise:
            'Brain House는 다수의 「AI 엣지 컴퓨팅」 관련 프로젝트 레퍼런스를 보유하고 있습니다.',
        },
        axDefinition: {
          sectionTitle: 'AX(AI Transformation)란?',
          description:
            '기존의 DX(Digital Transformation)가 단순히 아날로그 데이터를 디지털화하고 클라우드로 옮기는 수준이었다면, AX는 그 위에 있는 모든 것에 인공지능(AI)이 녹아들어 비즈니스 핵심 자체를 혁신하는 것을 의미합니다.',
          keyPoint:
            '단순히 "AI 도구를 도입했다"의 수준을 넘어, 의사결정, 제품 설계, 고객 경험 전반에 AI가 신경망처럼 스며든 단계입니다.',
          comparison: {
            dx: {
              title: 'DX (Digital Transformation)',
              items: [
                '아날로그 → 디지털 전환',
                '클라우드 마이그레이션',
                '프로세스 자동화',
                '데이터 수집 및 저장',
              ],
            },
            ax: {
              title: 'AX (AI Transformation)',
              items: [
                'AI 기반 의사결정',
                'AI 중심 제품/서비스 설계',
                '예측 및 자동 최적화',
                'AI 네이티브 비즈니스 모델',
              ],
            },
          },
        },
        corePillars: {
          sectionTitle: 'AX 비즈니스 혁신 3대 축',
          items: [
            {
              title: '내부 효율화',
              icon: 'Zap',
              description:
                '반복적인 백오피스(Back-office) 자동화 및 리소스 최적화',
              outcomes: ['비용 절감', '생산성 극대화', '업무 자동화'],
            },
            {
              title: '고객 경험(CX) 고도화',
              icon: 'Smile',
              description: '초개인화된 고객 응대 및 24/7 실시간 서비스',
              outcomes: ['고객 충성도 향상', '리텐션 개선', '만족도 극대화'],
            },
            {
              title: '신규 수익 창출',
              icon: 'DollarSign',
              description:
                'AI 기반의 신제품 출시 및 AIaaS(AI as a Service) 사업화',
              outcomes: ['시장 확대', '신규 비즈니스 모델', '매출 다각화'],
            },
          ],
        },
        evolutionStages: {
          sectionTitle: 'AX 전환 진화 단계',
          description:
            '단번에 AX가 완성되는 것이 아니며, 다음 단계를 거친 흐름을 따릅니다.',
          stages: [
            {
              step: 1,
              title: 'Digitization',
              subtitle: '디지털화',
              description: '아날로그 정보를 디지털로 전환',
            },
            {
              step: 2,
              title: 'Digitalization',
              subtitle: 'DX',
              description: '디지털 도구를 이용한 업무 프로세스 개선',
            },
            {
              step: 3,
              title: 'AI Transformation',
              subtitle: 'AX',
              description:
                'AI가 데이터를 학습하여 스스로 판단하고 업무를 주도적으로 수행하거나 지원함',
            },
          ],
        },
        consultingFramework: {
          sectionTitle: 'AX 컨설팅 프레임워크',
          description:
            'Brain House는 전략적 AI 도입부터 지속적인, 지속적인 비즈니스 가치를 창출하는 3단계 프로세스를 지원합니다.',
          phases: [
            {
              phase: 1,
              title: '진단 & 전략',
              activities: ['AI 준비도 평가', 'Use Case 발굴', '우선순위 정의'],
              deliverables: ['AX 전략 로드맵', 'ROI 분석 리포트'],
            },
            {
              phase: 2,
              title: '설계 & 구현',
              activities: ['아키텍처 설계', 'AI 모델링', '파일럿 개발'],
              deliverables: ['솔루션 아키텍처', 'POC 딜리버리'],
            },
            {
              phase: 3,
              title: '내재화 & 확산',
              activities: [
                '변화 관리 전략',
                'AI 리터러시 교육',
                '성과 모니터링',
              ],
              deliverables: ['AI 거버넌스 체계', '지속적 AI 활용 문화'],
            },
          ],
        },
        businessModels: {
          sectionTitle: 'AI 비즈니스 모델 발굴',
          description:
            'AI 비즈니스 모델은 인공지능 기술을 활용해 직접적인 수익 창출 또는 비즈니스 혁신을 이루는 다양한 구조를 의미합니다. Brain House는 버티컬 AI 솔루션을 비롯한 다양한 AI 비즈니스 모델을 수립합니다.',
          models: [
            {
              id: 'aiaas',
              title: 'AIaaS',
              subtitle: '서비스형 AI',
              icon: 'Cloud',
              description:
                '기업이 직접 AI 모델을 개발하지 않고, 이미 구축된 AI 기능을 API 형태로 빌려 쓰는 모델입니다.',
              pricing: 'API 호출 횟수나 데이터 처리량에 따라 비용 지불',
              examples: [
                { name: 'OpenAI API', desc: 'GPT 모델을 자사 서비스에 연동' },
                {
                  name: 'Google Cloud AI',
                  desc: '이미지 분석, 번역, 음성 인식 기능을 API로 제공',
                },
                {
                  name: 'AWS Bedrock',
                  desc: '다양한 오픈소스 및 상용 모델을 기업 맞춤형으로 제공',
                },
              ],
            },
            {
              id: 'ai-native-saas',
              title: 'AI-Native SaaS',
              subtitle: 'AI 기반 구독 모델',
              icon: 'Sparkles',
              description:
                '기존의 소프트웨어(SaaS)에 AI 기능이 핵심(Core)으로 통합된 형태입니다. 단순히 도구를 제공하는 것을 넘어 결과물을 만들어주는 데 집중합니다.',
              pricing: '월간/연간 구독료(Subscription)',
              examples: [
                {
                  name: 'Jasper / Copy.ai',
                  desc: '마케팅 문구 및 콘텐츠 자동 생성',
                },
                {
                  name: 'GitHub Copilot',
                  desc: '개발자용 코드 자동 완성 및 제안',
                },
                {
                  name: 'Canva Magic Studio',
                  desc: '텍스트만으로 디자인과 이미지를 생성',
                },
              ],
            },
            {
              id: 'agentic-ai',
              title: 'AI 에이전트 성과 기반',
              subtitle: 'Outcome-based / Agentic AI',
              icon: 'Bot',
              description:
                '단순히 소프트웨어를 빌려주는 것이 아니라, AI 에이전트가 특정 업무를 완수한 성과에 대해 비용을 받는 모델입니다. 2026년 가장 주목받는 비즈니스 모델입니다.',
              pricing: '성공적인 예약 건당 수수료, 고객 문의 해결 건당 비용 등',
              examples: [
                {
                  name: 'Intercom / Zendesk AI',
                  desc: '상담원이 아닌 AI 에이전트가 고객 문제를 완결 지었을 때 과금',
                },
                {
                  name: 'AI 리쿠르팅 에이전트',
                  desc: '적합한 인재를 찾아 면접 스케줄까지 잡았을 때 수수료 발생',
                },
              ],
            },
            {
              id: 'vertical-ai',
              title: 'Vertical AI',
              subtitle: '특정 산업 특화 모델',
              icon: 'Stethoscope',
              description:
                '특정 산업별(리테일·헬스케어·금융·부동산·법률·제조 등) 전문 데이터를 학습시켜 해당 분야에만 최적화된 맞춤 AI 서비스를 제공하는 모델입니다.',
              pricing: '고부가가치 솔루션 제공 (B2B 계약 중심)',
              examples: [
                {
                  name: 'Harvey',
                  desc: '변호사들을 위한 법률 문서 분석 및 리서치 특화 AI',
                },
                {
                  name: 'Lunit (루닛)',
                  desc: '의료 영상을 분석해 암을 진단하는 의료 특화 AI',
                },
                { name: 'Ironclad', desc: '계약서 관리 및 자동 검토 전문 AI' },
              ],
            },
            {
              id: 'enablers',
              title: 'Enablers',
              subtitle: '데이터 및 인프라 레이어',
              icon: 'Cpu',
              description:
                'AI를 만들고 운영하는 데 필요한 기초를 판매하는 모델입니다.',
              pricing: '컴퓨팅 파워 대여, 데이터 라벨링 수수료, 칩 판매',
              examples: [
                { name: 'NVIDIA', desc: 'AI 학습용 GPU 및 컴퓨팅 인프라 판매' },
                {
                  name: 'Scale AI',
                  desc: 'AI 학습에 필요한 고품질 데이터 라벨링 서비스 제공',
                },
                {
                  name: 'Hugging Face',
                  desc: 'AI 모델 공유 플랫폼 및 배포 환경 제공',
                },
                {
                  name: 'Palantir Foundry',
                  desc: '사일로 데이터를 통합해 비즈니스 의사결정을 도움',
                },
              ],
            },
          ],
        },
      },
      'ict-strategy': {
        title: 'ICT 전략·정책 컨설팅',
        subtitle:
          '정부 R&D 기획부터 ICT 정책연구까지, 공공기관과 기업의 미래 경쟁력 확보를 위한 전략 수립',
        description:
          '정부·공공기관·기업을 대상으로 ICT 기술 변화 및 트렌드(디지털, AI, 네트워크 등)를 국가·산업·조직 전략과 정책으로 미래 방향을 설계하는 서비스입니다. "기술은 많은데, 어디에 어떻게 써야 하나?"에 답을 주는 영역입니다.',
        processSteps: ['환경 분석', '역량 진단', '전략 수립', '실행 지원'],
        targetCustomers: [
          '중앙정부 / 지자체',
          '공공기관 / 연구기관',
          '대기업·공기업 (ICT·통신·플랫폼)',
          '국제기구 및 해외 정부',
        ],
        objectives: {
          sectionTitle: '주요 목적',
          items: [
            '국가·산업 경쟁력 강화',
            '인공지능 전환(AX), 디지털 전환(DX) 가속화',
            'ICT 기반 신성장 산업 육성',
            '기술 변화에 대응하는 제도·규제 설계',
          ],
        },
        consultingAreas: {
          sectionTitle: '주요 컨설팅 영역',
          areas: [
            {
              title: 'ICT 전략 수립',
              icon: 'Target',
              items: [
                '국가/산업 ICT 중장기 로드맵',
                '디지털·AI·데이터·클라우드·네트워크 전략',
                'ICT 기반 신산업·신사업·BM 발굴',
              ],
            },
            {
              title: '정책·제도 설계',
              icon: 'FileText',
              items: [
                'ICT 관련 법·제도·규제 개선',
                '데이터/AI/플랫폼 거버넌스',
                '공공 ICT 정책 및 투자 방향 설정',
              ],
            },
            {
              title: '기술·산업 분석',
              icon: 'BarChart',
              items: [
                '기술 트렌드 분석 (AI, 5G/6G, 클라우드, 반도체 등)',
                '글로벌 정책·시장 벤치마킹',
                '산업 생태계 및 밸류체인 분석',
              ],
            },
            {
              title: '실행·이행 지원',
              icon: 'Rocket',
              items: [
                '정책 실행계획 및 KPI 설계',
                '공공사업 기획(RFP, 예타, 로드맵)',
                '민관 협력 모델 설계',
              ],
            },
          ],
        },
        outputs: {
          sectionTitle: '컨설팅 산출물',
          items: [
            'ICT 중장기 전략 보고서',
            '정책 로드맵 및 실행계획',
            '제도·규제 개선안',
            '산업 육성 및 투자 전략',
          ],
        },
        newBusinessFramework: {
          sectionTitle: 'ICT 신사업 발굴 프레임워크',
          description:
            '기업의 신규 사업 발굴을 위한 ICT 전략 컨설팅은 단순히 "새로운 기술을 도입하는 것"을 넘어, 기술을 통해 비즈니스 모델을 혁신하거나 완전히 새로운 시장을 창출하는 것에 목적을 둡니다.',
          steps: [
            {
              step: 1,
              title: '시장·기술 트렌드 분석',
              description:
                '5G, AI, 메타버스 등 파괴적 기술이 산업에 미칠 영향 분석',
            },
            {
              step: 2,
              title: '내부 역량 진단',
              description:
                '기업이 보유한 자산(Asset)과 ICT 기술의 결합 가능성 검토',
            },
            {
              step: 3,
              title: 'Ideation & Filtering',
              description:
                '수백 개의 아이디어 중 수익성과 실행 가능성이 높은 후보군 선별',
            },
            {
              step: 4,
              title: 'PoC 설계',
              description: '실제 사업화 전 기술적 구현 가능성 검증',
            },
            {
              step: 5,
              title: 'Roadmap 수립',
              description: '중장기 투자 계획 및 조직 개편 방안 마련',
            },
          ],
        },
        trends: {
          sectionTitle: 'ICT 전략 컨설팅 트렌드',
          items: [
            'AI First 전략 (업무 자동화, 의사결정 고도화)',
            'Cloud Native & Platform',
            'Data-driven Enterprise',
            'Open / API / Ecosystem 전략',
            'NetOps·DevOps·AIOps',
            '보안 내재화(Security by Design)',
          ],
        },
        industryComparison: {
          sectionTitle: '산업별 ICT 전략 비교',
          industries: [
            {
              name: '제조 (Manufacturing)',
              coreValue: '생산 효율 및 품질',
              keyTech: 'IoT, 로봇, 디지털 트윈',
              priority: '공정 자동화 및 비용 절감',
            },
            {
              name: '금융 (Finance)',
              coreValue: '신뢰, 규제 대응, 편의성',
              keyTech: 'AI, 클라우드, 블록체인',
              priority: '데이터 기반 초개인화 서비스',
            },
            {
              name: '유통 (Retail)',
              coreValue: '고객 경험 및 물류 최적화',
              keyTech: '빅데이터, AR/VR, 배송 자동화',
              priority: '채널 통합 및 라스트마일 혁신',
            },
          ],
        },
      },
      'tech-commercialization': {
        title: '기술사업화 컨설팅',
        subtitle:
          '기술을 시장으로 끌어내어 경제적 가치(수익)를 창출하는 전문 서비스',
        description:
          '연구소나 기업이 보유한 기술을 단순히 개발하는 단계에서 끝내지 않고, 이를 시장으로 끌어내어 경제적 가치를 창출하도록 돕는 전문 서비스입니다. "좋은 기술이 있는데, 이걸 어떻게 팔아서 돈을 벌까?"에 대한 해답을 제시합니다.',
        processSteps: [
          '기술 진단',
          '시장 분석',
          '가치 평가',
          '파트너 발굴',
          '이전/계약',
        ],
        targetCustomers: [
          '대학 및 공공연구기관',
          '스타트업 및 중소기업',
          '중견·대기업 (Open Innovation)',
        ],
        consultingProcess: {
          sectionTitle: '기술사업화 컨설팅 프로세스',
          description:
            '기술의 탄생부터 시장 안착까지의 전 과정을 체계적으로 지원합니다.',
          steps: [
            {
              title: '기술 진단 및 유망기술 발굴',
              icon: 'Search',
              description:
                '보유한 기술의 완성도(TRL), 독창성, 권리 관계를 분석합니다.',
            },
            {
              title: '시장 분석 및 BM 수립',
              icon: 'BarChart',
              description:
                '누가 이 기술을 필요로 하는지 시장 규모를 파악하고, 수익 구조를 설계합니다.',
            },
            {
              title: '기술 가치 평가',
              icon: 'DollarSign',
              description:
                '해당 기술이 화폐 단위로 얼마만큼의 가치가 있는지 산정합니다.',
            },
            {
              title: '마케팅 및 파트너 발굴',
              icon: 'Users',
              description:
                '기술을 사갈 수요 기업을 찾거나, 공동 사업화 파트너를 연결합니다.',
            },
            {
              title: '기술 이전 및 계약 지원',
              icon: 'FileText',
              description:
                '기술료(Royalty) 협상과 법적 계약 체결을 돕습니다.',
            },
          ],
        },
        expectedBenefits: {
          sectionTitle: '핵심 기대 효과',
          benefits: [
            {
              title: '시행착오 감소',
              icon: 'Shield',
              description: '시장성 없는 기술에 투자하는 리스크를 방지합니다.',
            },
            {
              title: '자금 조달 용이',
              icon: 'Wallet',
              description:
                '객관적인 기술 가치 평가를 통해 정부 지원금이나 VC 투자를 받기 수월해집니다.',
            },
            {
              title: '수익 극대화',
              icon: 'TrendingUp',
              description:
                '라이선싱, 합작 투자 등 다양한 수익 루트를 확보합니다.',
            },
          ],
        },
        ictSynergy: {
          sectionTitle: '기술사업화와 ICT 전략의 연계',
          description:
            '기술사업화와 ICT 전략 수립은 현대 비즈니스 환경에서 떼려야 뗄 수 없는 상호보완적 관계입니다.',
          quote: '"기술은 씨앗, ICT는 토양"',
          comparison: {
            techComm: {
              title: '기술사업화 컨설팅',
              goal: 'R&D 성과물을 시장에 출시하여 수익 창출',
              activities: '기술 가치 평가, 시장 분석, BM 개발',
              role: '"무엇을(What)" 팔 것인가를 결정',
            },
            ictStrategy: {
              title: 'ICT 전략 수립',
              goal: '비즈니스 목표 달성을 위한 효율적인 IT 인프라 및 시스템 구축',
              activities: '프로세스 혁신(PI), 시스템 아키텍처 설계, 디지털 전환(DX)',
              role: '"어떻게(How)" 효율적으로 운영할 것인가를 결정',
            },
          },
          keyPoints: [
            {
              title: '비즈니스 모델(BM)의 구체화',
              description:
                '최신 기술(AI, 클라우드, 빅데이터 등)을 사업화할 때, ICT 전략은 서비스가 고객에게 전달되는 플랫폼의 구조를 설계합니다.',
            },
            {
              title: '데이터 기반의 시장 검증',
              description:
                'ICT 전략은 고객 데이터를 수집, 분석하는 데이터 거버넌스 체계를 마련하여 사업화의 성공 확률을 높입니다.',
            },
            {
              title: '운영 효율성 및 비용 절감',
              description:
                'ERP나 CRM 체계를 구축하면, 사업화 초기 단계의 운영 리스크를 크게 줄일 수 있습니다.',
            },
          ],
        },
        dxSynergy: {
          sectionTitle: '디지털 전환(DX) 중심의 시너지 효과',
          effects: [
            {
              title: 'Time-to-Market 단축',
              description:
                'ICT 인프라(클라우드 등)를 활용하면 기술 개발부터 시장 출시까지의 기간을 획기적으로 줄일 수 있습니다.',
            },
            {
              title: '확장성(Scalability) 확보',
              description:
                '사업화 초기 단계부터 확장 가능한 ICT 아키텍처를 설계하면, 사용자가 급증하더라도 서비스 중단 없이 사업을 키울 수 있습니다.',
            },
            {
              title: '신규 가치 창출',
              description:
                '기존 제조 기술에 ICT 전략을 결합하여 SaaS나 플랫폼 비즈니스로 전환하는 비즈니스 모델 혁신이 가능해집니다.',
            },
          ],
        },
      },
      'startup-investment': {
        title: '창업·투자 컨설팅',
        subtitle:
          '예비창업자부터 스케일업 중견기업까지 성장 단계별 맞춤형 멘토링·컨설팅과 투자 유치 지원',
        description:
          '창업 컨설팅은 아이디어의 발굴부터 실제 시장 안착, 그리고 성장 전략까지를 포괄하는 사례중심의 실전형으로 구성됩니다. 최근 창업 멘토링·컨설팅은 이론보다는 피칭 데이나 멘토링 같은 실행 중심의 워크숍 비중이 매우 높습니다.',
        processSteps: ['아이템 발굴', 'BM 수립', '시장 진입', '투자 유치'],
        targetCustomers: [
          '예비창업자',
          '초기 스타트업',
          '성장기 스타트업',
          '스케일업 중견기업',
          'IPO 준비 기업',
        ],
        mentoringModules: {
          sectionTitle: '핵심 단계별 창업 멘토링·컨설팅 4대 모듈',
          modules: [
            {
              title: '아이템 발굴 및 비즈니스 모델(BM) 수립',
              description:
                '창업의 기초를 다지는 단계로, "누구의 문제를 어떻게 해결할 것인가"에 집중합니다.',
              icon: 'Lightbulb',
              items: [
                '기회 포착: 시장 트렌드 분석 및 페인 포인트(Pain Point) 발견',
                'BM 설계: 비즈니스 모델 캔버스(BMC, 9 Blocks) 작성 및 수익 구조 설계',
                '아이디어 검증: 린 스타트업(Lean Startup) 방법론을 통한 가설 설정 및 고객 인터뷰',
              ],
            },
            {
              title: '제품 개발 및 시장 진입 (Go-to-Market)',
              description:
                '아이디어를 구체적인 결과물로 만들고 초기 시장의 반응을 확인하는 과정입니다.',
              icon: 'Rocket',
              items: [
                'MVP 제작: 최소 요건 제품(Minimum Viable Product) 개발 및 테스트',
                '마케팅 전략: 그로스 해킹(Growth Hacking) 및 디지털 마케팅 실무',
                'PMF 도출: 제품-시장 적합성(Product-Market Fit) 확인 및 피보팅(Pivoting) 전략',
              ],
            },
            {
              title: '스타트업 금융 및 투자 유치 (IR)',
              description:
                '사업 확장을 위한 자금 조달과 재무 관리 능력을 배양합니다.',
              icon: 'DollarSign',
              items: [
                '자금 조달: 정부지원사업 활용, 엔젤 투자, VC(벤처캐피탈)의 이해',
                'IR 피칭: 투자자를 설득하는 피칭 덱(Pitch Deck) 작성 및 발표 스킬',
                '기업가치 평가: 밸류에이션 산정 방식 및 지분 구조(Cap Table) 관리',
              ],
            },
            {
              title: '조직 운영 및 스케일업 (Scale-up)',
              description:
                '본격적인 성장 단계에서 발생하는 경영 이슈를 다룹니다.',
              icon: 'TrendingUp',
              items: [
                '조직 관리: 스타트업 기업 문화 구축 및 핵심 인재 채용(HR)',
                '법률 및 특허: 창업 법무, 주주 간 계약서 작성, 지식재산권(IP) 보호',
                '출구 전략(Exit): M&A(인수합병) 및 IPO(기업공개)의 이해',
              ],
            },
          ],
        },
        bmConsulting: {
          sectionTitle: '비즈니스 모델(BM) 수립 컨설팅',
          description:
            '비즈니스 모델(BM)은 단순히 "어떻게 돈을 벌 것인가"를 넘어, "어떤 가치를 누구에게 전달하고, 그 과정에서 어떻게 수익을 창출하며 지속할 것인가"에 대한 설계도입니다.',
          steps: [
            {
              step: 1,
              title: '문제 정의 & 고객 세분화',
              description:
                'BM의 출발점은 제품이 아니라 문제, 페인 포인트입니다. 누구의 문제인가, 그 문제가 얼마나 아픈가를 분석합니다.',
            },
            {
              step: 2,
              title: '가치 제안(Value Proposition) 정리',
              description:
                '고객이 왜 당신을 선택해야 하는지 명확히 합니다. 비용 절감, 성능 향상, 운영 단순화, 리스크 감소 등.',
            },
            {
              step: 3,
              title: 'BM 구조화 (Business Model Canvas)',
              description:
                '고객 세그먼트, 가치 제안, 채널, 고객 관계, 수익원, 핵심 자원, 핵심 활동, 핵심 파트너, 비용 구조의 9가지 블록으로 구조화합니다.',
            },
            {
              step: 4,
              title: '수익 모델 설계 (Monetization)',
              description:
                '라이선스/구독(SaaS), 사용량 기반, 유지보수/운영 서비스, 플랫폼 수수료, 데이터/부가서비스 등 수익 구조를 설계합니다.',
            },
            {
              step: 5,
              title: '시장성 검증 (Minimum Validation)',
              description:
                'PoC/파일럿 고객 확보, 실제 지불 의향 확인, 고객 인터뷰를 통한 빠른 검증을 진행합니다.',
            },
          ],
        },
        bmAdvanced: {
          sectionTitle: 'BM 고도화를 위한 3대 전략',
          description:
            '초기 모델이 나왔다면, 시장 피드백을 바탕으로 다음 세 가지 관점에서 고도화해야 합니다.',
          strategies: [
            {
              title: '문제-솔루션 적합성 (Problem-Solution Fit)',
              description:
                '실제 고객이 우리가 해결하려는 문제를 "돈을 낼 만큼" 심각하게 느끼는지 확인합니다.',
              icon: 'Target',
            },
            {
              title: '수익 모델의 다각화 및 안정화',
              description:
                'Lock-in 전략과 Upselling & Cross-selling을 통해 수익원을 정교화합니다.',
              icon: 'Layers',
            },
            {
              title: '유닛 이코노믹스 (Unit Economics) 분석',
              description:
                'CAC(고객 획득 비용)보다 LTV(고객 생애 가치)가 큰지 수치로 검증합니다.',
              icon: 'BarChart',
            },
          ],
          checklist: {
            title: '고도화 체크리스트 (Self-Audit)',
            items: [
              '차별성: 경쟁사가 3개월 안에 따라 할 수 없는 우리만의 해자(Moat)가 있는가?',
              '확장성: 매출이 늘어날 때 비용도 비례해서 급격히 늘어나는 구조는 아닌가?',
              '지속성: 한 번의 구매로 끝나는가, 아니면 반복적인 구매가 일어나는가?',
            ],
          },
        },
        aiBMC: {
          sectionTitle: 'AI 비즈니스 모델 캔버스(AI-BMC) 활용 전략',
          description:
            'AI-BMC는 기존의 비즈니스 모델 캔버스(BMC)를 AI 기술의 특성에 맞춰 변형한 전략 도구입니다.',
          quote:
            '어떤 데이터를 통해 어떤 AI 기능을 구현하고, 이를 어떻게 비즈니스 가치로 연결할 것인가',
          components: [
            {
              category: '가치창출',
              items: ['문제정의', 'AI핵심기능', '알고리즘', '데이터', '평가지표'],
            },
            {
              category: '가치제안',
              items: ['사용자에게 전달할 가치를 구체화'],
            },
            {
              category: '가치전달',
              items: ['사용자', '채널', '학습루프'],
            },
            {
              category: '가치획득',
              items: ['혁신비용', '혁신편익'],
            },
          ],
        },
        irStrategy: {
          sectionTitle: 'IR 전략 수립 및 투자 유치',
          description:
            '성공적인 IR(Investor Relations) 전략은 단순히 기업을 홍보하는 것을 넘어, 투자자와의 신뢰를 구축하고 기업의 적정 가치를 시장에서 인정받는 과정입니다.',
          elements: [
            {
              title: '투자 하이라이트(Equity Story) 구축',
              description:
                '기업의 비전, 기술적 차별성, 시장 규모, 그리고 수익 모델을 하나의 매력적인 서사로 연결합니다.',
              icon: 'FileText',
            },
            {
              title: '타겟 투자자 식별',
              description:
                '산업군, 성장 단계(Seed, Series A~C, Pre-IPO), 투자 규모에 적합한 VC, PE, 또는 기관 투자자를 리스트업합니다.',
              icon: 'Users',
            },
            {
              title: '커뮤니케이션 채널 다각화',
              description:
                '정기적인 IR 자료 업데이트, 실적 발표회, NDR, 1:1 미팅 등을 통해 접점을 넓힙니다.',
              icon: 'MessageSquare',
            },
            {
              title: '리스크 관리 및 투명성',
              description:
                '기업의 약점이나 시장의 우려 사항에 대해 논리적이고 투명한 대응 논리를 준비합니다.',
              icon: 'Shield',
            },
          ],
          process: [
            {
              step: 1,
              title: 'Internal Audit (내부 진단)',
              description: '우리 회사의 현재 위치와 지표(KPI)를 객관적으로 분석',
            },
            {
              step: 2,
              title: 'Messaging (메시징)',
              description:
                "시장의 트렌드에 맞춰 투자자가 듣고 싶어 하는 '성장 로드맵' 설계",
            },
            {
              step: 3,
              title: 'Execution (실행)',
              description: 'IR 북(Deck) 제작, 피칭, 피드백 수렴 및 전략 수정 반복',
            },
          ],
        },
        investorNetwork: {
          sectionTitle: 'VC/AC/엔젤투자 네트워크 연계 및 자금조달 자문',
          description:
            '스타트업 성장의 핵심 동력인 자금조달(Fundraising) 체계는 투자 주체별 역할과 네트워크 활용법을 이해하는 것에서 시작됩니다.',
          investors: [
            {
              type: '엔젤투자',
              stage: '극초기 (Seed)',
              description:
                '개인 혹은 소규모 그룹. 아이디어와 팀을 보고 투자하며, 초기자본금 확보에 유용.',
            },
            {
              type: 'AC (액셀러레이터)',
              stage: '초기 (Seed ~ Pre-A)',
              description:
                '보육(Incubating) 중심. 단기 교육 프로그램과 초기 자금, 멘토링, 후속 투자 연계 제공.',
            },
            {
              type: 'VC (벤처캐피탈)',
              stage: '성장기 (Series A 이후)',
              description:
                '기관 투자자. 시장 확장성과 수익 모델을 검증하며, 대규모 자금을 투입하여 성장을 가속화.',
            },
          ],
          strategies: [
            'IR 피칭 및 데모데이: AC/VC가 주최하는 행사 참여를 통해 비즈니스 모델을 노출하고 신뢰도를 확보',
            'LP(출자자) 및 유관기관 활용: 중기부, 창업진흥원 등 공공기관의 매칭 펀드나 팁스(TIPS) 프로그램 연계',
            "신뢰 기반의 Referral: 기존 포트폴리오 대표나 신뢰받는 심사역의 소개를 통한 '따뜻한 소개(Warm Intro)'",
          ],
        },
        exitStrategy: {
          sectionTitle: 'IPO 성공 전략 및 M&A 전략 자문',
          description:
            '기업의 성장 단계에서 IPO(기업공개)와 M&A(인수합병)는 가장 중요한 전환점입니다.',
          ipo: {
            title: 'IPO(기업공개) 성공 전략',
            items: [
              {
                title: '성장 스토리텔링 (Equity Story)',
                description:
                  '명확한 비즈니스 모델, 시장 점유율 확대 계획, 차별화된 기술력을 바탕으로 매력적인 투자 시나리오 구축',
              },
              {
                title: '투명한 지배구조 및 내부통제',
                description:
                  '상장 전 회계 투명성을 확보하고 경영권 분쟁 소지를 없애는 등 거래소의 상장 심사 기준에 맞춘 질적 요건 정비',
              },
              {
                title: '적정 밸류에이션(Valuation)',
                description:
                  '유사 기업 대비 경쟁력을 수치화하여 합리적인 공모가 산정',
              },
              {
                title: 'IR(투자자 관계) 강화',
                description:
                  '기관 투자자들과의 지속적인 소통을 통해 신뢰를 쌓고, 상장 이후의 주가 관리 계획까지 사전 준비',
              },
            ],
          },
          mna: {
            title: 'M&A(인수합병) 전략 자문',
            items: [
              {
                title: '전략적 정합성(Strategic Fit) 검토',
                description:
                  '기존 사업과의 시너지가 발생하는지 혹은 포트폴리오 다각화에 실질적인 도움이 되는지 최우선으로 분석',
              },
              {
                title: '철저한 실사(Due Diligence)',
                description:
                  '재무, 법률, 영업, IT 등 전 분야에 걸친 리스크 파악 및 숨겨진 우발 채무나 조직 문화의 이질성 사전 점검',
              },
              {
                title: 'PMI(인수 후 통합) 계획',
                description:
                  '인사 시스템, IT 인프라, 조직 문화를 어떻게 하나로 합칠 것인지에 대한 구체적인 실행 방안 수립',
              },
              {
                title: '딜 구조(Deal Structure) 설계',
                description:
                  '현금 매수, 주식 교환, LBO(차입 매수) 등 기업 상황에 맞는 최적의 거래 구조 설계',
              },
            ],
          },
        },
      },
      'software-development': {
        title: '소프트웨어 개발',
        subtitle: 'Node.js 기반 풀스택 개발 및 클라우드 인프라 구축',
        description:
          '브레인하우스는 Node.js 생태계를 중심으로 한 풀스택 웹 개발 서비스를 제공합니다. 기획 컨설팅을 통해 검증된 아이디어를 실제 서비스로 구현하고, 초기 창업자의 MVP 개발부터 기업의 웹서비스 고도화까지 기술 개발 파트너로서 함께합니다.',
        targetCustomers: [
          '아이디어를 서비스로 구현하고 싶은 초기 창업자',
          '기존 시스템의 현대화가 필요한 기업',
          '신규 웹서비스 개발을 계획하는 기업',
          '컨설팅 결과를 기술로 구현하고자 하는 고객',
          '빠른 시장 검증이 필요한 스타트업',
        ],
        processSteps: [
          '요구사항 분석',
          '설계 & 프로토타입',
          '개발 & 테스트',
          '배포 & 런칭',
          '운영 & 유지보수',
        ],
        techStack: {
          sectionTitle: '기술 스택',
          categories: [
            {
              name: 'Backend',
              icon: 'Server',
              items: ['Node.js', 'NestJS', 'Express.js', 'TypeScript'],
            },
            {
              name: 'Frontend',
              icon: 'Monitor',
              items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
            },
            {
              name: 'Cloud & Infra',
              icon: 'Cloud',
              items: ['AWS (EC2, S3, RDS, Lambda)', 'Docker', 'GitHub Actions'],
            },
            {
              name: 'Database',
              icon: 'Database',
              items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'],
            },
            {
              name: 'AI Integration',
              icon: 'Brain',
              items: ['OpenAI API', 'Claude API', 'Gemini API', 'LangChain'],
            },
          ],
        },
        serviceTypes: {
          sectionTitle: '서비스 유형',
          types: [
            {
              title: 'MVP 개발',
              icon: 'Rocket',
              target: '초기 창업자 / 스타트업',
              description:
                '린 스타트업 방법론에 기반하여 핵심 기능에 집중한 MVP를 4-8주 내에 개발하고 빠른 시장 검증을 지원합니다.',
              features: [
                '핵심 기능 중심의 빠른 개발',
                '반응형 웹 애플리케이션',
                '기본 인프라 구축 (AWS 기반)',
                '런칭 후 1개월 무상 유지보수',
              ],
            },
            {
              title: '기업 웹서비스 개발',
              icon: 'Building',
              target: '중소기업 / 중견기업',
              description:
                'B2B/B2C 플랫폼, 사내 시스템, 고객 포털 등 기업의 비즈니스 요구에 맞춘 확장 가능한 웹서비스를 개발합니다.',
              features: [
                '마이크로서비스 아키텍처 설계',
                '레거시 시스템 현대화',
                '기업 시스템 연동 (ERP, CRM 등)',
                'SLA 기반 유지보수 계약',
              ],
            },
            {
              title: '컨설팅 연계 개발',
              icon: 'Briefcase',
              target: '컨설팅 고객',
              description:
                '브레인하우스의 기술사업화 컨설팅, AX 컨설팅 결과를 실제 서비스로 구현합니다. 기획부터 개발까지 원스톱으로 진행됩니다.',
              features: [
                '컨설팅 결과의 기술 구현',
                'PoC/파일럿 개발',
                'AI 서비스 프로토타입',
                '후속 투자 유치 지원',
              ],
            },
          ],
        },
        developmentProcess: {
          sectionTitle: '개발 프로세스',
          steps: [
            {
              step: 1,
              title: '요구사항 분석',
              duration: '1-2주',
              icon: 'Search',
              description:
                '비즈니스 요구사항을 분석하고 기술적 실현 가능성을 검토합니다. 프로젝트 범위와 일정을 확정합니다.',
              deliverables: ['요구사항 정의서', '기술 검토 보고서', '프로젝트 계획서'],
            },
            {
              step: 2,
              title: '설계 & 프로토타입',
              duration: '1-2주',
              icon: 'Layers',
              description:
                '시스템 아키텍처를 설계하고 UI/UX 프로토타입을 제작합니다. 데이터베이스 스키마와 API 명세를 정의합니다.',
              deliverables: ['시스템 설계서', 'UI/UX 프로토타입', 'API 명세서'],
            },
            {
              step: 3,
              title: '개발 & 테스트',
              duration: '4-8주',
              icon: 'Code',
              description:
                '애자일 방법론으로 2주 단위 스프린트를 진행합니다. 지속적인 통합과 테스트로 품질을 보장합니다.',
              deliverables: ['소스 코드', '테스트 결과 보고서', '기술 문서'],
            },
            {
              step: 4,
              title: '배포 & 런칭',
              duration: '1주',
              icon: 'Rocket',
              description:
                '클라우드 인프라에 서비스를 배포하고 런칭을 지원합니다. 모니터링 시스템을 구축합니다.',
              deliverables: ['배포된 서비스', '운영 가이드', '모니터링 대시보드'],
            },
            {
              step: 5,
              title: '운영 & 유지보수',
              duration: '지속',
              icon: 'Settings',
              description:
                '런칭 후 안정적인 운영을 지원합니다. 버그 수정, 기능 개선, 성능 최적화를 진행합니다.',
              deliverables: ['월간 운영 보고서', '기능 개선 사항', '성능 분석 리포트'],
            },
          ],
        },
        whyBrainHouse: {
          sectionTitle: 'Why Brain House?',
          points: [
            {
              title: '28년 ICT 경험',
              icon: 'Trophy',
              description:
                'ICT 분야 28년의 현장 경험과 노하우를 바탕으로 단순 개발을 넘어 비즈니스 가치를 창출하는 솔루션을 제공합니다.',
            },
            {
              title: '컨설팅 연계',
              icon: 'Network',
              description:
                '기술사업화 컨설팅, AX 컨설팅과 연계하여 기획부터 개발까지 원스톱 서비스를 제공합니다.',
            },
            {
              title: '최신 기술 스택',
              icon: 'Zap',
              description:
                'Node.js, Next.js, AWS 등 검증된 최신 기술 스택을 활용하여 확장 가능하고 유지보수가 용이한 시스템을 구축합니다.',
            },
            {
              title: '풀사이클 지원',
              icon: 'Repeat',
              description:
                '요구사항 분석부터 설계, 개발, 배포, 운영까지 프로젝트의 전 생명주기를 책임집니다.',
            },
          ],
        },
      },
    },
    privacy: {
      pageHeader: {
        title: '개인정보 처리방침',
        subtitle: '개인정보 보호에 관한 안내',
      },
      lastUpdated: '최종 수정일: 2026년 1월 29일',
      intro:
        '(주)브레인하우스(이하 "회사")는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수하고 있습니다. 회사는 본 개인정보 처리방침을 통해 이용자의 개인정보가 어떠한 목적과 방식으로 처리되고 있는지 안내드립니다.',
      sections: {
        purpose: {
          title: '1. 개인정보의 처리 목적',
          content:
            '회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며, 이용 목적이 변경될 경우 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.',
          items: [
            '문의 응대: 이용자의 문의에 대한 답변 및 상담 서비스 제공',
            '서비스 개선: 서비스 품질 향상을 위한 피드백 분석',
          ],
        },
        items: {
          title: '2. 수집하는 개인정보 항목',
          content:
            '회사는 문의하기 서비스 이용 시 다음의 개인정보를 수집합니다:',
          items: [
            '필수 항목: 이름, 이메일 주소',
            '선택 항목: 회사명, 연락처, 문의 내용',
          ],
        },
        retention: {
          title: '3. 개인정보의 보유 및 이용 기간',
          content:
            '회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 법령에 정한 기간 동안 보관합니다.',
          items: ['문의 내역: 3년 (상법, 전자상거래법 등 관련 법률)'],
        },
        rights: {
          title: '4. 이용자의 권리와 행사 방법',
          content:
            '이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. 권리 행사는 아래 담당자에게 서면, 이메일 등으로 연락하시면 지체 없이 처리합니다.',
        },
        security: {
          title: '5. 개인정보의 안전성 확보 조치',
          content:
            '회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:',
          items: [
            '개인정보의 암호화',
            '해킹 등에 대비한 기술적 대책',
            '개인정보 취급 직원의 최소화 및 교육',
          ],
        },
        officer: {
          title: '6. 개인정보 보호책임자',
          content:
            '회사는 이용자의 개인정보 보호 및 관련 문의사항 처리를 위해 아래와 같이 개인정보 보호책임자를 지정하고 있습니다:',
          name: '성명: 김현철',
          position: '직책: 대표이사',
          email: '이메일: comfamil@gmail.com',
        },
        changes: {
          title: '7. 개인정보 처리방침의 변경',
          content:
            '본 개인정보 처리방침은 법령 및 방침에 따라 변경될 수 있으며, 변경 시 웹사이트 공지를 통해 안내합니다.',
        },
      },
    },
  },
  en: {
    serviceHighlight: {
      title: 'Our Services',
      description:
        'We plan business items by Tech Domain and develop MVPs to support market validation. Based on 28 years of ICT field experience, we design viable business models.',
      viewMore: 'Learn More',
      axPillars: {
        efficiency: 'Internal Efficiency',
        cx: 'CX Enhancement',
        revenue: 'New Revenue',
      },
    },
    portfolioHighlight: {
      title: 'Featured Projects',
      description: 'Successfully delivered projects across various industries',
      viewAll: 'View All Projects',
    },
    ctaSection: {
      title: 'Ready to Start Your Project?',
      description: 'Our experts are here to help your business grow',
      button: 'Contact Us',
    },
    header: {
      about: 'About',
      business: 'Business',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      getStarted: 'Contact Us',
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
          'DGI',
          'ETRI',
          'KISTEP',
          'KIAT',
          'KEIT',
          'KISED',
          'KIBO',
          'KOTRA',
          'NRF',
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
            'Platform service planning and Business Model (BM) design',
            'ICT-based new service/product planning consulting',
            'Government R&D program planning and proposal support',
            'Mid-to-long term Technology Roadmap (TRM)',
          ],
        },
        {
          title: 'Management Strategy',
          description:
            'We diagnose internal capabilities and design optimal business models for sustainable growth.',
          details: [
            'ICT policy research and market analysis',
            'ICT convergence service demonstration and commercialization',
            'Corporate capability diagnosis and innovation strategy',
            'Entrepreneurship education and internal venture fostering',
            'Startup Business Model (BM) refinement and mentoring',
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
        'Differentiated Guru-type consulting services delivered directly by domain experts.',
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
      title: 'Portfolio',
      description:
        'Brain House delivers diverse projects from ICT strategy for government & enterprises to service development for startups.',
      categories: [
        {
          id: 'ict-strategy',
          title: 'ICT Strategy & Policy Consulting',
          description:
            'Government R&D planning, technology commercialization, policy research',
          items: [
            {
              title: 'Wired/Wireless Communication SW House System Development',
              client: 'IITP',
              year: '2025',
            },
            {
              title:
                'AI-based Mobile Edge Cloud Service Platform Commercialization Strategy',
              client: 'ICT Company',
              year: '2024',
            },
            {
              title:
                'Cloud Networking Service Platform Tech Commercialization Strategy',
              client: 'ICT Company',
              year: '2024',
            },
            {
              title: 'Digital Wellness Ecosystem R&D Support Planning',
              client: 'NRF Korea',
              year: '2023',
            },
            {
              title: 'Hyper-connected Living Lab Operation & Platform Strategy',
              client: 'KNIA',
              year: '2023',
            },
            {
              title: 'Smart City Global Expansion Strategy Research',
              client: 'KOTRA',
              year: '2023',
            },
            {
              title:
                'Digital Healthcare & DTx ICT Convergence Technology Analysis',
              client: 'Industrial Convergence Institute',
              year: '2023',
            },
            {
              title: 'Gyeongbuk-Apple Smart Manufacturing Innovation Strategy',
              client: 'DGI',
              year: '2022',
            },
            {
              title:
                'Hyper-connected Networking Service/BM & PoC Performance Strategy',
              client: 'KANI',
              year: '2022',
            },
            {
              title:
                'IT Community Version Service Research (Domestic & International)',
              client: 'KISTI',
              year: '2022',
            },
            {
              title:
                'Hyper-connected Networking Living Lab Development & Operation Research',
              client: 'KANI',
              year: '2021',
            },
            {
              title:
                'ICT Tech Commercialization Consulting (VR, AI, Metaverse BM)',
              client: 'ICT Company',
              year: '2021',
            },
            {
              title: 'Technology Level Assessment (Hyper-connected IoT)',
              client: 'KISTEP',
              year: '2020',
            },
            {
              title:
                'AI-based Network Platform Tech Commercialization Consulting',
              client: 'ICT Company',
              year: '2020',
            },
            {
              title:
                'ICT Tech Commercialization Consulting (Enterprise Growth Roadmap)',
              client: 'ICT Company',
              year: '2020',
            },
          ],
        },
        {
          id: 'bm-software',
          title: 'Business Model Planning & Software Development',
          description:
            'Platform service planning, BM development, MVP development',
          items: [
            {
              title: 'AI-based Personalized Literacy Learning Platform',
              client: 'Company N',
              year: '2023',
            },
            {
              title: 'Digital Therapeutics (DTx) Technology Roadmap',
              client: 'Company M',
              year: '2023',
            },
            {
              title: 'Metaverse New Business Discovery & Commercialization',
              client: 'Company J',
              year: '2022',
            },
            {
              title: 'AI Real-time Online Study Service Commercialization',
              client: 'Company M',
              year: '2022',
            },
            {
              title: 'Healthcare Service Global Expansion Strategy',
              client: 'Company A',
              year: '2022',
            },
            {
              title: 'Diabetes & Obesity Diet Management Platform',
              client: 'Company C',
              year: '2021',
            },
            {
              title: 'Foreign Medical Service Platform',
              client: 'Company A',
              year: '2021',
            },
            {
              title: 'Senior & Disability Care Service Platform',
              client: 'Company I',
              year: '2021',
            },
            {
              title: 'VR-based Art Exhibition Platform',
              client: 'Company O',
              year: '2020',
            },
            {
              title: 'Virtual Avatar 3D Character Broadcasting Service',
              client: 'Company V',
              year: '2020',
            },
            {
              title: 'Food Tech Platform Commercialization Consulting',
              client: 'Company M',
              year: '2020',
            },
            {
              title: 'Browser Multi-game Development Tool for Indie Developers',
              client: 'Company I',
              year: '2020',
            },
            {
              title: 'Entertainment Blockchain Investment Platform',
              client: 'Company E',
              year: '2020',
            },
            {
              title: 'Multilingual Taxi Tour Platform for Foreign Travelers',
              client: 'Company U',
              year: '2020',
            },
            {
              title:
                'AR Digital Content Development (Ball Shooting, Trampoline)',
              client: 'Company J',
              year: '2019',
            },
            {
              title: 'Distributed Energy Management & Operation Platform',
              client: 'Company E',
              year: '2019',
            },
            {
              title: 'ML-based Unmanned Foreign Coin Exchange Kiosk',
              client: 'Company C',
              year: '2019',
            },
            {
              title: 'VR Fitness Service',
              client: 'Company F',
              year: '2019',
            },
            {
              title: 'Influencer Marketing Platform for SMEs',
              client: 'Company I',
              year: '2019',
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
        name: 'Name',
        company: 'Company/Org',
        email: 'Email Address',
        message: 'Message (Project outline, budget, schedule, etc.)',
        submit: 'Send Message',
        submitting: 'Sending...',
        success:
          'Your message has been sent successfully. We will get back to you soon.',
        error: 'Failed to send message. Please try again later.',
      },
    },
    footer: {
      companyName: 'Brain House Co., Ltd.',
      address: '2F Seil Building, 19 Hakdong-ro 2-gil, Gangnam-gu, Seoul',
      rights: '© 2026 Brain House Co., Ltd. All rights reserved.',
      sections: {
        company: 'Company',
        business: 'Business',
        legal: 'Legal',
      },
      links: {
        about: 'About',
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
      privacy: {
        title: 'Privacy Policy',
        subtitle: 'Information about Privacy Protection',
      },
    },
    servicesMenu: {
      viewAll: 'View All Services',
      items: [
        {
          slug: 'mvp-development',
          title: 'Item Planning & MVP',
          shortTitle: 'MVP Dev',
          hasPage: true,
        },
        {
          slug: 'ax-consulting',
          title: 'AX Consulting',
          shortTitle: 'AX Consulting',
          hasPage: true,
        },
        {
          slug: 'ict-strategy',
          title: 'ICT Strategy & Policy Consulting',
          shortTitle: 'ICT Strategy',
          hasPage: true,
        },
        {
          slug: 'tech-commercialization',
          title: 'Tech Commercialization Consulting',
          shortTitle: 'Tech Commerc.',
          hasPage: true,
        },
        {
          slug: 'startup-investment',
          title: 'Startup & Investment Consulting',
          shortTitle: 'Startup',
          hasPage: true,
        },
        {
          slug: 'software-development',
          title: 'Software Development',
          shortTitle: 'SW Dev',
          hasPage: true,
        },
      ],
    },
    serviceDetailUI: {
      notFound: 'Service not found',
      viewAllServices: 'View All Services',
      comingSoonMessage: 'Details are being prepared. Updates coming soon.',
      targetCustomersLabel: 'Target Customers',
      targetCustomersTitle: 'Target Customers',
      processLabel: 'Process',
      processTitle: 'Service Process',
      techDomainsLabel: 'Tech Domains',
      techDomainsTitle: 'Supported Tech Domains',
      techDomainsDescription:
        'We discover innovative business items and develop MVPs across various industry sectors.',
      ctaTitle: 'Start Your Project',
      ctaDescription: 'Create innovative services with Brain House.',
      ctaButton: 'Contact for Project',
      ctaViewAll: 'View All Services →',
    },
    serviceDetails: {
      'mvp-development': {
        title: 'Business Item Planning & MVP Development',
        subtitle:
          'Tech Domain-specific Business Item Planning & MVP Development Service',
        description:
          'We discover business items across various tech domains and develop MVPs (Minimum Viable Products) for rapid market validation. Based on 28 years of ICT field experience, we design viable business models and implement innovative services utilizing AI technology.',
        targetCustomers: [
          'Freelancers',
          'Career Changers',
          'Pre-founders',
          'Early-stage Founders',
          'Startups',
          'SMEs',
          'Mid-sized Companies',
        ],
        processSteps: [
          'Idea Discovery',
          'Market Analysis',
          'BM Design',
          'MVP Development',
          'Market Validation',
        ],
        techDomains: [
          {
            id: 'ax',
            name: 'AX (AI Transformation)',
            icon: 'Brain',
            examples: [
              'AI-powered conversational shopping assistant integrated into e-commerce solutions',
              'AI-based video autobiography (life story) creation platform for seniors',
              'Storytelling management tool with AI-powered data analysis, error verification, and SaaS integration',
              'AI-powered resume management and job matching system',
              'Customer experience insight AI (CX Insight AI)',
            ],
          },
          {
            id: 'o2o',
            name: 'O2O (Online to Offline)',
            icon: 'Store',
            examples: [
              'All-in-one service for vehicle acquisition, product preparation, and sales',
              'Location-based immersive metaverse platform',
              'Digital marketing intermediary platform',
              'Unmanned contactless store-based used goods trading platform',
              'Instatoon (short webtoon) aggregation and curation platform using web crawling',
              'Location-based SNS utilizing geocaching',
              'GPS-based gift card wallet and advertising/promotion service',
            ],
          },
          {
            id: 'wellnesstech',
            name: 'Wellness Tech',
            icon: 'Heart',
            examples: [
              'Mental care mate matching wellness platform for seniors',
              'Data-driven personalized health management and health supplement subscription service',
              'Voice analysis-based digital therapeutic device for mental disorders',
              'Mobile application for adult ADHD treatment',
              'AI-based mental health management platform',
              'AI-based psychological counseling application for children and adolescents',
              'Senior-customized healthcare reward system with RFID/QR-based mobility aid activity tracking and point accumulation',
              'AI-based sleep mask, pillow, and mobile app with sleep body tracking technology (eye movement, tossing, temperature, noise, snoring, etc.)',
              'AI-based care service providing customized safety monitoring for the elderly and vulnerable populations',
            ],
          },
          {
            id: 'traveltech',
            name: 'Travel Tech',
            icon: 'Plane',
            examples: [
              'Local tour application combining AR (augmented reality) and metaverse gaming',
            ],
          },
          {
            id: 'sportstech',
            name: 'Sports Tech',
            icon: 'Trophy',
            examples: [
              'Web service-enabled climbing platform',
              'Bus pickup service for long-distance hiking',
              'Community sports comprehensive O2O + social platform',
              'Real-time sports game analysis conversational chatbot service',
              'NFC-based automatic workout routine logging, location-based fitness trainer matching, and educational health platform',
            ],
          },
          {
            id: 'foodtech',
            name: 'Food Tech',
            icon: 'Utensils',
            examples: [
              'Food recommendation service combining AI and big data technology',
              'Customized vegan meal kit using plant-based meat alternatives',
              'Personalized AI-based subscription water delivery B2C service for households under 3 people',
            ],
          },
          {
            id: 'proptech',
            name: 'Prop Tech',
            icon: 'Building',
            examples: [
              'AI·IoT combined personalized interior app service',
              'Interior intermediary platform utilizing cGAN AI',
            ],
          },
          {
            id: 'fintech',
            name: 'Fin Tech',
            icon: 'Wallet',
            examples: [
              'Asset management platform with AI-applied asset optimization using firm banking technology',
            ],
          },
          {
            id: 'insurtech',
            name: 'Insur Tech',
            icon: 'Umbrella',
            examples: [
              'Personalized insurance recommendation platform',
              'Insurance claim automation system',
              'Digital insurance enrollment service',
              'AI-based risk analysis solution',
            ],
          },
          {
            id: 'edutech',
            name: 'Edu Tech',
            icon: 'GraduationCap',
            examples: [
              'Gamification-based coding learning app for K-12 students',
              'Study service with machine learning-powered summary and past exam question generation',
              'Corporate-linked software developer training platform',
              'English speaking tutoring matching platform for seniors',
              'Non-face-to-face self-development platform with expert goal coaching',
            ],
          },
          {
            id: 'legaltech',
            name: 'Legal Tech',
            icon: 'Scale',
            examples: [
              'AI-based intelligent legal document platform and legal tech service',
            ],
          },
          {
            id: 'pettech',
            name: 'Pet Tech',
            icon: 'PawPrint',
            examples: [
              'AI-based animal diagnostic app for patellar luxation detection',
              'Comprehensive pet platform linked with animal shelters',
              'Comprehensive pet care platform utilizing smart wearable devices for pets',
            ],
          },
          {
            id: 'agtech',
            name: 'Ag Tech',
            icon: 'Leaf',
            examples: [
              'Autonomous agricultural machinery consulting and sales intermediary platform',
              'IoT-based smart fruit cultivation system',
            ],
          },
          {
            id: 'fashiontech',
            name: 'Fashion Tech',
            icon: 'Shirt',
            examples: [
              'One-stop clothing design and production platform for solo designers and small fashion brands',
              'Application providing virtual fitting service',
            ],
          },
        ],
      },
      'ax-consulting': {
        title: 'AX Consulting',
        subtitle: 'AI Transformation Strategy Consulting',
        description:
          'In the era of AX (AI Transformation) where AI becomes the core of business beyond just a tool. Brain House provides systematic support from strategy development to execution for enterprise AI transformation, based on 28 years of ICT field experience and AI expertise.',
        physicalAI: {
          sectionTitle: 'The Advent of Physical AI Era',
          description:
            'The era of Physical AI has arrived, where AI extends beyond software to the physical world. Various forms of Physical AI such as humanoids, industrial robots, and AGV/AMR are being utilized in manufacturing, logistics, and service sites.',
          types: [
            {
              name: 'Humanoids',
              description:
                'Performing tasks flexibly in various environments with human-like form',
            },
            {
              name: 'Industrial Robots',
              description:
                'High-precision automation robots specialized for manufacturing processes',
            },
            {
              name: 'AGV/AMR',
              description:
                'Autonomous navigation and material movement in logistics centers and warehouses',
            },
          ],
          coreTech: [
            {
              name: 'AI Chips',
              description:
                'AI computation-specialized processors like GPU, NPU',
            },
            {
              name: 'Edge Computing',
              description:
                'Distributed processing for real-time responsiveness',
            },
            {
              name: 'Network Infrastructure',
              description:
                'Ultra-low latency communication technologies like TSN, 5G',
            },
          ],
          expertise:
            'Brain House has multiple project references related to "AI Edge Computing".',
        },
        axDefinition: {
          sectionTitle: 'What is AX (AI Transformation)?',
          description:
            'While traditional DX (Digital Transformation) was about digitizing analog data and moving to the cloud, AX means innovating the core of business itself by infusing AI into everything above it.',
          keyPoint:
            'Beyond just "adopting AI tools", it\'s the stage where AI permeates like a neural network throughout decision-making, product design, and customer experience.',
          comparison: {
            dx: {
              title: 'DX (Digital Transformation)',
              items: [
                'Analog → Digital Conversion',
                'Cloud Migration',
                'Process Automation',
                'Data Collection & Storage',
              ],
            },
            ax: {
              title: 'AX (AI Transformation)',
              items: [
                'AI-based Decision Making',
                'AI-centric Product/Service Design',
                'Prediction & Auto-optimization',
                'AI-native Business Models',
              ],
            },
          },
        },
        corePillars: {
          sectionTitle: 'Three Core Pillars of AX Business Innovation',
          items: [
            {
              title: 'Internal Efficiency',
              icon: 'Zap',
              description:
                'Automation of repetitive back-office tasks and resource optimization',
              outcomes: [
                'Cost Reduction',
                'Productivity Maximization',
                'Work Automation',
              ],
            },
            {
              title: 'CX Enhancement',
              icon: 'Smile',
              description:
                'Hyper-personalized customer service and 24/7 real-time support',
              outcomes: [
                'Customer Loyalty',
                'Retention Improvement',
                'Satisfaction Maximization',
              ],
            },
            {
              title: 'New Revenue Generation',
              icon: 'DollarSign',
              description:
                'AI-based new product launches and AIaaS (AI as a Service) commercialization',
              outcomes: [
                'Market Expansion',
                'New Business Models',
                'Revenue Diversification',
              ],
            },
          ],
        },
        evolutionStages: {
          sectionTitle: 'AX Transformation Evolution Stages',
          description:
            'AX is not completed at once, but follows a progressive flow through the following stages.',
          stages: [
            {
              step: 1,
              title: 'Digitization',
              subtitle: 'Digital Conversion',
              description: 'Converting analog information to digital',
            },
            {
              step: 2,
              title: 'Digitalization',
              subtitle: 'DX',
              description: 'Improving business processes using digital tools',
            },
            {
              step: 3,
              title: 'AI Transformation',
              subtitle: 'AX',
              description:
                'AI learns from data, makes autonomous decisions, and proactively performs or supports tasks',
            },
          ],
        },
        consultingFramework: {
          sectionTitle: 'AX Consulting Framework',
          description:
            'Brain House supports a 3-phase process from strategic AI adoption to continuous business value creation.',
          phases: [
            {
              phase: 1,
              title: 'Diagnosis & Strategy',
              activities: [
                'AI Readiness Assessment',
                'Use Case Discovery',
                'Priority Definition',
              ],
              deliverables: ['AX Strategy Roadmap', 'ROI Analysis Report'],
            },
            {
              phase: 2,
              title: 'Design & Implementation',
              activities: [
                'Architecture Design',
                'AI Modeling',
                'Pilot Development',
              ],
              deliverables: ['Solution Architecture', 'POC Delivery'],
            },
            {
              phase: 3,
              title: 'Internalization & Scaling',
              activities: [
                'Change Management Strategy',
                'AI Literacy Training',
                'Performance Monitoring',
              ],
              deliverables: [
                'AI Governance Framework',
                'Continuous AI Adoption Culture',
              ],
            },
          ],
        },
        businessModels: {
          sectionTitle: 'AI Business Model Discovery',
          description:
            'AI business models refer to various structures that achieve direct revenue generation or business innovation using artificial intelligence technology. Brain House establishes various AI business models including Vertical AI solutions.',
          models: [
            {
              id: 'aiaas',
              title: 'AIaaS',
              subtitle: 'AI as a Service',
              icon: 'Cloud',
              description:
                'A model where companies use pre-built AI capabilities via API without developing AI models directly.',
              pricing: 'Pay per API call or data processing volume',
              examples: [
                {
                  name: 'OpenAI API',
                  desc: 'Integrate GPT models into your own services',
                },
                {
                  name: 'Google Cloud AI',
                  desc: 'Provides image analysis, translation, voice recognition via API',
                },
                {
                  name: 'AWS Bedrock',
                  desc: 'Offers various open-source and commercial models customized for enterprises',
                },
              ],
            },
            {
              id: 'ai-native-saas',
              title: 'AI-Native SaaS',
              subtitle: 'AI-based Subscription Model',
              icon: 'Sparkles',
              description:
                'AI capabilities integrated as the core of traditional SaaS software. Focuses on creating deliverables beyond just providing tools.',
              pricing: 'Monthly/Annual Subscription',
              examples: [
                {
                  name: 'Jasper / Copy.ai',
                  desc: 'Auto-generate marketing copy and content',
                },
                {
                  name: 'GitHub Copilot',
                  desc: 'Code auto-completion and suggestions for developers',
                },
                {
                  name: 'Canva Magic Studio',
                  desc: 'Generate designs and images from text prompts',
                },
              ],
            },
            {
              id: 'agentic-ai',
              title: 'Outcome-based AI Agent',
              subtitle: 'Outcome-based / Agentic AI',
              icon: 'Bot',
              description:
                'A model that charges for outcomes when AI agents complete specific tasks, not just for software rental. The most watched business model in 2026.',
              pricing:
                'Per successful booking, per customer inquiry resolution, etc.',
              examples: [
                {
                  name: 'Intercom / Zendesk AI',
                  desc: 'Charges when AI agent fully resolves customer issues instead of human agents',
                },
                {
                  name: 'AI Recruiting Agent',
                  desc: 'Fee charged when finding suitable candidates and scheduling interviews',
                },
              ],
            },
            {
              id: 'vertical-ai',
              title: 'Vertical AI',
              subtitle: 'Industry-specific Model',
              icon: 'Stethoscope',
              description:
                'A model providing customized AI services optimized for specific industries (retail, healthcare, finance, real estate, legal, manufacturing, etc.) by training on specialized data.',
              pricing: 'High-value solution provision (B2B contract focused)',
              examples: [
                {
                  name: 'Harvey',
                  desc: 'Legal document analysis and research AI specialized for lawyers',
                },
                {
                  name: 'Lunit',
                  desc: 'Medical AI analyzing imaging to diagnose cancer',
                },
                {
                  name: 'Ironclad',
                  desc: 'Contract management and automated review AI',
                },
              ],
            },
            {
              id: 'enablers',
              title: 'Enablers',
              subtitle: 'Data & Infrastructure Layer',
              icon: 'Cpu',
              description:
                'A model selling the foundations needed to build and operate AI.',
              pricing: 'Computing power rental, data labeling fees, chip sales',
              examples: [
                {
                  name: 'NVIDIA',
                  desc: 'AI training GPUs and computing infrastructure sales',
                },
                {
                  name: 'Scale AI',
                  desc: 'High-quality data labeling services for AI training',
                },
                {
                  name: 'Hugging Face',
                  desc: 'AI model sharing platform and deployment environment',
                },
                {
                  name: 'Palantir Foundry',
                  desc: 'Integrates siloed data to support business decision-making',
                },
              ],
            },
          ],
        },
      },
      'ict-strategy': {
        title: 'ICT Strategy & Policy Consulting',
        subtitle:
          'From government R&D planning to ICT policy research, establishing strategies for future competitiveness',
        description:
          'A service that designs future directions through national, industrial, and organizational strategies and policies based on ICT technology changes and trends (digital, AI, network, etc.) for governments, public institutions, and enterprises. This is the field that answers "We have many technologies, but where and how should we use them?"',
        processSteps: [
          'Environment Analysis',
          'Capability Assessment',
          'Strategy Development',
          'Implementation Support',
        ],
        targetCustomers: [
          'Central Government / Local Governments',
          'Public Institutions / Research Institutes',
          'Large Enterprises / Public Corporations (ICT, Telecom, Platform)',
          'International Organizations and Foreign Governments',
        ],
        objectives: {
          sectionTitle: 'Key Objectives',
          items: [
            'Strengthen national and industrial competitiveness',
            'Accelerate AI Transformation (AX) and Digital Transformation (DX)',
            'Foster ICT-based new growth industries',
            'Design systems and regulations responding to technological change',
          ],
        },
        consultingAreas: {
          sectionTitle: 'Key Consulting Areas',
          areas: [
            {
              title: 'ICT Strategy Development',
              icon: 'Target',
              items: [
                'National/Industry ICT mid-to-long-term roadmap',
                'Digital, AI, Data, Cloud, Network strategies',
                'ICT-based new industry/business/BM discovery',
              ],
            },
            {
              title: 'Policy & System Design',
              icon: 'FileText',
              items: [
                'ICT-related law, system, regulation improvement',
                'Data/AI/Platform governance',
                'Public ICT policy and investment direction setting',
              ],
            },
            {
              title: 'Technology & Industry Analysis',
              icon: 'BarChart',
              items: [
                'Technology trend analysis (AI, 5G/6G, Cloud, Semiconductor, etc.)',
                'Global policy and market benchmarking',
                'Industry ecosystem and value chain analysis',
              ],
            },
            {
              title: 'Execution & Implementation Support',
              icon: 'Rocket',
              items: [
                'Policy execution plan and KPI design',
                'Public project planning (RFP, preliminary feasibility, roadmap)',
                'Public-private partnership model design',
              ],
            },
          ],
        },
        outputs: {
          sectionTitle: 'Consulting Deliverables',
          items: [
            'ICT mid-to-long-term strategy report',
            'Policy roadmap and action plan',
            'System and regulation improvement proposals',
            'Industry development and investment strategy',
          ],
        },
        newBusinessFramework: {
          sectionTitle: 'ICT New Business Discovery Framework',
          description:
            'ICT strategy consulting for discovering new business goes beyond simply "adopting new technology" - it aims to innovate business models through technology or create entirely new markets.',
          steps: [
            {
              step: 1,
              title: 'Market & Technology Trend Analysis',
              description:
                'Analyze the impact of disruptive technologies like 5G, AI, Metaverse on industries',
            },
            {
              step: 2,
              title: 'Internal Capability Assessment',
              description:
                'Review the possibility of combining assets owned by the company with ICT technology',
            },
            {
              step: 3,
              title: 'Ideation & Filtering',
              description:
                'Select candidates with high profitability and feasibility from hundreds of ideas',
            },
            {
              step: 4,
              title: 'PoC Design',
              description:
                'Verify technical implementation feasibility before actual commercialization',
            },
            {
              step: 5,
              title: 'Roadmap Development',
              description:
                'Prepare mid-to-long-term investment plans and organizational restructuring',
            },
          ],
        },
        trends: {
          sectionTitle: 'ICT Strategy Consulting Trends',
          items: [
            'AI First Strategy (Work automation, decision-making advancement)',
            'Cloud Native & Platform',
            'Data-driven Enterprise',
            'Open / API / Ecosystem Strategy',
            'NetOps·DevOps·AIOps',
            'Security by Design',
          ],
        },
        industryComparison: {
          sectionTitle: 'ICT Strategy Comparison by Industry',
          industries: [
            {
              name: 'Manufacturing',
              coreValue: 'Production efficiency and quality',
              keyTech: 'IoT, Robotics, Digital Twin',
              priority: 'Process automation and cost reduction',
            },
            {
              name: 'Finance',
              coreValue: 'Trust, regulatory compliance, convenience',
              keyTech: 'AI, Cloud, Blockchain',
              priority: 'Data-driven hyper-personalized services',
            },
            {
              name: 'Retail',
              coreValue: 'Customer experience and logistics optimization',
              keyTech: 'Big Data, AR/VR, Delivery automation',
              priority: 'Channel integration and last-mile innovation',
            },
          ],
        },
      },
      'tech-commercialization': {
        title: 'Tech Commercialization Consulting',
        subtitle:
          'Professional service that brings technology to market and creates economic value',
        description:
          'A professional service that helps research institutes and companies not just develop technology, but bring it to market to create economic value. We provide answers to "We have good technology, but how do we sell it and make money?"',
        processSteps: [
          'Tech Assessment',
          'Market Analysis',
          'Valuation',
          'Partner Discovery',
          'Transfer/Contract',
        ],
        targetCustomers: [
          'Universities & Public Research Institutes',
          'Startups & SMEs',
          'Mid-sized & Large Enterprises (Open Innovation)',
        ],
        consultingProcess: {
          sectionTitle: 'Tech Commercialization Consulting Process',
          description:
            'We systematically support the entire process from technology creation to market establishment.',
          steps: [
            {
              title: 'Technology Assessment & Discovery',
              icon: 'Search',
              description:
                'Analyze the technology readiness level (TRL), originality, and IP rights.',
            },
            {
              title: 'Market Analysis & BM Development',
              icon: 'BarChart',
              description:
                'Identify market size and who needs this technology, and design revenue structures.',
            },
            {
              title: 'Technology Valuation',
              icon: 'DollarSign',
              description:
                'Calculate how much the technology is worth in monetary terms.',
            },
            {
              title: 'Marketing & Partner Discovery',
              icon: 'Users',
              description:
                'Find companies that will buy the technology or connect joint commercialization partners.',
            },
            {
              title: 'Technology Transfer & Contract Support',
              icon: 'FileText',
              description:
                'Assist with royalty negotiations and legal contract execution.',
            },
          ],
        },
        expectedBenefits: {
          sectionTitle: 'Key Expected Benefits',
          benefits: [
            {
              title: 'Reduce Trial and Error',
              icon: 'Shield',
              description:
                'Prevent risks of investing in technologies without market potential.',
            },
            {
              title: 'Easier Funding',
              icon: 'Wallet',
              description:
                'Objective technology valuation makes it easier to receive government grants or VC investment.',
            },
            {
              title: 'Maximize Revenue',
              icon: 'TrendingUp',
              description:
                'Secure various revenue routes including licensing and joint ventures.',
            },
          ],
        },
        ictSynergy: {
          sectionTitle: 'Synergy between Tech Commercialization and ICT Strategy',
          description:
            'Tech commercialization and ICT strategy development are inseparable complementary relationships in the modern business environment.',
          quote: '"Technology is the seed, ICT is the soil"',
          comparison: {
            techComm: {
              title: 'Tech Commercialization Consulting',
              goal: 'Launch R&D outputs to market and generate revenue',
              activities: 'Technology valuation, market analysis, BM development',
              role: 'Decide "What" to sell',
            },
            ictStrategy: {
              title: 'ICT Strategy Planning',
              goal: 'Build efficient IT infrastructure and systems to achieve business goals',
              activities:
                'Process Innovation (PI), System Architecture Design, Digital Transformation (DX)',
              role: 'Decide "How" to operate efficiently',
            },
          },
          keyPoints: [
            {
              title: 'Business Model (BM) Concretization',
              description:
                'When commercializing latest technologies (AI, Cloud, Big Data, etc.), ICT strategy designs the platform structure that delivers services to customers.',
            },
            {
              title: 'Data-driven Market Verification',
              description:
                'ICT strategy establishes data governance systems for collecting and analyzing customer data, increasing the success rate of commercialization.',
            },
            {
              title: 'Operational Efficiency & Cost Reduction',
              description:
                'Building ERP or CRM systems can significantly reduce operational risks in the early stages of commercialization.',
            },
          ],
        },
        dxSynergy: {
          sectionTitle: 'Synergy Effects Centered on Digital Transformation (DX)',
          effects: [
            {
              title: 'Shorten Time-to-Market',
              description:
                'Using ICT infrastructure (cloud, etc.) can dramatically reduce the period from technology development to market launch.',
            },
            {
              title: 'Secure Scalability',
              description:
                'Designing scalable ICT architecture from the early commercialization stage allows business growth without service interruption even when users surge.',
            },
            {
              title: 'Create New Value',
              description:
                'Combining ICT strategy with existing manufacturing technology enables business model innovation transitioning to SaaS or platform business.',
            },
          ],
        },
      },
      'startup-investment': {
        title: 'Startup & Investment Consulting',
        subtitle:
          'Customized mentoring, consulting and investment attraction support for each growth stage from pre-founders to scale-up mid-sized companies',
        description:
          'Startup consulting is composed of practical, case-centered content covering idea discovery to market entry and growth strategy. Recent startup mentoring and consulting emphasizes execution-oriented workshops such as pitching days and mentoring sessions rather than theory.',
        processSteps: ['Item Discovery', 'BM Setup', 'Market Entry', 'Investment Attraction'],
        targetCustomers: [
          'Pre-founders',
          'Early-stage Startups',
          'Growth-stage Startups',
          'Scale-up Mid-sized Companies',
          'IPO-ready Companies',
        ],
        mentoringModules: {
          sectionTitle: 'Core Stage-by-Stage Startup Mentoring & Consulting 4 Modules',
          modules: [
            {
              title: 'Item Discovery & Business Model (BM) Establishment',
              description:
                'The stage of laying the foundation for startup, focusing on "whose problem to solve and how."',
              icon: 'Lightbulb',
              items: [
                'Opportunity Capture: Market trend analysis and Pain Point discovery',
                'BM Design: Business Model Canvas (BMC, 9 Blocks) creation and revenue structure design',
                'Idea Validation: Hypothesis setting and customer interviews through Lean Startup methodology',
              ],
            },
            {
              title: 'Product Development & Market Entry (Go-to-Market)',
              description:
                'The process of turning ideas into concrete results and confirming initial market response.',
              icon: 'Rocket',
              items: [
                'MVP Production: Minimum Viable Product development and testing',
                'Marketing Strategy: Growth Hacking and digital marketing practice',
                'PMF Derivation: Product-Market Fit confirmation and Pivoting strategy',
              ],
            },
            {
              title: 'Startup Finance & Investment Attraction (IR)',
              description:
                'Building fundraising and financial management capabilities for business expansion.',
              icon: 'DollarSign',
              items: [
                'Fundraising: Government support program utilization, Angel investment, VC understanding',
                'IR Pitching: Pitch Deck creation and presentation skills to persuade investors',
                'Valuation: Valuation methods and Cap Table management',
              ],
            },
            {
              title: 'Organization Management & Scale-up',
              description:
                'Addressing management issues arising at the full-fledged growth stage.',
              icon: 'TrendingUp',
              items: [
                'Organization Management: Startup culture building and key talent recruitment (HR)',
                'Legal & Patents: Startup legal affairs, shareholder agreements, IP protection',
                'Exit Strategy: Understanding M&A (Mergers & Acquisitions) and IPO (Initial Public Offering)',
              ],
            },
          ],
        },
        bmConsulting: {
          sectionTitle: 'Business Model (BM) Establishment Consulting',
          description:
            'A business model (BM) is a blueprint not just for "how to make money" but for "what value to deliver to whom, and how to generate and sustain revenue in the process."',
          steps: [
            {
              step: 1,
              title: 'Problem Definition & Customer Segmentation',
              description:
                'The starting point of BM is not the product but the problem, the pain point. Analyze whose problem it is and how painful it is.',
            },
            {
              step: 2,
              title: 'Value Proposition Organization',
              description:
                'Clarify why customers should choose you. Cost reduction, performance improvement, operational simplification, risk reduction, etc.',
            },
            {
              step: 3,
              title: 'BM Structuring (Business Model Canvas)',
              description:
                'Structure into 9 blocks: Customer Segments, Value Proposition, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partners, Cost Structure.',
            },
            {
              step: 4,
              title: 'Revenue Model Design (Monetization)',
              description:
                'Design revenue structure including License/Subscription (SaaS), usage-based, maintenance/operation services, platform fees, data/additional services.',
            },
            {
              step: 5,
              title: 'Market Validation (Minimum Validation)',
              description:
                'Conduct rapid validation through PoC/pilot customer acquisition, actual payment intent confirmation, and customer interviews.',
            },
          ],
        },
        bmAdvanced: {
          sectionTitle: '3 Key Strategies for BM Enhancement',
          description:
            'Once the initial model is out, it needs to be enhanced from the following three perspectives based on market feedback.',
          strategies: [
            {
              title: 'Problem-Solution Fit',
              description:
                'Verify whether actual customers feel the problem we\'re trying to solve is serious enough "to pay for."',
              icon: 'Target',
            },
            {
              title: 'Revenue Model Diversification & Stabilization',
              description:
                'Refine revenue sources through Lock-in strategy and Upselling & Cross-selling.',
              icon: 'Layers',
            },
            {
              title: 'Unit Economics Analysis',
              description:
                'Verify numerically that LTV (Customer Lifetime Value) is greater than CAC (Customer Acquisition Cost).',
              icon: 'BarChart',
            },
          ],
          checklist: {
            title: 'Enhancement Checklist (Self-Audit)',
            items: [
              'Differentiation: Do we have a unique Moat that competitors cannot copy within 3 months?',
              'Scalability: Is the cost structure not proportionally increasing when revenue grows?',
              'Sustainability: Is it a one-time purchase or recurring purchases?',
            ],
          },
        },
        aiBMC: {
          sectionTitle: 'AI Business Model Canvas (AI-BMC) Utilization Strategy',
          description:
            'AI-BMC is a strategic tool that adapts the traditional Business Model Canvas (BMC) to the characteristics of AI technology.',
          quote:
            'How to implement which AI functions with what data and connect them to business value',
          components: [
            {
              category: 'Value Creation',
              items: ['Problem Definition', 'AI Core Functions', 'Algorithm', 'Data', 'Evaluation Metrics'],
            },
            {
              category: 'Value Proposition',
              items: ['Specify the value to deliver to users'],
            },
            {
              category: 'Value Delivery',
              items: ['Users', 'Channels', 'Learning Loop'],
            },
            {
              category: 'Value Capture',
              items: ['Innovation Cost', 'Innovation Benefit'],
            },
          ],
        },
        irStrategy: {
          sectionTitle: 'IR Strategy Establishment & Investment Attraction',
          description:
            'A successful IR (Investor Relations) strategy goes beyond simply promoting the company; it is a process of building trust with investors and getting the company\'s fair value recognized in the market.',
          elements: [
            {
              title: 'Building Investment Highlights (Equity Story)',
              description:
                'Connect the company\'s vision, technological differentiation, market size, and revenue model into one compelling narrative.',
              icon: 'FileText',
            },
            {
              title: 'Target Investor Identification',
              description:
                'List up VCs, PEs, or institutional investors appropriate for industry, growth stage (Seed, Series A~C, Pre-IPO), and investment size.',
              icon: 'Users',
            },
            {
              title: 'Communication Channel Diversification',
              description:
                'Broaden touchpoints through regular IR material updates, earnings calls, NDR, 1:1 meetings, etc.',
              icon: 'MessageSquare',
            },
            {
              title: 'Risk Management & Transparency',
              description:
                'Prepare logical and transparent response logic for company weaknesses or market concerns.',
              icon: 'Shield',
            },
          ],
          process: [
            {
              step: 1,
              title: 'Internal Audit',
              description: 'Objectively analyze the current position and KPIs of our company',
            },
            {
              step: 2,
              title: 'Messaging',
              description:
                "Design a 'growth roadmap' that investors want to hear according to market trends",
            },
            {
              step: 3,
              title: 'Execution',
              description: 'Repeat IR Deck production, pitching, feedback collection, and strategy revision',
            },
          ],
        },
        investorNetwork: {
          sectionTitle: 'VC/AC/Angel Investment Network Connection & Fundraising Advisory',
          description:
            'The fundraising system, a core driver of startup growth, starts with understanding the roles and network utilization methods by investor type.',
          investors: [
            {
              type: 'Angel Investment',
              stage: 'Very Early (Seed)',
              description:
                'Individual or small group. Invests based on idea and team, useful for early capital acquisition.',
            },
            {
              type: 'AC (Accelerator)',
              stage: 'Early (Seed ~ Pre-A)',
              description:
                'Incubating-focused. Provides short-term education programs, initial funding, mentoring, and follow-up investment connection.',
            },
            {
              type: 'VC (Venture Capital)',
              stage: 'Growth (Series A and after)',
              description:
                'Institutional investor. Validates market scalability and revenue model, and injects large-scale capital to accelerate growth.',
            },
          ],
          strategies: [
            'IR Pitching & Demo Day: Expose business model and build credibility through participation in events hosted by AC/VC',
            'LP & Related Agency Utilization: Connect with matching funds from government agencies or TIPS programs',
            "Trust-based Referral: 'Warm Intro' through introduction from existing portfolio representatives or trusted screeners",
          ],
        },
        exitStrategy: {
          sectionTitle: 'IPO Success Strategy & M&A Strategy Advisory',
          description:
            'IPO (Initial Public Offering) and M&A (Mergers & Acquisitions) are the most important turning points in a company\'s growth stage.',
          ipo: {
            title: 'IPO Success Strategy',
            items: [
              {
                title: 'Growth Storytelling (Equity Story)',
                description:
                  'Build an attractive investment scenario based on clear business model, market share expansion plan, and differentiated technology',
              },
              {
                title: 'Transparent Governance & Internal Control',
                description:
                  'Ensure accounting transparency before listing and prepare qualitative requirements meeting exchange listing standards',
              },
              {
                title: 'Fair Valuation',
                description:
                  'Quantify competitiveness compared to similar companies for reasonable IPO price determination',
              },
              {
                title: 'IR (Investor Relations) Strengthening',
                description:
                  'Build trust through continuous communication with institutional investors and prepare for post-listing stock price management',
              },
            ],
          },
          mna: {
            title: 'M&A Strategy Advisory',
            items: [
              {
                title: 'Strategic Fit Review',
                description:
                  'Prioritize analysis of whether synergy with existing business occurs or contributes to portfolio diversification',
              },
              {
                title: 'Thorough Due Diligence',
                description:
                  'Identify risks across finance, legal, sales, IT and pre-check hidden contingent liabilities or organizational culture heterogeneity',
              },
              {
                title: 'PMI (Post-Merger Integration) Planning',
                description:
                  'Establish concrete execution plans for how to integrate HR systems, IT infrastructure, and organizational culture',
              },
              {
                title: 'Deal Structure Design',
                description:
                  'Design optimal transaction structure suitable for company situation including cash acquisition, stock exchange, LBO',
              },
            ],
          },
        },
      },
      'software-development': {
        title: 'Software Development',
        subtitle: 'Full-stack Development with Node.js and Cloud Infrastructure',
        description:
          'Brain House provides full-stack web development services centered on the Node.js ecosystem. We transform validated ideas from planning consultations into real services, partnering as a technology development partner from MVP development for early-stage founders to enterprise web service enhancement.',
        targetCustomers: [
          'Early-stage founders who want to turn ideas into services',
          'Enterprises needing legacy system modernization',
          'Companies planning new web service development',
          'Consulting clients wanting to implement results in technology',
          'Startups needing rapid market validation',
        ],
        processSteps: [
          'Requirements Analysis',
          'Design & Prototype',
          'Development & Testing',
          'Deployment & Launch',
          'Operations & Maintenance',
        ],
        techStack: {
          sectionTitle: 'Technology Stack',
          categories: [
            {
              name: 'Backend',
              icon: 'Server',
              items: ['Node.js', 'NestJS', 'Express.js', 'TypeScript'],
            },
            {
              name: 'Frontend',
              icon: 'Monitor',
              items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
            },
            {
              name: 'Cloud & Infra',
              icon: 'Cloud',
              items: ['AWS (EC2, S3, RDS, Lambda)', 'Docker', 'GitHub Actions'],
            },
            {
              name: 'Database',
              icon: 'Database',
              items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'],
            },
            {
              name: 'AI Integration',
              icon: 'Brain',
              items: ['OpenAI API', 'Claude API', 'Gemini API', 'LangChain'],
            },
          ],
        },
        serviceTypes: {
          sectionTitle: 'Service Types',
          types: [
            {
              title: 'MVP Development',
              icon: 'Rocket',
              target: 'Early-stage Founders / Startups',
              description:
                'Based on Lean Startup methodology, we develop MVPs focused on core features within 4-8 weeks and support rapid market validation.',
              features: [
                'Fast development focused on core features',
                'Responsive web applications',
                'Basic infrastructure setup (AWS-based)',
                '1 month free maintenance after launch',
              ],
            },
            {
              title: 'Enterprise Web Services',
              icon: 'Building',
              target: 'SMEs / Mid-sized Companies',
              description:
                'We develop scalable web services tailored to business requirements including B2B/B2C platforms, internal systems, and customer portals.',
              features: [
                'Microservices architecture design',
                'Legacy system modernization',
                'Enterprise system integration (ERP, CRM, etc.)',
                'SLA-based maintenance contracts',
              ],
            },
            {
              title: 'Consulting-linked Development',
              icon: 'Briefcase',
              target: 'Consulting Clients',
              description:
                'We implement the results of Brain House technology commercialization and AX consulting into actual services. One-stop from planning to development.',
              features: [
                'Technical implementation of consulting results',
                'PoC/Pilot development',
                'AI service prototypes',
                'Follow-up investment attraction support',
              ],
            },
          ],
        },
        developmentProcess: {
          sectionTitle: 'Development Process',
          steps: [
            {
              step: 1,
              title: 'Requirements Analysis',
              duration: '1-2 weeks',
              icon: 'Search',
              description:
                'We analyze business requirements and review technical feasibility. Project scope and schedule are finalized.',
              deliverables: ['Requirements document', 'Technical review report', 'Project plan'],
            },
            {
              step: 2,
              title: 'Design & Prototype',
              duration: '1-2 weeks',
              icon: 'Layers',
              description:
                'We design system architecture and create UI/UX prototypes. Database schema and API specifications are defined.',
              deliverables: ['System design document', 'UI/UX prototype', 'API specification'],
            },
            {
              step: 3,
              title: 'Development & Testing',
              duration: '4-8 weeks',
              icon: 'Code',
              description:
                'We conduct 2-week sprints using Agile methodology. Quality is ensured through continuous integration and testing.',
              deliverables: ['Source code', 'Test result report', 'Technical documentation'],
            },
            {
              step: 4,
              title: 'Deployment & Launch',
              duration: '1 week',
              icon: 'Rocket',
              description:
                'We deploy services to cloud infrastructure and support launch. Monitoring systems are established.',
              deliverables: ['Deployed service', 'Operations guide', 'Monitoring dashboard'],
            },
            {
              step: 5,
              title: 'Operations & Maintenance',
              duration: 'Ongoing',
              icon: 'Settings',
              description:
                'We support stable operations after launch. Bug fixes, feature improvements, and performance optimization are conducted.',
              deliverables: ['Monthly operations report', 'Feature improvements', 'Performance analysis report'],
            },
          ],
        },
        whyBrainHouse: {
          sectionTitle: 'Why Brain House?',
          points: [
            {
              title: '28 Years ICT Experience',
              icon: 'Trophy',
              description:
                'Based on 28 years of ICT field experience and know-how, we provide solutions that create business value beyond simple development.',
            },
            {
              title: 'Consulting Integration',
              icon: 'Network',
              description:
                'We provide one-stop services from planning to development, linked with technology commercialization and AX consulting.',
            },
            {
              title: 'Modern Tech Stack',
              icon: 'Zap',
              description:
                'We build scalable and maintainable systems using proven modern tech stacks including Node.js, Next.js, and AWS.',
            },
            {
              title: 'Full-cycle Support',
              icon: 'Repeat',
              description:
                'We take responsibility for the entire project lifecycle from requirements analysis to design, development, deployment, and operations.',
            },
          ],
        },
      },
    },
    privacy: {
      pageHeader: {
        title: 'Privacy Policy',
        subtitle: 'Information on Privacy Protection',
      },
      lastUpdated: 'Last Updated: January 29, 2026',
      intro:
        'Brain House Co., Ltd. (hereinafter "the Company") values the privacy of users and complies with relevant laws and regulations including the Personal Information Protection Act. Through this Privacy Policy, we inform you of how your personal information is processed.',
      sections: {
        purpose: {
          title: '1. Purpose of Processing Personal Information',
          content:
            'The Company processes personal information for the following purposes. The processed personal information will not be used for purposes other than the following, and if the purpose of use changes, necessary measures such as obtaining separate consent will be implemented.',
          items: [
            'Inquiry Response: Providing answers and consultation services for user inquiries',
            'Service Improvement: Feedback analysis for service quality enhancement',
          ],
        },
        items: {
          title: '2. Personal Information Items Collected',
          content:
            'The Company collects the following personal information when using the inquiry service:',
          items: [
            'Required: Name, Email Address',
            'Optional: Company Name, Contact Number, Inquiry Content',
          ],
        },
        retention: {
          title: '3. Retention and Use Period of Personal Information',
          content:
            'In principle, the Company destroys personal information without delay after the purpose of collection and use is achieved. However, if preservation is required by relevant laws and regulations, it will be retained for the period specified by law.',
          items: [
            'Inquiry Records: 3 years (Commercial Act, E-Commerce Act, etc.)',
          ],
        },
        rights: {
          title: '4. User Rights and How to Exercise Them',
          content:
            'Users can request access, correction, deletion, or suspension of processing of their personal information at any time. Rights can be exercised by contacting the person in charge below in writing or by email, and will be processed without delay.',
        },
        security: {
          title: '5. Measures to Ensure Security of Personal Information',
          content:
            'The Company takes the following measures to ensure the security of personal information:',
          items: [
            'Encryption of personal information',
            'Technical measures against hacking',
            'Minimization and training of employees handling personal information',
          ],
        },
        officer: {
          title: '6. Privacy Officer',
          content:
            'The Company designates a Privacy Officer as follows to protect user privacy and handle related inquiries:',
          name: 'Name: Hyuncheol Kim',
          position: 'Position: CEO',
          email: 'Email: comfamil@gmail.com',
        },
        changes: {
          title: '7. Changes to Privacy Policy',
          content:
            'This Privacy Policy may change according to laws and policies, and any changes will be announced through the website.',
        },
      },
    },
  },
  ja: {
    serviceHighlight: {
      title: 'コアサービス',
      description:
        'Tech Domain別に事業アイテムを企画し、MVPを開発して市場検証まで支援します。28年のICT現場経験を基に実現可能なビジネスモデルを設計します。',
      viewMore: '詳しく見る',
      axPillars: {
        efficiency: '内部効率化',
        cx: 'CX高度化',
        revenue: '新規収益',
      },
    },
    portfolioHighlight: {
      title: '主要プロジェクト',
      description: '様々な産業分野で成功的に遂行したプロジェクト',
      viewAll: '全プロジェクトを見る',
    },
    ctaSection: {
      title: 'プロジェクトを始める準備はできましたか？',
      description: '専門コンサルタントがビジネス成長をサポートします',
      button: 'お問い合わせ',
    },
    header: {
      about: '会社紹介',
      business: '事業領域',
      services: 'サービス',
      portfolio: 'ポートフォリオ',
      contact: 'お問い合わせ',
      getStarted: 'ご相談',
    },
    hero: {
      tag: 'AI Transformation Partner',
      title: '知識と経験を共有する',
      subtitle: 'つながるソーシャルブレイン',
      description:
        'ブレインハウスは、DXを超えてAX（AIトランスフォーメーション）時代をリードするICT専門パートナーです。28年の豊富な現場経験とAI専門性を基に、エージェンティックAIと生成AIを活用した企業革新戦略を提案します。',
      contactBtn: 'プロジェクト相談',
      businessBtn: 'サービスを見る',
    },
    about: {
      title: 'About Brain House',
      subtitle: 'デジタル大転換時代のナビゲーター',
      description:
        'ブレインハウス（Brain House）は2020年5月、ICT分野の専門家が集まって設立したデジタル革新コンサルティング企業です。単なる技術導入を超えて、技術が創出できるビジネス価値に注目します。複雑な技術トレンドの中で企業が進むべき明確な方向を提示し、実質的な成長を支援するパートナーを目指します。',
      vision: {
        title: 'ビジョン (Vision)',
        desc: 'DXを超えてAX（AIトランスフォーメーション）時代をリードする成長パートナー',
        details: [
          'AIエージェント基盤の業務革新およびワークフロー再設計',
          'エージェンティックAI・生成AI導入による企業競争力強化',
          'AI-Ready組織文化構築および人材育成支援',
        ],
      },
      expertise: {
        title: 'コアコンピタンス (Core Competency)',
        desc: 'ICT、AI、メタバース分野28年以上の現場経験とノウハウ',
        details: [
          '国家R&D企画/評価および政策研究の豊富な経験',
          '多様な産業群（製造、サービス、公共）DXコンサルティング実績',
          'スタートアップから中堅企業まで段階別カスタム成長支援',
        ],
      },
      clients: {
        title: '主要クライアント (Clients)',
        desc: '政府公共機関および革新企業と共に歩んでいます。',
        list: [
          'KISTI',
          'KOICA',
          '大邱慶北研究院',
          'ETRI',
          'KISTEP',
          'KIAT',
          'KEIT',
          '創業振興院',
          '技術保証基金',
          'KOTRA',
          '韓国研究財団',
        ],
      },
    },
    business: {
      title: 'Business Areas',
      description:
        '企業の成長段階（予備創業〜中堅企業）とニーズに合わせた4つの核心ソリューションを提供します。',
      services: [
        {
          title: '技術戦略 (Tech Strategy)',
          description:
            '企業が保有する技術の価値を最大化し、未来の技術トレンドに先制的に対応するためのロードマップを策定します。',
          details: [
            '技術価値評価および技術事業化戦略策定',
            'プラットフォームサービス企画およびビジネスモデル（BM）設計',
            'ICT基盤新規サービス/商品企画コンサルティング',
            '政府R&D支援事業企画および提案書作成支援',
            '中長期技術開発ロードマップ（TRM）構築',
          ],
        },
        {
          title: '経営戦略 (Management)',
          description:
            '持続可能な成長のために企業の内部能力を診断し、市場環境に合った最適なビジネスモデルを設計します。',
          details: [
            'ICT政策調査/研究および市場分析',
            'ICT融合サービス実証および商用化支援',
            '企業能力診断および経営革新戦略策定',
            '起業家精神教育および社内ベンチャー育成',
            'スタートアップビジネスモデル（BM）高度化およびメンタリング',
          ],
        },
        {
          title: '投資戦略 (Investment)',
          description:
            '成長に必要な資金を適時に確保できるよう、投資誘致戦略策定からIR資料作成、実践ピッチングまで密着支援します。',
          details: [
            'スタートアップ投資誘致戦略および企業価値評価（Valuation）',
            '投資提案書（IR Deck）企画およびデザインコンサルティング',
            'VC/ACネットワーク連携および資金調達諮問',
            'IPOおよびM&A（合併・買収）戦略諮問',
          ],
        },
        {
          title: 'ソフトウェア開発 (Software Dev)',
          description:
            '一般的なホームページから技術集約型サービスまで、企画-設計-開発-運営の全過程を支援するカスタムソフトウェア開発サービスを提供します。',
          details: [
            '企業ホームページおよびブランドサイト企画・開発',
            'ウェブ/モバイルアプリケーション設計および開発',
            'AI・LLM基盤サービス企画およびMVP開発',
            'クラウド基盤システム構築および運営支援',
            '既存システム高度化および保守',
          ],
        },
      ],
    },
    ourServices: {
      title: 'Our Services',
      subtitle: 'Guru型専門コンサルティング',
      description:
        '各分野の専門家が直接遂行するGuru型コンサルティングで差別化されたサービスを提供します。',
      items: [
        {
          title: 'ICT戦略・政策コンサルティング',
          description:
            '政府R&D企画からICT政策研究まで、公共機関と企業の未来競争力確保のための戦略を策定します。',
          steps: ['環境分析', '能力診断', '戦略策定', '実行支援'],
        },
        {
          title: '技術事業化コンサルティング',
          description:
            '保有技術の市場価値を最大化し、事業化成功のための体系的なロードマップを提示します。',
          details: [
            '技術価値評価および事業化戦略策定',
            '政府R&D支援事業企画および提案書作成',
            '技術ロードマップ（TRM）およびIPR戦略設計',
            'ICT融合サービス実証および商用化支援',
          ],
        },
        {
          title: '創業・投資コンサルティング',
          description:
            '予備創業者からスケールアップ企業まで、成長段階別カスタムメンタリングと投資誘致を支援します。',
          details: [
            'ビジネスモデル（BM）策定および高度化メンタリング',
            '投資誘致戦略（IR）および企業価値評価（Valuation）',
            'VC/AC/エンジェルネットワーク連携および資金調達諮問',
            'IPOおよびM&A戦略諮問',
          ],
        },
        {
          title: 'ソフトウェア開発',
          description:
            '企業ホームページからAI基盤サービスまで、企画-設計-開発-運営の全過程をワンストップで支援します。',
          details: [
            '企業ホームページおよびブランドサイト企画・開発',
            'ウェブ/モバイルアプリケーション設計および開発',
            'AI・LLM基盤サービス企画およびMVP開発',
            'クラウドシステム構築および保守',
          ],
        },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      description:
        'ブレインハウスは公共機関・企業のICT戦略策定からスタートアップのサービス開発まで多様なプロジェクトを遂行しています。',
      categories: [
        {
          id: 'ict-strategy',
          title: 'ICT戦略・政策コンサルティング',
          description: '政府R&D企画、技術事業化戦略、政策研究など',
          items: [
            {
              title: '有無線通信ソフトウェアハウス体系開発',
              client: 'IITP',
              year: '2025',
            },
            {
              title:
                '人工知能基盤モバイルエッジクラウドサービスプラットフォーム事業化戦略コンサルティング',
              client: 'ICT企業',
              year: '2024',
            },
            {
              title:
                'クラウドネットワーキングサービスプラットフォームの技術事業化戦略策定',
              client: 'ICT企業',
              year: '2024',
            },
            {
              title: 'デジタルウェルネスエコシステム構築技術開発支援体系企画',
              client: '韓国研究財団',
              year: '2023',
            },
            {
              title:
                '超連結リビングラボ運営およびプラットフォーム自立化戦略策定',
              client: '韓国ネットワーク産業協会',
              year: '2023',
            },
            {
              title: 'スマートシティ海外進出戦略調査役務',
              client: 'KOTRA',
              year: '2023',
            },
            {
              title:
                'デジタルヘルスケア・デジタル治療剤ICT融合技術および産業動向分析',
              client: '産業融合院',
              year: '2023',
            },
            {
              title: '慶北・Appleスマート製造革新戦略策定',
              client: '大邱慶北研究院',
              year: '2022',
            },
            {
              title:
                '超連結ネットワーキングインフラ基盤サービス・BMおよびPoC活用成果創出戦略',
              client: 'KANI',
              year: '2022',
            },
            {
              title: 'IT分野Communityバージョン国内・外サービスリサーチ',
              client: '韓国科学技術情報研究院',
              year: '2022',
            },
            {
              title:
                '超連結ネットワーキングサービスのリビングラボ構築および運営方案調査・分析研究',
              client: 'KANI',
              year: '2021',
            },
            {
              title:
                'ICT技術事業化戦略コンサルティング（VR、AI、メタバースビジネスモデル発掘）',
              client: 'ICT企業',
              year: '2021',
            },
            {
              title: '技術水準評価（超連結モノのインターネット技術）',
              client: 'KISTEP',
              year: '2020',
            },
            {
              title:
                '人工知能基盤ネットワークプラットフォーム技術事業化戦略コンサルティング',
              client: 'ICT企業',
              year: '2020',
            },
            {
              title:
                'ICT技術事業化戦略コンサルティング（ICT基盤企業成長ロードマップ策定）',
              client: 'ICT企業',
              year: '2020',
            },
          ],
        },
        {
          id: 'bm-software',
          title: 'ビジネスモデル企画およびソフトウェア開発',
          description: 'プラットフォームサービス企画、BM策定、MVP開発など',
          items: [
            {
              title: 'AI基盤カスタム文解力学習プラットフォーム',
              client: 'N社',
              year: '2023',
            },
            {
              title: 'デジタル治療剤（DTx）技術開発ロードマップ策定',
              client: 'M社',
              year: '2023',
            },
            {
              title: 'メタバース新規事業発掘および事業化戦略',
              client: 'J社',
              year: '2022',
            },
            {
              title: 'AIリアルタイムオンラインスタディサービス事業化',
              client: 'M社',
              year: '2022',
            },
            {
              title: 'ヘルスケアサービスグローバル進出戦略策定',
              client: 'A社',
              year: '2022',
            },
            {
              title: '糖尿・肥満食事管理プラットフォーム',
              client: 'C社',
              year: '2021',
            },
            {
              title: '外国人医療サービスプラットフォーム',
              client: 'A社',
              year: '2021',
            },
            {
              title: '高齢者・障害者ケアサービスプラットフォーム',
              client: 'I社',
              year: '2021',
            },
            {
              title: 'VR基盤芸術作品展示プラットフォーム',
              client: 'O社',
              year: '2020',
            },
            {
              title: 'Virtual Avatar 3Dキャラクター放送サービス',
              client: 'V社',
              year: '2020',
            },
            {
              title: 'フードTechプラットフォーム事業化コンサルティング',
              client: 'M社',
              year: '2020',
            },
            {
              title: 'インディー開発者用ブラウザマルチゲーム制作ツール',
              client: 'I社',
              year: '2020',
            },
            {
              title:
                'ファンとアーティストを直接つなぐエンターテインメントブロックチェーン投資プラットフォーム',
              client: 'E社',
              year: '2020',
            },
            {
              title: '外国人旅行者多言語支援タクシーツアープラットフォーム',
              client: 'U社',
              year: '2020',
            },
            {
              title:
                'ARデジタルコンテンツ開発（ボールシューティング、トランポリン）',
              client: 'J社',
              year: '2019',
            },
            {
              title: '分散エネルギー管理および運営プラットフォーム開発',
              client: 'E社',
              year: '2019',
            },
            {
              title: '機械学習基盤無人外国コインポイント変換キオスク',
              client: 'C社',
              year: '2019',
            },
            {
              title: 'VR（仮想現実）フィットネスサービス',
              client: 'F社',
              year: '2019',
            },
            {
              title:
                '中小企業のためのインフルエンサーマーケティングプラットフォーム',
              client: 'I社',
              year: '2019',
            },
          ],
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      description:
        '成功するビジネスへの第一歩、ブレインハウスが共にします。プロジェクトのご相談やパートナーシップのご提案など、お気軽にお問い合わせください。',
      form: {
        name: 'お名前',
        company: '会社/機関名',
        email: 'メールアドレス',
        message: 'お問い合わせ内容（プロジェクト概要、予算、スケジュールなど）',
        submit: 'お問い合わせ',
        submitting: '送信中...',
        success:
          'お問い合わせが正常に送信されました。近日中にご連絡いたします。',
        error: 'メッセージの送信に失敗しました。後でもう一度お試しください。',
      },
    },
    footer: {
      companyName: '株式会社ブレインハウス',
      address: 'ソウル市江南区学洞路2ギル19、セイルビル2階（論峴洞）',
      rights: '© 2026 Brain House Co., Ltd. All rights reserved.',
      sections: {
        company: '会社紹介',
        business: '事業領域',
        legal: '法的告知',
      },
      links: {
        about: '紹介',
        tech: '技術戦略',
        mgmt: '経営戦略',
        invest: '投資戦略',
        privacy: '個人情報保護方針',
        terms: '利用規約',
      },
    },
    pageHeader: {
      about: {
        title: '会社紹介',
        subtitle: 'デジタル大転換時代のナビゲーター',
      },
      business: {
        title: '事業領域',
        subtitle: '成長段階に合わせた4つの核心ソリューション',
      },
      services: {
        title: 'サービス',
        subtitle: 'ICT専門サービス',
      },
      portfolio: {
        title: 'ポートフォリオ',
        subtitle: '多様な産業分野の成功リファレンス',
      },
      contact: {
        title: 'お問い合わせ',
        subtitle: '成功するビジネスへの第一歩',
      },
      privacy: {
        title: '個人情報処理方針',
        subtitle: '個人情報保護に関するご案内',
      },
    },
    servicesMenu: {
      viewAll: '全サービスを見る',
      items: [
        {
          slug: 'mvp-development',
          title: 'アイテム企画 & MVP',
          shortTitle: 'MVP開発',
          hasPage: true,
        },
        {
          slug: 'ax-consulting',
          title: 'AXコンサルティング',
          shortTitle: 'AXコンサル',
          hasPage: true,
        },
        {
          slug: 'ict-strategy',
          title: 'ICT戦略・政策コンサルティング',
          shortTitle: 'ICT戦略',
          hasPage: true,
        },
        {
          slug: 'tech-commercialization',
          title: '技術事業化コンサルティング',
          shortTitle: '技術事業化',
          hasPage: true,
        },
        {
          slug: 'startup-investment',
          title: '創業・投資コンサルティング',
          shortTitle: '創業・投資',
          hasPage: true,
        },
        {
          slug: 'software-development',
          title: 'ソフトウェア開発',
          shortTitle: 'SW開発',
          hasPage: true,
        },
      ],
    },
    serviceDetailUI: {
      notFound: 'サービスが見つかりません',
      viewAllServices: '全サービスを見る',
      comingSoonMessage: '詳細内容は準備中です。近日中にアップデート予定です。',
      targetCustomersLabel: 'Target Customers',
      targetCustomersTitle: '対象顧客',
      processLabel: 'Process',
      processTitle: 'サービス進行プロセス',
      techDomainsLabel: 'Tech Domains',
      techDomainsTitle: '対応可能なTech Domain',
      techDomainsDescription:
        '多様な産業分野で革新的な事業アイテムを発掘し、MVPを開発します。',
      ctaTitle: 'プロジェクトを始めましょう',
      ctaDescription: 'ブレインハウスと共に革新的なサービスを作りましょう。',
      ctaButton: 'プロジェクト問い合わせ',
      ctaViewAll: '全サービスを見る →',
    },
    serviceDetails: {
      'mvp-development': {
        title: '事業アイテム企画（発掘）およびMVP開発',
        subtitle: 'Tech Domain別事業アイテム企画およびMVP開発サービス',
        description:
          '様々なテックドメインで事業アイテムを発掘し、迅速な市場検証のためのMVP（Minimum Viable Product）を開発します。28年のICT現場経験を基に実現可能なビジネスモデルを設計し、AI技術を活用した革新的なサービスを実装します。',
        targetCustomers: [
          'フリーランサー',
          '退職準備者',
          '予備創業者',
          '初期創業者',
          'スタートアップ',
          '中小企業',
          '中堅企業',
        ],
        processSteps: [
          'アイデア発掘',
          '市場分析',
          'BM設計',
          'MVP開発',
          '市場検証',
        ],
        techDomains: [
          {
            id: 'ax',
            name: 'AX (AIトランスフォーメーション)',
            icon: 'Brain',
            examples: [
              'AI基盤対話型ショッピングアシスタント搭載のECソリューションサービス',
              'シニア向けAI基盤映像自叙伝（ライフストーリー）制作プラットフォーム',
              'AI基盤データ分析とエラー検証、SaaSシステムが統合されたストーリーテリング管理ツール',
              'AI活用した履歴書管理およびマッチングシステム',
              'AI技術が適用された顧客体験インサイト人工知能（CX Insight AI）',
            ],
          },
          {
            id: 'o2o',
            name: 'O2O (オンラインtoオフライン)',
            icon: 'Store',
            examples: [
              '車両の買取から商品化および販売まで一括提供するオールインワンサービス',
              '位置基盤没入型メタバースプラットフォーム',
              'デジタルマーケティング仲介プラットフォーム',
              '非対面無人店舗基盤の中古取引プラットフォーム',
              'クローリングを利用したインスタトゥーン（ショートウェブトゥーン）アグリゲーションおよびキュレーションプラットフォームサービス',
              'ジオキャッシング（geocaching）を活用した位置基盤SNS',
              'GPS基盤ギフトカードウォレットおよびギフトカード活用広告・プロモーションサービス',
            ],
          },
          {
            id: 'wellnesstech',
            name: 'ウェルネステック',
            icon: 'Heart',
            examples: [
              'シニア向けメンタルケアメイトマッチングウェルネスプラットフォーム',
              'データ基盤個人カスタム健康管理および健康機能食品サブスクリプションサービス',
              '音声分析基盤精神疾患デジタル治療機器',
              '成人ADHDの治療のためのモバイルアプリケーション',
              'AI基盤心理健康管理プラットフォーム',
              'AI基盤児童・青少年心理カウンセリングアプリケーション',
              'RFID/QR基盤のシルバーカー連動身体活動測定およびポイント積立のシニアカスタムヘルスケアリワードシステム',
              '睡眠中の身体情報（眼球/寝返り/体温/騒音/いびきなど）追跡技術が適用されたAI基盤睡眠アイマスク、枕およびモバイルアプリケーション',
              '高齢者および脆弱階層向けカスタム安全モニタリングとケアを提供するAI基盤ケアサービス',
            ],
          },
          {
            id: 'traveltech',
            name: 'トラベルテック',
            icon: 'Plane',
            examples: [
              'AR（拡張現実）とメタバースゲームを融合したローカルツアーアプリケーション',
            ],
          },
          {
            id: 'sportstech',
            name: 'スポーツテック',
            icon: 'Trophy',
            examples: [
              'Webサービス技術が適用されたクライミングプラットフォームサービス',
              '長距離登山を容易にするバスピックアップサービス',
              '生活体育総合プラットフォームO2O + ソーシャルサービス',
              'リアルタイムスポーツ試合分析対話型チャットボットサービス',
              'NFC基盤自動運動ルーティン記録、位置基盤フィットネストレーナーマッチングおよび教育用ヘルスプラットフォームサービス',
            ],
          },
          {
            id: 'foodtech',
            name: 'フードテック',
            icon: 'Utensils',
            examples: [
              'AI技術とビッグデータ技術を融合した食事推薦サービス',
              '代替肉を使用した顧客カスタムビーガンミールキット',
              '個人化AI基盤3人未満世帯対象サブスクリプション型ミネラルウォーター配送B2Cサービス',
            ],
          },
          {
            id: 'proptech',
            name: 'プロップテック',
            icon: 'Building',
            examples: [
              'AI・IoT結合した個人カスタムインテリアアプリサービス',
              'cGAN AIを活用したインテリア仲介プラットフォーム',
            ],
          },
          {
            id: 'fintech',
            name: 'フィンテック',
            icon: 'Wallet',
            examples: [
              'ファームバンキング技術にAIが適用された資産最適化機能の資産管理プラットフォーム',
            ],
          },
          {
            id: 'insurtech',
            name: 'インシュアテック',
            icon: 'Umbrella',
            examples: [
              'カスタム保険推薦プラットフォーム',
              '保険請求自動化システム',
              'デジタル保険加入サービス',
              'AI基盤リスク分析ソリューション',
            ],
          },
          {
            id: 'edutech',
            name: 'エドテック',
            icon: 'GraduationCap',
            examples: [
              '小中高対象ゲーミフィケーション基盤のコーディング学習アプリサービス',
              '機械学習技術が適用された要約本および過去問題生成機能のスタディサービス',
              '企業確定連携型SW（ソフトウェア）開発者教育プラットフォーム',
              'シニア向け英語スピーキング家庭教師マッチングプラットフォーム',
              '専門家が目標達成を支援する非対面自己啓発プラットフォーム',
            ],
          },
          {
            id: 'legaltech',
            name: 'リーガルテック',
            icon: 'Scale',
            examples: [
              'AI基盤知能型法律文書プラットフォームおよびリーガルテックサービス',
            ],
          },
          {
            id: 'pettech',
            name: 'ペットテック',
            icon: 'PawPrint',
            examples: [
              'AI基盤膝蓋骨脱臼を診断する動物診断アプリ',
              '保護動物シェルターと連携した総合ペットプラットフォーム',
              'ペット用スマートウェアラブルデバイスを活用した総合ペットケアプラットフォーム',
            ],
          },
          {
            id: 'agtech',
            name: 'アグテック',
            icon: 'Leaf',
            examples: [
              '自律農業機械使用コンサルティングおよび販売仲介プラットフォーム',
              'IoT基盤スマートフルーツ栽培システム',
            ],
          },
          {
            id: 'fashiontech',
            name: 'ファッションテック',
            icon: 'Shirt',
            examples: [
              '1人デザイナーおよび小規模ファッションブランド向けワンストップ衣類デザイン・生産プラットフォーム',
              'バーチャルフィッティングサービスを提供するアプリケーション',
            ],
          },
        ],
      },
      'ax-consulting': {
        title: 'AXコンサルティング',
        subtitle: 'AI Transformation戦略コンサルティング',
        description:
          'AIが単なるツールを超えてビジネスの核心となるAX（AI Transformation）時代。ブレインハウスは28年のICT現場経験とAI専門性を基に、企業のAI転換のための戦略策定から実行まで体系的に支援します。',
        physicalAI: {
          sectionTitle: 'Physical AI時代の到来',
          description:
            'AIがソフトウェア領域を超えて物理世界に拡張されるいわゆるフィジカルAI（Physical AI）時代が到来しました。ヒューマノイド、産業用ロボット、AGV/AMRなど様々な形態のPhysical AIが製造、物流、サービス現場で活用されています。',
          types: [
            {
              name: 'ヒューマノイド',
              description: '人間と類似した形態で様々な環境で柔軟に作業遂行',
            },
            {
              name: '産業用ロボット',
              description: '製造工程に特化した高精度自動化ロボット',
            },
            {
              name: 'AGV/AMR',
              description: '物流センター、倉庫で自律走行しながら物品移動',
            },
          ],
          coreTech: [
            {
              name: 'AIチップ',
              description: 'GPU、NPUなどAI演算特化プロセッサ',
            },
            {
              name: 'エッジコンピューティング',
              description: 'リアルタイム応答性確保のための分散処理',
            },
            {
              name: 'ネットワークインフラ',
              description: 'TSN、5Gなど超低遅延通信技術',
            },
          ],
          expertise:
            'Brain Houseは多数の「AIエッジコンピューティング」関連プロジェクトリファレンスを保有しています。',
        },
        axDefinition: {
          sectionTitle: 'AX（AI Transformation）とは？',
          description:
            '従来のDX（Digital Transformation）が単にアナログデータをデジタル化してクラウドに移行する水準だったとすれば、AXはその上にあるすべてに人工知能（AI）が溶け込みビジネスの核心自体を革新することを意味します。',
          keyPoint:
            '単に「AIツールを導入した」の水準を超え、意思決定、製品設計、顧客体験全般にAIが神経網のように浸透した段階です。',
          comparison: {
            dx: {
              title: 'DX (Digital Transformation)',
              items: [
                'アナログ → デジタル転換',
                'クラウドマイグレーション',
                'プロセス自動化',
                'データ収集および保存',
              ],
            },
            ax: {
              title: 'AX (AI Transformation)',
              items: [
                'AI基盤意思決定',
                'AI中心製品/サービス設計',
                '予測および自動最適化',
                'AIネイティブビジネスモデル',
              ],
            },
          },
        },
        corePillars: {
          sectionTitle: 'AXビジネス革新3大軸',
          items: [
            {
              title: '内部効率化',
              icon: 'Zap',
              description:
                '反復的なバックオフィス（Back-office）自動化およびリソース最適化',
              outcomes: ['コスト削減', '生産性極大化', '業務自動化'],
            },
            {
              title: '顧客体験（CX）高度化',
              icon: 'Smile',
              description:
                '超個人化された顧客対応および24/7リアルタイムサービス',
              outcomes: [
                '顧客ロイヤルティ向上',
                'リテンション改善',
                '満足度極大化',
              ],
            },
            {
              title: '新規収益創出',
              icon: 'DollarSign',
              description:
                'AI基盤の新製品発売およびAIaaS（AI as a Service）事業化',
              outcomes: ['市場拡大', '新規ビジネスモデル', '売上多角化'],
            },
          ],
        },
        evolutionStages: {
          sectionTitle: 'AX転換進化段階',
          description:
            '一度でAXが完成するものではなく、次の段階を経た流れに従います。',
          stages: [
            {
              step: 1,
              title: 'Digitization',
              subtitle: 'デジタル化',
              description: 'アナログ情報をデジタルに転換',
            },
            {
              step: 2,
              title: 'Digitalization',
              subtitle: 'DX',
              description: 'デジタルツールを利用した業務プロセス改善',
            },
            {
              step: 3,
              title: 'AI Transformation',
              subtitle: 'AX',
              description:
                'AIがデータを学習して自ら判断し業務を主導的に遂行または支援',
            },
          ],
        },
        consultingFramework: {
          sectionTitle: 'AXコンサルティングフレームワーク',
          description:
            'Brain Houseは戦略的AI導入から持続的なビジネス価値を創出する3段階プロセスを支援します。',
          phases: [
            {
              phase: 1,
              title: '診断 & 戦略',
              activities: ['AI準備度評価', 'Use Case発掘', '優先順位定義'],
              deliverables: ['AX戦略ロードマップ', 'ROI分析レポート'],
            },
            {
              phase: 2,
              title: '設計 & 実装',
              activities: [
                'アーキテクチャ設計',
                'AIモデリング',
                'パイロット開発',
              ],
              deliverables: ['ソリューションアーキテクチャ', 'POCデリバリー'],
            },
            {
              phase: 3,
              title: '内在化 & 拡散',
              activities: [
                '変化管理戦略',
                'AIリテラシー教育',
                '成果モニタリング',
              ],
              deliverables: ['AIガバナンス体系', '持続的AI活用文化'],
            },
          ],
        },
        businessModels: {
          sectionTitle: 'AIビジネスモデル発掘',
          description:
            'AIビジネスモデルとは、人工知能技術を活用して直接的な収益創出またはビジネス革新を実現する多様な構造を意味します。Brain HouseはバーティカルAIソリューションをはじめ、多様なAIビジネスモデルを策定します。',
          models: [
            {
              id: 'aiaas',
              title: 'AIaaS',
              subtitle: 'サービス型AI',
              icon: 'Cloud',
              description:
                '企業が直接AIモデルを開発せず、すでに構築されたAI機能をAPI形態で借りて使用するモデルです。',
              pricing: 'API呼び出し回数やデータ処理量に応じて費用支払い',
              examples: [
                { name: 'OpenAI API', desc: 'GPTモデルを自社サービスに連動' },
                {
                  name: 'Google Cloud AI',
                  desc: '画像分析、翻訳、音声認識機能をAPIで提供',
                },
                {
                  name: 'AWS Bedrock',
                  desc: '様々なオープンソースおよび商用モデルを企業カスタマイズで提供',
                },
              ],
            },
            {
              id: 'ai-native-saas',
              title: 'AI-Native SaaS',
              subtitle: 'AIベースの購読モデル',
              icon: 'Sparkles',
              description:
                '既存のソフトウェア（SaaS）にAI機能がコア（Core）として統合された形態です。単にツールを提供するだけでなく、成果物を作成することに集中します。',
              pricing: '月間/年間購読料（Subscription）',
              examples: [
                {
                  name: 'Jasper / Copy.ai',
                  desc: 'マーケティング文句およびコンテンツ自動生成',
                },
                {
                  name: 'GitHub Copilot',
                  desc: '開発者向けコード自動完成および提案',
                },
                {
                  name: 'Canva Magic Studio',
                  desc: 'テキストだけでデザインと画像を生成',
                },
              ],
            },
            {
              id: 'agentic-ai',
              title: 'AIエージェント成果ベース',
              subtitle: 'Outcome-based / Agentic AI',
              icon: 'Bot',
              description:
                '単にソフトウェアを貸すのではなく、AIエージェントが特定の業務を完遂した成果に対して費用を受け取るモデルです。2026年最も注目されるビジネスモデルです。',
              pricing: '予約成功ごとの手数料、顧客問い合わせ解決ごとの費用など',
              examples: [
                {
                  name: 'Intercom / Zendesk AI',
                  desc: '相談員ではなくAIエージェントが顧客問題を完結した時に課金',
                },
                {
                  name: 'AIリクルーティングエージェント',
                  desc: '適切な人材を見つけて面接スケジュールまで設定した時に手数料発生',
                },
              ],
            },
            {
              id: 'vertical-ai',
              title: 'Vertical AI',
              subtitle: '特定産業特化モデル',
              icon: 'Stethoscope',
              description:
                '特定産業別（リテール・ヘルスケア・金融・不動産・法律・製造など）専門データを学習させ、その分野にのみ最適化されたカスタムAIサービスを提供するモデルです。',
              pricing: '高付加価値ソリューション提供（B2B契約中心）',
              examples: [
                {
                  name: 'Harvey',
                  desc: '弁護士のための法律文書分析およびリサーチ特化AI',
                },
                {
                  name: 'Lunit（ルニット）',
                  desc: '医療映像を分析してがんを診断する医療特化AI',
                },
                {
                  name: 'Ironclad',
                  desc: '契約書管理および自動レビュー専門AI',
                },
              ],
            },
            {
              id: 'enablers',
              title: 'Enablers',
              subtitle: 'データおよびインフラレイヤー',
              icon: 'Cpu',
              description:
                'AIを作成し運営するのに必要な基盤を販売するモデルです。',
              pricing:
                'コンピューティングパワー貸与、データラベリング手数料、チップ販売',
              examples: [
                {
                  name: 'NVIDIA',
                  desc: 'AI学習用GPUおよびコンピューティングインフラ販売',
                },
                {
                  name: 'Scale AI',
                  desc: 'AI学習に必要な高品質データラベリングサービス提供',
                },
                {
                  name: 'Hugging Face',
                  desc: 'AIモデル共有プラットフォームおよびデプロイ環境提供',
                },
                {
                  name: 'Palantir Foundry',
                  desc: 'サイロデータを統合してビジネス意思決定を支援',
                },
              ],
            },
          ],
        },
      },
      'ict-strategy': {
        title: 'ICT戦略・政策コンサルティング',
        subtitle:
          '政府R&D企画からICT政策研究まで、公共機関と企業の将来競争力確保のための戦略策定',
        description:
          '政府・公共機関・企業を対象に、ICT技術の変化とトレンド（デジタル、AI、ネットワークなど）を国家・産業・組織の戦略と政策として将来の方向性を設計するサービスです。「技術は多いが、どこにどう使うべきか？」に答える領域です。',
        processSteps: ['環境分析', '能力診断', '戦略策定', '実行支援'],
        targetCustomers: [
          '中央政府 / 地方自治体',
          '公共機関 / 研究機関',
          '大企業・公企業（ICT・通信・プラットフォーム）',
          '国際機関および海外政府',
        ],
        objectives: {
          sectionTitle: '主要目的',
          items: [
            '国家・産業競争力の強化',
            'AI転換（AX）、デジタル転換（DX）の加速化',
            'ICT基盤の新成長産業育成',
            '技術変化に対応する制度・規制設計',
          ],
        },
        consultingAreas: {
          sectionTitle: '主要コンサルティング領域',
          areas: [
            {
              title: 'ICT戦略策定',
              icon: 'Target',
              items: [
                '国家/産業ICT中長期ロードマップ',
                'デジタル・AI・データ・クラウド・ネットワーク戦略',
                'ICT基盤の新産業・新事業・BM発掘',
              ],
            },
            {
              title: '政策・制度設計',
              icon: 'FileText',
              items: [
                'ICT関連法・制度・規制改善',
                'データ/AI/プラットフォームガバナンス',
                '公共ICT政策および投資方向設定',
              ],
            },
            {
              title: '技術・産業分析',
              icon: 'BarChart',
              items: [
                '技術トレンド分析（AI、5G/6G、クラウド、半導体など）',
                'グローバル政策・市場ベンチマーキング',
                '産業エコシステムとバリューチェーン分析',
              ],
            },
            {
              title: '実行・履行支援',
              icon: 'Rocket',
              items: [
                '政策実行計画とKPI設計',
                '公共事業企画（RFP、事前妥当性、ロードマップ）',
                '官民協力モデル設計',
              ],
            },
          ],
        },
        outputs: {
          sectionTitle: 'コンサルティング成果物',
          items: [
            'ICT中長期戦略報告書',
            '政策ロードマップと実行計画',
            '制度・規制改善案',
            '産業育成と投資戦略',
          ],
        },
        newBusinessFramework: {
          sectionTitle: 'ICT新事業発掘フレームワーク',
          description:
            '企業の新規事業発掘のためのICT戦略コンサルティングは、単に「新しい技術を導入すること」を超え、技術を通じてビジネスモデルを革新したり、全く新しい市場を創出することを目的としています。',
          steps: [
            {
              step: 1,
              title: '市場・技術トレンド分析',
              description:
                '5G、AI、メタバースなど破壊的技術が産業に及ぼす影響を分析',
            },
            {
              step: 2,
              title: '内部能力診断',
              description:
                '企業が保有する資産（Asset）とICT技術の結合可能性を検討',
            },
            {
              step: 3,
              title: 'アイデア創出とフィルタリング',
              description:
                '数百のアイデアの中から収益性と実行可能性の高い候補を選別',
            },
            {
              step: 4,
              title: 'PoC設計',
              description: '実際の事業化前に技術的実装可能性を検証',
            },
            {
              step: 5,
              title: 'ロードマップ策定',
              description: '中長期投資計画と組織再編方案の策定',
            },
          ],
        },
        trends: {
          sectionTitle: 'ICT戦略コンサルティングトレンド',
          items: [
            'AI First戦略（業務自動化、意思決定高度化）',
            'Cloud Native & Platform',
            'Data-driven Enterprise',
            'Open / API / Ecosystem戦略',
            'NetOps·DevOps·AIOps',
            'セキュリティ内在化（Security by Design）',
          ],
        },
        industryComparison: {
          sectionTitle: '産業別ICT戦略比較',
          industries: [
            {
              name: '製造業',
              coreValue: '生産効率と品質',
              keyTech: 'IoT、ロボット、デジタルツイン',
              priority: '工程自動化とコスト削減',
            },
            {
              name: '金融',
              coreValue: '信頼、規制対応、利便性',
              keyTech: 'AI、クラウド、ブロックチェーン',
              priority: 'データ基盤の超個人化サービス',
            },
            {
              name: '流通',
              coreValue: '顧客体験と物流最適化',
              keyTech: 'ビッグデータ、AR/VR、配送自動化',
              priority: 'チャネル統合とラストマイル革新',
            },
          ],
        },
      },
      'tech-commercialization': {
        title: '技術事業化コンサルティング',
        subtitle: '技術を市場に引き出し、経済的価値（収益）を創出する専門サービス',
        description:
          '研究所や企業が保有する技術を単に開発する段階で終わらせず、市場に引き出して経済的価値を創出する専門サービスです。「良い技術があるが、これをどう売ってお金を稼ぐか？」に対する解答を提示します。',
        processSteps: [
          '技術診断',
          '市場分析',
          '価値評価',
          'パートナー発掘',
          '移転/契約',
        ],
        targetCustomers: [
          '大学および公共研究機関',
          'スタートアップおよび中小企業',
          '中堅・大企業（Open Innovation）',
        ],
        consultingProcess: {
          sectionTitle: '技術事業化コンサルティングプロセス',
          description:
            '技術の誕生から市場定着までの全過程を体系的に支援します。',
          steps: [
            {
              title: '技術診断および有望技術発掘',
              icon: 'Search',
              description:
                '保有技術の完成度（TRL）、独創性、権利関係を分析します。',
            },
            {
              title: '市場分析およびBM策定',
              icon: 'BarChart',
              description:
                '誰がこの技術を必要としているか市場規模を把握し、収益構造を設計します。',
            },
            {
              title: '技術価値評価',
              icon: 'DollarSign',
              description:
                '該当技術が金銭単位でどれだけの価値があるかを算定します。',
            },
            {
              title: 'マーケティングおよびパートナー発掘',
              icon: 'Users',
              description:
                '技術を購入する需要企業を探したり、共同事業化パートナーを連結します。',
            },
            {
              title: '技術移転および契約支援',
              icon: 'FileText',
              description:
                '技術料（Royalty）交渉と法的契約締結を支援します。',
            },
          ],
        },
        expectedBenefits: {
          sectionTitle: '主要期待効果',
          benefits: [
            {
              title: '試行錯誤の減少',
              icon: 'Shield',
              description:
                '市場性のない技術に投資するリスクを防止します。',
            },
            {
              title: '資金調達の容易化',
              icon: 'Wallet',
              description:
                '客観的な技術価値評価により、政府支援金やVC投資を受けやすくなります。',
            },
            {
              title: '収益最大化',
              icon: 'TrendingUp',
              description:
                'ライセンシング、合弁投資など多様な収益ルートを確保します。',
            },
          ],
        },
        ictSynergy: {
          sectionTitle: '技術事業化とICT戦略の連携',
          description:
            '技術事業化とICT戦略策定は、現代のビジネス環境において切り離せない相互補完的な関係です。',
          quote: '"技術は種、ICTは土壌"',
          comparison: {
            techComm: {
              title: '技術事業化コンサルティング',
              goal: 'R&D成果物を市場に出して収益創出',
              activities: '技術価値評価、市場分析、BM開発',
              role: '「何を（What）」売るかを決定',
            },
            ictStrategy: {
              title: 'ICT戦略策定',
              goal: 'ビジネス目標達成のための効率的なITインフラとシステム構築',
              activities:
                'プロセス革新（PI）、システムアーキテクチャ設計、デジタル転換（DX）',
              role: '「どのように（How）」効率的に運営するかを決定',
            },
          },
          keyPoints: [
            {
              title: 'ビジネスモデル（BM）の具体化',
              description:
                '最新技術（AI、クラウド、ビッグデータなど）を事業化する際、ICT戦略はサービスが顧客に届くプラットフォームの構造を設計します。',
            },
            {
              title: 'データ基盤の市場検証',
              description:
                'ICT戦略は顧客データを収集、分析するデータガバナンス体系を整え、事業化の成功確率を高めます。',
            },
            {
              title: '運営効率性およびコスト削減',
              description:
                'ERPやCRM体系を構築すると、事業化初期段階の運営リスクを大幅に減らすことができます。',
            },
          ],
        },
        dxSynergy: {
          sectionTitle: 'デジタル転換（DX）中心のシナジー効果',
          effects: [
            {
              title: 'Time-to-Market短縮',
              description:
                'ICTインフラ（クラウドなど）を活用すると、技術開発から市場出荷までの期間を画期的に短縮できます。',
            },
            {
              title: '拡張性（Scalability）確保',
              description:
                '事業化初期段階から拡張可能なICTアーキテクチャを設計すると、ユーザーが急増してもサービス中断なく事業を拡大できます。',
            },
            {
              title: '新規価値創出',
              description:
                '既存の製造技術にICT戦略を結合してSaaSやプラットフォームビジネスへ転換するビジネスモデル革新が可能になります。',
            },
          ],
        },
      },
      'startup-investment': {
        title: '創業・投資コンサルティング',
        subtitle:
          '予備創業者からスケールアップ中堅企業まで、成長段階別のカスタマイズメンタリング・コンサルティングと投資誘致支援',
        description:
          '創業コンサルティングは、アイデアの発掘から実際の市場定着、そして成長戦略までを網羅する事例中心の実践型で構成されています。最近の創業メンタリング・コンサルティングは理論よりもピッチングデーやメンタリングのような実行中心のワークショップの比重が非常に高いです。',
        processSteps: ['アイテム発掘', 'BM構築', '市場参入', '投資誘致'],
        targetCustomers: [
          '予備創業者',
          '初期スタートアップ',
          '成長期スタートアップ',
          'スケールアップ中堅企業',
          'IPO準備企業',
        ],
        mentoringModules: {
          sectionTitle: '核心段階別創業メンタリング・コンサルティング4大モジュール',
          modules: [
            {
              title: 'アイテム発掘およびビジネスモデル（BM）構築',
              description:
                '創業の基礎を固める段階で、「誰の問題をどのように解決するか」に集中します。',
              icon: 'Lightbulb',
              items: [
                '機会捕捉：市場トレンド分析およびペインポイント（Pain Point）発見',
                'BM設計：ビジネスモデルキャンバス（BMC、9 Blocks）作成および収益構造設計',
                'アイデア検証：リーンスタートアップ（Lean Startup）方法論による仮説設定および顧客インタビュー',
              ],
            },
            {
              title: '製品開発および市場参入（Go-to-Market）',
              description:
                'アイデアを具体的な成果物にし、初期市場の反応を確認する過程です。',
              icon: 'Rocket',
              items: [
                'MVP制作：最小要件製品（Minimum Viable Product）開発およびテスト',
                'マーケティング戦略：グロースハッキング（Growth Hacking）およびデジタルマーケティング実務',
                'PMF導出：製品-市場適合性（Product-Market Fit）確認およびピボティング（Pivoting）戦略',
              ],
            },
            {
              title: 'スタートアップ金融および投資誘致（IR）',
              description:
                '事業拡張のための資金調達と財務管理能力を育成します。',
              icon: 'DollarSign',
              items: [
                '資金調達：政府支援事業活用、エンジェル投資、VC（ベンチャーキャピタル）の理解',
                'IRピッチング：投資家を説得するピッチデッキ（Pitch Deck）作成および発表スキル',
                '企業価値評価：バリュエーション算定方式および持分構造（Cap Table）管理',
              ],
            },
            {
              title: '組織運営およびスケールアップ（Scale-up）',
              description:
                '本格的な成長段階で発生する経営イシューを扱います。',
              icon: 'TrendingUp',
              items: [
                '組織管理：スタートアップ企業文化構築および核心人材採用（HR）',
                '法律および特許：創業法務、株主間契約書作成、知的財産権（IP）保護',
                '出口戦略（Exit）：M&A（合併買収）およびIPO（株式公開）の理解',
              ],
            },
          ],
        },
        bmConsulting: {
          sectionTitle: 'ビジネスモデル（BM）構築コンサルティング',
          description:
            'ビジネスモデル（BM）は単に「どうやって稼ぐか」を超えて、「どのような価値を誰に伝え、その過程でどのように収益を創出し持続するか」についての設計図です。',
          steps: [
            {
              step: 1,
              title: '問題定義＆顧客セグメンテーション',
              description:
                'BMの出発点は製品ではなく問題、ペインポイントです。誰の問題か、その問題がどれほど深刻かを分析します。',
            },
            {
              step: 2,
              title: '価値提案（Value Proposition）整理',
              description:
                '顧客がなぜあなたを選ぶべきかを明確にします。コスト削減、性能向上、運営簡素化、リスク削減など。',
            },
            {
              step: 3,
              title: 'BM構造化（Business Model Canvas）',
              description:
                '顧客セグメント、価値提案、チャネル、顧客関係、収益源、核心資源、核心活動、核心パートナー、コスト構造の9つのブロックで構造化します。',
            },
            {
              step: 4,
              title: '収益モデル設計（Monetization）',
              description:
                'ライセンス/サブスクリプション（SaaS）、使用量ベース、保守/運営サービス、プラットフォーム手数料、データ/付加サービスなど収益構造を設計します。',
            },
            {
              step: 5,
              title: '市場性検証（Minimum Validation）',
              description:
                'PoC/パイロット顧客確保、実際の支払い意向確認、顧客インタビューによる迅速な検証を行います。',
            },
          ],
        },
        bmAdvanced: {
          sectionTitle: 'BM高度化のための3大戦略',
          description:
            '初期モデルが出たら、市場フィードバックを基に次の3つの観点から高度化する必要があります。',
          strategies: [
            {
              title: '問題-ソリューション適合性（Problem-Solution Fit）',
              description:
                '実際の顧客が私たちが解決しようとする問題を「お金を払うほど」深刻に感じているかを確認します。',
              icon: 'Target',
            },
            {
              title: '収益モデルの多角化および安定化',
              description:
                'ロックイン戦略とアップセリング＆クロスセリングを通じて収益源を精緻化します。',
              icon: 'Layers',
            },
            {
              title: 'ユニットエコノミクス（Unit Economics）分析',
              description:
                'CAC（顧客獲得費用）よりLTV（顧客生涯価値）が大きいか数値で検証します。',
              icon: 'BarChart',
            },
          ],
          checklist: {
            title: '高度化チェックリスト（Self-Audit）',
            items: [
              '差別性：競合が3ヶ月以内にまねできない独自の堀（Moat）があるか？',
              '拡張性：売上が増えてもコストが比例して急激に増える構造ではないか？',
              '持続性：一度の購入で終わるか、それとも繰り返し購入が起きるか？',
            ],
          },
        },
        aiBMC: {
          sectionTitle: 'AIビジネスモデルキャンバス（AI-BMC）活用戦略',
          description:
            'AI-BMCは既存のビジネスモデルキャンバス（BMC）をAI技術の特性に合わせて変形した戦略ツールです。',
          quote:
            'どのデータでどのAI機能を実装し、それをどのようにビジネス価値に結びつけるか',
          components: [
            {
              category: '価値創出',
              items: ['問題定義', 'AI核心機能', 'アルゴリズム', 'データ', '評価指標'],
            },
            {
              category: '価値提案',
              items: ['ユーザーに伝える価値を具体化'],
            },
            {
              category: '価値伝達',
              items: ['ユーザー', 'チャネル', '学習ループ'],
            },
            {
              category: '価値獲得',
              items: ['革新費用', '革新便益'],
            },
          ],
        },
        irStrategy: {
          sectionTitle: 'IR戦略樹立および投資誘致',
          description:
            '成功的なIR（Investor Relations）戦略は単に企業を広報することを超えて、投資家との信頼を構築し企業の適正価値を市場で認められる過程です。',
          elements: [
            {
              title: '投資ハイライト（Equity Story）構築',
              description:
                '企業のビジョン、技術的差別性、市場規模、そして収益モデルを一つの魅力的なストーリーに結びつけます。',
              icon: 'FileText',
            },
            {
              title: 'ターゲット投資家識別',
              description:
                '産業群、成長段階（Seed、Series A~C、Pre-IPO）、投資規模に適したVC、PE、または機関投資家をリストアップします。',
              icon: 'Users',
            },
            {
              title: 'コミュニケーションチャネル多角化',
              description:
                '定期的なIR資料アップデート、実績発表会、NDR、1:1ミーティングなどを通じて接点を広げます。',
              icon: 'MessageSquare',
            },
            {
              title: 'リスク管理および透明性',
              description:
                '企業の弱点や市場の懸念事項に対して論理的で透明な対応論理を準備します。',
              icon: 'Shield',
            },
          ],
          process: [
            {
              step: 1,
              title: 'Internal Audit（内部診断）',
              description: '当社の現在位置と指標（KPI）を客観的に分析',
            },
            {
              step: 2,
              title: 'Messaging（メッセージング）',
              description:
                "市場のトレンドに合わせて投資家が聞きたい'成長ロードマップ'を設計",
            },
            {
              step: 3,
              title: 'Execution（実行）',
              description: 'IR Deck（ブック）制作、ピッチング、フィードバック収集および戦略修正を繰り返す',
            },
          ],
        },
        investorNetwork: {
          sectionTitle: 'VC/AC/エンジェル投資ネットワーク連携および資金調達諮問',
          description:
            'スタートアップ成長の核心動力である資金調達（Fundraising）体系は投資主体別の役割とネットワーク活用法を理解することから始まります。',
          investors: [
            {
              type: 'エンジェル投資',
              stage: '極初期（Seed）',
              description:
                '個人または小規模グループ。アイデアとチームを見て投資し、初期資本金確保に有用。',
            },
            {
              type: 'AC（アクセラレーター）',
              stage: '初期（Seed ~ Pre-A）',
              description:
                '保育（Incubating）中心。短期教育プログラムと初期資金、メンタリング、後続投資連携を提供。',
            },
            {
              type: 'VC（ベンチャーキャピタル）',
              stage: '成長期（Series A以後）',
              description:
                '機関投資家。市場拡張性と収益モデルを検証し、大規模資金を投入して成長を加速化。',
            },
          ],
          strategies: [
            'IRピッチングおよびデモデー：AC/VCが主催するイベント参加を通じてビジネスモデルを露出し信頼度を確保',
            'LP（出資者）および関連機関活用：政府機関のマッチングファンドやTIPSプログラム連携',
            "信頼基盤のReferral：既存ポートフォリオ代表や信頼される審査役の紹介による'ウォームイントロ（Warm Intro）'",
          ],
        },
        exitStrategy: {
          sectionTitle: 'IPO成功戦略およびM&A戦略諮問',
          description:
            '企業の成長段階でIPO（株式公開）とM&A（合併買収）は最も重要な転換点です。',
          ipo: {
            title: 'IPO（株式公開）成功戦略',
            items: [
              {
                title: '成長ストーリーテリング（Equity Story）',
                description:
                  '明確なビジネスモデル、市場シェア拡大計画、差別化された技術力を基に魅力的な投資シナリオを構築',
              },
              {
                title: '透明なガバナンスおよび内部統制',
                description:
                  '上場前に会計透明性を確保し経営権紛争の余地をなくすなど取引所の上場審査基準に合わせた質的要件整備',
              },
              {
                title: '適正バリュエーション（Valuation）',
                description:
                  '類似企業対比競争力を数値化して合理的な公募価格を算定',
              },
              {
                title: 'IR（投資家関係）強化',
                description:
                  '機関投資家との持続的なコミュニケーションを通じて信頼を築き、上場後の株価管理計画まで事前準備',
              },
            ],
          },
          mna: {
            title: 'M&A（合併買収）戦略諮問',
            items: [
              {
                title: '戦略的整合性（Strategic Fit）検討',
                description:
                  '既存事業とのシナジーが発生するかまたはポートフォリオ多角化に実質的な助けになるか最優先で分析',
              },
              {
                title: '徹底した実査（Due Diligence）',
                description:
                  '財務、法律、営業、IT等全分野にわたるリスク把握および隠れた偶発債務や組織文化の異質性を事前点検',
              },
              {
                title: 'PMI（買収後統合）計画',
                description:
                  '人事システム、ITインフラ、組織文化をどのように一つに合わせるかについての具体的な実行方案樹立',
              },
              {
                title: 'ディール構造（Deal Structure）設計',
                description:
                  '現金買収、株式交換、LBO（借入買収）など企業状況に合わせた最適な取引構造設計',
              },
            ],
          },
        },
      },
      'software-development': {
        title: 'ソフトウェア開発',
        subtitle: 'Node.jsベースのフルスタック開発およびクラウドインフラ構築',
        description:
          'ブレインハウスは、Node.jsエコシステムを中心としたフルスタックWeb開発サービスを提供しています。企画コンサルティングで検証されたアイデアを実際のサービスとして実装し、初期創業者のMVP開発から企業のWebサービス高度化まで、技術開発パートナーとして共に歩みます。',
        targetCustomers: [
          'アイデアをサービスとして実装したい初期創業者',
          '既存システムの現代化が必要な企業',
          '新規Webサービス開発を計画している企業',
          'コンサルティング結果を技術で実装したい顧客',
          '迅速な市場検証が必要なスタートアップ',
        ],
        processSteps: [
          '要求事項分析',
          '設計＆プロトタイプ',
          '開発＆テスト',
          'デプロイ＆ローンチ',
          '運用＆保守',
        ],
        techStack: {
          sectionTitle: '技術スタック',
          categories: [
            {
              name: 'Backend',
              icon: 'Server',
              items: ['Node.js', 'NestJS', 'Express.js', 'TypeScript'],
            },
            {
              name: 'Frontend',
              icon: 'Monitor',
              items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
            },
            {
              name: 'Cloud & Infra',
              icon: 'Cloud',
              items: ['AWS (EC2, S3, RDS, Lambda)', 'Docker', 'GitHub Actions'],
            },
            {
              name: 'Database',
              icon: 'Database',
              items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'],
            },
            {
              name: 'AI Integration',
              icon: 'Brain',
              items: ['OpenAI API', 'Claude API', 'Gemini API', 'LangChain'],
            },
          ],
        },
        serviceTypes: {
          sectionTitle: 'サービス類型',
          types: [
            {
              title: 'MVP開発',
              icon: 'Rocket',
              target: '初期創業者 / スタートアップ',
              description:
                'リーンスタートアップ方法論に基づき、コア機能に集中したMVPを4-8週間以内に開発し、迅速な市場検証を支援します。',
              features: [
                'コア機能中心の迅速な開発',
                'レスポンシブWebアプリケーション',
                '基本インフラ構築（AWSベース）',
                'ローンチ後1ヶ月無償保守',
              ],
            },
            {
              title: '企業Webサービス開発',
              icon: 'Building',
              target: '中小企業 / 中堅企業',
              description:
                'B2B/B2Cプラットフォーム、社内システム、顧客ポータルなど、企業のビジネス要件に合わせた拡張可能なWebサービスを開発します。',
              features: [
                'マイクロサービスアーキテクチャ設計',
                'レガシーシステム現代化',
                '企業システム連携（ERP、CRMなど）',
                'SLAベースの保守契約',
              ],
            },
            {
              title: 'コンサルティング連携開発',
              icon: 'Briefcase',
              target: 'コンサルティング顧客',
              description:
                'ブレインハウスの技術事業化コンサルティング、AXコンサルティングの結果を実際のサービスとして実装します。企画から開発までワンストップで進行します。',
              features: [
                'コンサルティング結果の技術実装',
                'PoC/パイロット開発',
                'AIサービスプロトタイプ',
                '後続投資誘致支援',
              ],
            },
          ],
        },
        developmentProcess: {
          sectionTitle: '開発プロセス',
          steps: [
            {
              step: 1,
              title: '要求事項分析',
              duration: '1-2週',
              icon: 'Search',
              description:
                'ビジネス要件を分析し、技術的実現可能性を検討します。プロジェクトの範囲と日程を確定します。',
              deliverables: ['要求事項定義書', '技術検討報告書', 'プロジェクト計画書'],
            },
            {
              step: 2,
              title: '設計＆プロトタイプ',
              duration: '1-2週',
              icon: 'Layers',
              description:
                'システムアーキテクチャを設計し、UI/UXプロトタイプを制作します。データベーススキーマとAPI仕様を定義します。',
              deliverables: ['システム設計書', 'UI/UXプロトタイプ', 'API仕様書'],
            },
            {
              step: 3,
              title: '開発＆テスト',
              duration: '4-8週',
              icon: 'Code',
              description:
                'アジャイル方法論で2週間単位のスプリントを進行します。継続的な統合とテストで品質を保証します。',
              deliverables: ['ソースコード', 'テスト結果報告書', '技術文書'],
            },
            {
              step: 4,
              title: 'デプロイ＆ローンチ',
              duration: '1週',
              icon: 'Rocket',
              description:
                'クラウドインフラにサービスをデプロイし、ローンチを支援します。モニタリングシステムを構築します。',
              deliverables: ['デプロイされたサービス', '運用ガイド', 'モニタリングダッシュボード'],
            },
            {
              step: 5,
              title: '運用＆保守',
              duration: '継続',
              icon: 'Settings',
              description:
                'ローンチ後の安定的な運用を支援します。バグ修正、機能改善、性能最適化を進行します。',
              deliverables: ['月間運用報告書', '機能改善事項', '性能分析レポート'],
            },
          ],
        },
        whyBrainHouse: {
          sectionTitle: 'Why Brain House?',
          points: [
            {
              title: '28年のICT経験',
              icon: 'Trophy',
              description:
                'ICT分野28年の現場経験とノウハウを基に、単純な開発を超えてビジネス価値を創出するソリューションを提供します。',
            },
            {
              title: 'コンサルティング連携',
              icon: 'Network',
              description:
                '技術事業化コンサルティング、AXコンサルティングと連携して、企画から開発までワンストップサービスを提供します。',
            },
            {
              title: '最新技術スタック',
              icon: 'Zap',
              description:
                'Node.js、Next.js、AWSなど検証された最新技術スタックを活用し、拡張可能で保守が容易なシステムを構築します。',
            },
            {
              title: 'フルサイクルサポート',
              icon: 'Repeat',
              description:
                '要求事項分析から設計、開発、デプロイ、運用までプロジェクトの全ライフサイクルを責任持ちます。',
            },
          ],
        },
      },
    },
    privacy: {
      pageHeader: {
        title: '個人情報処理方針',
        subtitle: '個人情報保護に関するご案内',
      },
      lastUpdated: '最終更新日：2026年1月29日',
      intro:
        '株式会社ブレインハウス（以下「当社」）は、ユーザーの個人情報を重視し、「個人情報保護法」等の関連法令を遵守しております。本個人情報処理方針を通じて、ユーザーの個人情報がどのような目的と方法で処理されているかご案内いたします。',
      sections: {
        purpose: {
          title: '1. 個人情報の処理目的',
          content:
            '当社は以下の目的のために個人情報を処理します。処理した個人情報は以下の目的以外には使用されず、利用目的が変更される場合は別途同意を得る等、必要な措置を講じます。',
          items: [
            'お問い合わせ対応：ユーザーのお問い合わせへの回答および相談サービスの提供',
            'サービス改善：サービス品質向上のためのフィードバック分析',
          ],
        },
        items: {
          title: '2. 収集する個人情報項目',
          content:
            '当社はお問い合わせサービス利用時に以下の個人情報を収集します：',
          items: [
            '必須項目：氏名、メールアドレス',
            '任意項目：会社名、連絡先、お問い合わせ内容',
          ],
        },
        retention: {
          title: '3. 個人情報の保有および利用期間',
          content:
            '当社は原則として個人情報の収集および利用目的が達成された後は、当該情報を遅滞なく廃棄します。ただし、関係法令の規定により保存する必要がある場合は、法令に定められた期間保管します。',
          items: ['お問い合わせ履歴：3年（商法、電子商取引法等関連法律）'],
        },
        rights: {
          title: '4. ユーザーの権利と行使方法',
          content:
            'ユーザーはいつでも自身の個人情報について閲覧、訂正、削除、処理停止を要求することができます。権利行使は下記担当者に書面、メール等でご連絡いただければ、遅滞なく処理いたします。',
        },
        security: {
          title: '5. 個人情報の安全性確保措置',
          content:
            '当社は個人情報の安全性確保のため、以下の措置を講じています：',
          items: [
            '個人情報の暗号化',
            'ハッキング等に対する技術的対策',
            '個人情報取扱従業員の最小化および教育',
          ],
        },
        officer: {
          title: '6. 個人情報保護責任者',
          content:
            '当社はユーザーの個人情報保護および関連お問い合わせ処理のため、以下の通り個人情報保護責任者を指定しています：',
          name: '氏名：金鉉哲',
          position: '役職：代表取締役',
          email: 'メール：comfamil@gmail.com',
        },
        changes: {
          title: '7. 個人情報処理方針の変更',
          content:
            '本個人情報処理方針は法令および方針に従い変更される場合があり、変更時はウェブサイトでお知らせいたします。',
        },
      },
    },
  },
};
