import React from "react";
import fbIcon from "../../../assets/images/fb.png";
function FacebookShare() {
  const fbShare = () => {
    const sendUrl = window.location.href; // 전달할 URL
    console.log(sendUrl);
    window.open("http://www.facebook.com/sharer/sharer.php?href=" + sendUrl);
  };

  return (
    <button onClick={fbShare}>
      <img src={fbIcon}></img>
    </button>
  );
}

export default FacebookShare;
