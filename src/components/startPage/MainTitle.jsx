import React from "react";
import styled from "styled-components";
import { MainTitleItem } from "../startPage/startIcon";

const MainTitleBox=styled.div`
    width:256px;
    height:163px;
    
    margin-bottom:55px;
`;
const MainTitle=()=>(
    <MainTitleBox>
        <MainTitleItem/>
    </MainTitleBox>
);

export default MainTitle;