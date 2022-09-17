import React from "react";
import styled from "styled-components";
import { MainTitleItem } from "../startPage/startIcon";

const MainTitleBox = styled.div`
  width: 260px;
  height: 157px;

  margin-bottom: 70px;
`;
const MainTitle = () => (
  <MainTitleBox>
    <MainTitleItem />
  </MainTitleBox>
);

export default MainTitle;
