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

/* TODO: 구현해야할 기능 정리
1. TaskCard 컴포넌트는 마우스 드래그를 통해
 RunningTaskCard, TaskCardList 등 자유롭게 이동가능

2. 드래그 시 엘리먼트 잔상이 아니라 TaskCard 컴포넌트가 따라다녀야 함

-완-

3.카드 리스트의 정렬 방식 재정의 필요
특히 카드의 위치를 어떻게 보여줄 것인가?


4. TaskCardList에 삽입 시 내가 원하는 순서에 삽입 가능해야함
 - TaskCard들이 애니메이션 효과를 가져야함

*/
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
