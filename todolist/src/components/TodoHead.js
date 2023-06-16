import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
    padding: 70px 24px 14px;

    .day {
        color: #868e96;
        font-size: 18px;
    }

    .tasks-left {
        margin-top: 20px;
        color: #F25F4C;
        text-align: right;
    }
`;

const TodoHead = () => {
    const todos = useTodoState(); //todo 상태 배열 가져오기
    const undoneTasks = todos.filter((todo) => !todo.done); //todos배열에서 done값이 false인 항목들만 저장
    
    const today = new Date(); //date객체 생성
    const dateString = today.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

    return (
        <TodoHeadBlock>
            <div className="day">{dateString} {dayName}</div>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;
