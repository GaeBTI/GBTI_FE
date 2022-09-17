import React, { useState } from "react";
import backgroundImg from "../../assets/images/background_optimize.svg";
import {
  Worst,
  Best,
  CharList,
  Major,
  MajorMasking,
  MindLevel,
  RetryTag,
  SmstrComnt,
  ShowFullCharIcon,
} from "../../icons";
import { MBTIS } from "../../assets/texts/results";
import KeywordBox from "../common/KeywordBox";
import Header from "../common/Header";

import CopyLink from "./share/copyLink";
import FullCharModal from "./FullCharModal";
import KakaoResultShare from "./share/kakaoResultShare/kakaoResultShare";
import TwitterShare from "./share/TwitterShare";

function TestResult({ mbti, cardUri }) {
  const featureList = MBTIS[mbti].CharList.map((c, i) => (
    <Charac key={i}>
      <CharacSplit>o</CharacSplit>
      <CharacText>{c}</CharacText>
    </Charac>
  ));
  const mindList = MBTIS[mbti].Mind.map((m, i) => (
    <MindWord key={i}>{m}</MindWord>
  ));
  const scoreList = MBTIS[mbti].Score.map((s, i) => (
    <MindScore key={i}>{s}</MindScore>
  ));
  //팝업
  const [isOpen, setIsOpen] = useState(false);

  const handleRestart = () => {
    window.location.replace("/");
  };

  const keywords = MBTIS[mbti].keyWord1 + " " + MBTIS[mbti].keyWord2;
  const keySentence = MBTIS[mbti].keySentence1 + " " + MBTIS[mbti].keySentence2;

  return (
    <section>
      {isOpen && <FullCharModal setIsOpen={setIsOpen}></FullCharModal>}
      <Page>
        <HeaderBox>
          <Header></Header>
        </HeaderBox>
        <ImageBox>
          {cardUri ? (
            <>
              <img
                style={{ width: "293px", height: "293px" }}
                alt="My Card"
                src={cardUri}
              />
              <Download>
                이미지를 꾹 눌러 다운로드 하세요♥︎
                <br />
                <span style={{ color: "red", fontSize: "17px" }}>!!</span>{" "}
                저장하지 않으면 사라질 수도 있어요{" "}
                <span style={{ color: "red", fontSize: "17px" }}>!!</span>
              </Download>
            </>
          ) : (
            <>
              <CharImageGoneBox>
                <CharImage
                  src={require(`../../assets/images/characters/${mbti}.png`)}
                />
              </CharImageGoneBox>
              <Download>
                나만의 GBTI 카드가 저장되지 않았어요!
                <br />
                기본 카드를 보여드릴게요.
              </Download>
            </>
          )}
        </ImageBox>
        <KeywordBox MBTIS={MBTIS} mbti={mbti}></KeywordBox>
        <SemesterSection>
          <SemesterComment>
            <SmstrComnt />
          </SemesterComment>
          <SemesterText>
            <SentenceLine>{MBTIS[mbti].promise.snt1}</SentenceLine>
            <div>{MBTIS[mbti].promise.snt2}</div>
          </SemesterText>
          {/* <div className={styles.smstrBox}></div> */}
        </SemesterSection>
        <MajorSection>
          <div>
            <Major></Major>
          </div>
          <MajorName>
            {MBTIS[mbti].Major}
            <MajorTape>
              <MajorMasking />
            </MajorTape>
          </MajorName>
        </MajorSection>
        <CharSection>
          <CharBox>
            <CharList />
          </CharBox>
          <ListBox>{featureList}</ListBox>
        </CharSection>
        <TeamSection>
          <TeamBox>
            <Teams>
              <Best />
              <div>
                <TeamImg
                  src={require(`../../assets/images/characters/${MBTIS[mbti].best.mbti}.png`)}
                ></TeamImg>
              </div>
              <TeamText>
                <div>{MBTIS[mbti].best.word1}</div>
                <div>{MBTIS[mbti].best.word2}</div>
              </TeamText>
            </Teams>
            <Teams>
              <Worst />
              <div>
                <TeamImg
                  src={require(`../../assets/images/characters/${MBTIS[mbti].worst.mbti}.png`)}
                ></TeamImg>
              </div>
              <TeamText>
                <div>{MBTIS[mbti].worst.word1}</div>
                <div>{MBTIS[mbti].worst.word2}</div>
              </TeamText>
            </Teams>
          </TeamBox>
        </TeamSection>
        <MindSection>
          <MindLevels>
            <MindTag>
              <MindLevel />
            </MindTag>
            <MindBox>
              <MindWordBox>{mindList}</MindWordBox>
              <MindScoreBox>{scoreList}</MindScoreBox>
            </MindBox>
          </MindLevels>
          {/* <div className={styles.mindBox}></div> */}
        </MindSection>
        <ShowAllCharSection>
          <ShowAllCharBox onClick={() => setIsOpen((cur) => !cur)}>
            <ShowAllCharIconBox>
              <ShowFullCharIcon />
            </ShowAllCharIconBox>
            <ShowFullCharText>전체 캐릭터 보기</ShowFullCharText>
          </ShowAllCharBox>
        </ShowAllCharSection>
        <section>
          <ShareText>결과 공유하기</ShareText>
          <ShareBox>
            <KakaoResultShare
              keySentence={keySentence}
              words={keywords}
            ></KakaoResultShare>
            <TwitterShare></TwitterShare>
            {/* <FacebookShare></FacebookShare> */}
            <CopyLink></CopyLink>
          </ShareBox>
        </section>
        <ContactSection>
          <Instagram>
            @teamiruem을 태그하여
            <br /> 나만의 카드를 자랑해주세요!
          </Instagram>
          <ContactImgBox>
            <a
              href="https://instagram.com/teamiruem?utm_medium=copy_link"
              target="_blank"
            >
              <img
                src={require("../../assets/images/ContactUs.jpg")}
                style={{ width: "280px" }}
              />
            </a>
          </ContactImgBox>
          <ContactText>
            ⬆️ 위 이미지를 눌러 인스타그램 계정에 놀러오세요!
          </ContactText>
        </ContactSection>
        <RestartSection onClick={handleRestart}>
          <RetryTag />
        </RestartSection>
      </Page>
      <footer>
        <FooterSection>
          <div>Copyright © 2022 TEAMIRUEM. All rights reserved.</div>
          <div>
            <a
              href="https://instagram.com/teamiruem?utm_medium=copy_link"
              target="_blank"
            >
              contact to TEAMIRUEM
            </a>
          </div>
          <div>
            <a
              href="https://instagram.com/kinnyeri?utm_medium=copy_link"
              target="_blank"
            >
              @kinnyeri{" "}
            </a>
            <a href="mailto:iamkyeongju@gmail.com">@jjoy_h </a>
            <a href="mailto:dev.jihyun@gmail.com">@jihyun</a>
          </div>
        </FooterSection>
      </footer>
    </section>
  );
}

