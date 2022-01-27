import React from "react";
import styled from "styled-components";
import QuestionBoxImg from '../../assets/images/questionBoxImg.svg';
import { TESTS } from "../../assets/texts/questions"

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
  font-family:HSYuji-Regular;

  position:absolute;
`;
const QuestionText=styled.div`
  width:254px;
  position:absolute;
  left: 6.27%;
  right: 5.23%;
  top: 30.61%;
  bottom: 0.91%;

  font-family:IM_Hyemin-Regular;
  font-size:20px;
  text-align:center;
`;

const QuestionSection =({currentNum})=>{
    return (
        <QuestionBox currentNum={currentNum}>
            <QuestionNumText>{TESTS[currentNum].id}/{TESTS.length}</QuestionNumText>
            <QuestionText>{TESTS[currentNum].question}</QuestionText> 
        </QuestionBox>
    );
}

export default QuestionSection;