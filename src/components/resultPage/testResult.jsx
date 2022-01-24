import React from "react";
import { CharList, LeftQuote, Major, MindLevel, RightQuote } from "../../icons";
import styles from "./testResult.module.css";
import { KeyBackTape } from "./../../icons";
function TestResult() {
  return (
    <section className={styles.page}>
      <section className={styles.quote}>
        <div className={styles.leftQuote}>
          <LeftQuote></LeftQuote>
        </div>
        <div className={styles.rightQuote}>
          <RightQuote></RightQuote>
        </div>
      </section>
      <section className={styles.keyword}>
        <div className={styles.keySnt}>인싸 중에 아싸, 아싸 중에 인싸</div>
        <div className={styles.keyBox}>
          <div className={styles.keyName}>
            골든리트리버
            <div className={styles.keyBack}>
              <KeyBackTape></KeyBackTape>
            </div>
          </div>
        </div>
      </section>
      <section>
        <MindLevel></MindLevel>
      </section>
      <section>
        <Major></Major>
      </section>
      <section>
        <CharList></CharList>
      </section>
    </section>
  );
}

export default TestResult;
