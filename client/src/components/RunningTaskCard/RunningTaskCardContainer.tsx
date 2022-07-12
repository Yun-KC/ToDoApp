import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../itemType";
import styled from "styled-components";

const RunningTaskCardContainerDiv = styled.div`
  grid-area: running;
  width: 100%;
  height: 100%;
  background-color: #e394ff;
`;

export const RunningTaskCardContainer = ({}) => {
  return <RunningTaskCardContainerDiv>갸악</RunningTaskCardContainerDiv>;
};
