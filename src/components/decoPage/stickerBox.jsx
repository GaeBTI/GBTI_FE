import { React, useState, useRef, useEffect } from "react";
import { Stage, Layer } from "react-konva";
import Stickers from "./../common/stickers";
import styled from "styled-components";

const StickerBox = ({ dragUrl, images, setImages }) => {
  const StickerImgLength = 57;
  let stickerButtonList = [];

  for (var i = 0; i < StickerImgLength; i++) {
    stickerButtonList.push(`sticker${i}.png`);
  }
  return (
    <StickerBoxBG>
      {stickerButtonList.map((url, index) => (
        <StickerButton key={index}>
          <img
            style={{ width: 60, height: 60 }}
            src={require(`../../assets/images/stickers/${url}`)}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
            onClick={(e) => {
              e.preventDefault();
              console.log("cicked", e.target);
              setImages((images) =>
                images.concat([
                  {
                    x: 158,
                    y: 158,
                    src: e.target.src,
                    id: Date.now().toString(), //(images.length + 1).toString(),
                    w: 200,
                    h: 200,
                  },
                ])
              );
            }}
          />
        </StickerButton>
      ))}
    </StickerBoxBG>
  );
};
const StickerBoxBG = styled.div`
  width: 335px;
  height: 15rem;

  background: rgba(0, 0, 0, 0.25);
  margin-bottom: 0.5rem;

  overflow: auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;//height: 250px;
const StickerButton = styled.button`
  flex: 23%;
  margin: 5px;
`;
export default StickerBox;
