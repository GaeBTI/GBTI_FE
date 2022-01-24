import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TestBackgroundImg from '../assets/images/testBackgroundImg.svg';
import QuestionBoxImg from '../assets/images/questionBoxImg.svg';
import AnswerButtonImg1 from '../assets/images/answerButtonImg1.svg';
import AnswerButtonImg2 from '../assets/images/answerButtonImg2.svg';
import { TESTS } from "../assets/texts/questions"

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
const QuestionBox=styled.div`
  background-image:url(${QuestionBoxImg});

  margin-bottom:22px;
  width:294px;
  height:327px;

  display:flex;
	flex-direction: column;
	align-items: center;

  position:relative;
`;
const QuestionNumText=styled.div`
  width:83px;
  height:44px;
  margin: 50px 15px 7px 223px;
  
  font-size:22px;
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
  width:290px;
  height:290px;
`;

const AnswerButton=styled.button`
  width:290px;
  height:134px;
  margin-bottom:32px;
	border: 0px;
  background-color:transparent;
  div{
    font-size:16px;
    text-align:center;
    width:240px;
    margin: 26px 20px 13px 20px;
  }
`; //280*116


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
	};
  return (
    <TestContainer>
        <QuestionBox>
          <QuestionNumText>{TESTS[currentNum].id}/{TESTS.length}</QuestionNumText>
          <QuestionText>{TESTS[currentNum].question}</QuestionText> 
        </QuestionBox>
        <AnswerBox>
          <AnswerButton 
            style={{backgroundImage:`url(${AnswerButtonImg1})`}}
            onClick={()=>handleClick(TESTS[currentNum].type,TESTS[currentNum].answers[0].clickedFirst)}
          >
            <div>{TESTS[currentNum].answers[0].text}</div>
          </AnswerButton>
          <AnswerButton 
            style={{backgroundImage:`url(${AnswerButtonImg2})`}}
            onClick={()=>handleClick(TESTS[currentNum].type,TESTS[currentNum].answers[1].clickedFirst)}
          >
            <div>{TESTS[currentNum].answers[1].text}</div>
          </AnswerButton>
        </AnswerBox>
    </TestContainer>
    );
}

export default Test;