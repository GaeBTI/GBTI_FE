import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TestBackgroundImg from '../assets/images/testBackgroundImg.png';
import TestBackgroundImgWithC from '../assets/images/testBackgroundImgWithC.png';
import TestTopCharacter from '../assets/images/testTopCharacter.png';
import {TESTS} from "../assets/texts/questions"

//flex container
const TestContainer=styled.div`
  widht:100vw;
  height: 100vh;
  background-size : cover;
  background-image:url(${TestBackgroundImg});
  display: flex;
	align-items: center;
  justify-content:center;
	flex-direction: column;
`;
// width:287px;
//   heigth:278px;
// const ContentWrapper=styled.div`
//   margin-top: 136px;
//   width:287px;
// `;
const CharacterImgBox=styled.img`
  max-width: 100%;
  display: block;
`;
const QuestionBox=styled.div`
  background-color:grey;

  margin-bottom:34px;
  width:287px;
  height:278px;

  display:flex;
	flex-direction: column;
	align-items: center;

  position:relative;
`;
const QuestionNumText=styled.div`
  width:83px;
  height:44px;
  margin: 4px 11px 2px 193px;
  
  font-size:20px;
  text-align:center;
  line-height:44px;

  position:absolute;
`;
const QuestionText=styled.div`
  width:254px;
  font-size:20px;
  text-align:center;
  position:absolute;
  top:50%;
  transform:translate(0,-50%);
`;
const AnswerBox=styled.div`
  background-color:yellow;
  width:287px;
  height:280px;
`;

const AnswerButton=styled.button`
  background-color: green;
  width:287px;
  height:124px;
  margin-bottom:32px;
  font-size:16px;
  text-align:center;
`;
function Test({setScores}) {
  let navigate=useNavigate();
  const[currentNum,setCurrentNum]=useState(0);
  const handleClick = (type,clickedFirst) => {
    console.log(type,clickedFirst);
    setScores((scores)=>{
      let newScores = scores.map((scoreObj)=>{
        return (scoreObj.type===type 
        ? ( clickedFirst
            ? {...scoreObj,score:scoreObj.score+1}
            : {...scoreObj,score:scoreObj.score-1}
          ): scoreObj
        )
      })
      console.log(newScores);
      return newScores;
    });
    if(currentNum===TESTS.length-1){
      console.log("last page of Test");
      navigate("/loading");
    } else{
      setCurrentNum((currentNum)=>currentNum+1);
    }
		// if (isCorrect) {
		// 	setScore((score) => score + 1);
		// }
		// // 마지막 퀴즈인지 체크하기
		// if (currentNo === QUIZZES.length - 1) {
		// 	history.push("/loading");
		// } else {
		// 	setCurrentNo((currentNo) => currentNo + 1);
		// }
	};
  return (
    <TestContainer>
        <CharacterImgBox src={TestTopCharacter}/>
        <QuestionBox>
          <QuestionNumText>{TESTS[currentNum].id}/{TESTS.length}</QuestionNumText>
          <QuestionText>{TESTS[currentNum].question}</QuestionText> 
        </QuestionBox>
        <AnswerBox>
          <AnswerButton onClick={()=>handleClick(TESTS[currentNum].type,TESTS[currentNum].answers[0].clickedFirst)}>{TESTS[currentNum].answers[0].text}</AnswerButton>
          <AnswerButton onClick={()=>handleClick(TESTS[currentNum].type,TESTS[currentNum].answers[1].clickedFirst)}>{TESTS[currentNum].answers[1].text}</AnswerButton>
        </AnswerBox>
    </TestContainer>
    );
}

export default Test;
