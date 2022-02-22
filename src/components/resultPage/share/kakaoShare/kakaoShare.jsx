import React from "react";
import styles from "./kakaoShare.module.css";

const { Kakao } = window;
function KakaoShare() {
  const sharing = () => {
    if (Kakao.isInitialized()) {
      Kakao.Link.createCustomButton({
        container: "#kakao-link-btn",
        templateId: 70404,
        templateArgs: {
          title: "제목 영역입니다.",
          description: "설명 영역입니다.",
        },
      });

      Kakao.Link.sendCustom({
        templateId: 70404,
      });
    }
  };

  return (
    <a id="kakao-link-btn" onClick={sharing}>
      <img
        className={styles.shareBtn}
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        alt="카카오링크 보내기 버튼"
      />
    </a>
  );
}

export default KakaoShare;
