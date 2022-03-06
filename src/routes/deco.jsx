import { setPointerCapture } from "konva/lib/PointerEvents";
import Container from "../components/common/Container";
import React, { useRef, useState } from "react";
import {
  GoResultButton,
  ChooseBackgroundBox,
  Canvas,
  StickerBox,
  DecoModal,
} from "../components/decoPage";
import { useParams } from "react-router-dom";
import { HIDES } from "../assets/texts/results";

function Deco({ setCardUri }) {
  //dragurl, images
  const { hide } = useParams();
  const mbti = Object.keys(HIDES).find((key)=>HIDES[key]===hide);
  console.log('deco',mbti);

  const [images, setImages] = useState([
    {
      x: 170,
      y: 200,
      src: require(`../assets/images/characters/${mbti}.png`),
      id: Date.now().toString(), //images.length.toString(),
      w: 200,
      h: 200,
    },
  ]);

  const dragUrl = useRef();
  const [bgImgCnt, setBgImgCnt] = useState(0);

  // 이미지 추출 후 result 페이지로 이동하기 위한 flag 세우기
  const [decoDone, setDone] = useState(false);
  const isDone = () => {
    //데코 마무리 된 flag
    setDone(true);
  }; 

  // 팝업
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Container>
      {isOpen && <DecoModal setIsOpen={setIsOpen}></DecoModal>}
      <Canvas
        images={images}
        setImages={setImages}
        bgImgCnt={bgImgCnt}
        hide={hide}
        decoDone={decoDone}
        setCardUri={setCardUri}
      ></Canvas>
      <ChooseBackgroundBox
        setBgImgCnt={setBgImgCnt}
        bgImgCnt={bgImgCnt}
      ></ChooseBackgroundBox>
      <StickerBox
        dragUrl={dragUrl}
        images={images}
        setImages={setImages}
      ></StickerBox>
      <GoResultButton isDone={isDone}></GoResultButton>
    </Container>
  );
}

export default Deco;
