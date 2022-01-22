const TESTS = [
	{
		id: 1,
        type:'EnI',
		question: "개강한 첫 날. 강의실로 향하는 길에 얼굴만 아는 동기를 오랜만에 마주쳤다. 나는",
		answers: [
			{ text: "이게 누구야 ! 당장 달려가서 아는 척 한다.", clickedFirst:true },
			{ text: "‘못알아봤겠지?’.... 못 본 척 눈을 돌리고 지나간다.", clickedFirst:false },
		],
	},
	{
		id: 2,
        type:'NnS',
		question: "어느덧 다가온 시험 기간. 시험 범위가 너무 많아 학교에서 밤샘 공부를 하게 되었다. 지금 시간은 새벽 3시. 화장실을 가려고 나왔는데 복도가 너무 어둡다.",
		answers: [
			{ text: "왜 이렇게 어둡냐... 무섭네", clickedFirst:true },
			{ text: "가다가 귀신 만나면 어떡하지? 못본 척하고 지나가야된다고 했는데 보자마자 놀라서 본 거 다 들키면 어떡하지?", clickedFirst:false },
		],
	},
	{
		id: 3,
        type:'TnF',
		question: "선배가 나를 불러 “너 그렇게 행동하면 아무도 너 안 좋아해”라고 했다. 이때의 나의 반응은?",
		answers: [
			{ text: "헉.... 어떻게 그렇게 말할 수 있어…? (마상..)", clickedFirst:false },
			{ text: "어쩔티비 너나 잘하세요~", clickedFirst:true  },
		],
	},
    {
		id: 4,
        type:'PnJ',
		question: "과제 마감일이 당장 코앞으로 다가왔다! 과제 제출 마감 6시간 전, 친구가 학교 앞에 새로 발견한 맛집이 있다고 나를 꼬신다.",
		answers: [
			{ text: "빨리 먹고 오면 제출할 수 있을 것 같은데? 일단 친구의 꼬심에 넘어간다.", clickedFirst:true  },
			{ text: "과제 제출이 먼저! 친구의 꼬심을 이겨내고 과제부터 한다.", clickedFirst:false},
		],
	},
];

export { TESTS };
