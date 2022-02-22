import React from "react";
import copyIcon from "../../../assets/images/linkClip.png";

function CopyLink() {
  function copyTextUrl() {
    // Browser compatibility 알림
    navigator.clipboard.writeText("http://localhost:3000/").then(() => {
      alert("링크를 복사했습니다.");
    });
  }
  return <img src={copyIcon} onClick={copyTextUrl}></img>;
}

export default CopyLink;
