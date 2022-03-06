import React from "react";
import { MainTitle, StartButton } from "../components/startPage";
import Container from "../components/common/Container";
import Share from "../components/startPage/share/share";

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
