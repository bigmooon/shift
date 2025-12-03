# SHIFT - MZ 자기객관화 테스트 플랫폼

![Shift Logo](react/public/og_image.png)

## 📋 프로젝트 개요

**SHIFT**는 MZ 세대를 위한 자기객관화 테스트 플랫폼입니다. 사용자가 자신에 대해 생각하는 키워드와 타인이 보는 키워드를 비교하여 객관적인 자기 인식을 도와주는 웹 애플리케이션입니다.

### 🎯 주요 기능

- **자기 인식 테스트**: 사용자가 자신을 어떻게 생각하는지 키워드로 표현
- **타인의 시각**: 지인들이 보는 사용자의 모습을 키워드로 수집
- **결과 분석**: EPA(Evaluation, Potency, Activity) 모델 기반 성격 분석
- **MZ 유형 분류**: 8가지 MZ 유형으로 성격 분류 (TRO, TRS, TCO, TCS, PRO, PRS, PCO, PCS)
- **소셜 로그인**: 카카오 계정을 통한 간편 로그인
- **링크 공유**: 테스트 링크를 지인들과 공유하여 피드백 수집

## 🏗️ 기술 스택

### Frontend (React)

- **React 19.2.0** - 메인 프레임워크
- **React Router DOM 7.9.6** - 라우팅
- **SCSS** - 스타일링
- **Framer Motion 11.0.24** - 애니메이션
- **Swiper 11.1.1** - 이미지 슬라이더
- **Recharts 2.12.6** - 차트 및 데이터 시각화

### Backend (Flask)

- **Flask 3.0.3** - 웹 프레임워크
- **Flask-CORS 4.0.0** - CORS 처리
- **Flask-Session 0.8.0** - 세션 관리
- **Pyrebase4 4.7.1** - Firebase 연동
- **Google Cloud Storage** - 데이터 저장

### 데이터베이스

- **Firebase Realtime Database** - 실시간 데이터베이스

### 인증

- **Kakao OAuth 2.0** - 소셜 로그인

## 📁 프로젝트 구조

```
shift/
├── flask/                          # Backend (Flask)
│   ├── app.py                      # 메인 애플리케이션 로직
│   ├── flask_app.py                # Flask 앱 설정
│   ├── config.py                   # 설정 파일
│   ├── DBhandler.py                # 데이터베이스 핸들러
│   ├── EPAKeyword.py               # EPA 키워드 처리
│   ├── model.py                    # 데이터 모델
│   ├── notification.py             # 알림 기능
│   ├── question.py                 # 질문 관리
│   ├── logs.py                     # 로깅 설정
│   └── resources/                  # 리소스 파일
│       ├── keywords.txt            # EPA 키워드 목록
│       └── question_list.txt       # 질문 목록
├── react/                          # Frontend (React)
│   ├── public/                     # 정적 파일
│   ├── src/
│   │   ├── components/             # 재사용 가능한 컴포넌트
│   │   │   ├── Button/             # 버튼 컴포넌트
│   │   │   ├── Header/             # 헤더 컴포넌트
│   │   │   ├── Footer/             # 푸터 컴포넌트
│   │   │   ├── Modal/              # 모달 컴포넌트
│   │   │   └── Login/              # 로그인 관련 컴포넌트
│   │   ├── pages/                  # 페이지 컴포넌트
│   │   │   ├── LinkSender/         # 테스트 생성자 페이지
│   │   │   ├── LinkReceiver/       # 테스트 참여자 페이지
│   │   │   └── Result/             # 결과 페이지
│   │   ├── assets/                 # 정적 자원
│   │   │   ├── images/             # 이미지 파일
│   │   │   ├── fonts/              # 폰트 파일
│   │   │   ├── styles/             # SCSS 스타일
│   │   │   └── data/               # 정적 데이터
│   │   └── App.js                  # 메인 앱 컴포넌트
├── requirements.txt                # Python 의존성
└── README.md                       # 프로젝트 문서
```

## 🚀 설치 및 실행

### 사전 요구사항

- Python 3.8+
- Node.js 16+
- Firebase 프로젝트 설정
- Kakao Developers 앱 등록

### 1. 저장소 클론

```bash
git clone <repository-url>
cd shift
```

### 2. Backend 설정

```bash
# 가상환경 생성 및 활성화
cd flask
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 의존성 설치
pip install -r ../requirements.txt

# 환경변수 설정 (.env 파일 생성)
cp .env.example .env
# .env 파일에 Firebase 및 Kakao OAuth 설정 추가
```

