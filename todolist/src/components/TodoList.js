import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    flex: 1;
    padding: 24px;
    overflow-y: auto;
`;

const TodoList = () => {
    const todos = useTodoState(); //todo 상태 배열 가져오기

    return (
        <TodoListBlock>
            {/** todos 배열의 각 요소에 대해 TodoItem 컴포넌트 생성
             * map 함수는 배열의 각 요소에 대해 콜백 함수를 호출하여 새로운 배열을 생성한다.
             * 각 todo 항목에 대해 TodoItem 컴포넌트를 생성하고, key, id, text, done 등의 props를 전달한다.
             * key는 각 항목을 구별하기 위한 고유 식별자로 사용한다. */}
            {todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done}></TodoItem>
            ))}
        </TodoListBlock>
    );
};

export default TodoList;
