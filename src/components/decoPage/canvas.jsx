import { React, useState, useRef } from "react";
import { Stage, Layer, Image } from "react-konva";
import { useLinkClickHandler, useNavigate } from "react-router-dom";
import useImage from "use-image";
import Stickers from "../common/stickers";
// feature/makeDecoPage
import { BackgroundImgList } from "./data.jsx";
const canvasSize = 335;
const bgName = "background";
// import { BackgroundImgList } from "./data.jsx";
// const canvasSize = 335;
// >>>>>>> develop

const BackgroundImg = ({ bgImgCnt, name }) => {
  console.log(BackgroundImgList[bgImgCnt]);
  const [image] = useImage(
    require(`../../assets/images/backgrounds/${BackgroundImgList[bgImgCnt].url}`)
  );
  return (
    <Image image={image} width={canvasSize} height={canvasSize} name={name} />
  );
};

const downloadURI = (uri, name) => {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function Canvas({ dragUrl, images, setImages, bgImgCnt, decoDone, setCardUri }) {
  const [selectedId, selectShape] = useState(null);
  const stageRef = useRef(null);
  console.log("decoDone", decoDone);
  // <<<<<<< feature/makeDecoPage
  console.log("full imgs", images);
  
  const navigate = useNavigate();
  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    console.log('추출완',uri);
    setCardUri(uri); // uri 추출 후 결과페이지에서 사용하기 위해 state 저장
    navigate('/result'); // result 페이지 이동
  };
  decoDone && handleExport();
  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    console.log(e.target.attrs.name, e.target.getStage());
    const clickedOnEmpty = e.target.attrs.name === bgName;

    if (clickedOnEmpty) {
      selectShape(null);
    }
  };
  console.log("selectedId", selectedId);
  //const dragUrl = useRef();

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
                id: (images.length + 1).toString(),
                w: 200,
                h: 200,
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
        >
          <Layer>
            <BackgroundImg bgImgCnt={bgImgCnt} name={bgName} />
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
