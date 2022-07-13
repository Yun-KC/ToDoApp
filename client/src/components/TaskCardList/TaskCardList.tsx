import update from "immutability-helper";
import type { FC } from "react";
import React from "react";
import { useCallback, useState } from "react";
import { TaskCard } from "./TaskCard";
import { Motion, spring } from "react-motion";
import styled from "styled-components";
import { useDragLayer } from "react-dnd";

const TaskCardListDiv = styled.div`
  grid-area: taskCardList;
  width: 100%;
  height: 100%;
  overflow: visible;
  background-color: #bcfcf3;
`;

// TODO: 아이템의 타입을 어떤 파일에 정의 해야할까?
// 아이템은 app에서도 사용하고, 타입을 표시할 CardList 컴포넌트에서도 사용한다.
interface Item {
  id: number;
  text: string;
}

export const TaskCardList: FC<{ cards: Item[]; setCards: React.Dispatch<React.SetStateAction<Item[]>> }> = ({
  cards,
  setCards,
}) => {
  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards: Item[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as Item],
        ],
      })
    );
  }, []);

  return (
    <>
      <TaskCardListDiv>
        {cards.map((card, i) => (
          <Motion
            key={card.id}
            style={{
              y: spring(i * 80, { stiffness: 300, damping: 40 }),
            }}
          >
            {({ y }) => <TaskCard key={card.id} index={i} id={card.id} text={card.text} moveCard={moveCard} y={y} />}
          </Motion>
        ))}
      </TaskCardListDiv>
    </>
  );
};
