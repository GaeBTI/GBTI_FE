import { React, useState, useRef } from "react";
import { Stage, Layer } from "react-konva";
import Stickers from "./../common/stickers";

const StickerBox=({dragUrl,images,setImages})=>{
    return(
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
    );
}
export default StickerBox;