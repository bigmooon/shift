# 포트폴리오 리팩토링 프로젝트 관리 가이드

## 🎯 프로젝트 특성 분석

### 프로젝트 규모
- **기간**: 8주 (2개월)
- **인원**: 1명 (본인)
- **작업량**: 중간~높음
- **복잡도**: 중간 (기술적 도전 과제 다수)

### 관리 요구사항
1. **진행 상황 추적** (어디까지 했는지)
2. **작업 우선순위 관리** (무엇부터 할지)
3. **시간 추정 및 관리** (데드라인 준수)
4. **학습 내용 기록** (포트폴리오용)
5. **버그/이슈 추적**
6. **성과 측정 기록**

---

## ✅ 추천: GitHub Issues + Projects (무료, 통합)

### 왜 GitHub인가?

| 장점 | 설명 |
|------|------|
| **무료** | 개인 프로젝트 완전 무료 |
| **통합성** | 코드 저장소와 완벽 통합 |
| **포트폴리오 가치** | 면접관이 직접 볼 수 있음 |
| **협업 준비** | 실무 도구 경험 |
| **간단함** | 설정 최소화 |

### 설정 방법 (10분)

#### 1. GitHub Project 생성

```
1. GitHub 저장소 → Projects 탭 클릭
2. "New project" 클릭
3. "Board" 템플릿 선택
4. 프로젝트명: "SHIFT 포트폴리오 리팩토링"
```

#### 2. 컬럼 구조 (Kanban 보드)

```
📋 Backlog (백로그)
  ↓
🎯 To Do (해야 할 일)
  ↓
🔄 In Progress (진행 중)
  ↓
👀 Review (검토)
  ↓
✅ Done (완료)
```

#### 3. Labels (라벨) 생성

**우선순위:**
- 🔴 `priority: critical` (반드시 해야 함)
- 🟡 `priority: high` (중요)
- 🟢 `priority: medium` (보통)
- ⚪ `priority: low` (선택)

**카테고리:**
- 🎨 `category: SEO`
- 📱 `category: PWA`
- ⚡ `category: performance`
- 📝 `category: documentation`
- 🐛 `category: bug`

**작업 크기:**
- 🐁 `size: XS` (1-2시간)
- 🐇 `size: S` (반나절)
- 🐕 `size: M` (1일)
- 🐘 `size: L` (2-3일)
- 🦕 `size: XL` (1주)

**주차:**
- 📅 `week-1`
- 📅 `week-2`
- ... `week-8`

---

## 📋 이슈 템플릿 예시

### 템플릿 1: 기능 구현

```markdown
## 📋 작업 설명
React Helmet Async를 도입하여 페이지별 동적 메타 태그를 설정합니다.

## 🎯 목표
- [ ] react-helmet-async 패키지 설치
- [ ] App.js에 HelmetProvider 추가
- [ ] SEO 컴포넌트 생성
- [ ] StartHost.js에 적용
- [ ] StartGuest.js에 적용

## 📊 성공 기준
- Lighthouse SEO 점수 +10점 이상
- 카카오톡 링크 미리보기 정상 작동

## 📚 참고 자료
- [React Helmet Async 문서](https://github.com/staylor/react-helmet-async)
- 가이드: 01-seo-optimization.md

## ⏱ 예상 시간
1일 (6-8시간)

## 🏷 Labels
`category: SEO` `priority: high` `size: M` `week-2`
```

### 템플릿 2: 성과 측정

```markdown
## 📊 측정 내용
Week 1 종료 시점 Baseline 측정

## 📋 체크리스트
- [ ] Lighthouse 측정 (성능, PWA, SEO)
- [ ] Bundle Analyzer 실행
- [ ] Chrome DevTools Performance 프로파일
- [ ] 스크린샷 저장
- [ ] 데이터 정리 (Excel/Notion)

## 📈 목표 데이터
- Lighthouse 성능 점수
- LCP, FCP, TTI 값
- 번들 크기 (main.js)
- 각 라우트별 청크 크기

## 📂 저장 위치
`/reports/baseline/`

## ⏱ 예상 시간
2-3시간

## 🏷 Labels
`category: performance` `priority: critical` `size: S` `week-1`
```

### 템플릿 3: 학습/조사

```markdown
## 🔍 조사 주제
Service Worker 캐싱 전략 비교 연구

## 🎯 목표
NetworkFirst, CacheFirst, StaleWhileRevalidate 중 
각 리소스 타입별 최적 전략 결정

## 📋 조사 항목
- [ ] 각 전략의 동작 원리
- [ ] API 응답에 적합한 전략
- [ ] 이미지에 적합한 전략
- [ ] CSS/JS에 적합한 전략
- [ ] 오프라인 시나리오 테스트

## 📝 산출물
- 전략 비교표 작성
- 테스트 코드 작성
- 결정 근거 문서화

## ⏱ 예상 시간
반나절 (3-4시간)

## 🏷 Labels
`category: PWA` `priority: high` `size: S` `week-3`
```

