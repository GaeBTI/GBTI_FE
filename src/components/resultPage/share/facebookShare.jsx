import React from "react";
import fbIcon from "../../../assets/images/fb.png";
function FacebookShare() {
  const fbShare = () => {
    console.log("fa");
    const sendUrl = "http://localhost:3000/"; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?href=" + sendUrl);
  };

  return (
    <button onClick={fbShare}>
      <img src={fbIcon}></img>
    </button>
  );
}

export default FacebookShare;
