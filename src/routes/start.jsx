import React from "react";
import { MainTitle,StartButton } from "../components/startPage";
import styled from "styled-components";

const StartContainer=styled.div`
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
function Start() {
  return (
    <StartContainer>
      <MainTitle></MainTitle>
      <StartButton></StartButton>
    </StartContainer>
  );
}

export default Start;