import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const CircleButton = styled.button`
    position: absolute;
    left: 50%;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
    color: #fff;
    background-color: #38d9a9;
    &:hover {
        background-color: #63e6be;
    }
    &:active {
        background-color: #20c997;
    }
    font-size: 60px;
    transform: translate(-50%, 50%);
    transition: 0.125s all ease-in;
    outline: none;
    cursor: pointer;
    z-index: 5;
    ${(props) =>
        props.open &&
        css`
            background-color: #ff6b6b;
            &:hover {
                background-color: #ff8787;
            }
            &:active {
                background-color: #fa5252;
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `}
`;

const InsertFormPositioner = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
`;

const InsertForm = styled.form`
    padding: 32px 32px 72px;
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

const TodoCreate = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);
    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault(); //새로고침 방지

        dispatch({
            type: "CREATE",
            todo: {
                id: nextId.current,
                text: value,
                done: false,
            },
        });

        setValue("");
        setOpen(false);
        nextId.current += 1;
    };

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요." onChange={onChange} value={value} />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
}

export default React.memo(TodoCreate);
