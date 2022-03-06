import React from "react";
import styles from "./share.module.css";
import FacebookShare from "./../../resultPage/share/facebookShare";
import CopyLink from "./../../resultPage/share/copyLink";
import KakaoMainShare from "./../../resultPage/share/kakaoMainShare/kakaoMainShare";
import TwitterShare from "./../../resultPage/share/TwitterShare";
function Share() {
  return (
    <section className={styles.shareSection}>
      <div className={styles.shareText}>테스트 공유하기</div>
      <div className={styles.shareBox}>
        <KakaoMainShare></KakaoMainShare>
        <TwitterShare></TwitterShare>
        {/* <FacebookShare></FacebookShare> */}
        <CopyLink></CopyLink>
      </div>
    </section>
  );
}

export default Share;
