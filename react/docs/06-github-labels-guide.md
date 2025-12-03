# GitHub Labels 생성 완벽 가이드

## 🎯 라벨이란?

라벨(Labels)은 GitHub 이슈를 분류하고 필터링하는 태그입니다.
예: `priority: high`, `category: SEO`, `week-2`

---

## 📋 방법 1: 웹 UI에서 수동 생성 (추천 - 초보자)

### Step 1: Labels 페이지 이동

```
1. GitHub에서 본인의 저장소로 이동
   예: https://github.com/username/shift-project

2. 상단 메뉴에서 "Issues" 탭 클릭

3. 오른쪽에 "Labels" 버튼 클릭
   (또는 직접 URL: https://github.com/username/repo/labels)
```

### Step 2: 새 라벨 생성

```
1. 오른쪽 상단 "New label" 버튼 클릭

2. 입력 필드:
   - Label name: 라벨 이름 (예: priority: high)
   - Description: 설명 (선택사항)
   - Color: 색상 선택 (16진수 코드)

3. "Create label" 버튼 클릭
```

### Step 3: 포트폴리오용 라벨 목록

#### 🔴 우선순위 라벨

| Label Name | Color | Description |
|------------|-------|-------------|
| `priority: critical` | `#d73a4a` (빨강) | 반드시 해야 함 |
| `priority: high` | `#fbca04` (노랑) | 중요한 작업 |
| `priority: medium` | `#0e8a16` (초록) | 보통 우선순위 |
| `priority: low` | `#d4c5f9` (보라) | 시간 나면 |

#### 📱 카테고리 라벨

| Label Name | Color | Description |
|------------|-------|-------------|
| `category: SEO` | `#ff6b6b` (연한 빨강) | SEO 최적화 |
| `category: PWA` | `#4ecdc4` (청록) | PWA 구현 |
| `category: performance` | `#f7b731` (주황) | 성능 최적화 |
| `category: documentation` | `#5f27cd` (보라) | 문서 작업 |
| `category: bug` | `#ee5a6f` (분홍) | 버그 수정 |
| `category: learning` | `#a29bfe` (연보라) | 학습/조사 |

#### 📏 작업 크기 라벨

| Label Name | Color | Description |
|------------|-------|-------------|
| `size: XS` | `#c5f6fa` (매우 연한 파랑) | 1-2시간 |
| `size: S` | `#91d5ff` (연한 파랑) | 반나절 |
| `size: M` | `#40a9ff` (파랑) | 1일 |
| `size: L` | `#1890ff` (진한 파랑) | 2-3일 |
| `size: XL` | `#096dd9` (매우 진한 파랑) | 1주 |

#### 📅 주차 라벨

| Label Name | Color | Description |
|------------|-------|-------------|
| `week-1` | `#e1f5fe` | 1주차 작업 |
| `week-2` | `#b3e5fc` | 2주차 작업 |
| `week-3` | `#81d4fa` | 3주차 작업 |
| `week-4` | `#4fc3f7` | 4주차 작업 |
| `week-5` | `#29b6f6` | 5주차 작업 |
| `week-6` | `#03a9f4` | 6주차 작업 |
| `week-7` | `#039be5` | 7주차 작업 |
| `week-8` | `#0288d1` | 8주차 작업 |

---

## 🚀 방법 2: GitHub CLI로 자동 생성 (추천 - 빠름!)

### Step 1: GitHub CLI 설치

**Mac:**
```bash
brew install gh
```

**Windows:**
```bash
winget install --id GitHub.cli
```

**Linux:**
```bash
# Debian/Ubuntu
sudo apt install gh

# Fedora/RHEL
sudo dnf install gh
```

### Step 2: 로그인

```bash
gh auth login

# 브라우저로 인증하거나 토큰 입력
```

### Step 3: 라벨 일괄 생성 스크립트

**labels-setup.sh** 파일 생성:

