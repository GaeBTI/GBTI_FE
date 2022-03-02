import { React, useState, useRef, useEffect } from "react";
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

function Canvas({
  dragUrl,
  images,
  setImages,
  bgImgCnt,
  decoDone,
  setCardUri,
  hide,
}) {
  const [selectedId, selectShape] = useState(0);
  const stageRef = useRef(null);
  let imgLength = images.length;

  const navigate = useNavigate();
  const handleExport = () => {
    selectShape(null);
    const uri = stageRef.current.toDataURL({ pixelRatio: 2 });
    // console.log("추출완", uri);
    setCardUri(uri); // uri 추출 후 결과페이지에서 사용하기 위해 state 저장
    navigate(`/result/${hide}`); // result 페이지 이동
  };

  useEffect(() => {
    decoDone && handleExport();
  }, [decoDone]);

  useEffect(() => {
    imgLength += 1;
  }, [images]);
  // decoDone && handleExport();
  const checkDeselect = (e) => {
    // deselect when clicked on empty area

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
        marginBottom: 1,
      }}
    >
      <div
      // onDrop={(e) => {
      //   console.log("is dropped!");
      //   e.preventDefault();
      //   // register event position
      //   stageRef.current.setPointersPositions(e);
      //   // add image
      //   setImages(
      //     images.concat([
      //       {
      //         ...stageRef.current.getPointerPosition(),
      //         src: dragUrl.current,
      //         id: imgLength, //(images.length + 1).toString(),
      //         w: 200,
      //         h: 200,
      //       },
      //     ])
      //   );
      // }}
      // onDragOver={(e) => e.preventDefault()}
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
                  isSelected={image.id === selectedId}
                  onSelect={() => {
                    selectShape(image.id);
                  }}
                  onChange={(newAttrs) => {
                    const imgs = images.slice();
                    imgs[i] = newAttrs;
                    setImages(imgs); //setRectangles(rects);
                  }}
                  decoDone={decoDone}
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
