import {
  React,
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
  memo,
} from "react";
import { Image, Transformer, Group } from "react-konva";
import useImage from "use-image";
//import DelBtn from "../../assets/images/DelBtn.png";

const Stickers = memo(
  ({
    shapeProps,
    isSelected,
    onSelect,
    onChange,
    decoDone,
  }) => {
    const [image] = useImage(shapeProps.src);
    //const [deleteImage] = useImage(DelBtn);
    const shapeRef = useRef();
    const trRef = useRef();
    const [size, setSize] = useState({ w: shapeProps.w, h: shapeProps.h });

    useEffect(() => {
      if (isSelected) {
        trRef.current.nodes([shapeRef.current]);
        trRef.current.getLayer().batchDraw();
      }
    }, [isSelected]);

    useLayoutEffect(() => {
      if (image) {
        shapeRef.current.cache();
      }
    }, [shapeProps, image, isSelected]);

    // const onDelete = () => {
    //   setImages(
    //     images.filter((image, i) => {
    //       return image.id !== selectedId;
    //     })
    //   );
    // };
    return (
      <>
        <Group draggable={isSelected}>
          <Image
            image={image}
            width={200}
            height={200}
            offsetX={image ? size.w / 2 : 0}
            offsetY={image ? size.h / 2 : 0}
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
                width: Math.max(node.width() * scaleX), //5
                height: Math.max(node.height() * scaleY),
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
              if (newBox.width < 50 || newBox.height < 50) {
                return oldBox;
              }
              return newBox;
            }}
          >
          </Transformer>
        )}
      </>
    );
  }
);

export default Stickers;
