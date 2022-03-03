import React from "react";
import styles from "./kakaoMainShare.module.css";
import { KakaoCustomBtn } from "./../../../../icons";
import ReactGA from "react-ga";

const { Kakao } = window;
function KakaoMainShare() {
  const sharing = () => {
    if (Kakao.isInitialized()) {
      Kakao.Link.sendCustom({
        templateId: 70404,
        templateArgs: {
          title: "제목 영역입니다.",
          description: "설명 영역입니다.",
        },
      });
    }
    ReactGA.event({
      category: "result",
      action: `Kakao Main Share`,
    });
  };

  return (
    <div onClick={sharing}>
      <KakaoCustomBtn></KakaoCustomBtn>
    </div>
  );
}

export default KakaoMainShare;
