import React from "react";
import { TwitterIcon } from "./../shareIcons";
import ReactGA from "react-ga";
function TwitterShare() {
  const url = window.location.href;
  function shareTwitter() {
    const sendText = "개강해지는 엠비탸이♥"; // 전달할 텍스트
    const sendUrl = url; // 전달할 URL
    ReactGA.event({
      category: "result",
      action: `Twitter Share`,
    });
    window.open(
      "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
    );
  }
  return (
    <div onClick={shareTwitter}>
      <TwitterIcon></TwitterIcon>
    </div>
  );
}

export default TwitterShare;