---

## 📅 주차별 Milestone 설정

### Milestone 1: Week 1 - 기준선 측정
```
Due Date: 2025-01-10
완료 기준:
✓ Lighthouse 리포트 저장
✓ Bundle Analyzer 결과 저장
✓ 문제점 목록 작성
✓ 리팩토링 계획 수립
```

### Milestone 2: Week 2 - SEO 최적화
```
Due Date: 2025-01-17
완료 기준:
✓ React Helmet 적용
✓ OG 이미지 API 구현
✓ Sitemap 생성
✓ Lighthouse SEO 90+ 달성
```

### Milestone 3-4: Week 3-4 - PWA 구현
```
Due Date: 2025-01-31
완료 기준:
✓ Service Worker 등록
✓ 오프라인 지원
✓ 설치 프롬프트
✓ PWA 점수 100 달성
```

### Milestone 5-6: Week 5-6 - 성능 최적화
```
Due Date: 2025-02-14
완료 기준:
✓ 코드 스플리팅 완료
✓ 이미지 최적화
✓ Lighthouse 성능 90+ 달성
✓ RUM 데이터 수집 시작
```

### Milestone 7: Week 7 - 문서화
```
Due Date: 2025-02-21
완료 기준:
✓ PERFORMANCE_REPORT.md
✓ README.md 업데이트
✓ 이력서 작성
✓ 면접 Q&A 준비
```

### Milestone 8: Week 8 - 배포 및 검증
```
Due Date: 2025-02-28
완료 기준:
✓ 프로덕션 배포
✓ 최종 측정
✓ RUM 데이터 분석
✓ 포트폴리오 완성
```

---

## 🔄 일일 루틴 (Daily Routine)

### 작업 시작 시 (10분)
```
1. GitHub Project 보드 확인
2. 오늘의 작업 선택 (To Do → In Progress로 이동)
3. 이슈 체크리스트 확인
4. 타이머 시작 (Pomodoro 추천)
```

### 작업 완료 시 (10분)
```
1. 체크리스트 업데이트
2. 커밋 메시지에 이슈 번호 포함
   예: "feat: Add React Helmet to StartHost #12"
3. 진행 상황 코멘트 추가
4. In Progress → Review/Done으로 이동
```

### 하루 종료 시 (5분)
```
1. 오늘 배운 점 기록 (TIL - Today I Learned)
2. 내일 할 일 확인
3. Milestone 진행률 체크
```

---

## 📊 진행 상황 추적 방법

### 1. GitHub Project 대시보드

**자동 계산되는 지표:**
- 전체 이슈 수
- 완료된 이슈 수
- 완료율 (%)
- Milestone별 진행률

**추천 뷰:**
```
View 1: "전체 보기" (Board)
  → 모든 이슈의 현재 상태

View 2: "이번 주" (Table)
  → Filter: week-N
  → 이번 주 작업만 표시

View 3: "우선순위" (Table)
  → Sort: priority (critical → low)
  → 급한 일부터 처리

View 4: "완료된 작업" (Table)
  → Filter: Status = Done
  → 성취감 & 포트폴리오 증거
```

### 2. 주간 리뷰 (매주 일요일)

**Week Review Issue 생성:**
```markdown
## 📊 Week N Review

### ✅ 완료한 작업
- #12: React Helmet 적용
- #13: OG 이미지 API 구현
- #14: Lighthouse SEO 측정

### 📈 성과
- Lighthouse SEO: 65 → 85 (+20)
- 카카오톡 공유 클릭률: +45%

### 🤔 배운 점
- React Helmet Provider는 App 최상단에 위치해야 함
- OG 이미지는 1200x630이 최적

### 🚧 다음 주 계획
- [ ] Service Worker 기본 구현
- [ ] 캐싱 전략 테스트
- [ ] 오프라인 페이지 제작

### ⚠️ 이슈/블로커
- iOS Safari에서 OG 이미지가 간헐적으로 안 보임
  → 조사 필요

## 🏷 Labels
`week-N-review` `documentation`
```

---

## 🎨 보조 도구 (선택사항)

### 1. Notion (선택: 상세 문서화)

**GitHub Projects를 메인으로, Notion은 보조로 사용**

**Notion 사용 용도:**
- 학습 노트 (상세)
- 코드 스니펫 저장
- 스크린샷 정리
- 아이디어 브레인스토밍

