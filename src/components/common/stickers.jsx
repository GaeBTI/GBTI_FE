import { React, useRef, useEffect, useLayoutEffect } from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect, Image, Transformer } from "react-konva";
import useImage from "use-image";

function Stickers({ shapeProps, isSelected, onSelect, onChange }) {
  const [image] = useImage(
    "https://rawcdn.githack.com/konvajs/site/726e19d6304c580ad8fe40651bd56a27ba43fcb3/react-demos/filters/public/lion.png",
    "Anonimus"
  );
  const shapeRef = useRef();
  const trRef = useRef();
  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      //trRef.current.nodes([shapeRef.current]);
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  useLayoutEffect(() => {
    shapeRef.current.cache();
  }, [shapeProps, image, isSelected]);

  return (
    <>
      <Image
        image={image}
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
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
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