### 3. Frontend 설정

```bash
cd react
npm install
```

### 4. Firebase 설정

1. Firebase Console에서 새 프로젝트 생성
2. Realtime Database 활성화
3. 서비스 계정 키 생성 후 `flask/resources/shift_key.json`에 저장
4. `config.py`에 Firebase 설정 정보 입력

### 5. Kakao OAuth 설정

1. Kakao Developers에서 앱 생성
2. OAuth 리다이렉트 URI 설정: `http://localhost:3000/kakao_callback`
3. `config.py`에 클라이언트 ID와 시크릿 키 입력

### 6. 실행

```bash
# Backend 실행 (포트 5000)
cd flask
python app.py

# Frontend 실행 (포트 3000)
cd react
npm start
```

## 🎮 사용법

### 1. 테스트 생성 (Host)

1. 메인 페이지에서 카카오 로그인
2. 기본 정보 입력 (닉네임, 나이, 성별)
3. 자기 인식 키워드 선택:
   - **나의 정체성**: 현재 자신의 모습
   - **나의 열망**: 되고 싶은 모습
   - **타인이 보는 나**: 남들이 보는 자신의 모습
4. 테스트 링크 생성 및 공유

### 2. 테스트 참여 (Guest)

1. 공유받은 링크 접속
2. 기본 정보 입력 (닉네임, 관계, 나이대, 성별)
3. 해당 사용자에게 어울리는 키워드 선택
4. 키워드 선택 이유 작성
5. 한 줄 소개 작성

### 3. 결과 확인

1. 대시보드에서 응답 현황 확인
2. 상세 결과에서 MZ 유형 및 분석 결과 확인
3. 자신의 인식과 타인의 인식 비교 분석

## 📊 MZ 유형 분류

EPA 모델을 기반으로 8가지 유형으로 분류:

- **TRO (MZ 바이블형)**: 솔직하고 MZ력 만렙
- **TRS (MZ 빌런형)**: 직설적이고 강한 성격
- **TCO (MZ 큐티형)**: 귀엽고 사랑스러운 성격
- **TCS (MZ 순딩형)**: 순수하고 착한 성격
- **PRO (MZ 프로형)**: 전문적이고 능력있는 성격
- **PRS (MZ 시크형)**: 차분하고 신중한 성격
- **PCO (MZ 힐링형)**: 편안하고 치유되는 성격
- **PCS (MZ 천사형)**: 완벽하고 이상적인 성격

## 🔧 주요 API 엔드포인트

### 인증

- `GET /kakao_login` - 카카오 로그인 페이지 리다이렉트
- `POST /kakao_callback` - 카카오 로그인 콜백 처리
- `GET /verify_login` - 로그인 상태 확인
- `POST /logout` - 로그아웃

### 테스트 관리

- `POST /save_epa` - EPA 테스트 생성
- `POST /save_epa_reply` - EPA 테스트 응답 저장
- `GET /epa_test_reply/<tid>` - 테스트 정보 조회
- `GET /result/epa` - 테스트 결과 조회

### 기타

- `GET /get_epa_keywords` - EPA 키워드 목록 조회
- `GET /my_tests` - 내 테스트 목록 조회
- `GET /total_num` - 전체 테스트 수 조회

## 🎨 디자인 특징

- **모던한 UI/UX**: 깔끔하고 직관적인 인터페이스
- **반응형 디자인**: 모바일 및 데스크톱 최적화
- **애니메이션**: Framer Motion을 활용한 부드러운 전환 효과
- **Pretendard 폰트**: 한국어에 최적화된 폰트 사용
- **컬러 시스템**: 보라색 계열의 브랜드 컬러 적용

## 🔒 보안 및 개인정보

- **OAuth 2.0**: 안전한 소셜 로그인
- **세션 관리**: Flask-Session을 통한 안전한 세션 처리
- **데이터 암호화**: Firebase의 보안 규칙 적용
- **개인정보 보호**: 최소한의 개인정보만 수집

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

## 👥 기여자

- **개발자**: [Your Name]
- **디자인**: [Designer Name]

## 📞 문의

<!-- - **웹사이트**: http://shift2me.com
- **이메일**: [your-email@example.com] -->

---

**SHIFT**로 나를 더 객관적으로 알아보세요! 🚀



