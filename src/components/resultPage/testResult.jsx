import React from "react";
import {
  Worst,
  Best,
  CharList,
  LeftQuote,
  Major,
  MajorMasking,
  MindLevel,
  RetryTag,
  RightQuote,
  SmstrComnt,
} from "../../icons";
import styles from "./testResult.module.css";
import { MBTIS } from "../../assets/texts/results";
import { KeyBackTape } from "./../../icons";
import KakaoShare from "./share/kakaoShare";

function TestResult({ mbti }) {
  const { Kakao } = window;
  const JAVASCRIPT_KEY = process.env.REACT_APP_KAKAO_KEY;
  console.log(JAVASCRIPT_KEY);
  // Kakao.init(JAVASCRIPT_KEY);
  console.log(Kakao.isInitialized);
  const featureList = MBTIS[mbti].CharList.map((c) => (
    <div className={styles.charac}>
      <div className={styles.charac_split}>0</div>
      <div className={styles.charac_text}>{c}</div>
    </div>
  ));
  const mindList = MBTIS[mbti].Mind.map((m) => (
    <div className={styles.mindWord}>{m}</div>
  ));
  const scoreList = MBTIS[mbti].Score.map((s) => (
    <div className={styles.mindScore}>{s}</div>
  ));

  const handleRestart = () => {
    window.location.replace("/");
  };

  return (
    <section className={styles.page}>
      <section className={styles.header}>개강한 나는...!</section>
      <section>
        <img alt="char" src="images/result_char.png"></img>
      </section>
      <section className={styles.keySection}>
        <div className={styles.quote}>
          <div className={styles.leftQuote}>
            <LeftQuote></LeftQuote>
          </div>
          <div className={styles.rightQuote}>
            <RightQuote></RightQuote>
          </div>
        </div>
        <div className={styles.keyword}>
          <div className={styles.keySnt}>{MBTIS[mbti].keySentence}</div>
          <div className={styles.keyBox}>
            <div className={styles.keyName}>{MBTIS[mbti].keyWord}</div>
            <div className={styles.keyBack}>
              <KeyBackTape />
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
            <div></div>
            <div className={styles.teamText}>
              <div>{MBTIS[mbti].best.word1}</div>
              <div>{MBTIS[mbti].best.word2}</div>
            </div>
          </div>
          <div className={styles.teamRight}>
            <Worst />
            <div></div>
            <div className={styles.teamText}>
              <div>{MBTIS[mbti].worst.word1}</div>
              <div>{MBTIS[mbti].worst.word2}</div>
            </div>
          </div>
        </div>
      </section>
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
      <section>
        <div className={styles.shareText}>테스트 공유하기</div>
        <KakaoShare></KakaoShare>
      </section>
      <section className={styles.retry} onClick={handleRestart}>
        <RetryTag />
      </section>
    </section>
  );
}

export default TestResult;
