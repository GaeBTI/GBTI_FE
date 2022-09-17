import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StartDecoButtonBG } from "./cardIcon";
const StartDecoButton = ({ hide }) => (
  <StartBox>
    <StyledLink to={`/deco/${hide}`}>
      <StartBGBox>
        <StartDecoButtonBG />
      </StartBGBox>
      <StartText>카드 꾸미기</StartText>
    </StyledLink>
  </StartBox>
);

const StyledLink = styled(Link)`
  width: 100%;
`;
const StartBox = styled.div`
  width: 150px;
  height: 42px;

  position: relative;
`;
const StartText = styled.div`
  width: 150px;
  height: 42px;
  position: absolute;
  font-family: "IM_Hyemin-Regular";
  font-size: 25px;
  line-height: 42px;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;
const StartBGBox = styled.div`
  position: absolute;
`; //4,11
export default StartDecoButton;
