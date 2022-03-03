import React from "react";
import { KakaoCustomBtn } from "../../../../icons";
import ReactGA from "react-ga";

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
      ReactGA.event({
        category: "result",
        action: `Kakao Result Share`,
      });
    }
  };

  return (
    <div onClick={sharing}>
      <KakaoCustomBtn></KakaoCustomBtn>
    </div>
  );
}

export default KakaoResultShare;
