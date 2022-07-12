import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TaskCardList } from "./components/TaskCardList/TaskCardList";
import { RunningTaskCardContainer } from "./components/RunningTaskCard/RunningTaskCardContainer";
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "header header "
    "running taskCardList"
    "footer footer";
`;
// 데이터 관리는 App 에서
export interface Item {
  id: number;
  text: string;
}
const testCards: Item[] = [
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
];
const App = () => {
  const [cards, setCards] = useState<Item[]>(testCards);
  return (
    <>
      <AppContainer>
        <DndProvider backend={HTML5Backend}>
          <TaskCardList cards={cards} setCards={setCards} />
          <RunningTaskCardContainer />
        </DndProvider>
      </AppContainer>
    </>
  );
};

export default App;
