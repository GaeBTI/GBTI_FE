import React from "react";
import Container from "../components/common/Container";
import Header from "../components/common/header/header";
import KeywordBox from "../components/common/keywordBox/keywordBox";
import { MBTIS } from "../assets/texts/results";
import StartDecoButton from "../components/cardPage/startDecoButton";
import ResultCard from "../components/cardPage/resultCard";

function Card({ mbti }) {
  return (
    <Container>
      <Header></Header>
      <section>
        <ResultCard mbti={mbti}></ResultCard>
      </section>
      <KeywordBox MBTIS={MBTIS} mbti={mbti}></KeywordBox>
      <StartDecoButton></StartDecoButton>
    </Container>
  );
}
export default Card;
