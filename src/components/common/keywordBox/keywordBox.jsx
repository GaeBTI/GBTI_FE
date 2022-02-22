import React from "react";
import styles from "./keywordBox.module.css";
import { LeftQuote, RightQuote, KeyBackTape } from "./../../../icons";
function KeywordBox({ MBTIS, mbti }) {
  return (
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
        <div className={styles.sntBox}>
          <div className={styles.keySnt}>{MBTIS[mbti].keySentence1}</div>
          <div className={styles.keySnt}>{MBTIS[mbti].keySentence2}</div>
        </div>
        <div className={styles.keyBox}>
          <div className={styles.keyName}>{MBTIS[mbti].keyWord1}</div>
          <div className={styles.keyName}>{MBTIS[mbti].keyWord2}</div>
          {/* <div className={styles.keyBack}>
            <KeyBackTape />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default KeywordBox;
