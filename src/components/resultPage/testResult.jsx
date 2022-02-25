import React from "react";
import {
  Worst,
  Best,
  CharList,
  Major,
  MajorMasking,
  MindLevel,
  RetryTag,
  SmstrComnt,
} from "../../icons";
import styles from "./testResult.module.css";
import { MBTIS } from "../../assets/texts/results";
import KakaoShare from "./share/kakaoShare/kakaoShare";
import KeywordBox from "../common/keywordBox/keywordBox";
import Header from "../common/header/header";
import FacebookShare from "./share/facebookShare";
import CopyLink from "./share/copyLink";

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

  const handleRestart = () => {
    window.location.replace("/");
  };

  return (
    <section className={styles.page}>
      <Header></Header>
      <section className={styles.imageBox}>
        <img className={styles.charImage} alt="char" src={cardUri} />
        <div className={styles.download}>이미지를 꾹 눌러 다운로드 하세요!</div>
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
        <Major></Major>
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
          <div>
            <MindLevel />
          </div>
          <div className={styles.mindWordBox}>{mindList}</div>
          <div className={styles.mindScoreBox}>{scoreList}</div>
        </div>
        <div className={styles.mindBox}></div>
      </section>
      <section>
        <div className={styles.shareText}>테스트 공유하기</div>
        <div className={styles.shareBox}>
          <KakaoShare></KakaoShare>
          <FacebookShare></FacebookShare>
          <CopyLink></CopyLink>
        </div>
      </section>
      <section className={styles.retry} onClick={handleRestart}>
        <RetryTag />
      </section>
    </section>
  );
}

export default TestResult;
