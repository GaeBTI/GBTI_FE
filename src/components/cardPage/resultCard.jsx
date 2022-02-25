import styled from "styled-components";
import { BackgroundImgList } from "../decoPage/data";
const ResultCardBox=styled.div`
    display:flex;
    width:317px;
    height:317px;

    position:relative;
`;
const CardBgImg=styled.img`
    position: absolute;
    width:317px;
    height:317px;
`;
const CardChaImg=styled.img`
    position: absolute;
    left:0;
    top:0;
    width:317px;
    heigth:317px;
`
const ResultCard=({mbti})=>{
    return <ResultCardBox>
        <CardBgImg src={require(`../../assets/images/backgrounds/${BackgroundImgList[0].url}`)}/>
        <CardChaImg src={require(`../../assets/images/characters/${mbti}.png`)}/>
    </ResultCardBox>
};
export default ResultCard;