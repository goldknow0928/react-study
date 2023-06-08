import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyled = createGlobalStyle`
  body {
    background-color: #e9ecef;
  }
`;

function App() {
    return (
        <TodoProvider>
            <GlobalStyled />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
    );
}

export default App;