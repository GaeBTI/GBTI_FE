import { React, useState, useRef } from "react";
import { Stage, Layer, Image } from "react-konva";
import { useLinkClickHandler } from "react-router-dom";
import useImage from "use-image";
import Stickers from "../common/stickers";
import { BackgroundImgList } from "./data.jsx";
const canvasSize = 335;

const BackgroundImg = ({ bgImgCnt, name }) => {
  console.log(BackgroundImgList[bgImgCnt]);
  const [image] = useImage(
    require(`../../assets/images/background/${BackgroundImgList[bgImgCnt].url}`)
  );
  return (
    <Image image={image} width={canvasSize} height={canvasSize} name={name} />
  );
};

function Canvas({ dragUrl, images, setImages, bgImgCnt }) {
  const [selectedId, selectShape] = useState(null);
  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    console.log(e.target.attrs.name, e.target.getStage());
    const clickedOnEmpty = e.target.attrs.name === "background"; // e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };
  console.log("selectedId", selectedId);
  //const dragUrl = useRef();
  const stageRef = useRef();
  // const [images, setImages] = useState([]);

  return (
    <div
      style={{
        marginBottom: 21,
      }}
    >
      <div
        onDrop={(e) => {
          console.log("is dropped!");
          e.preventDefault();
          // register event position
          stageRef.current.setPointersPositions(e);

          // add image
          setImages(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                src: dragUrl.current,
                id: images.length.toString(),
                w: 144,
                h: 139,
              },
            ])
          );
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage
          width={canvasSize}
          height={canvasSize}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          ref={stageRef}
          style={{
            backgroundImage: `url(require(../../assets/images/background/${BackgroundImgList[bgImgCnt].url}))`,
          }}
        >
          <Layer>
            <BackgroundImg bgImgCnt={bgImgCnt} name="background" />
            {images.map((image, i) => {
              return (
                <Stickers
                  setImages={setImages}
                  images={images}
                  key={i}
                  selectedId={selectedId}
                  shapeProps={image}
                  isSelected={i === selectedId}
                  onSelect={() => {
                    selectShape(i);
                  }}
                  onChange={(newAttrs) => {
                    const imgs = images.slice();
                    imgs[i] = newAttrs;
                    setImages(imgs); //setRectangles(rects);
                  }}
                />
              );
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default Canvas;

// Try to trag and image into the stage:
//       <br />

//       <button>
//         <img
//           alt="lion"
//           src="https://konvajs.org/assets/lion.png"
//           draggable="true"
//           onDragStart={(e) => {
//             dragUrl.current = e.target.src;
//             console.log(e.target.src)
//           }}
//           onClick={(e) => {
//             e.preventDefault();
//             setImages(
//               images.concat([
//                 {
//                   x: 100,
//                   y: 200,
//                   src: e.target.src,
//                   id: images.length.toString(),
//                   w: 144,
//                   h: 139,
//                 },
//               ])
//             );
//           }}
//         />
//       </button>
