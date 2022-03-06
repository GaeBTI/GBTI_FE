import React from "react";
import styled from "styled-components";
import { GoResultButtonBG } from "./decoIcon";
const GoResultButton = ({isDone}) => (
  <GoResultBox>
    <GoResultBtn onClick={()=>isDone()}>
      <GoResultButtonBGBox>
        <GoResultButtonBG />
      </GoResultButtonBGBox>
      <GoResultText>확인</GoResultText>
    </GoResultBtn>
  </GoResultBox>
);
const GoResultBox = styled.div`
  width: 111px;
  height: 48px;
  position: relative;
`;
const GoResultBtn = styled.div`
  padding:0;
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
export default GoResultButton;
