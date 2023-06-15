import React, { useState } from "react";
import styled from "styled-components";
// import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

// const CircleButton = styled.button`
//     position: absolute;
//     left: 50%;
//     bottom: 0px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 80px;
//     height: 80px;
//     border-radius: 50%;
//     border: none;
//     color: #fff;
//     background-color: #38d9a9;
//     &:hover {
//         background-color: #63e6be;
//     }
//     &:active {
//         background-color: #20c997;
//     }
//     font-size: 60px;
//     transform: translate(-50%, 50%);
//     transition: 0.125s all ease-in;
//     outline: none;
//     cursor: pointer;
//     z-index: 5;
//     ${(props) =>
//         props.open &&
//         css`
//             background-color: #ff6b6b;
//             &:hover {
//                 background-color: #ff8787;
//             }
//             &:active {
//                 background-color: #fa5252;
//             }
//             transform: translate(-50%, 50%) rotate(45deg);
//         `}
// `;

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
    /** open과 value 두 상태를 useState 훅을 사용해서 관리한다. */
    // const [open, setOpen] = useState(false); //입력 폼의 열림/닫힘 상태
    const [value, setValue] = useState(""); //입력 폼에 입력된 텍스트 값

    const dispatch = useTodoDispatch(); //useTodoDispatch 훅을 사용하여 TodoDispatchContext에서 디스패치 함수를 가져온다.
    const nextId = useTodoNextId(); //useTodoNextId 훅을 사용하여 다음 추가된 리스트에 고유 id값을 가져온다.

    // const onToggle = () => setOpen(!open); //추가 버튼 클릭하여 입력 폼을 열거나 닫는다. setOpen 함수를 호출하여 open 상태를 반전시킨다.
    const onChange = (e) => setValue(e.target.value); //setValue 함수를 사용하여 value상태를 업데이트 한다.
    const onSubmit = (e) => {
        //할 일을 생성하는 폼이 제출될 때 호출뢴다.
        e.preventDefault(); //새로고침 방지

        dispatch({
            //액션을 디스패치한다.
            type: "CREATE", //type 설정
            todo: {
                //새로운 할 일의 정보가 담긴다.
                id: nextId.current,
                text: value,
                done: false,
            },
        });

        setValue(""); //입력 폼의 값 초기화
        // setOpen(false); //입력 폼 닫기
        nextId.current += 1; //값을 증가시켜 다음 할 일의 고유 id를 업데이트 한다.
    };

    return (
        <>
            {/* {open && ( //open 상태가 true 일때.. */}
            <InsertFormPositioner>
                <InsertForm onSubmit={onSubmit}>
                    {/* onChange 함수를 사용하여 값의 변경을 감지하고, value 상태를 통해 입력된 값을 표시한다. */}
                    <Input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요." onChange={onChange} value={value} />
                </InsertForm>
            </InsertFormPositioner>
            {/* )} */}
            {/* <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton> */}
        </>
    );
};

export default React.memo(TodoCreate);
