import { setPointerCapture } from "konva/lib/PointerEvents";
import Container from "../components/common/Container";
import React, { useRef, useState } from "react";
import StickerBox from "../components/decoPage/stickerBox";
import Canvas from "./../components/decoPage/canvas";
import ChooseBackgroundBox from "../components/decoPage/chooseBackgroundBox";
import GoResultButton from "../components/decoPage/goResultButton";

function Deco({mbti}) {
  //dragurl, images
  console.log(mbti);
  const [images, setImages] = useState([
    {
        x: 170,
        y: 200,
        src: require(`../assets/images/characters/${mbti}.png`),
        id: String(1), //images.length.toString(),
        w: 200,
        h: 200,
      }
  ]);
  //const [dragUrl,setDragUrl] = useState('');
  const dragUrl= useRef();
  console.log("out !!",images);
  const [bgImgCnt,setBgImgCnt]= useState(0);
  //drag url ref
  return(
    <Container>
      <Canvas dragUrl={dragUrl} images={images} setImages={setImages} bgImgCnt={bgImgCnt} mbti={mbti}></Canvas>
      <ChooseBackgroundBox setBgImgCnt={setBgImgCnt} bgImgCnt={bgImgCnt}></ChooseBackgroundBox>
      <StickerBox dragUrl={dragUrl} setImages={setImages}></StickerBox>
      <GoResultButton></GoResultButton>
    </Container>
  ) 
}

export default Deco;