**구조 예시:**
```
📁 SHIFT 리팩토링
  ├─ 📄 프로젝트 개요
  ├─ 📊 성과 대시보드
  ├─ 📚 학습 노트
  │   ├─ React Helmet 사용법
  │   ├─ Service Worker 이해하기
  │   └─ Lighthouse 최적화 팁
  ├─ 🐛 버그 로그
  └─ 💡 아이디어
```

### 2. Toggl Track (선택: 시간 추적)

**목적**: 각 작업에 얼마나 시간을 쓰는지 측정

```
프로젝트: SHIFT 리팩토링
  ├─ SEO 최적화: 12시간
  ├─ PWA 구현: 28시간
  ├─ 성능 최적화: 35시간
  ├─ 문서화: 8시간
  └─ 학습: 15시간

총: 98시간
```

**포트폴리오 가치:**
> "8주간 98시간 투입하여 Lighthouse 점수 38% 개선"

### 3. Excalidraw (선택: 다이어그램)

**사용 예시:**
- Service Worker 캐싱 흐름도
- PWA 아키텍처 다이어그램
- 최적화 전후 비교 그래프

---

## 📝 실제 이슈 구성 예시

### Week 1: 기준선 측정

```
Issue #1: 📊 Lighthouse 측정 및 리포트 저장
Labels: priority: critical, category: performance, size: S, week-1

Issue #2: 📦 Bundle Analyzer 분석 및 문제점 파악
Labels: priority: critical, category: performance, size: S, week-1

Issue #3: 📋 리팩토링 계획 수립
Labels: priority: high, category: documentation, size: M, week-1
```

### Week 2: SEO 최적화

```
Issue #4: 📦 react-helmet-async 설치 및 설정
Labels: priority: high, category: SEO, size: S, week-2

Issue #5: 🎨 SEO 컴포넌트 생성
Labels: priority: high, category: SEO, size: M, week-2

Issue #6: 🖼 동적 OG 이미지 API 구현 (백엔드)
Labels: priority: medium, category: SEO, size: L, week-2

Issue #7: 📍 Sitemap 및 robots.txt 생성
Labels: priority: medium, category: SEO, size: S, week-2

Issue #8: 📊 SEO 점수 측정 및 검증
Labels: priority: high, category: SEO, size: S, week-2
```

### Week 3-4: PWA 구현

```
Issue #9: 📱 Web App Manifest 생성
Labels: priority: critical, category: PWA, size: S, week-3

Issue #10: 🎨 앱 아이콘 생성 (72x72 ~ 512x512)
Labels: priority: high, category: PWA, size: M, week-3

Issue #11: ⚙️ Workbox 설치 및 Service Worker 기본 설정
Labels: priority: critical, category: PWA, size: M, week-3

Issue #12: 🔍 Service Worker 캐싱 전략 조사
Labels: priority: high, category: PWA, size: S, week-3

Issue #13: 💾 API 캐싱 (NetworkFirst) 구현
Labels: priority: high, category: PWA, size: M, week-3

Issue #14: 🖼 이미지 캐싱 (CacheFirst) 구현
Labels: priority: medium, category: PWA, size: S, week-3

Issue #15: 📄 오프라인 페이지 제작
Labels: priority: high, category: PWA, size: S, week-4

Issue #16: 📡 네트워크 상태 감지 컴포넌트
Labels: priority: medium, category: PWA, size: M, week-4

Issue #17: 📲 설치 프롬프트 구현
Labels: priority: high, category: PWA, size: M, week-4

Issue #18: 🔄 업데이트 알림 구현
Labels: priority: medium, category: PWA, size: S, week-4

Issue #19: ✅ PWA 점수 측정 및 검증
Labels: priority: critical, category: PWA, size: S, week-4
```

---

## 🎯 커밋 메시지 컨벤션

### 포맷
```
<type>(<scope>): <subject> #<issue-number>

<body>

<footer>
```

### Type 종류
```
feat:     새로운 기능 추가
fix:      버그 수정
perf:     성능 개선
refactor: 코드 리팩토링
style:    코드 포맷팅 (기능 변경 없음)
docs:     문서 수정
test:     테스트 코드 추가
chore:    빌드/패키지 매니저 설정
```

### 예시
```bash
# Good
git commit -m "feat(SEO): Add React Helmet to StartHost page #5"
git commit -m "perf: Implement code splitting for routes #23"
git commit -m "docs: Update PERFORMANCE_REPORT with week 2 results #15"

# Bad
git commit -m "update"
git commit -m "fix bug"
git commit -m "add feature"
```

