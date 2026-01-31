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
          hasPage: false,
        },
        {
          slug: 'tech-commercialization',
          title: '기술사업화 컨설팅',
          shortTitle: '기술사업화',
          hasPage: false,
        },
        {
          slug: 'startup-investment',
          title: '창업·투자 컨설팅',
          shortTitle: '창업·투자',
          hasPage: false,
        },
        {
          slug: 'software-development',
          title: '소프트웨어 개발',
          shortTitle: 'SW 개발',
          hasPage: false,
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
          hasPage: false,
        },
        {
          slug: 'tech-commercialization',
          title: 'Tech Commercialization Consulting',
          shortTitle: 'Tech Commerc.',
          hasPage: false,
        },
        {
          slug: 'startup-investment',
          title: 'Startup & Investment Consulting',
          shortTitle: 'Startup',
          hasPage: false,
        },
        {
          slug: 'software-development',
          title: 'Software Development',
          shortTitle: 'SW Dev',
          hasPage: false,
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
          hasPage: false,
        },
        {
          slug: 'tech-commercialization',
          title: '技術事業化コンサルティング',
          shortTitle: '技術事業化',
          hasPage: false,
        },
        {
          slug: 'startup-investment',
          title: '創業・投資コンサルティング',
          shortTitle: '創業・投資',
          hasPage: false,
        },
        {
          slug: 'software-development',
          title: 'ソフトウェア開発',
          shortTitle: 'SW開発',
          hasPage: false,
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
