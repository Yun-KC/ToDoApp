import type { FC } from "react";
import React, { useRef } from "react";
import { useDrag, useDragLayer, useDrop, XYCoord } from "react-dnd";

import { ItemTypes } from "../../itemType";
import "./TaskCard.css";

export interface TaskCardProps {
  id: any;
  text: string;
  index: number;
  y: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const TaskCard: FC<TaskCardProps> = React.memo(({ id, text, index, moveCard, y }) => {
  const ref = useRef<HTMLDivElement>(null);
  /*
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }

      // 드래그 중인 요소의 인덱스
      const dragIndex = item.index;

      // 드랍될 요소의 인덱스
      const hoverIndex = index;

      // 같은 요소끼리는 바뀌지 않도록
      if (dragIndex === hoverIndex) {
        return;
      }

      // https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect
      // 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 제공하는 DOMRect 객체를 반환합니다.
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // 엘리먼트의 상대적인 y좌표 위치의 반
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // 마우스 포인터의 x, y 좌표
      const clientOffset = monitor.getClientOffset();

      // 드랍할 요소의 top 값과 마우스 포인터의 y 값 빼기
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // 마우스가 항목 높이의 절반을 넘은 경우에만 이동
      // 아래로 끌 때는 커서가 요소의 50% 미만일 때만 이동합니다.
      // 위쪽으로 끌 때는 커서가 요소의 50% 이상일 때만 이동합니다.

      // 드래그 중인 요소의 인덱스: dragIndex
      // 드랍될 요소의 인덱스: hoverIndex
      // 드랍될 요소에서 마우스 포인트의 상대적인 위치 : hoverClientY
      // 드랍될 요소의 상대적인 중앙 Y 값: hoverMiddleY

      // dragIndex가 hoverIndex보다 작은 경우와
      // hoverClientY가 hoverMiddleY보다 작은 경우
      // 무시함.
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // dragIndex가 hoverIndex보다 큰 경우와
      // hoverClientY가 hoverMiddleY보다 큰 경우
      // 무시함.
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // 나머지 경우에 카드를 바꿔줌
      moveCard(dragIndex, hoverIndex);
      // 카드를 바꿔줬다면 드래그 중인 요소의 index를 호버 인덱스와 바꿔줌
      item.index = hoverIndex;
    },
  });
*/
  function getItemStyles(currentOffset: XYCoord | null) {
    if (!currentOffset) {
      return {
        display: "none",
      };
    }

    let { x, y } = currentOffset;

    const transform = `translate(${x}px, ${y}px)`;
    return {
      transform,
      WebkitTransform: transform,
      zIndex: 1000,
    };
  }

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index, text };
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getDifferenceFromInitialOffset(),
  }));

  // drag(drop(ref));
  drag(ref);

  // const transform = `translate3d(${currentOffset.x}px, ${currentOffset.y}px, 0)`

  return (
    <div className="taskCard" ref={ref} style={{ ...(isDragging ? getItemStyles(currentOffset) : null) }}>
      {text}
    </div>
  );
});
