export type Language = 'ko' | 'en' | 'ja';

export const translations = {
  ko: {
    serviceHighlight: {
      title: '핵심 서비스',
      badge: 'New Service',
      description:
        'Tech Domain별 사업 아이템을 기획하고 MVP를 개발하여 시장 검증까지 지원합니다. 28년의 ICT 현장 경험을 바탕으로 실현 가능한 비즈니스 모델을 설계합니다.',
      viewMore: '자세히 보기',
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
              title: '인공지능 기반 모바일에지 클라우드 서비스 플랫폼 사업화 전략 컨설팅',
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
              title: '디지털 헬스케어·디지털 치료제 ICT융합 기술 및 산업 동향 분석',
              client: '산업융합원',
              year: '2023',
            },
            {
              title: '경북·Apple 스마트 제조 혁신전략 수립',
              client: '대구경북연구원',
              year: '2022',
            },
            {
              title: '초연결 네트워킹 인프라 기반 서비스·BM 및 PoC 활용 성과창출 전략',
              client: 'KANI',
              year: '2022',
            },
            {
              title: 'IT 분야 Community 버전 국내·외 서비스 리서치',
              client: '한국과학기술정보연구원',
              year: '2022',
            },
            {
              title: '초연결 네트워킹 서비스의 리빙랩 구축 및 운영 방안 조사·분석 연구',
              client: 'KANI',
              year: '2021',
            },
            {
              title: 'ICT 기술사업화 전략 컨설팅 (VR, AI, 메타버스 비즈니스 모델 발굴)',
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
              title: 'ICT 기술사업화 전략 컨설팅 (ICT 기반 기업성장 로드맵 수립)',
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
              title: '팬과 아티스트를 직접 연결하는 엔터테인먼트 블록체인 투자 플랫폼',
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
        success: '문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.',
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
    },
    servicesMenu: {
      viewAll: '전체 서비스 보기',
      items: [
        { slug: 'mvp-development', title: '아이템 기획 & MVP', shortTitle: 'MVP 개발', hasPage: true },
        { slug: 'ax-consulting', title: 'AX 컨설팅', shortTitle: 'AX 컨설팅', hasPage: true },
        { slug: 'ict-strategy', title: 'ICT 전략·정책 컨설팅', shortTitle: 'ICT 전략', hasPage: false },
        { slug: 'tech-commercialization', title: '기술사업화 컨설팅', shortTitle: '기술사업화', hasPage: false },
        { slug: 'startup-investment', title: '창업·투자 컨설팅', shortTitle: '창업·투자', hasPage: false },
        { slug: 'software-development', title: '소프트웨어 개발', shortTitle: 'SW 개발', hasPage: false },
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
      techDomainsDescription: '다양한 산업 분야에서 혁신적인 사업 아이템을 발굴하고 MVP를 개발합니다.',
      ctaTitle: '프로젝트를 시작해 보세요',
      ctaDescription: '브레인하우스와 함께 혁신적인 서비스를 만들어 보세요.',
      ctaButton: '프로젝트 문의하기',
      ctaViewAll: '전체 서비스 보기 →',
    },
    serviceDetails: {
      'mvp-development': {
        title: '사업 아이템 기획(발굴) 및 MVP 개발',
        subtitle: 'Tech Domain별 사업 아이템 기획 및 MVP 개발 서비스',
        description: '다양한 테크 도메인에서 사업 아이템을 발굴하고, 빠른 시장 검증을 위한 MVP(Minimum Viable Product)를 개발합니다. 28년의 ICT 현장 경험을 바탕으로 실현 가능한 비즈니스 모델을 설계하고, AI 기술을 활용한 혁신적인 서비스를 구현합니다.',
        targetCustomers: [
          '프리랜서',
          '퇴사준비자',
          '예비창업자',
          '초기창업자',
          '스타트업',
          '중소기업',
          '중견기업',
        ],
        processSteps: ['아이디어 발굴', '시장 분석', 'BM 설계', 'MVP 개발', '시장 검증'],
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
            examples: [
              'AI 기반 지능형 법률 문서 플랫폼 및 리걸테크 서비스',
            ],
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
        subtitle: 'AI Transformation 컨설팅',
        description: '기업의 AI 전환을 위한 전략 수립부터 실행까지 지원합니다. 상세 내용은 준비 중입니다.',
        comingSoon: true,
      },
    },
  },
  en: {
    serviceHighlight: {
      title: 'Our Services',
      badge: 'New Service',
      description:
        'We plan business items by Tech Domain and develop MVPs to support market validation. Based on 28 years of ICT field experience, we design viable business models.',
      viewMore: 'Learn More',
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
          description: 'Government R&D planning, technology commercialization, policy research',
          items: [
            {
              title: 'Wired/Wireless Communication SW House System Development',
              client: 'IITP',
              year: '2025',
            },
            {
              title: 'AI-based Mobile Edge Cloud Service Platform Commercialization Strategy',
              client: 'ICT Company',
              year: '2024',
            },
            {
              title: 'Cloud Networking Service Platform Tech Commercialization Strategy',
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
              title: 'Digital Healthcare & DTx ICT Convergence Technology Analysis',
              client: 'Industrial Convergence Institute',
              year: '2023',
            },
            {
              title: 'Gyeongbuk-Apple Smart Manufacturing Innovation Strategy',
              client: 'DGI',
              year: '2022',
            },
            {
              title: 'Hyper-connected Networking Service/BM & PoC Performance Strategy',
              client: 'KANI',
              year: '2022',
            },
            {
              title: 'IT Community Version Service Research (Domestic & International)',
              client: 'KISTI',
              year: '2022',
            },
            {
              title: 'Hyper-connected Networking Living Lab Development & Operation Research',
              client: 'KANI',
              year: '2021',
            },
            {
              title: 'ICT Tech Commercialization Consulting (VR, AI, Metaverse BM)',
              client: 'ICT Company',
              year: '2021',
            },
            {
              title: 'Technology Level Assessment (Hyper-connected IoT)',
              client: 'KISTEP',
              year: '2020',
            },
            {
              title: 'AI-based Network Platform Tech Commercialization Consulting',
              client: 'ICT Company',
              year: '2020',
            },
            {
              title: 'ICT Tech Commercialization Consulting (Enterprise Growth Roadmap)',
              client: 'ICT Company',
              year: '2020',
            },
          ],
        },
        {
          id: 'bm-software',
          title: 'Business Model Planning & Software Development',
          description: 'Platform service planning, BM development, MVP development',
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
              title: 'AR Digital Content Development (Ball Shooting, Trampoline)',
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
        success: 'Your message has been sent successfully. We will get back to you soon.',
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
    },
    servicesMenu: {
      viewAll: 'View All Services',
      items: [
        { slug: 'mvp-development', title: 'Item Planning & MVP', shortTitle: 'MVP Dev', hasPage: true },
        { slug: 'ax-consulting', title: 'AX Consulting', shortTitle: 'AX Consulting', hasPage: true },
        { slug: 'ict-strategy', title: 'ICT Strategy & Policy Consulting', shortTitle: 'ICT Strategy', hasPage: false },
        { slug: 'tech-commercialization', title: 'Tech Commercialization Consulting', shortTitle: 'Tech Comm.', hasPage: false },
        { slug: 'startup-investment', title: 'Startup & Investment Consulting', shortTitle: 'Startup', hasPage: false },
        { slug: 'software-development', title: 'Software Development', shortTitle: 'SW Dev', hasPage: false },
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
      techDomainsDescription: 'We discover innovative business items and develop MVPs across various industry sectors.',
      ctaTitle: 'Start Your Project',
      ctaDescription: 'Create innovative services with Brain House.',
      ctaButton: 'Contact for Project',
      ctaViewAll: 'View All Services →',
    },
    serviceDetails: {
      'mvp-development': {
        title: 'Business Item Planning & MVP Development',
        subtitle: 'Tech Domain-specific Business Item Planning & MVP Development Service',
        description: 'We discover business items across various tech domains and develop MVPs (Minimum Viable Products) for rapid market validation. Based on 28 years of ICT field experience, we design viable business models and implement innovative services utilizing AI technology.',
        targetCustomers: [
          'Freelancers',
          'Career Changers',
          'Pre-founders',
          'Early-stage Founders',
          'Startups',
          'SMEs',
          'Mid-sized Companies',
        ],
        processSteps: ['Idea Discovery', 'Market Analysis', 'BM Design', 'MVP Development', 'Market Validation'],
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
        subtitle: 'AI Transformation Consulting',
        description: 'We support from strategy development to execution for enterprise AI transformation. Detailed content coming soon.',
        comingSoon: true,
      },
    },
  },
  ja: {
    serviceHighlight: {
      title: 'コアサービス',
      badge: 'New Service',
      description:
        'Tech Domain別に事業アイテムを企画し、MVPを開発して市場検証まで支援します。28年のICT現場経験を基に実現可能なビジネスモデルを設計します。',
      viewMore: '詳しく見る',
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
              title: '人工知能基盤モバイルエッジクラウドサービスプラットフォーム事業化戦略コンサルティング',
              client: 'ICT企業',
              year: '2024',
            },
            {
              title: 'クラウドネットワーキングサービスプラットフォームの技術事業化戦略策定',
              client: 'ICT企業',
              year: '2024',
            },
            {
              title: 'デジタルウェルネスエコシステム構築技術開発支援体系企画',
              client: '韓国研究財団',
              year: '2023',
            },
            {
              title: '超連結リビングラボ運営およびプラットフォーム自立化戦略策定',
              client: '韓国ネットワーク産業協会',
              year: '2023',
            },
            {
              title: 'スマートシティ海外進出戦略調査役務',
              client: 'KOTRA',
              year: '2023',
            },
            {
              title: 'デジタルヘルスケア・デジタル治療剤ICT融合技術および産業動向分析',
              client: '産業融合院',
              year: '2023',
            },
            {
              title: '慶北・Appleスマート製造革新戦略策定',
              client: '大邱慶北研究院',
              year: '2022',
            },
            {
              title: '超連結ネットワーキングインフラ基盤サービス・BMおよびPoC活用成果創出戦略',
              client: 'KANI',
              year: '2022',
            },
            {
              title: 'IT分野Communityバージョン国内・外サービスリサーチ',
              client: '韓国科学技術情報研究院',
              year: '2022',
            },
            {
              title: '超連結ネットワーキングサービスのリビングラボ構築および運営方案調査・分析研究',
              client: 'KANI',
              year: '2021',
            },
            {
              title: 'ICT技術事業化戦略コンサルティング（VR、AI、メタバースビジネスモデル発掘）',
              client: 'ICT企業',
              year: '2021',
            },
            {
              title: '技術水準評価（超連結モノのインターネット技術）',
              client: 'KISTEP',
              year: '2020',
            },
            {
              title: '人工知能基盤ネットワークプラットフォーム技術事業化戦略コンサルティング',
              client: 'ICT企業',
              year: '2020',
            },
            {
              title: 'ICT技術事業化戦略コンサルティング（ICT基盤企業成長ロードマップ策定）',
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
              title: 'ファンとアーティストを直接つなぐエンターテインメントブロックチェーン投資プラットフォーム',
              client: 'E社',
              year: '2020',
            },
            {
              title: '外国人旅行者多言語支援タクシーツアープラットフォーム',
              client: 'U社',
              year: '2020',
            },
            {
              title: 'ARデジタルコンテンツ開発（ボールシューティング、トランポリン）',
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
              title: '中小企業のためのインフルエンサーマーケティングプラットフォーム',
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
        success: 'お問い合わせが正常に送信されました。近日中にご連絡いたします。',
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
    },
    servicesMenu: {
      viewAll: '全サービスを見る',
      items: [
        { slug: 'mvp-development', title: 'アイテム企画 & MVP', shortTitle: 'MVP開発', hasPage: true },
        { slug: 'ax-consulting', title: 'AXコンサルティング', shortTitle: 'AXコンサル', hasPage: true },
        { slug: 'ict-strategy', title: 'ICT戦略・政策コンサルティング', shortTitle: 'ICT戦略', hasPage: false },
        { slug: 'tech-commercialization', title: '技術事業化コンサルティング', shortTitle: '技術事業化', hasPage: false },
        { slug: 'startup-investment', title: '創業・投資コンサルティング', shortTitle: '創業・投資', hasPage: false },
        { slug: 'software-development', title: 'ソフトウェア開発', shortTitle: 'SW開発', hasPage: false },
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
      techDomainsDescription: '多様な産業分野で革新的な事業アイテムを発掘し、MVPを開発します。',
      ctaTitle: 'プロジェクトを始めましょう',
      ctaDescription: 'ブレインハウスと共に革新的なサービスを作りましょう。',
      ctaButton: 'プロジェクト問い合わせ',
      ctaViewAll: '全サービスを見る →',
    },
    serviceDetails: {
      'mvp-development': {
        title: '事業アイテム企画（発掘）およびMVP開発',
        subtitle: 'Tech Domain別事業アイテム企画およびMVP開発サービス',
        description: '様々なテックドメインで事業アイテムを発掘し、迅速な市場検証のためのMVP（Minimum Viable Product）を開発します。28年のICT現場経験を基に実現可能なビジネスモデルを設計し、AI技術を活用した革新的なサービスを実装します。',
        targetCustomers: [
          'フリーランサー',
          '退職準備者',
          '予備創業者',
          '初期創業者',
          'スタートアップ',
          '中小企業',
          '中堅企業',
        ],
        processSteps: ['アイデア発掘', '市場分析', 'BM設計', 'MVP開発', '市場検証'],
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
        subtitle: 'AI Transformationコンサルティング',
        description: '企業のAI転換のための戦略策定から実行まで支援します。詳細内容は準備中です。',
        comingSoon: true,
      },
    },
  },
};
