import { React, useState, useRef } from "react";
import { Stage, Layer } from "react-konva";
import Stickers from "./../common/stickers";
import styled from "styled-components";

const StickerBoxBG=styled.div`
    width: 335px;
    height: 337px;

    background: rgba(0, 0, 0, 0.25);
    margin-bottom: 22px;
`;
const StickerBox=({dragUrl,setImages})=>{
    return(
        <StickerBoxBG>
        <button>
            <img
            alt="lion"
            src="https://konvajs.org/assets/lion.png"
            draggable="true"
            onDragStart={(e) => {
                dragUrl.current = e.target.src;
            }}
            onClick={(e) => {
                e.preventDefault();
                console.log('cicked',e.target)
                setImages((images)=>
                    images.concat([
                        {
                        x: 100,
                        y: 200,
                        src: e.target.src,
                        id: images.length.toString(),
                        w: 144,
                        h: 139,
                        },
                    ])
                );
            }}
            />
        </button>
        <button>
            <img
            alt="intj"
            src={require("../../assets/images/characters/intj.png")}
            width={100}
            draggable="true"
            onDragStart={(e) => {
                dragUrl.current = e.target.src;
            }}
            onClick={(e) => {
                e.preventDefault();
                console.log('cicked',e.target)
                setImages((images)=>
                    images.concat([
                        {
                        x: 100,
                        y: 200,
                        src: e.target.src,
                        id: images.length.toString(),
                        w: 100,
                        h: 100,
                        },
                    ])
                );
            }}
            />
        </button>
    </StickerBoxBG>
    );
}
export default StickerBox;