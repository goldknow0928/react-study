import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        color: #343a40;
        font-size: 36px;
    }

    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }

    .tasks-left {
        margin-top: 40px;
        color: #20c997;
        font-size: 18px;
        font-weight: 700;
    }
`;

const TodoHead = () => {
    const todos = useTodoState();
    const undoneTasks = todos.filter((todo) => !todo.done);
    
    const today = new Date();
    const dateString = today.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;