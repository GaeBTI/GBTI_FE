import { React, useState, useRef, useEffect } from "react";
import { Stage, Layer, Image } from "react-konva";
import { useNavigate } from "react-router-dom";
import useImage from "use-image";
import Stickers from "../common/stickers";
import { BackgroundImgList } from "./data.jsx";

const canvasSize = 335;
const bgName = "background";

const BackgroundImg = ({ bgImgCnt, name }) => {
  const [image] = useImage(
    require(`../../assets/images/backgrounds/${BackgroundImgList[bgImgCnt].url}`)
  );
  return (
    <Image image={image} width={canvasSize} height={canvasSize} name={name} />
  );
};

function Canvas({
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
    setCardUri(uri); // uri 추출 후 결과페이지에서 사용하기 위해 state 저장
    navigate(`/result/${hide}`); // result 페이지 이동
  };

  useEffect(() => {
    decoDone && handleExport();
  }, [decoDone]);

  useEffect(() => {
    imgLength += 1;
  }, [images]);

  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target.attrs.name === bgName;

    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <div
      style={{ marginBottom: 1 }}
    >
      <div>
        <Stage
          width={canvasSize}
          height={canvasSize}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          ref={stageRef}
        >
          <Layer>
            <BackgroundImg bgImgCnt={bgImgCnt} name={bgName} />
            { images.map((image, i) => {
              return (
                <Stickers
                  key={i}
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