const Download = styled.div`
  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.primaryLight};
`;

const HeaderBox = styled.section`
  margin-top: 65px;
`;

const ImageBox = styled.section`
  text-align: center;
  position: relative;
`;

const CharImage = styled.img`
  width: 293px;
  height: 293px;
`;
const CharImageGoneBox = styled.div`
  background-color: #fffdf1;
  border: 2px solid #ffcf55;
  margin-bottom: 0.5rem;
`;
const Page = styled.section`
  background-image: url(${backgroundImg});
  background-size: cover;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
`;

const MindSection = styled.section`
  position: relative;
  text-align: center;
`;

const MindLevels = styled.div`
  position: relative;
  z-index: 2;
`;
const MindWordBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  margin-top: 2.5rem;
  width: 15.625rem;
`;
const MindScoreBox = styled.div`
  display: grid;
  grid-template-columns: 7.813rem 6.25rem;
  left: 8.75rem;
  top: 2.5rem;
  position: absolute;
`;
const MindWord = styled.div`
  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.75rem;
  /* identical to box height, or 156% */

  text-align: right;

  color: ${({ theme }) => theme.black};
`;
const MindScore = styled.div`
  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-align: left;
  color: ${({ theme }) => theme.highlightRed};
`;
const MindTag = styled.div`
  position: relative;
  z-index: 2;