```bash
#!/bin/bash

# 저장소 정보 (본인 것으로 변경)
REPO="username/shift-project"

echo "🏷️  라벨 생성 시작..."

# 우선순위 라벨
gh label create "priority: critical" --color "d73a4a" --description "반드시 해야 함" --repo $REPO
gh label create "priority: high" --color "fbca04" --description "중요한 작업" --repo $REPO
gh label create "priority: medium" --color "0e8a16" --description "보통 우선순위" --repo $REPO
gh label create "priority: low" --color "d4c5f9" --description "시간 나면" --repo $REPO

# 카테고리 라벨
gh label create "category: SEO" --color "ff6b6b" --description "SEO 최적화" --repo $REPO
gh label create "category: PWA" --color "4ecdc4" --description "PWA 구현" --repo $REPO
gh label create "category: performance" --color "f7b731" --description "성능 최적화" --repo $REPO
gh label create "category: documentation" --color "5f27cd" --description "문서 작업" --repo $REPO
gh label create "category: bug" --color "ee5a6f" --description "버그 수정" --repo $REPO
gh label create "category: learning" --color "a29bfe" --description "학습/조사" --repo $REPO

# 크기 라벨
gh label create "size: XS" --color "c5f6fa" --description "1-2시간" --repo $REPO
gh label create "size: S" --color "91d5ff" --description "반나절" --repo $REPO
gh label create "size: M" --color "40a9ff" --description "1일" --repo $REPO
gh label create "size: L" --color "1890ff" --description "2-3일" --repo $REPO
gh label create "size: XL" --color "096dd9" --description "1주" --repo $REPO

# 주차 라벨
for i in {1..8}; do
  # 파란색 계열 그라데이션
  colors=("e1f5fe" "b3e5fc" "81d4fa" "4fc3f7" "29b6f6" "03a9f4" "039be5" "0288d1")
  color=${colors[$((i-1))]}
  gh label create "week-$i" --color "$color" --description "${i}주차 작업" --repo $REPO
done

echo "✅ 라벨 생성 완료!"
```

### Step 4: 스크립트 실행

```bash
# 실행 권한 부여
chmod +x labels-setup.sh

# 실행
./labels-setup.sh
```

---

## 📋 방법 3: 수동 생성 체크리스트 (클릭클릭)

### 우선순위 라벨 (4개)

- [ ] **priority: critical**
  ```
  Name: priority: critical
  Color: #d73a4a
  Description: 반드시 해야 함
  ```

- [ ] **priority: high**
  ```
  Name: priority: high
  Color: #fbca04
  Description: 중요한 작업
  ```

- [ ] **priority: medium**
  ```
  Name: priority: medium
  Color: #0e8a16
  Description: 보통 우선순위
  ```

- [ ] **priority: low**
  ```
  Name: priority: low
  Color: #d4c5f9
  Description: 시간 나면
  ```

### 카테고리 라벨 (6개)

- [ ] **category: SEO**
  ```
  Name: category: SEO
  Color: #ff6b6b
  Description: SEO 최적화
  ```

- [ ] **category: PWA**
  ```
  Name: category: PWA
  Color: #4ecdc4
  Description: PWA 구현
  ```

- [ ] **category: performance**
  ```
  Name: category: performance
  Color: #f7b731
  Description: 성능 최적화
  ```

- [ ] **category: documentation**
  ```
  Name: category: documentation
  Color: #5f27cd
  Description: 문서 작업
  ```

- [ ] **category: bug**
  ```
  Name: category: bug
  Color: #ee5a6f
  Description: 버그 수정
  ```

- [ ] **category: learning**
  ```
  Name: category: learning
  Color: #a29bfe
  Description: 학습/조사
  ```

### 크기 라벨 (5개)

- [ ] **size: XS** → Color: `#c5f6fa` → "1-2시간"
- [ ] **size: S** → Color: `#91d5ff` → "반나절"
- [ ] **size: M** → Color: `#40a9ff` → "1일"
- [ ] **size: L** → Color: `#1890ff` → "2-3일"
- [ ] **size: XL** → Color: `#096dd9` → "1주"

### 주차 라벨 (8개)

- [ ] **week-1** → Color: `#e1f5fe`
- [ ] **week-2** → Color: `#b3e5fc`
- [ ] **week-3** → Color: `#81d4fa`
- [ ] **week-4** → Color: `#4fc3f7`
- [ ] **week-5** → Color: `#29b6f6`
- [ ] **week-6** → Color: `#03a9f4`
- [ ] **week-7** → Color: `#039be5`
- [ ] **week-8** → Color: `#0288d1`

**총 23개 라벨** ✅

---

## 🎨 라벨 사용 예시

### Issue 생성 시 라벨 적용

```
1. New issue 클릭

2. 오른쪽 사이드바에서 "Labels" 클릭

3. 원하는 라벨 선택 (다중 선택 가능)
   예: 
   - priority: high
   - category: SEO
   - size: M
   - week-2

4. 이슈 내용 작성 후 "Submit new issue"
```

### 이슈 예시

**Issue #5: React Helmet 도입**

```markdown
## 📋 작업 설명
React Helmet Async로 동적 메타 태그 구현

## 🎯 체크리스트
- [ ] 패키지 설치
- [ ] Provider 설정
- [ ] StartHost 적용

## ⏱ 예상 시간
1일
```

**적용된 라벨:**
- 🟡 `priority: high`
- 🔴 `category: SEO`
- 🔵 `size: M`
- 🔵 `week-2`

---

## 🔍 라벨로 필터링하기

### 이슈 필터링

```
Issues 탭 → 검색창에 입력:

# 이번 주 작업만 보기
is:open label:"week-2"

# 높은 우선순위만
is:open label:"priority: high"

# SEO 관련 작업
is:open label:"category: SEO"

# 조합 (SEO + 높은 우선순위)
is:open label:"priority: high" label:"category: SEO"

# 완료된 작업
is:closed label:"week-1"
```

