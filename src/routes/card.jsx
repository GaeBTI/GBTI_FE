import React from "react";
import Container from "../components/common/Container";
import Header from "../components/common/header/header";
import KeywordBox from "../components/common/keywordBox/keywordBox";
import { MBTIS, HIDES } from "../assets/texts/results";
import StartDecoButton from "../components/cardPage/startDecoButton";
import ResultCard from "../components/cardPage/resultCard";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Card(){ //({ mbti }) {
  const { hide } = useParams();
  const mbti = Object.keys(HIDES).find((key)=>HIDES[key]===hide);
  return (
    <Container>
      <Header></Header>
      <section>
        <ResultCard mbti={mbti}></ResultCard>
      </section>
      <KeywordBox MBTIS={MBTIS} mbti={mbti}></KeywordBox>
      <CheerSentence>나만의 카드를 꾸며보세요!</CheerSentence>
      <StartDecoButton hide={hide}></StartDecoButton>
    </Container>
  );
}
export default Card;

const CheerSentence=styled.div`
  width: 166px;
  height: 25px;
  margin-top: 0rem;

  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 25px;

  text-align: center;

  color: #727272;
`;
