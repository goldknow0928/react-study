import React, { useState } from "react";
import styled from "styled-components";
import { MdDone, MdDelete, MdEdit } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button:hover {
        color: #f25f4c;
    }
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 10px 15px 15px;
    box-shadow: 0 0 9px #e5e5e5;
    border-radius: 8px;

    button {
        color: #dee2e6;
        font-size: 22px;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    &:hover {
        ${Buttons} {
            display: inherit;
        }
    }
`;

const CheckCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-right: 15px;
    border-radius: 16px;
    border: 1px solid #f25f4c;
    font-size: 24px;
    cursor: pointer;

    ${(props) =>
        props.done === "true" &&
        `
            border: 1px solid #F25F4C;
            color: #F25F4C;
        `}
`;

const EditForm = styled.form`
    flex: 1;
    display: flex;
`;

const EditInput = styled.input`
    flex: 1;
    padding: 0.5rem;
    border: none;
    outline: none;
    border-bottom: 1px solid #ced4da;
`;

const Text = styled.div`
    flex: 1;
    color: #495057;
    word-break: break-word;

    ${(props) =>
        props.done === "true" &&
        `
            color: #ced4da;
        `}
`;

/** 개별 할 일 항목 렌더링 / id, done, text prop을 받아와 사용한다. */
const TodoItem = ({ id, done, text }) => {
    //useTodoDispatch를 사용해서 TodoDispatchContext에서 디스패치 함수를 가져온다.
    const dispatch = useTodoDispatch();

    /** useState 훅을 사용해서 isEditing과 editText 상태를 추가한다.
     * isEditing은 수정 모드인지 아닌지를 나타내는 상태
     * editText는 수정 중인 텍스트를 저장하는 상태 */
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);

    /**체크 버튼 클릭 시 호출
     * { type: "TOGGLE", id } 형태의 액션을 디스패치하여 해당 할 일 항목의 완료 상태를 토글한다. */
    const onToggle = () => dispatch({ type: "TOGGLE", id });
    /**삭제 버튼 클릭 시 호출
     * { type: "REMOVE", id } 형태의 액션을 디스패치하여 해당 할 일 항목을 제거한다. */
    const onRemove = () => dispatch({ type: "REMOVE", id });

    //수정
    const onEdit = () => {
        setIsEditing(true);
        setEditText(text);
    };
    /** 수정 폼의 입력값이 변경될 떄 호출된다.
     * editText의 상태를 업데이트 한다. */
    const onChange = (e) => setEditText(e.target.value);

    /** 수정 폼을 제출했을 때 호출된다.
     * dispatch를 사용하여 EDIT 액션을 전달한다. 이때 액션에는 수정된 텍스트와 해당 todo의 고유 ID가 포함된다.
     * 마지막으로 isEditing을 false로 설정하여 수정 모드를 종료한다. */
    const onSubmit = (e) => {
        e.preventDefault(); //새로고침 방지

        dispatch({
            type: "EDIT",
            id,
            text: editText,
        });
        setIsEditing(false);
    };

    return (
        <TodoItemBlock>
            {/** 완료 여부를 표시하는 체크 버튼 렌더링
             * done prop을 문자열로 변환하여 done={done.toString()}로 전달한다.
             * 클릭 이벤트에는 onToggle 함수를 연결하여 체크 버튼을 클릭했을 때 onToggle 함수가 실행되도록 한다.
             * 만약 done이 true인 경우에만 <MdDone /> 이 렌더링 된다. */}
            <CheckCircle done={done.toString()} onClick={onToggle}>
                {done && <MdDone />}
            </CheckCircle>

            {isEditing ? (
                <EditForm onSubmit={onSubmit}>
                    <EditInput autoFocus value={editText} onChange={onChange} />
                    <button type="submit">
                        <MdDone />
                    </button>
                </EditForm>
            ) : (
                <Text done={done.toString()}>{text}</Text>
            )}

            <Buttons>
                {/* 수정 버튼 */}
                {!isEditing && !done && (
                    <button onClick={onEdit}>
                        <MdEdit />
                    </button>
                )}
                {/* 삭제 버튼 */}
                <button onClick={onRemove}>
                    <MdDelete />
                </button>
            </Buttons>
        </TodoItemBlock>
    );
};

/** React.memo로 감싸서 성능을 최적화한다.
 * id, done, text prop이 변경되지 않는 한 불필요한 리렌더링을 방지한다. */
export default React.memo(TodoItem);
