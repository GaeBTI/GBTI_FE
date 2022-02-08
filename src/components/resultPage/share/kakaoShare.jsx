import React from "react";
const Kakao = { window };
function KakaoShare() {
  const sharing = () => {
    Kakao.Link.createCustomButton({
      container: "#create-kakao-link-btn",
      templateId: 70404,
    });

    Kakao.Link.sendCustom({
      templateId: 70404,
    });
  };
  return (
    <a id="create-kakao-link-btn" onClick={sharing}>
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        alt="카카오링크 보내기 버튼"
      />
    </a>
  );
}

export default KakaoShare;
