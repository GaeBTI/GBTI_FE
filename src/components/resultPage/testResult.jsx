import React, { useState } from "react";
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
import styles from "./testResult.module.css";
import { MBTIS } from "../../assets/texts/results";
// import KakaoShare from "./share/kakaoMainShare/kakaoMainShare";
import KeywordBox from "../common/keywordBox/keywordBox";
import Header from "../common/header/header";
import FacebookShare from "./share/facebookShare";
import CopyLink from "./share/copyLink";
import FullCharModal from "./FullCharModal";
import KakaoResultShare from "./share/kakaoResultShare/kakaoResultShare";
import { TwitterIcon } from "./shareIcons";
import TwitterShare from "./share/TwitterShare";

function TestResult({ mbti, cardUri }) {
  const featureList = MBTIS[mbti].CharList.map((c, i) => (
    <div key={i} className={styles.charac}>
      <div className={styles.charac_split}>0</div>
      <div className={styles.charac_text}>{c}</div>
    </div>
  ));
  const mindList = MBTIS[mbti].Mind.map((m, i) => (
    <div key={i} className={styles.mindWord}>
      {m}
    </div>
  ));
  const scoreList = MBTIS[mbti].Score.map((s, i) => (
    <div key={i} className={styles.mindScore}>
      {s}
    </div>
  ));
  //팝업
  const [isOpen, setIsOpen] = useState(false);

  const handleRestart = () => {
    window.location.replace("/");
  };

  const keywords = MBTIS[mbti].keyWord1 + " " + MBTIS[mbti].keyWord2;
  const keySentence = MBTIS[mbti].keySentence1 + " " + MBTIS[mbti].keySentence2;

  return (
    <section className={styles.boddy}>
      {isOpen && <FullCharModal setIsOpen={setIsOpen}></FullCharModal>}
      <section className={styles.page}>
        <section className={styles.headerBox}>
          <Header></Header>
        </section>
        <section className={styles.imageBox}>
          {cardUri ? (
            <>
              <img className={styles.charImage} alt="My Card" src={cardUri} />
              <div className={styles.download}>
                이미지를 꾹 눌러 다운로드 하세요!
                <br/>
                <span style={{color:"red", fontSize:"17px"}}>!!</span> 저장하지 않으면 사라질 수도 있어요<span style={{color:"red", fontSize:"17px"}}>!!</span>
              </div>
            </>
          ) : (
            <>
              <div className={styles.charImage_gone_box}>
                <img
                  className={styles.charImage}
                  src={require(`../../assets/images/characters/${mbti}.png`)}
                />
              </div>
              <div className={styles.download}>
                나만의 GBTI 카드가 저장되지 않았어요!
                <br />
                기본 카드를 보여드릴게요.
              </div>
            </>
          )}
        </section>
        <KeywordBox MBTIS={MBTIS} mbti={mbti}></KeywordBox>
        <section className={styles.smstrSection}>
          <div className={styles.smstrMent}>
            <SmstrComnt />
          </div>
          <div className={styles.smstrText}>
            <div id={styles.snt1}>{MBTIS[mbti].promise.snt1}</div>
            <div>{MBTIS[mbti].promise.snt2}</div>
          </div>
          {/* <div className={styles.smstrBox}></div> */}
        </section>
        <section className={styles.majorSection}>
          <div className={styles.majorTag}>
            <Major></Major>
          </div>
          <div className={styles.majorName}>
            {MBTIS[mbti].Major}
            <div className={styles.majorTape}>
              <MajorMasking />
            </div>
          </div>
        </section>
        <section className={styles.charSection}>
          <div className={styles.charBox}>
            <CharList />
          </div>
          <div className={styles.listBox}>{featureList}</div>
        </section>
        <section className={styles.teamSection}>
          <div className={styles.teamBox}>
            <div className={styles.teamLeft}>
              <Best />
              <div>
                <img
                  className={styles.teamImg}
                  src={require(`../../assets/images/characters/${MBTIS[mbti].best.mbti}.png`)}
                ></img>
              </div>
              <div className={styles.teamText}>
                <div>{MBTIS[mbti].best.word1}</div>
                <div>{MBTIS[mbti].best.word2}</div>
              </div>
            </div>
            <div className={styles.teamRight}>
              <Worst />
              <div>
                <img
                  className={styles.teamImg}
                  src={require(`../../assets/images/characters/${MBTIS[mbti].worst.mbti}.png`)}
                ></img>
              </div>
              <div className={styles.teamText}>
                <div>{MBTIS[mbti].worst.word1}</div>
                <div>{MBTIS[mbti].worst.word2}</div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mind}>
          <div className={styles.mindLevel}>
            <div className={styles.mindTag}>
              <MindLevel />
            </div>
            <div className={styles.mindBox}>
              <div className={styles.mindWordBox}>{mindList}</div>
              <div className={styles.mindScoreBox}>{scoreList}</div>
            </div>
          </div>
          {/* <div className={styles.mindBox}></div> */}
        </section>
        <section className={styles.showFullChar}>
          <button
            className={styles.showFullCharBox}
            onClick={() => {
              console.log("change showing modal", isOpen);
              return setIsOpen((cur) => !cur);
            }}
          >
            <div className={styles.showFullCharIconBox}>
              <ShowFullCharIcon />
            </div>
            <div className={styles.showFullCharText}>전체 결과 보기</div>
          </button>
        </section>
        <section>
          <div className={styles.shareText}>결과 공유하기</div>
          <div className={styles.shareBox}>
            <KakaoResultShare
              keySentence={keySentence}
              words={keywords}
            ></KakaoResultShare>
            <TwitterShare></TwitterShare>
            {/* <FacebookShare></FacebookShare> */}
            <CopyLink></CopyLink>
          </div>
        </section>
        <section className={styles.retry} onClick={handleRestart}>
          <RetryTag />
        </section>
      </section>
    </section>
  );
}

export default TestResult;
