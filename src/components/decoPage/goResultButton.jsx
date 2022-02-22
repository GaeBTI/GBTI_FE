import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoResultButtonBG } from "./decoIcon";
const StyledLink = styled(Link)`
  width: 100%;
`;
const GoResultBox = styled.div`
  width: 111px;
  height: 48px;

  position: relative;
`;
const GoResultText = styled.div`
  width: 111px;
  height: 48px;
  position: absolute;
  font-family: "IM_Hyemin-Regular";
  font-size: 25px;
  line-height: 48px;
  text-align: center;
  color: #000000;
`;
const GoResultButtonBGBox = styled.div`
  position: absolute;
`; //4,11
const GoResultButton = () => (
  <GoResultBox>
    <GoResultButtonBGBox>
      <GoResultButtonBG />
    </GoResultButtonBGBox>
    <GoResultText>확인</GoResultText>
  </GoResultBox>
);

export default GoResultButton;
