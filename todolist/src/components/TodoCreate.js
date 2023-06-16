import React, { useState } from "react";
import styled from "styled-components";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const InsertFormPositioner = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
`;

const InsertForm = styled.form`
    padding: 32px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
    background-color: #f8f9fa;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    font-size: 18px;
    box-sizing: border-box;
    outline: none;
`;

/** 할 일을 생성하는 기능 */
const TodoCreate = () => {
    /** value 상태를 useState 훅을 사용해서 관리한다. */
    const [value, setValue] = useState(""); //입력 폼에 입력된 텍스트 값
    //useTodoDispatch 훅을 사용하여 TodoDispatchContext에서 디스패치 함수를 가져온다.
    const dispatch = useTodoDispatch();
    //useTodoNextId 훅을 사용하여 다음 추가된 리스트에 고유 id값을 가져온다.
    const nextId = useTodoNextId();

    //setValue 함수를 사용하여 value상태를 업데이트 한다.
    const onChange = (e) => setValue(e.target.value);

    //할 일을 생성하는 폼이 제출될 때 호출뢴다.
    const onSubmit = (e) => {
        e.preventDefault(); //새로고침 방지

        //로컬 스토리지에 할 일 추가
        const todos = JSON.parse(localStorage.getItem("todo")) || [];
        const updateTodos = [...todos, dispatch.todo];
        localStorage.setItem("todo", JSON.stringify(updateTodos));

        //액션을 디스패치한다.
        dispatch({
            type: "CREATE", //type 설정
            todo: {
                id: nextId.current,
                text: value,
                done: false,
            },
        });

        setValue(""); //입력 폼의 값 초기화
        nextId.current += 1; //값을 증가시켜 다음 할 일의 고유 id를 업데이트 한다.
    };

    return (
        <>
            <InsertFormPositioner>
                <InsertForm onSubmit={onSubmit}>
                    {/* onChange 함수를 사용하여 값의 변경을 감지하고, value 상태를 통해 입력된 값을 표시한다. */}
                    <Input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요." onChange={onChange} value={value} />
                </InsertForm>
            </InsertFormPositioner>
        </>
    );
};

export default React.memo(TodoCreate);
