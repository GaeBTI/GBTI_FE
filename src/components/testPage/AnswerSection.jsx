import React from "react";
import styled from "styled-components";
import AnswerButtonImg1 from '../../assets/images/answerButtonImg1.svg';
import AnswerButtonImg2 from '../../assets/images/answerButtonImg2.svg';
import { TESTS } from "../../assets/texts/questions"
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
    font-family:"IM_Hyemin-Regular";
  }
`; //280*116

const AnswerText=styled.span`
`;
const AnswerSection=({currentNum,handleClick})=>{
    return (
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
    );
};
export default AnswerSection;