`;

const MindBox = styled.div`
  position: relative;
  width: 20.938rem;
  height: 7.625rem;
  top: -1.25rem;
  margin: auto;
  z-index: 1;
  background: ${({ theme }) => theme.backGround};
`;

const CharSection = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  justify-content: center;
  display: flex;
  height: 34.313rem;
  margin-top: 1.625rem;
`;

const CharBox = styled.div`
  position: absolute;
  z-index: 1;
`;

const ListBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
  top: 1.125rem;
`;

const CharacSplit = styled.div`
  margin-right: 0.4rem;
`;

const Charac = styled.div`
  z-index: 2;
  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 2.05rem;
  display: flex;
  color: ${({ theme }) => theme.primary};
`;

const CharacText = styled.div`
  width: 17.5rem;
`;

const MajorSection = styled.section`
  width: 300px;
  margin-block: 1.625rem;
  height: 8.438rem;
`;

const MajorName = styled.div`
  position: relative;
  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 4.375rem;
  /* or 156% */
  height: 4.375rem;

  text-align: center;

  color: ${({ theme }) => theme.primary};
`;

const MajorTape = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;

const SemesterSection = styled.section`
  position: relative;
  height: 9.375rem;
  z-index: 2;
  margin-top: 1.625rem;
`;

const SemesterComment = styled.div`
  position: absolute;
  z-index: 2;
`;
const SentenceLine = styled.div`
  margin-block: 0.938rem;
`;
const SemesterText = styled.div`
  position: relative;
  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  width: 18.313rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  margin: auto;
  align-items: center;
  justify-content: center;
  top: 1.25rem;
  background: ${({ theme }) => theme.backGround};
  text-align: center;

  color: ${({ theme }) => theme.primary};
`;

const SemesterBox = styled.div`
  position: absolute;
  width: 18.313rem;
  height: 8rem;
  left: 1.188rem;
  z-index: 1;
  top: 1.25rem;
  background: ${({ theme }) => theme.backGround};
`;

const TeamSection = styled.section`
  margin-block: 1.625rem;
`;

const TeamBox = styled.div`
  display: flex;
  text-align: center;
`;

const Teams = styled.div`
  margin-inline: auto;
`;

const TeamImg = styled.img`
  width: 9.375rem;
`;
const TeamText = styled.div`
  font-family: HSYuji-Regular;
  font-size: 20px;
  line-height: 22px;
  /* or 110% */

  text-align: center;

  color: ${({ theme }) => theme.primary};
`;

const ShareText = styled.div`
  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  /* or 130% */

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

const ShowAllCharSection = styled.section`
  position: relative;
`;

const ShowAllCharBox = styled.button`
  width: 20.938rem;
  height: 2.188rem;
  margin-bottom: 1.625rem;
  background: ${({ theme }) => theme.backGround};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShowAllCharIconBox = styled.div`
  margin-right: 0.625rem;
`;

const ShowFullCharText = styled.div`
  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.button};
  line-height: 1.625rem;
  text-align: center;
  /* or 130% */

  text-align: center;
`;

const ContactSection = styled.section`
  width: 300px;
  height: 220px;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Instagram = styled.div`
  height: 35px;
  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

const ContactText = styled.div`
  height: 20px;
  font-family: IM_Hyemin-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 0.7rem;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

const ContactImgBox = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RestartSection = styled.section`
  margin-block: 1.625rem;
  text-align: center;
`;

const FooterSection = styled.section`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #b0b0b0;
  font-size: 0.5rem;
`;
export default TestResult;
