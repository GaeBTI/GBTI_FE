import React from "react";
import styles from "./kakaoResultShare.module.css";
import { KakaoCustomBtn } from "./../../../../icons";

const { Kakao } = window;
function KakaoResultShare({ words, keySentence }) {
  const url = window.location.href;
  const sharing = () => {
    if (Kakao.isInitialized()) {
      Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: words,
          description: keySentence,
          imageUrl: "https://i.imgur.com/4IYDNIE.jpg",
          imageWidth: 500,
          imageHeight: 300,
          link: { mobileWebUrl: url, webUrl: url },
        },
        buttons: [
          {
            title: "결과 보러가기",
            link: { mobileWebUrl: url, webUrl: url },
          },
        ],
      });
      //   Kakao.Link.createCustomButton({
      //     container: "#kakao-link-btn",
      //     templateId: 70404,
      //     templateArgs: {
      //       title: "제목 영역입니다.",
      //       description: "설명 영역입니다.",
      //     },
      //   });

      //   Kakao.Link.sendCustom({
      //     templateId: 70404,
      //   });
    }
  };

  return (
    <div onClick={sharing}>
      <KakaoCustomBtn></KakaoCustomBtn>
    </div>
  );
}

export default KakaoResultShare;
