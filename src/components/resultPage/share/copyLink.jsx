import React from "react";
import copyIcon from "../../../assets/images/linkClip.png";
import { LinkShare } from "../../../icons";

function CopyLink() {
  function copyTextUrl() {
    // Browser compatibility 알림
    navigator.clipboard.writeText("https://gbti.site/").then(() => {
      alert("링크를 복사했습니다.");
    });
  }
  return <LinkShare onClick={copyTextUrl}></LinkShare>;
}

export default CopyLink;
