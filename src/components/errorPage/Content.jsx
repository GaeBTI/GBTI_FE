import styled from "styled-components";
import { ErrorImg } from "./icon";
import { useNavigate } from "react-router-dom";
const Content = ()=>{
    // 이전 페이지를 위한 Navigate 객체
    const navigation = useNavigate();
    return <ContentBox>
        <ContentImgBox>
            <ErrorImg/>
        </ContentImgBox>
        <ContentTextBox>
            없는 페이지 입니다.
        </ContentTextBox>
        <GoBackBtn onClick={()=>navigation(-1)}>
            돌아가기
        </GoBackBtn>
    </ContentBox>
}
const ContentBox=styled.div`
    width:216px;
    height:226px;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`
const ContentImgBox=styled.div`
    width:67px;
    height:111px;
    margin-bottom:10px;
`
const ContentTextBox=styled.div`
    font-family: HSYuji-Regular;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    margin-bottom:10px;
    color: #E84242;
`
const GoBackBtn=styled.button`
    width: 100px;
    height: 35px;

    border: 3px solid #E84242;
    box-sizing: border-box;
    border-radius: 6px;
    background-color:white;

    font-family: HSYuji-Regular;
    font-size:15px;
    color:#3c3c3c;
    line-height:35px;
`;
export default Content;