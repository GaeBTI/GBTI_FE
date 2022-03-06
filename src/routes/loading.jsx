import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/common/Container";
import { Dots } from "../components/loadingPage/icons";
import dots from "../assets/images/dots.gif";
import { HIDES } from "../assets/texts/results";

const LoadingDotes = styled.img`
  width: 100px;
`;
LoadingDotes.defaultProps = {
  src: dots,
};
const getMBTI = (scores) => {
  let mbti = "";
  for (let scoreObj of scores) {
    //if score==0 > 에러 처리 필요
    mbti += scoreObj.score > 0 ? scoreObj.type[0] : scoreObj.type[2];
  }
  return mbti;
};
const Loading = ({ finalScores }) => {
  // 점수에 맞춰 페이지 이동
  let navigate = useNavigate();
  const hide = HIDES[getMBTI(finalScores)];

  useEffect(() => {
    setTimeout(() => navigate(`/card/${hide}`), 2000); //deco로 route 바꿔야함
  }, [navigate, hide]);
  return (
    <Container>
      <LoadingBox>
        {/* <Dots /> */}
        <LoadingDotes></LoadingDotes>
        <LoadingText>나의 MBTI를 분석중이에요</LoadingText>
      </LoadingBox>
    </Container>
  );
};
const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
  }
`;
const LoadingText = styled.div`
  width: 145px;
  height: 34px;
  margin-top: 15px;

  font-family: HSYuji-Regular;
  font-size: 25px;
  color: #3c3c3c;
  line-height: 29px;
  text-align: center;
`;
export default Loading;
