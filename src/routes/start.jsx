import { React, useState } from "react";
import { Stage, Layer } from "react-konva";
import Stickers from "./../components/common/stickers";

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
function Start() {
  const [rectangles, setRectangles] = useState(initialRectangles);
  const [selectedId, selectShape] = useState(null);
  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };
  return (
    <Stage
      width="375"
      height={window.innerHeight}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        {rectangles.map((rect, i) => {
          return (
            <Stickers
              key={i}
              shapeProps={rect}
              isSelected={rect.id === selectedId}
              onSelect={() => {
                selectShape(rect.id);
              }}
              onChange={(newAttrs) => {
                const rects = rectangles.slice();
                rects[i] = newAttrs;
                setRectangles(rects);
              }}
            />
          );
        })}
      </Layer>
    </Stage>
  );
}

export default Start;
