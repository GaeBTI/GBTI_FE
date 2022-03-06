import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TESTS } from "../assets/texts/questions"
import {QuestionSection,AnswerSection} from "../components/testPage";
import Container from "../components/common/Container";

function Test({setScores}) {
  let navigate=useNavigate(); // 결과 페이지로 이동하기 위한 hook
  const[currentNum,setCurrentNum]=useState(0); // 현재 어떤 문제를 풀고 있는지에 대한 state, TESTS의 index로 활용

  const handleClick = (type,clickedFirst) => {
    // 답 골랐을 때의 이벤트 처리 함수
    setScores((scores)=>{
      // type에 맞춰 score 업데이트
      let newScores = scores.map((scoreObj)=>{
        return (scoreObj.type===type // scoreObj 중 type이 같은 객체에 점수를 기록한다
        ? ( clickedFirst
            ? {...scoreObj,score:scoreObj.score+1} // 양수일수록 type 앞 유형으로 구분
            : {...scoreObj,score:scoreObj.score-1} // 음수일수록 type 뒷 유형으로 구분
          ): scoreObj
        )
      })
      return newScores;
    });
    if(currentNum===TESTS.length-1){
      // 모든 문제를 다 풀었다면 /loading 페이지로 이동하도록 push
      navigate("/loading");
    } else{
      // 다음 문제로 넘어가기
      setCurrentNum((currentNum)=>currentNum+1);
    }
	};

  return (
    <Container>
        <QuestionSection currentNum={currentNum}/>
        <AnswerSection currentNum={currentNum} handleClick={handleClick}/>
    </Container>
    );
}

export default Test;