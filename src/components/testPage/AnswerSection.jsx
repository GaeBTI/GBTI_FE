import React from "react";
import styled from "styled-components";
import { TESTS } from "../../assets/texts/questions"
import { AnswerBGImg1,AnswerBGImg2 } from "./testIcons";
const AnswerBox=styled.div`
  width:288px;
  height:288px;
`;
const AnswerButtonBox=styled.div`
  position:relative;

  width:288px;
  height:135px;
  
  margin-bottom:18px;
`;
const AnswerButton=styled.button`
  position:absolute;
  left: 8px;
  top: 10px;

  width:270px;
  height:124px;
	border: 0px;
  background-color:transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 0.94rem;
  line-height: 25px;
  text-align: center;
  color: #3C3C3C;
`; //280*116

const AnswerSection=({currentNum,handleClick})=>{
    let random=Math.floor((Math.random(0,100)*(100))%2); // 답지가 매번 다르게 나오도록 난수 생성
    console.log(random);
    return (
        <AnswerBox>
            <AnswerButtonBox>
              <AnswerBGImg1/>
              <AnswerButton
                onClick={()=>handleClick(TESTS[currentNum].type,TESTS[currentNum].answers[random%2===0?0:1].clickedFirst)}
              >
                {TESTS[currentNum].answers[random%2===0?0:1].text}
              </AnswerButton>
            </AnswerButtonBox>
            <AnswerButtonBox>
              <AnswerBGImg2/>
              <AnswerButton
                onClick={()=>handleClick(TESTS[currentNum].type,TESTS[currentNum].answers[random%2===0?1:0].clickedFirst)}
              >
                {TESTS[currentNum].answers[random%2===0?1:0].text}
              </AnswerButton>
            </AnswerButtonBox>
        </AnswerBox>
    );
};
export default AnswerSection;