import React from "react";
import Container from "../components/common/Container";
import Header from "../components/common/header/header";
import KeywordBox from "../components/common/keywordBox/keywordBox";
import { MBTIS } from "../assets/texts/results";
import StartDecoButton from "../components/cardPage/startDecoButton";
import ResultCard from "../components/cardPage/resultCard";
import styled from "styled-components";

function Card({ mbti }) {
  return (
    <Container>
      <Header></Header>
      <section>
        <ResultCard mbti={mbti}></ResultCard>
      </section>
      <KeywordBox MBTIS={MBTIS} mbti={mbti}></KeywordBox>
      <CheerSentence>나만의 카드를 꾸며보세요!</CheerSentence>
      <StartDecoButton></StartDecoButton>
    </Container>
  );
}
export default Card;

const CheerSentence=styled.div`
  width: 166px;
  height: 25px;
  margin-top: 40px;

  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;

  text-align: center;

  color: #727272;
`;
