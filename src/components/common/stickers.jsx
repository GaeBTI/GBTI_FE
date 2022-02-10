import { React, useRef, useEffect, useLayoutEffect, useState } from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect, Image, Transformer } from "react-konva";
import useImage from "use-image";

function Stickers({ shapeProps, isSelected, onSelect, onChange }) {
  const [image] = useImage(shapeProps.src);
  const shapeRef = useRef();
  const trRef = useRef();
  console.log("img", image);
  const [size, setSize] = useState({ w: shapeProps.w, h: shapeProps.h });
  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      //trRef.current.nodes([shapeRef.current]);
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  useLayoutEffect(() => {
    if (image) {
      shapeRef.current.cache();
      // console.log("ule img", image.width, image.height);
    }
  }, [shapeProps, image, isSelected]);

  console.log(shapeProps.id, "stickers", shapeProps, "h", shapeProps.height);
  return (
    <>
      <Image
        image={image}
        offsetX={image ? size.w / 2 : 0}
        offsetY={image ? size.h / 2 : 0}
        // I will use offset to set origin to the center of the image
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          // console.log("shapeRef.current ", node);
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(image.width / 2, node.width() * scaleX), //5
            height: Math.max(node.height() * scaleY),
          });
          // console.log("changed to ", node);
          setSize({ w: node.width(), h: node.height() });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (
              newBox.width < image.width / 2 ||
              newBox.height < image.height / 2
            ) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
}

export default Stickers;
