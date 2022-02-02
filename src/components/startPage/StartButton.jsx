import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StartButtonBG } from "./startIcon";
const StyledLink = styled(Link)`
	width: 100%;
`;
const StartBox= styled.div`
    width: 108px;
    height: 36px;

    position:relative;
    
`;
const StartText=styled.div`
    width:108px;
    height:36px;

    position:absolute;
    font-family: "HSYuji-Regular" ;
    font-size: 25px;
    line-height: 36px;
    text-align: center;
    color: #3C3C3C;
`;
const StartBGBox=styled.div`
    position:absolute;
    top:15px;
    left:1px;
`;
const StartButton=()=>(
    <StartBox>
        <StyledLink to="/test">
            <StartBGBox><StartButtonBG/></StartBGBox>
            <StartText>시작하기</StartText>
        </StyledLink>
    </StartBox>
);

export default StartButton;