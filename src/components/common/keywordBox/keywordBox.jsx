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
        <div className={styles.keySnt}>{MBTIS[mbti].keySentence}</div>
        <div className={styles.keyBox}>
          <div className={styles.keyName}>{MBTIS[mbti].keyWord}</div>
          <div className={styles.keyBack}>
            <KeyBackTape />
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeywordBox;
