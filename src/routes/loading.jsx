import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/common/Container";
import {Dots} from "../components/loadingPage/icons"

const LoadingBox=styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;

    div{
        width:145px;
        height:34px;
        margin-top:4px;

        font-family: HSYuji-Regular ;
        font-size: 25px;
        line-height: 29px;
        text-align: center;
    }
`;

const getMBTI=(scores)=>{
    let mbti='';
    for(let scoreObj of scores){
        //if score==0 > 에러 처리 필요
        mbti+= scoreObj.score>0? scoreObj.type[0]:scoreObj.type[2]
        console.log("code",mbti);
        console.log(scoreObj.type[2]);
    }
    return mbti;
}
const Loading=({finalScores,setMBTI})=>{
    // 점수에 맞춰 페이지 이동
    let navigate = useNavigate();
    const mbti = getMBTI(finalScores);
    useEffect(() => {
        setMBTI(mbti);
		setTimeout(() => navigate(`/card`), 2000); //deco로 route 바꿔야함
	}, [navigate,mbti]);
    return(
        <Container>
            <LoadingBox>
                <Dots/>
                <div>Loading...</div>
            </LoadingBox>
        </Container>
    );
}
export default Loading;