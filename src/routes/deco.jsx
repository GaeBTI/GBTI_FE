import Container from "../components/common/Container";
import React, { useRef, useState } from "react";
import {
  GoResultButton,
  ChooseBackgroundBox,
  Canvas,
  StickerBox,
  DecoModal,
  RefreshButton,
} from "../components/decoPage";
import { useParams } from "react-router-dom";
import { HIDES } from "../assets/texts/results";
import styled from "styled-components";

function Deco({ setCardUri }) {
  //dragurl, images
  const { hide } = useParams();
  const mbti = Object.keys(HIDES).find((key)=>HIDES[key]===hide);

  const [images, setImages] = useState([ // 캐릭터 이미지로 초기화
    {
      x: 170,
      y: 200,
      src: require(`../assets/images/characters/${mbti}.png`),
      id: Date.now().toString(),
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
  // 스티커 초기화
  const [needRefresh,setNeedRefresh]= useState(false);
  const doRefresh=()=>{setNeedRefresh(true)};
  const refreshDone=()=>{setNeedRefresh(false)};
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
        needRefresh={needRefresh}
        refreshDone={refreshDone}
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
      <ButtonSection>
        <RefreshButton doRefresh={doRefresh}></RefreshButton>
        <GoResultButton isDone={isDone}></GoResultButton>
      </ButtonSection>
    </Container>
  );
}
const ButtonSection=styled.div`
  width: 244px;
  height: 49px;
  margin-top:21px;
  
  display:flex;
  align-items: center;
  justify-content:center;

`;
export default Deco;
