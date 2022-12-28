import React, { memo, useCallback, useRef } from "react";
import ListContainer from "../components/ListContainer";

const CreateElementEx = memo(() => {
    // 텍스트 입력을 위한 input태그에 연결할 참조변수
    const comment = useRef();
    // 목록을 출력할 ul 태그의 스타일컴포넌트에 연결할 참조변수
    const list = useRef();

    const css = {
        marginRight: "10px",
    };

    // 동적으로 li태그 Element 객체를 생성하여 리턴하는 함수
    const getItem = useCallback((clsName) => {
        // JS에게 li 태그를 코딩시킴
        const li = document.createElement("li");
        // CSS 클래스 추가시 add함수에게 갯수제한 없이 콤마로 구분하여 여러개 지정 가능함
        li.classList.add("item", clsName);
        // 사용자가 입력한 내용을 li태그에 표시함
        li.innerHTML = comment.current.value;

        // li에 클릭 이벤트 적용
        li.addEventListener("click", (e) => {
            e.currentTarget.remove();
        });

        return li;
    }, []);

    // appendChild 기능을 위한 버튼의 이벤트 리스너
    const onAppendChildClick = useCallback(
        (e) => {
            // li 태그를 반환받음
            const li = getItem("blue");
            // ul 태그에 JS가 코딩한 li를 자식요소로 추가함 --> 기존 항목을 유지하고 맨 뒤에 추가함
            list.current.appendChild(li);
        },
        [list, getItem]
    );

    // insertBefore1 기능을 위한 버튼의 이벤트 리스너
    const onInsertBefore1Click = useCallback(
        (e) => {
            list.current.insertBefore(getItem("orange"), null);
        },
        [list, getItem]
    );

    // insertBefore2 기능을 위한 버튼의 이벤트 리스터
    const onInsertBefore2Click = useCallback(
        (e) => {
            list.current.insertBefore(getItem("pink"), document.querySelector("li:first-child"));
        },
        [list, getItem]
    );

    return (
        <div>
            <h2>CreateElementEx</h2>

            <input type="text" style={css} ref={comment} />
            <button type="button" style={css} onClick={onAppendChildClick}>appendChild</button>
            <button type="button" style={css} onClick={onInsertBefore1Click}>InsertBefore1</button>
            <button type="button" style={css} onClick={onInsertBefore2Click}>InsertBefore2</button>

            <hr />

            {/* 동적으로 JS가 생성한 HTML요소가 추가될 위치 */}
            <ListContainer ref={list} />
        </div>
    );
});

export default CreateElementEx;
