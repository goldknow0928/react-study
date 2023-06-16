import React, { useReducer, createContext, useContext, useRef, useEffect } from "react";

//초기 상태 정의
const initialTodos = JSON.parse(localStorage.getItem("todo")) || [
    {
        id: 1,
        text: "프로젝트 생성하기",
        done: false,
    },
];

/** todoReducer는 useReducer 훅에서 사용될 reducer 함수이다.
 * 이 함수는 현재 상태(state)와 액션(action)을 받아서 새로운 상태를 반환한다.
 * 여기서는 액션의 타입에 따라 다른 동작을 수행한다. */
const todoReducer = (state, action) => {
    switch (action.type) {
        case "CREATE": //주어진 action.todo 를 기존 상태(state)에 추가한다.
            return state.concat(action.todo);
        case "TOGGLE": //action.id와 일치하는 항목의 done 값을 반전시킨다.
            return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
        case "REMOVE": //action.id와 일치하지 않는 항목들로 이루어진 새로운 배열을 반환한다.
            return state.filter((todo) => todo.id !== action.id);
        case "EDIT": //특정 id의 todo 항목의 텍스트를 수정
            return state.map((todo) => (todo.id === action.id ? { ...todo, text: action.text } : todo));
        default: //알 수 없는 액션 타입인 경우 에러를 발생시킨다.
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

/** createContext를 사용하여 세 개의 Context를 생성한다. */
const TodoStateContext = createContext(); //Todo 상태를,
const TodoDispatchContext = createContext(); //액션 디스패치 함수를,
const TodoNextIdContext = createContext(); //다음 Todo 항목의 id 값을 제공하기 위한 것이다.

/** TodoProvider 컴포넌트는 Todo 애플리케이션 전체를 감싸는 Provider 역할을 한다.
 * useReducer 훅을 사용하여 state와 dispatch(상태 업데이트)를 생성한다.
 * state는 todoReducer를 사용하여 초기값을 initialTodos로 설정한다.
 * nextId는 useRef를 사용하여 초기값을 initialTodos의 length +1 로 설정한다. */
export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(getNextId()); //다음 사용 가능한 id 가져오기

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(state));
    }, [state]);

    //다음 사용 가능한 id 계산
    function getNextId() {
        const maxId = state.reduce((max, todo) => (todo.id > max ? todo.id : max), 0);
        return maxId + 1;
    }

    //할 일 삭제후 nextId 업데이트
    function updateNextIdAfterDelete(id) {
        if (id === nextId.current - 1) {
            nextId.current -= 1;
        }
    }

    //nextId 업데이트하는 새로운 디스패치 함수 생성
    const dispatchWidthNextId = (action) => {
        if (action.type === "REMOVE") {
            updateNextIdAfterDelete(action.id);
        }
        dispatch({ ...action, nextId: nextId.current });
        nextId.current += 1; //액션을 디스패치한 후 nextId를 증가시킨다.
    };

    /** ~.Provider 를 사용하여 각각의 값들을 제공한다.
     * 이렇게 하위 컴포넌트에서 해당 Context값을 사용할 수 있게 된다.
     * {children} 은 Provider 컴포넌트로 감싸진 자식 컴포넌트들을 렌더링하는 역할을 한다. */
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatchWidthNextId}>
                <TodoNextIdContext.Provider value={nextId}>{children}</TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

/** 세 개의 커스텀 훅
 * 이 훅들은 각각 Todo상태, 액션 디스패치 함수, 다음 Todo 항목의 id 값을 반환한다.
 * useContext를 사용하여 해당 Context값을 가져온다.
 * 만약 Context값이 존재하지 않는다면, 에러를 발생시킨다.
 * TodoProvider로 감싸진 컴포넌트 내에서만 이 훅들을 사용해야 한다. */
export function useTodoState() {
    const context = useContext(TodoStateContext);

    if (!context) {
        throw new Error("Cannot find TodoProvider");
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);

    if (!context) {
        throw new Error("Cannot find TodoProvider");
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);

    if (!context) {
        throw new Error("Cannot find TodoProvider");
    }
    return context;
}

/**
 * 👉 TodoProvider를 사용하여 Todo를 감싸고,
 * useTodoState, useTodoDispatch, useTodoNextId를 통해 상태와 액션을 다른 컴포넌트에서 사용할 수 있다.
 * 이를 통해 상위 컴포넌트에서 상태와 액션을 관리하고, 하위 컴포넌트에서 해당 값들을 사용하여 Todo 구현할 수 있다.
 */
