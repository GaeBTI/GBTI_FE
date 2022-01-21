import React from "react";
import styled from "styled-components";
import TestBackgroundImg from '../assets/images/testBackgroundImg.png';
import TestBackgroundImgWithC from '../assets/images/testBackgroundImgWithC.png';
import TestTopCharacter from '../assets/images/testTopCharacter.png';

//flex container
const TestContainer=styled.div`
  height: 100vh;
  background-size : cover;
  background-image:url(${TestBackgroundImgWithC});
  display: flex;
	align-items: center;
	flex-direction: column;
`;
// width:287px;
//   heigth:278px;
// const ContentWrapper=styled.div`
//   margin-top: 136px;
//   width:287px;
// `;
const CharacterBox=styled.div`
  width:164px;
  
  background-size:cover;
  background-image:url(${TestTopCharacter});

`;
const QuestionBox=styled.div`
  background-color:grey;
  margin-top:136px;
  width:287px;
  height:278px;
  display:flex;
  align-items:center;
  justify-content: center;
`;
const QuestionText=styled.div`
  width:254px;
  font-size:20px;
  text-align:center;
`;
const AnswerBox=styled.div`
  background-color:yellow;
  margin-top:34px;
  width:288px;
  height:285px;
`;
function Test() {
  return (
    <TestContainer>
        <QuestionBox>
          <QuestionText>
          어느덧 다가온 시험 기간. 시험 범위가 너무 많아 학교에서 밤샘 공부를 하게 되었다. 지금 시간은 새벽 3시. 화장실을 가려고 나왔는데 복도가 너무 어둡다.
          </QuestionText> 
        </QuestionBox>
        <AnswerBox>

        </AnswerBox>
    </TestContainer>
    );
}

export default Test;
