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
import { KeyBackTape } from "./../../icons";
function TestResult() {
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
          <div className={styles.keySnt}>인싸 중에 아싸, 아싸 중에 인싸</div>
          <div className={styles.keyBox}>
            <div className={styles.keyName}>골든리트리버</div>
            <div className={styles.keyBack}>
              <KeyBackTape />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mind}>
        <div className={styles.mindLevel}>
          <MindLevel />
        </div>
        <div className={styles.mindBox}></div>
      </section>
      <section className={styles.majorSection}>
        <Major></Major>
        <div className={styles.majorName}>
          연극영화과, 광고홍보학과
          <div className={styles.majorTape}>
            <MajorMasking />
          </div>
        </div>
      </section>
      <section>
        <CharList />
      </section>
      <section className={styles.smstrSection}>
        <div className={styles.smstrMent}>
          <SmstrComnt />
        </div>
        <div className={styles.smstrText}>
          <div>사람은 쉽게 변하지 않는다.</div>
          <div>다시 태어나는게 빠를듯?</div>
        </div>
        {/* <div className={styles.smstrBox}></div> */}
      </section>
      <section className={styles.teamSection}>
        <div className={styles.teamBox}>
          <div className={styles.teamLeft}>
            <Best />
            <div></div>
            <div className={styles.teamText}>
              <div>아가리</div>
              <div>파이터</div>
            </div>
          </div>
          <div className={styles.teamRight}>
            <Worst />
            <div></div>
            <div className={styles.teamText}>
              <div>타고난</div>
              <div>과대타입</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.shareText}>테스트 공유하기</div>
      </section>
      <section className={styles.retry}>
        <RetryTag />
      </section>
    </section>
  );
}

export default TestResult;
