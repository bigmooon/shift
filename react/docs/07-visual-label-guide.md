# 🎨 GitHub 라벨 생성 - 비주얼 단계별 가이드

## 🎯 목표: 23개 라벨 만들기 (15분)

---

## 📍 방법 선택

### ⚡ 빠른 방법: 자동 스크립트 (5분) - 추천!

```bash
# 1. 스크립트 다운로드 (제공된 labels-setup.sh)

# 2. 실행 권한 부여
chmod +x labels-setup.sh

# 3. 실행 (본인 저장소 정보로 변경)
./labels-setup.sh username/repository

예시:
./labels-setup.sh hongildong/shift-project
```

**결과:**
```
🏷️  GitHub Labels 생성 시작...
저장소: hongildong/shift-project

✓ GitHub CLI 확인 완료

[1/4] 우선순위 라벨 생성...
✓ priority: critical
✓ priority: high
✓ priority: medium
✓ priority: low

[2/4] 카테고리 라벨 생성...
✓ category: SEO
✓ category: PWA
✓ category: performance
...

✅ 라벨 생성 완료!
```

---

### 🖱️ 수동 방법: 클릭으로 생성 (15분)

---

## 📖 수동 생성 상세 가이드

### Step 1: GitHub Labels 페이지로 이동

```
┌──────────────────────────────────────────┐
│  GitHub.com                              │
├──────────────────────────────────────────┤
│                                          │
│  [본인 저장소]                           │
│                                          │
│  Code  Issues  Pull requests  Actions   │
│         ↑                                │
│      여기 클릭                           │
│                                          │
└──────────────────────────────────────────┘
```

**URL 직접 접속:**
```
https://github.com/본인ID/저장소이름/labels

예시:
https://github.com/hongildong/shift-project/labels
```

---

### Step 2: "Labels" 버튼 찾기

```
Issues 페이지에서:

┌──────────────────────────────────────────┐
│  [New issue] 버튼                        │
│                                          │
│  검색창: [is:issue is:open          ]   │
│                                          │
│  오른쪽에:                               │
│  [ Labels ]  [ Milestones ]             │
│     ↑                                    │
│  여기 클릭!                              │
└──────────────────────────────────────────┘
```

---

### Step 3: Labels 관리 페이지

```
┌──────────────────────────────────────────┐
│  Labels                                  │
│                          [New label] ←─  │
│                              여기 클릭!   │
├──────────────────────────────────────────┤
│                                          │
│  기본 라벨들:                            │
│  🐛 bug                                  │
│  📚 documentation                        │
│  ...                                     │
│                                          │
└──────────────────────────────────────────┘
```

---

### Step 4: 새 라벨 생성 폼

```
┌──────────────────────────────────────────┐
│  Create new label                        │
├──────────────────────────────────────────┤
│                                          │
│  Label name *                            │
│  ┌────────────────────────────────────┐ │
│  │ priority: critical                 │ │
│  └────────────────────────────────────┘ │
│                                          │
│  Description                             │
│  ┌────────────────────────────────────┐ │
│  │ 반드시 해야 함                      │ │
│  └────────────────────────────────────┘ │
│                                          │
│  Color                                   │
│  ┌──────────┐  [색상 선택기 🎨]         │
│  │ #d73a4a  │                           │
│  └──────────┘                           │
│                                          │
│     [Cancel]  [Create label]            │
│                     ↑                    │
│                  클릭!                    │
└──────────────────────────────────────────┘
```

---

## 🎨 라벨 목록 (복사해서 사용)

### 🔴 우선순위 라벨 (4개)

#### Label 1
```
Name: priority: critical
Color: d73a4a
Description: 반드시 해야 함
```

#### Label 2
```
Name: priority: high
Color: fbca04
Description: 중요한 작업
```

#### Label 3
```
Name: priority: medium
Color: 0e8a16
Description: 보통 우선순위
```

#### Label 4
```
Name: priority: low
Color: d4c5f9
Description: 시간 나면
```

---

### 📱 카테고리 라벨 (6개)

#### Label 5
```
Name: category: SEO
Color: ff6b6b
Description: SEO 최적화
```

#### Label 6
```
Name: category: PWA
Color: 4ecdc4
Description: PWA 구현
```

#### Label 7
```
Name: category: performance
Color: f7b731
Description: 성능 최적화
```

#### Label 8
```
Name: category: documentation
Color: 5f27cd
Description: 문서 작업
```

#### Label 9
```
Name: category: bug
Color: ee5a6f
Description: 버그 수정
```

#### Label 10
```
Name: category: learning
Color: a29bfe
Description: 학습/조사
```

---

### 📏 크기 라벨 (5개)

#### Label 11-15
```
Name: size: XS    | Color: c5f6fa | Description: 1-2시간
Name: size: S     | Color: 91d5ff | Description: 반나절
Name: size: M     | Color: 40a9ff | Description: 1일
Name: size: L     | Color: 1890ff | Description: 2-3일
Name: size: XL    | Color: 096dd9 | Description: 1주
```

---

### 📅 주차 라벨 (8개)

#### Label 16-23
```
Name: week-1 | Color: e1f5fe | Description: 1주차 작업
Name: week-2 | Color: b3e5fc | Description: 2주차 작업
Name: week-3 | Color: 81d4fa | Description: 3주차 작업
Name: week-4 | Color: 4fc3f7 | Description: 4주차 작업
Name: week-5 | Color: 29b6f6 | Description: 5주차 작업
Name: week-6 | Color: 03a9f4 | Description: 6주차 작업
Name: week-7 | Color: 039be5 | Description: 7주차 작업
Name: week-8 | Color: 0288d1 | Description: 8주차 작업
```

