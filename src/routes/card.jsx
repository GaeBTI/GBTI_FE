import React from "react";
import Container from "../components/common/Container";
import Header from "../components/common/header/header";
import KeywordBox from "../components/common/keywordBox/keywordBox";
import { MBTIS } from "../assets/texts/results";
import StartDecoButton from "../components/cardPage/StartDecoButton";

function Card({mbti}){
    mbti= mbti? mbti: "INTJ";
    return <Container>
      <Header></Header>
      <section>
          <img alt="char" src="images/result_char.png"></img>
      </section>
      <KeywordBox MBTIS={MBTIS} mbti={mbti}></KeywordBox>
      <StartDecoButton></StartDecoButton>
  </Container>;
}
export default Card;