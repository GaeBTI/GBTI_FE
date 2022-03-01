import {
  React,
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
  memo,
} from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect, Image, Transformer, Group } from "react-konva";
import useImage from "use-image";
import DelBtn from "../../assets/images/DelBtn.png";

const Stickers = memo(
  ({
    selectedId,
    images,
    setImages,
    shapeProps,
    isSelected,
    onSelect,
    onChange,
    stageScale,
    decoDone,
  }) => {
    const [image] = useImage(shapeProps.src);
    const [deleteImage] = useImage(DelBtn);
    const shapeRef = useRef();
    const trRef = useRef();

    console.log(images);

    const [size, setSize] = useState({ w: shapeProps.w, h: shapeProps.h });
    useEffect(() => {
      if (isSelected) {
        // we need to attach transformer manually
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

    const onDelete = () => {
      console.log("Sticker is deleted",selectedId);
      setImages(
        images.filter((image, i) => {
          console.log('image deleted',image);
          return image.id !== selectedId;
        })
      );
      console.log(selectedId);
    };
    // console.log(shapeProps.id, "stickers", shapeProps, "h", shapeProps.height);
    return (
      <>
        <Group draggable={isSelected}>
          <Image
            image={image}
            width={200}
            height={200}
            offsetX={image ? size.w / 2 : 0}
            offsetY={image ? size.h / 2 : 0}
            // I will use offset to set origin to the center of the image
            onClick={onSelect}
            onTap={onSelect}
            ref={shapeRef}
            {...shapeProps}
            onDragEnd={(e) => {
              onChange({
                ...shapeProps,
                x: e.target.x(),
                y: e.target.y(),
              });
            }}
            onTransformEnd={(e) => {
              const node = shapeRef.current;

              const scaleX = node.scaleX();
              const scaleY = node.scaleY();
              node.scaleX(1); // 다시 set 할 예정
              node.scaleY(1);
              onChange({
                ...shapeProps,
                x: node.x(),
                y: node.y(),
                width: Math.max( node.width() * scaleX), //5
                height: Math.max( node.height() * scaleY),
              });
              setSize({ w: node.width(), h: node.height() });
            }}
          />
        </Group>
        {isSelected && !decoDone && (
          <Transformer
            ref={trRef}
            boundBoxFunc={(oldBox, newBox) => {
              // limit resize
              if (
                newBox.width < 50 ||
                newBox.height < 50
              ) {
                return oldBox;
              }
              return newBox;
            }}
          >
            <Image
              image={deleteImage}
              onClick={onDelete}
              onTap={onDelete}
              // onTransformEnd={(e) => {
              //   // transformer is changing scale of the node
              //   // and NOT its width or height
              //   // but in the store we have only width and height
              //   // to match the data better we will reset scale on transform end
              //   const node = shapeRef.current;
              //   // console.log("shapeRef.current ", node);
              //   const scaleX = node.scaleX();
              //   const scaleY = node.scaleY();

              //   // we will reset it back
              //   node.scaleX(1);
              //   node.scaleY(1);
              //   onChange({
              //     ...shapeProps,
              //     x: node.x(),
              //     y: node.y(),
              //     // set minimal value
              //     width: Math.max(image.width / 2, node.width() * scaleX), //5
              //     height: Math.max(node.height() * scaleY),
              //   });
              // }}
            ></Image>
          </Transformer>
        )}
      </>
    );
  }
);

export default Stickers;
