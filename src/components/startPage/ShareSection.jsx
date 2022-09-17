import React from "react";
import CopyLink from "../resultPage/share/copyLink";
import KakaoMainShare from "../resultPage/share/kakaoMainShare/kakaoMainShare";
import TwitterShare from "../resultPage/share/TwitterShare";
import styled from "styled-components";

const ShareSection = styled.section`
  margin-top: 116px;
`;
const ShareText = styled.div`
  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  text-align: center;

  color: ${({ theme }) => theme.primary};
`;
const ShareBox = styled.div`
  margin-block: 1rem;
  width: 170px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;
function Share() {
  return (
    <ShareSection>
      <ShareText>테스트 공유하기</ShareText>
      <ShareBox>
        <KakaoMainShare></KakaoMainShare>
        <TwitterShare></TwitterShare>
        {/* <FacebookShare></FacebookShare> */}
        <CopyLink></CopyLink>
      </ShareBox>
    </ShareSection>
  );
}

export default Share;
