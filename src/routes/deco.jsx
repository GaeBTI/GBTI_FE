import { setPointerCapture } from "konva/lib/PointerEvents";
import Container from "../components/common/Container";
import React, { useRef, useState } from "react";
import StickerBox from "../components/decoPage/stickerBox";
import Canvas from "./../components/decoPage/canvas";
import ChooseBackgroundBox from "../components/decoPage/chooseBackgroundBox";
import GoResultButton from "../components/decoPage/goResultButton";

function Deco() {
  //dragurl, images
  const [images, setImages] = useState([]);
  //const [dragUrl,setDragUrl] = useState('');
  const dragUrl= useRef();
  console.log("out !!",images);
  const [bgImgCnt,setBgImgCnt]= useState(0);
  //drag url ref
  return(
    <Container>
      <Canvas dragUrl={dragUrl} images={images} setImages={setImages} bgImgCnt={bgImgCnt}></Canvas>
      <ChooseBackgroundBox setBgImgCnt={setBgImgCnt} bgImgCnt={bgImgCnt}></ChooseBackgroundBox>
      <StickerBox dragUrl={dragUrl} setImages={setImages}></StickerBox>
      <GoResultButton></GoResultButton>
    </Container>
  ) 
}

export default Deco;
