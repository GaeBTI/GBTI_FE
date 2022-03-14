# GBTI
### 개강해지는 MBTI
MBTI가 트렌드가 되면서 재밌는 사이트가 많아졌다. 재밌지만 이제는 조금 지루한 테스트 결과지.<br/>
**남들과 다를 수 있는 결과지**를 받아 볼 수 있도록 "카드 꾸미기"라는 기능을 넣었다.<br/>
대학교 개강 시즌에 맞춘 컨셉으로 다양한 스티커로 꾸민 본인만의 MBTI 카드를 가져갈 수 있다.<br/>

| 시작 페이지 | 테스트 페이지 | 카드 꾸미기 페이지 | 결과지 페이지 |
|----------|------------|---------------|-----------|
|<img src="https://user-images.githubusercontent.com/37644146/157196344-6c274122-fb31-406f-9b9d-6d8c0ee5ff8c.png" width="200"/>|<img src="https://user-images.githubusercontent.com/37644146/157196252-2c093177-b828-4485-85e9-d1d99db3d692.jpeg" width="200"/>|<img src="https://user-images.githubusercontent.com/37644146/157197199-445c347e-582e-435c-8f51-bdfb2610394b.jpeg" width="200"/>|<img src="https://user-images.githubusercontent.com/37644146/157196757-3fbf2652-1a73-4475-a106-8a1acffc10bf.png" width="200"/>|

### 사용법 How to use
https://gbti.site 접속


### 기술 스택 Stack
- React.js
- Javascript
- HTML
- yarn
- Netlify

### 사용 패키지 Used Package
- Konva
- PostCSS
- react-device-detect
- Styled-Components
- use-image
- web-vitals

🚧계속 업데이트 중....🏃‍♀️

-----
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
