const TESTS = [
  {
    id: 1,
    type: "EnI",
    question: (
      <>
        개강 첫 날.
        <br />
        강의실로 향하는 길에
        <br />
        얼굴만 아는 동기를
        <br />
        오랜만에 마주쳤다. 나는?
      </>
    ),
    answers: [
      {
        text: (
          <>
            "이게 누구야 !"
            <br />
            당장 달려가서 아는 척 한다.
          </>
        ),
        clickedFirst: true,
      },
      {
        text: (
          <>
            오랜만이긴한데..
            <br />
            굳이 인사할 필요까진 없겠지..?!
          </>
        ),
        clickedFirst: false,
      },
    ],
  },
  {
    id: 2,
    type: "NnS",
    question: (
      <>
        시험 범위가 너무 많아
        <br />
        학교에서 밤샘 공부를 하게 되었다.
        <br />
        지금 시간은 새벽 3시.
        <br />
        화장실을 가려고 나왔는데
        <br />
        복도가 너무 어둡다.
      </>
    ),
    answers: [
      {
        text: (
          <>
            "가다가 귀신 만나면 어떡하지?
            <br />
            못본 척하고 지나가야된다고 했는데
          </>
        ),
        clickedFirst: true,
      },
      { text: "왜 이렇게 어둡냐... 무섭네", clickedFirst: false },
    ],
  },
  {
    id: 3,
    type: "TnF",
    question: (
      <>
        선배가 나를 불러
        <br />
        “너 그렇게 행동하면
        <br />
        아무도 너 안 좋아해”라고 했다.
        <br />
        이때의 나의 반응은?
      </>
    ),
    answers: [
      { text: "아  예.. (어쩌라는거지)", clickedFirst: true }, //"어쩔티비 너나 잘하세요~"
      {
        text: (
          <>
            헐... (마상..)
            <br /> 어떻게 저런 심한 말을 하지…?
          </>
        ),
        clickedFirst: false,
      },
    ],
  },
  {
    id: 4,
    type: "PnJ",
    question: (
      <>
        중간고사 3시간 전,
        <br />
        남은 시험 범위는 PPT 50장..!!
        <br />
        친구가 학교 앞에 새로 발견한 맛집이 있다고 나를 꼬신다.
      </>
    ),
    answers: [
      {
        text: (
          <>
            일단 밥은 먹어야지..
            <br />
            빨리 먹고 오면 괜찮지 않을까?ㅎ
          </>
        ),
        clickedFirst: true,
      },
      {
        text: (
          <>
            아니야 그래도 시험 공부가 먼저!
            <br />
            친구의 꼬심을 이겨내고 공부에 집중한다.
          </>
        ),
        clickedFirst: false,
      },
    ],
  },
  {
    id: 5,
    type: "EnI",
    question: (
      <>
        팀플을 하게 되었다.
        <br />
        어색한 첫 모임에 나는 주로
      </>
    ),
    answers: [
      {
        text: (
          <>
            내가 먼저 나서서 인사한다.
            <br />
            “안녕하세요. 잘부탁드립니다!!!
            <br />
            22학번 OOO입니다~”
          </>
        ),
        clickedFirst: true,
      },
      {
        text: (
          <>
            눈치보다가 마지막에 조용히 인사한다.
            <br />
            “안녕하세요...!
            <br />
            22학번 OOO입니다...
            <br /> 잘부탁드려요...!”{" "}
          </>
        ),
        clickedFirst: false,
      },
    ],
  },
  {
    id: 6,
    type: "NnS",
    question: (
      <>
        수업이 끝나기 10분 전.
        <br />
        교수님의 몇가닥 남지 않은
        <br />
        머리에 시선이 꽂힌다.
        <br />
        나는 무슨 생각을 할까?
      </>
    ),
    answers: [
      {
        text: "저 교수님은 언제부터 대머리였을까?유전적 탈모이실까? 스트레스성 탈모이실까?",
        clickedFirst: true,
      },
      { text: "언제 끝나냐....", clickedFirst: false },
    ],
  },
  {
    id: 7,
    type: "TnF",
    question: (
      <>
        동기가 중간고사 망했다고
        <br />
        우울해하고 있다면
      </>
    ),
    answers: [
      {
        text: (
          <>
            "야, 원래 기말이 진짜잖아.
            <br />
            기말 때 잘 보면 되지! 그럼 그냥 A 완전 가능!” 라고 말해준다.
          </>
        ),
        clickedFirst: true,
      },
      {
        text: (
          <>
            “너가 어려웠으면
            <br />
            다른 애들도 어려웠을거야…
            <br /> 너무 속상해하지말자 ㅜㅜ“라고 말해준다.
          </>
        ),
        clickedFirst: false,
      },
    ],
  },
  {
    id: 8,
    type: "PnJ",
    question: (
      <>
        기말 프로젝트 발표를 하기 전<br />
        내가 하는 행동은?
      </>
    ),
    answers: [
      {
        text: (
          <>
            어떻게든 되겠지~
            <br /> "어차피 PPT 보고 하는 건데
            <br />
            보면서 하면 되지!"
          </>
        ),
        clickedFirst: true,
      },
      {
        text: (
          <>
            발표 대본에 예상 질문 리스트는 기본!
            <br />
            발표 중 발생할 수 있는 모든 상황을
            <br />
            머릿속에서 시뮬레이션을 돌려본다.
          </>
        ),
        clickedFirst: false,
      },
    ],
  },
  {
    id: 9,
    type: "EnI",
    question: (
      <>
        수업이 끝나고 폰을 보니
        <br />과 단톡에 3시간 뒤<br />
        뫄뫄학과 개강총회가 열린다는
        <br />
        공지가 올라왔다.
      </>
    ),
    answers: [
      {
        text: (
          <>
            당장 가야지!!
            <br />
            오랜만에 동기들도 보고 기대된당
            <br />
            ^0^
          </>
        ),
        clickedFirst: true,
      },
      {
        text: (
          <>
            상상만 해도 기빨려..
            <br />
            그리고 3시간동안 뭐하면서 기다려..
            <br />
            집에나 갈래
          </>
        ),
        clickedFirst: false,
      },
    ],
  },
  {
    id: 10,
    type: "NnS",
    question: (
      <>
        교수님이 리포트 주제로
        <br />
        “가위바위보의 유래”를 주셨다.
      </>
    ),
    answers: [
      {
        text: "가위바위보는 누가 가장 먼저 시작했을까? 왜 하기 시작한거지? 신기하다!!",
        clickedFirst: true,
      },
      {
        text: (
          <>
            가위바위보 저작권 등록했으면
            <br />돈 많이 벌었을텐데..ㅎ
          </>
        ),
        clickedFirst: false,
      },
    ],
  },
  {
    id: 11,
    type: "TnF",
    question: (
      <>
        프로젝트 발표 후 수업을
        <br />
        같이 들은 동기들이 칭찬을 해줬다.
        <br />
        어떤 칭찬이 더 기분 좋을까?
      </>
    ),
    answers: [
      {
        text: (
          <>
            신경 별로 안쓰는 것 같더니
            <br />
            진짜 잘했네. 천재 아니야..???
          </>
        ),
        clickedFirst: true,
      }, //별로 열심히 하는 것 같지도 않았는데
      {
        text: (
          <>
            진짜 수고 많았어!
            <br />
            열심히 하더니 진짜 너가 제일 잘한듯!!
          </>
        ),
        clickedFirst: false,
      },
    ],
  },
  {
    id: 12,
    type: "PnJ",
    question: (
      <>
        교수님이 과제를 내주셨다.
        <br />
        마감은 7일 후 자정이다.
      </>
    ),
    answers: [
      {
        text: (
          <>
            지금 당장 계획짜기 시작!
            <br />
            과제는 나온 날 시작해야지!
          </>
        ),
        clickedFirst: false,
      },
      {
        text: (
          <>
            다음주까지라고?
            <br />
            그럼 일단 오늘은 놀아야지~
          </>
        ),
        clickedFirst: true,
      },
    ],
  },
];

export { TESTS };
