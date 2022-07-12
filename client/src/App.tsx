import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./components/Container";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "header header "
    "main cardlist"
    "footer footer";
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <DndProvider backend={HTML5Backend}>
          <Container />
        </DndProvider>
      </AppContainer>
    </>
  );
};

export default App;
