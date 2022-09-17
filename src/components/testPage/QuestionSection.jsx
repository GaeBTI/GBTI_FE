import React from "react";
import styled from "styled-components";
import { TESTS } from "../../assets/texts/questions";
import { QuestionBGImg } from "./testIcons";

const QuestionSection = ({ currentNum }) => {
  return (
    <QuestionBox currentNum={currentNum}>
      <QuestionBGImg />
      <QuestionNumText>
        {TESTS[currentNum].id}/{TESTS.length}
      </QuestionNumText>
      <QuestionTextBox>
        <div>{TESTS[currentNum].question}</div>
      </QuestionTextBox>
    </QuestionBox>
  );
};

const QuestionBox = styled.div`
  margin-bottom: 1.3rem;
  width: 287px;
  height: 355px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;
const QuestionNumText = styled.div`
  width: 56px;
  height: 35px;

  position: absolute;

  left: 78%;
  top: 25%;

  font-size: 1.4rem;
  color: ${(theme) => theme.primary};
  text-align: center;
  line-height: 35px;
  font-family: HSYuji-Regular;
`;
//88px 5px 0px 215px;

const QuestionTextBox = styled.div`
  width: 287px;
  height: 280px;
  position: absolute;
  padding-block: 75px;

  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 1.05rem;
  text-align: center;
  color: #3c3c3c;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    padding: 20px;
    line-height: 33px;
  }
`;
export default QuestionSection;
