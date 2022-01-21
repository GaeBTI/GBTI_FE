# GBTI_FE

## Commit Convention
|prefix|commit message|
|------|--------------|
|feat|새로운 기능 추가|
|fix|버그 수정|
|docs|문서 수정|
|style|코드 포맷팅, 코드 변경이 없는 경우|
|refactor|코드 리팩토링|
|test|테스트 코드, 리팩토링 테스트 코드 추가|
|chore|빌드 업무 수정, 패키지 매니저 수정|

## **Git Branch 전략**

- master - 최종 완성 됐을 때 [develop] 으로부터 merge
- develop - 주기적으로 [feature/(기능)] 으로부터 merge
- feature - 기능 별 작업
- hotfix - 긴급 버그 수정(AWS 등)