### 이슈 자동 연결
```bash
# 이슈 진행 중
git commit -m "feat(PWA): Add Service Worker basic setup #11"

# 이슈 완료
git commit -m "feat(PWA): Add offline support

Closes #15"
```

---

## 📊 성과 추적 대시보드 (GitHub README)

**README.md 상단에 배지 추가:**

```markdown
# SHIFT 포트폴리오 리팩토링

![Progress](https://img.shields.io/badge/Progress-45%25-yellow)
![Lighthouse](https://img.shields.io/badge/Lighthouse-85-green)
![PWA](https://img.shields.io/badge/PWA-60-orange)

## 📊 현재 진행 상황

| Milestone | 진행률 | 완료 예정 |
|-----------|--------|-----------|
| Week 1: 기준선 측정 | ✅ 100% | 2025-01-10 |
| Week 2: SEO 최적화 | 🔄 60% | 2025-01-17 |
| Week 3-4: PWA 구현 | 📋 0% | 2025-01-31 |
| Week 5-6: 성능 최적화 | 📋 0% | 2025-02-14 |
| Week 7: 문서화 | 📋 0% | 2025-02-21 |
| Week 8: 배포 | 📋 0% | 2025-02-28 |

## 🎯 주요 성과

- Lighthouse 성능: 68 → 85 (+25%)
- LCP: 3.2s → 2.1s (-34%)
- SEO 점수: 65 → 85 (+31%)

[상세 보고서 →](./docs/PERFORMANCE_REPORT.md)
```

---

## ✅ 최종 추천 조합

### 메인 도구
**GitHub Projects + Issues** (필수)
- 프로젝트 관리의 중심
- 무료, 간단, 통합성

### 보조 도구 (선택)
1. **Notion**: 상세 학습 노트
2. **Toggl Track**: 시간 추적 (포트폴리오용)
3. **Excalidraw**: 다이어그램

### 최소 구성 (시간 부족 시)
- GitHub Projects만 사용
- 주간 리뷰는 반드시 작성
- 커밋 메시지에 이슈 번호 포함

---

## 🚀 시작하기 (30분 설정)

### 1단계: GitHub Project 생성 (10분)
```
1. 저장소 → Projects → New project
2. Board 템플릿 선택
3. 컬럼 생성: Backlog, To Do, In Progress, Review, Done
```

### 2단계: Labels 생성 (10분)
```
1. 저장소 → Issues → Labels
2. 우선순위, 카테고리, 크기, 주차 라벨 생성
```

### 3단계: Milestone 생성 (5분)
```
1. 저장소 → Issues → Milestones
2. Week 1-8 마일스톤 생성 (due date 포함)
```

### 4단계: 첫 이슈 생성 (5분)
```
Issue #1: Week 1 킥오프 - Lighthouse 측정

체크리스트:
- [ ] Lighthouse 실행
- [ ] 리포트 저장
- [ ] 문제점 분석

Labels: priority: critical, week-1
```

---

## 💡 성공 팁

### DO ✅
- **매일 GitHub Project 업데이트** (5분이면 충분)
- **작은 이슈로 쪼개기** (1-2일 단위)
- **완료한 것은 즉시 Done으로** (성취감!)
- **주간 리뷰는 필수** (학습 기록)
- **커밋 메시지에 이슈 번호** (#12)

### DON'T ❌
- 너무 복잡하게 만들지 않기
- 완벽한 계획 세우려고 시간 낭비
- 이슈 없이 작업 시작
- 진행 상황 업데이트 미루기
- 주간 리뷰 건너뛰기

---

## 📈 포트폴리오 가치

**면접에서 보여줄 수 있는 것:**

1. **체계적인 프로젝트 관리**
   > "GitHub Projects로 8주간 프로젝트를 관리했습니다."

2. **명확한 진행 상황 추적**
   > "각 Milestone별 완료율과 예정일을 관리했습니다."

3. **효율적인 시간 관리**
   > "98시간 투입으로 Lighthouse 38% 개선을 달성했습니다."

4. **문제 해결 과정 기록**
   > "Issues에 문제 인식부터 해결까지 전 과정이 기록되어 있습니다."

---

## 🎉 결론

**추천하는 프로젝트 관리 방법:**

```
메인: GitHub Projects + Issues (100% 무료)
보조: Notion (선택)
측정: Toggl Track (선택)

시간: 하루 5-10분 투자
효과: 체계적인 포트폴리오 + 면접 어필 포인트
```

**지금 바로 시작하세요!** 🚀

1. GitHub Project 생성 (10분)
2. Week 1 이슈 5개 생성 (10분)
3. 첫 작업 시작!
