import { setPointerCapture } from "konva/lib/PointerEvents";
import Container from "../components/common/Container";
import React, { useRef, useState } from "react";
import StickerBox from "../components/decoPage/stickerBox";
import Canvas from "./../components/decoPage/canvas";
import ChooseBackgroundBox from "../components/decoPage/chooseBackgroundBox";
import GoResultButton from "../components/decoPage/goResultButton";

function Deco({ mbti }) {
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
    },
  ]);
  const [decoDone, setDone] = useState(false);
  //const [dragUrl,setDragUrl] = useState('');
  const dragUrl = useRef();
  console.log("out !!", images);
  const [bgImgCnt, setBgImgCnt] = useState(0);
  //drag url ref

  const isDone = () => {
    console.log("decodecodonedone");
    setDone(true);
  }; //데코 마무리 됐으면
  return (
    <Container>
      <Canvas
        dragUrl={dragUrl}
        images={images}
        setImages={setImages}
        bgImgCnt={bgImgCnt}
        mbti={mbti}
        decoDone={decoDone}
      ></Canvas>
      <ChooseBackgroundBox
        setBgImgCnt={setBgImgCnt}
        bgImgCnt={bgImgCnt}
      ></ChooseBackgroundBox>
      <StickerBox dragUrl={dragUrl} setImages={setImages}></StickerBox>
      <button onClick={isDone}>
        <GoResultButton></GoResultButton>
      </button>
    </Container>
  );
}

export default Deco;
