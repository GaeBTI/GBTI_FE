import styled from "styled-components";
import { BackgroundImgList } from "../decoPage/data";
let imgSize=300;
const ResultCardBox=styled.div`
    display:flex;
    width:${imgSize}px;
    height:${imgSize}px;

    position:relative;
`;
const CardBgImg=styled.img`
    position: absolute;
    width:${imgSize}px;
    height:${imgSize}px;
`;
const CardChaImg=styled.img`
    position: absolute;
    left:0;
    top:0;
    width:${imgSize}px;
    heigth:${imgSize}px;
`
const ResultCard=({mbti})=>{
    return <ResultCardBox>
        <CardBgImg src={require(`../../assets/images/backgrounds/${BackgroundImgList[0].url}`)}/>
        <CardChaImg src={require(`../../assets/images/characters/${mbti}.png`)}/>
    </ResultCardBox>
};
export default ResultCard;