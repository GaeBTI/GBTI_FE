import { setPointerCapture } from "konva/lib/PointerEvents";
import React, { useRef, useState } from "react";
import StickerBox from "../components/decoPage/stickerBox";
import DecoPage from "./../components/decoPage/decoPage";

function Deco() {
  //dragurl, images
  const [images, setImages] = useState([]);
  //const [dragUrl,setDragUrl] = useState('');
  const dragUrl= useRef();
  console.log("out !!",images);
  //drag url ref
  return(
    <>
      <StickerBox dragUrl={dragUrl} setImages={setImages}></StickerBox>
      <DecoPage dragUrl={dragUrl} images={images} setImages={setImages}></DecoPage>
    </>
  ) 
}

export default Deco;
