import React from "react";
import { LinkShare } from "../../../icons";
import ReactGA from "react-ga";

function CopyLink() {
  function copyTextUrl() {
    // Browser compatibility 알림
    ReactGA.event({
      category: "result",
      action: `Link Share`,
    });
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("링크를 복사했습니다.");
    });
  }
  return (
    <div onClick={copyTextUrl}>
      <LinkShare onClick={copyTextUrl}></LinkShare>
    </div>
  );
}

export default CopyLink;
