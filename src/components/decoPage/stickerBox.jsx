import { React, useState, useRef } from "react";
import { Stage, Layer } from "react-konva";
import Stickers from "./../common/stickers";
import styled from "styled-components";
const StickerBoxBG=styled.div`
    width: 335px;
    height: 337px;

    padding:10px;

    background: rgba(0, 0, 0, 0.25);
    margin-bottom: 12px;

    overflow:auto;

    display:flex;
    justify-content: center;
    flex-wrap: wrap; 
`;
 const StickerButton=styled.button`
    flex:23%;
    margin:5px;
 `;

const StickerBox=({dragUrl,setImages})=>{
    const StickerImgLength=57;
    let stickerButtonList=[];
    for(var i =0;i<StickerImgLength;i++){
        stickerButtonList.push(`sticker${i}.png`);
    }
    return (
        <StickerBoxBG>
            {stickerButtonList.map((url,index)=>(
                <StickerButton>
                <img
                    style={{width:60,height:60}}
                    src={require(`../../assets/images/stickers/${url}`)}
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
                                x: 158,
                                y: 158,
                                src: e.target.src,
                                id: (images.length+1).toString(),
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
    )
}
export default StickerBox;