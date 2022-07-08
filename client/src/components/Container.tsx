import update from 'immutability-helper';
import type { FC } from 'react';
import React from 'react';
import { useCallback, useState } from 'react';
import { Card } from './Card';
import { Motion, spring, presets } from 'react-motion';

const style = {
  width: 400,
};

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
      text: 'Write a cool JS library',
    },
    {
      id: 2,
      text: 'Make it generic enough',
    },
    {
      id: 3,
      text: 'Write README',
    },
    {
      id: 4,
      text: 'Create some examples',
    },
    {
      id: 5,
      text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
    },
    {
      id: 6,
      text: '???',
    },
    {
      id: 7,
      text: 'PROFIT',
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
      <div style={style}>
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
      </div>
    </>
  );
};
