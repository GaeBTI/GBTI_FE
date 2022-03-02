import React from "react";
import copyIcon from "../../../assets/images/linkClip.png";
import { LinkShare } from "../../../icons";

function CopyLink() {
  function copyTextUrl() {
    // Browser compatibility 알림
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
