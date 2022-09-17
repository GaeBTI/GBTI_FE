import React from "react";
import { MainTitle, StartButton, Share } from "../components/startPage";
import Container from "../components/common/Container";

function Start() {
  return (
    <Container>
      <MainTitle></MainTitle>
      <StartButton></StartButton>
      <Share></Share>
    </Container>
  );
}

export default Start;
