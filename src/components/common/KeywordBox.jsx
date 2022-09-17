import React from "react";
import { LeftQuoteImg, RightQuoteImg, KeyBackTape } from "../../icons";
import styled from "styled-components";
function KeywordBox({ MBTIS, mbti }) {
  return (
    <KeySection>
      <Quote>
        <LeftQuote>
          <LeftQuoteImg></LeftQuoteImg>
        </LeftQuote>
        <RightQuote>
          <RightQuoteImg></RightQuoteImg>
        </RightQuote>
      </Quote>
      <Keyword>
        <SntBox>
          <KeySnt>{MBTIS[mbti].keySentence1}</KeySnt>
          <KeySnt>{MBTIS[mbti].keySentence2}</KeySnt>
        </SntBox>
        <KeyBox>
          <KeyName>{MBTIS[mbti].keyWord1}</KeyName>
          <KeyName>{MBTIS[mbti].keyWord2}</KeyName>
        </KeyBox>
      </Keyword>
    </KeySection>
  );
}
const Quote = styled.div`
  display: flex;
  width: 335;
`;
const LeftQuote = styled.div``;
const RightQuote = styled.div`
  margin-left: auto;
`;
const KeySection = styled.section`
  height: 130px;
  padding-top: 26px;
`;
const Keyword = styled.div`
  text-align: center;
`;
const KeyBox = styled.div`
  position: relative;
`;
const KeySnt = styled.div`
  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  width: 300px;
  margin: auto;
  text-align: center;

  z-index: 3;
  color: #3c3c3c;
`;
const SntBox = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
const KeyName = styled.div`
  width: 100%;
  left: 0px;
  font-family: HSYuji-Regular;
  font-size: 29px;
  line-height: 34px;
  text-align: center;

  z-index: 3;
  color: ${({ theme }) => theme.primary};
`;
const KeyBack = styled.div`
  position: absolute;
  text-align: center;
  top: 3px;
  /* opacity: 0.99; */
  z-index: 1;
  margin-left: 85px;
`;

export default KeywordBox;