---

## ✅ 완료 확인

### 라벨이 제대로 생성되었는지 확인:

```
Labels 페이지에서 보이는 모습:

┌──────────────────────────────────────────┐
│  Labels (23)                    Search   │
├──────────────────────────────────────────┤
│                                          │
│  🔴 priority: critical                   │
│     반드시 해야 함                       │
│                                          │
│  🟡 priority: high                       │
│     중요한 작업                          │
│                                          │
│  🟢 priority: medium                     │
│     보통 우선순위                        │
│                                          │
│  ... (계속)                              │
│                                          │
└──────────────────────────────────────────┘
```

---

## 🎯 라벨 사용하기

### Issue 생성 시 라벨 적용

```
┌──────────────────────────────────────────┐
│  New issue                               │
├──────────────────────────────────────────┤
│  Title:                                  │
│  [React Helmet 도입                   ]  │
│                                          │
│  Comment:                                │
│  ┌────────────────────────────────────┐ │
│  │ ## 작업 설명                       │ │
│  │ React Helmet Async 설치...        │ │
│  └────────────────────────────────────┘ │
│                                          │
│  오른쪽 사이드바:                        │
│  ┌────────────────────────────────────┐ │
│  │ Assignees         [본인]           │ │
│  │                                    │ │
│  │ Labels            [⊕]              │ │
│  │                    ↑               │ │
│  │                 클릭하면            │ │
│  │                                    │ │
│  │  ☑ priority: high                 │ │
│  │  ☐ priority: medium               │ │
│  │  ☑ category: SEO                  │ │
│  │  ☑ size: M                        │ │
│  │  ☑ week-2                         │ │
│  │                                    │ │
│  └────────────────────────────────────┘ │
│                                          │
│  [Submit new issue]                     │
└──────────────────────────────────────────┘
```

### 결과

```
Issue #5: React Helmet 도입

🟡 priority: high
🔴 category: SEO
🔵 size: M
🔵 week-2

작업 내용...
```

---

## 🔍 라벨로 필터링

### 검색 방법

```
Issues 탭 검색창:

┌──────────────────────────────────────────┐
│  [is:open label:"week-2"              ] │
│                                          │
│  결과:                                   │
│  ✓ Issue #5: React Helmet 도입          │
│  ✓ Issue #6: OG 이미지 API              │
│  ✓ Issue #7: Sitemap 생성               │
│                                          │
│  (week-2 라벨이 달린 이슈만 표시)       │
└──────────────────────────────────────────┘
```

### 유용한 필터 예시

```bash
# 이번 주 작업
is:open label:"week-2"

# 높은 우선순위
is:open label:"priority: high"

# SEO 작업
is:open label:"category: SEO"

# 조합: 높은 우선순위 + SEO
is:open label:"priority: high" label:"category: SEO"

# 완료된 1주차 작업
is:closed label:"week-1"

# 진행 중인 작업
is:open assignee:@me
```

---

## 💡 꿀팁

### 1. 기본 라벨 정리

GitHub 기본 라벨 삭제하기:

```
Labels 페이지:

bug            [Edit] [Delete] ← 클릭
documentation  [Edit] [Delete] ← 클릭
duplicate      [Edit] [Delete] ← 클릭
enhancement    [Edit] [Delete] ← 클릭
...
```

### 2. 라벨 색상 빠르게 입력

**색상 코드 앞에 #는 빼고 입력하세요!**

```
✅ 올바름: d73a4a
❌ 틀림:   #d73a4a
```

### 3. Bulk 수정

여러 이슈에 한 번에 라벨 적용:

```
Issues 탭:
☑ Issue #1
☑ Issue #2  
☑ Issue #3
↓
상단에 "Label" 버튼 나타남
→ 클릭하여 일괄 적용
```

---

## 🚨 문제 해결

### Q: "New label" 버튼이 안 보여요
```
A: 저장소에 쓰기 권한이 있는지 확인하세요.
   본인 저장소여야 합니다.
```

### Q: 색상이 이상해요
```
A: # 기호를 빼고 6자리 코드만 입력하세요.
   예: d73a4a (O)
       #d73a4a (X)
```

### Q: 라벨이 너무 많아서 헷갈려요
```
A: 처음엔 필수 10개만 만드세요:
   - priority: high, medium
   - category: SEO, PWA, performance, documentation
   - week-1, 2, 3, 4
```

---

## 📊 예상 결과

### 완성된 라벨 리스트

```
Labels (23)

📍 priority: critical
📍 priority: high
📍 priority: medium
📍 priority: low

📁 category: SEO
📁 category: PWA
📁 category: performance
📁 category: documentation
📁 category: bug
📁 category: learning

📏 size: XS
📏 size: S
📏 size: M
📏 size: L
📏 size: XL

📅 week-1
📅 week-2
📅 week-3
📅 week-4
📅 week-5
📅 week-6
📅 week-7
📅 week-8
```

---

## 🎉 다음 단계

라벨 생성 완료! 이제:

1. **첫 이슈 만들기**
   ```
   Issue #1: Week 1 시작 - Lighthouse 측정
   Labels: priority: critical, category: performance, week-1
   ```

2. **Project 보드 설정**
   ```
   Projects 탭 → New project → Board 선택
   ```

3. **Milestone 생성**
   ```
   Issues → Milestones → Week 1, 2, 3...
   ```

**프로젝트 관리 준비 완료!** 🚀
