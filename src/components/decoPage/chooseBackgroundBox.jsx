import { React} from "react";
import styled  from "styled-components";
import { LeftBackgroundBtnImg, RightBackgroundImg } from "./decoIcon";
import {BackgroundImgList} from "./data.jsx"

const ChooseBox=styled.div`
    width:335px;
    height:50px;
    display:flex;
    align-items: center;
    margin-bottom:11px;
`;
const BackgroundTitle=styled.div`
    font-family: IM_Hyemin-Regular;
    font-weight: bold;
    font-size: 25px;
    line-height: 50px;
    text-align: center;

    width: 221px;
    height: 50px;
    display:inline-block;
`;
const NextButton=styled.button`
    width:48px;
    height:48px;
    padding:0;
`;
const onLeftClick=({setBgImgCnt})=>{
    setBgImgCnt((cur)=>{
        console.log("clicked Left",cur);
    })
}
const onRightClick=()=>{
    console.log("clicked Right");
}
const ChooseBackgroundBox=({setBgImgCnt, bgImgCnt})=>{
    return <ChooseBox>
        <NextButton onClick={()=>setBgImgCnt(cur=>cur==0? 5 : cur-1)} style={{marginLeft:8}}>
            <LeftBackgroundBtnImg/>
        </NextButton>
        <BackgroundTitle>{BackgroundImgList[bgImgCnt].name}</BackgroundTitle>
        <NextButton onClick={()=>setBgImgCnt(cur=>(cur+1)%6 )}>
            <RightBackgroundImg/>
        </NextButton>
    </ChooseBox>
}

export default ChooseBackgroundBox;