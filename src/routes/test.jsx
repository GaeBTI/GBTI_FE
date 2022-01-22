import React, { useState } from "react";
import styled from "styled-components";
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
  height:285px;
`;
function Test() {
  const[currentNum,setCurrentNum]=useState(0);

  return (
    <TestContainer>
        <CharacterImgBox src={TestTopCharacter}/>
        <QuestionBox>
          <QuestionNumText>{TESTS[currentNum].id}/{TESTS.length}</QuestionNumText>
          <QuestionText>{TESTS[currentNum].question}</QuestionText> 
        </QuestionBox>
        <AnswerBox>

        </AnswerBox>
    </TestContainer>
    );
}

export default Test;