---

## 💡 꿀팁

### 1. 기본 라벨 삭제하기

GitHub는 기본으로 `bug`, `enhancement` 등을 제공합니다.
사용하지 않으면 삭제하세요.

```
Labels 페이지 → 라벨 옆 "Delete" 클릭
```

### 2. 라벨 수정하기

```
Labels 페이지 → 라벨 옆 "Edit" 클릭
→ 이름/색상/설명 수정 가능
```

### 3. 이모지 활용

라벨 이름에 이모지를 넣을 수 있습니다!

```
🔴 priority: critical
📱 category: PWA
⚡ category: performance
```

**입력 방법:**
- Mac: `Cmd + Ctrl + Space`
- Windows: `Win + .`

### 4. 라벨 그룹화

콜론(`:`)을 사용하면 자동으로 그룹화됩니다.

```
priority: critical
priority: high
priority: medium
↓
GitHub에서 "priority" 그룹으로 표시
```

### 5. 색상 추천 사이트

- [Coolors.co](https://coolors.co/) - 색상 팔레트 생성
- [Flat UI Colors](https://flatuicolors.com/) - 예쁜 색상 모음

---

## 🎯 빠른 시작 (5분)

### 최소 필수 라벨 (10개만)

시간이 없다면 이것만 만드세요:

```
우선순위:
✅ priority: high (#fbca04)
✅ priority: medium (#0e8a16)

카테고리:
✅ category: SEO (#ff6b6b)
✅ category: PWA (#4ecdc4)
✅ category: performance (#f7b731)
✅ category: documentation (#5f27cd)

주차:
✅ week-1 (#e1f5fe)
✅ week-2 (#b3e5fc)
✅ week-3 (#81d4fa)
✅ week-4 (#4fc3f7)
```

---

## 📸 스크린샷 가이드

### 1. Labels 페이지 위치

```
GitHub 저장소 메인 페이지
↓
상단 탭에서 "Issues" 클릭
↓
오른쪽에 "Labels" 버튼
↓
Labels 관리 페이지
```

### 2. New label 버튼

```
Labels 페이지 오른쪽 상단
↓
"New label" 초록색 버튼
↓
입력 폼 표시
```

### 3. 라벨 생성 폼

```
┌─────────────────────────────┐
│ Label name                  │
│ [priority: high          ]  │
│                             │
│ Description (optional)      │
│ [중요한 작업              ]  │
│                             │
│ Color                       │
│ [#fbca04] [색상 선택기]    │
│                             │
│ [Create label]              │
└─────────────────────────────┘
```

---

## ✅ 완료 체크리스트

라벨 설정이 완료되면 확인하세요:

- [ ] Labels 페이지에 23개 라벨 생성됨
- [ ] 색상이 보기 좋게 구분됨
- [ ] 테스트 이슈를 만들어서 라벨 적용해봄
- [ ] 라벨로 필터링이 잘 되는지 확인

---

## 🚨 문제 해결

### Q: "Permission denied" 에러가 나요
**A:** 저장소에 대한 쓰기 권한이 필요합니다. 본인 저장소인지 확인하세요.

### Q: 라벨이 너무 많아요
**A:** 처음엔 최소 10개만 만들고, 필요할 때 추가하세요.

### Q: 색상 코드를 잘 모르겠어요
**A:** GitHub 색상 선택기에서 클릭해서 선택하면 됩니다.

### Q: CLI 스크립트가 안 돼요
**A:** 
```bash
# 저장소 정보가 맞는지 확인
REPO="본인username/저장소이름"

# gh CLI 로그인 확인
gh auth status
```

---

## 🎉 완성 예시

라벨 설정이 끝나면 이렇게 보입니다:

```
Labels (23)

🔴 priority: critical
🟡 priority: high
🟢 priority: medium
⚪ priority: low

🔴 category: SEO
📱 category: PWA
⚡ category: performance
📝 category: documentation
🐛 category: bug
📚 category: learning

🐁 size: XS
🐇 size: S
🐕 size: M
🐘 size: L
🦕 size: XL

📅 week-1
📅 week-2
📅 week-3
📅 week-4
📅 week-5
📅 week-6
📅 week-7
📅 week-8
```

**이제 이슈 관리 준비 완료!** 🚀

---

## 📚 다음 단계

라벨을 만들었으면:

1. ✅ **첫 이슈 생성**
   ```
   Issue #1: Week 1 시작 - Lighthouse 측정
   Labels: priority: critical, week-1
   ```

2. ✅ **Milestone 생성**
   ```
   Issues → Milestones → New milestone
   ```

3. ✅ **Project 보드에 연결**
   ```
   Projects → Add to project
   ```

모든 준비 완료! 🎊
