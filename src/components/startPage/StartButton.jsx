import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { StartButtonBG } from "./startIcon";
import ReactGA from "react-ga";
// const StyledLink = styled(Link)`
//   width: 100%;
// `;
const StartBox = styled.div`
  width: 108px;
  height: 36px;
  cursor: pointer;
  position: relative;
`;
const StartText = styled.div`
  width: 108px;
  height: 36px;

  position: absolute;
  font-family: "HSYuji-Regular";
  font-size: 25px;
  line-height: 36px;
  text-align: center;
  color: ${({ theme }) => theme.button};
`;
const StartBGBox = styled.div`
  position: absolute;
  top: 15px;
  left: 1px;
`;

const StartButton = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    // const ga = ReactGA.ga();
    // ga("create", process.env.REACT_APP_GA_TRACKING_ID, {
    //   cookieDomain: "none",
    // });
    ReactGA.event({
      category: "User",
      action: "Start the quiz",
    });
    navigate("/test");
  };

  return (
    <StartBox onClick={handleStart}>
      <StartBGBox>
        <StartButtonBG />
      </StartBGBox>
      <StartText>시작하기</StartText>
    </StartBox>
  );
};

export default StartButton;
