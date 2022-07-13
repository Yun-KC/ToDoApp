import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../itemType";
import styled from "styled-components";

const RunningTaskCardContainerDiv = styled.div`
  grid-area: running;
  width: 100%;
  height: 100%;
  background-color: #e394ff;
`;

export const RunningTaskCardContainer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [collect, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect: (moniter) => {
      return {
        item: moniter.getItem(),
      };
    },
  });

  return <RunningTaskCardContainerDiv ref={ref}>갸악</RunningTaskCardContainerDiv>;
};
