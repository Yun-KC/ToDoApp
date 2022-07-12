import update from "immutability-helper";
import type { FC } from "react";
import React from "react";
import { useCallback, useState } from "react";
import { Card } from "./Card/Card";
import { Motion, spring } from "react-motion";
import styled from "styled-components";
// TODO: 부모 크기에 따라 컨테이너 크기와 카드 요소들의 크기 변경

const CardContainer = styled.div`
  grid-area: cardlist;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: #bcfcf3;
`;

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export const Container: FC = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Write a cool JS library",
    },
    {
      id: 2,
      text: "Make it generic enough",
    },
    {
      id: 3,
      text: "Write README",
    },
    {
      id: 4,
      text: "Create some examples",
    },
    {
      id: 5,
      text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
    },
    {
      id: 6,
      text: "???",
    },
    {
      id: 7,
      text: "PROFIT",
    },
    {
      id: 8,
      text: "PROFIT",
    },
    {
      id: 9,
      text: "PROFIT",
    },
    {
      id: 10,
      text: "PROFIT",
    },
  ]);

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
      <CardContainer>
        {cards.map((card, i) => (
          <Motion
            key={card.id}
            style={{
              y: spring(i * 80, { stiffness: 300, damping: 40 }),
            }}
          >
            {({ y }) => <Card key={card.id} index={i} id={card.id} text={card.text} moveCard={moveCard} y={y} />}
          </Motion>
        ))}
      </CardContainer>
    </>
  );
};
