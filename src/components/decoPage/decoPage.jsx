import { React, useState, useRef } from "react";
import { Stage, Layer } from "react-konva";
import Stickers from "./../common/stickers";

const initialRectangles = [
  {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    fill: "white",
    id: "rect1",
  },
  // {
  //   x: 150,
  //   y: 150,
  //   width: 100,
  //   height: 100,
  //   fill: "green",
  //   id: "rect2",
  // },
];
function DecoPage() {
  const [rectangles, setRectangles] = useState(initialRectangles);
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };
  console.log("selectedId", selectedId);
  const dragUrl = useRef();
  const stageRef = useRef();
  const [images, setImages] = useState([]);

  console.log(images);
  console.log(dragUrl);
  console.log("stage", stageRef.current);

  return (
    <div>
      Try to trag and image into the stage:
      <br />
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
            setImages(
              images.concat([
                {
                  x: 100,
                  y: 200,
                  src: e.target.src,
                  id: images.length,
                  w: 144,
                  h: 139,
                },
              ])
            );
          }}
        />
      </button>
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
                id: images.length,
                w: 144,
                h: 139,
              },
            ])
          );
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage
          width={375}
          height={window.innerHeight}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          style={{ border: "1px solid grey" }}
          ref={stageRef}
        >
          <Layer>
            {images.map((image, i) => {
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
                />
              );
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default DecoPage;
