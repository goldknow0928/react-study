import React, { memo, useRef } from "react";
import styled from "styled-components";

const Box = styled.div`
    &.box1 {
        width: auto;
        margin: 10px auto;
        padding: 30px;
        border: 10px solid #000;
        text-align: center;
    }

    &.box2 {
        width: 50%;
        margin: 10px auto;
        padding: 50px;
        border: 10px dotted #f00;
        text-align: left;
    }
`;

const Button = styled.input`
    margin: 0 5px;
`;

const StyleEx = memo(() => {
    // <Box> 를 제어하기 위한 참조변수
    const myBox = useRef();

    return (
        <div>
            <h1>StyleEx</h1>
            <Box className="box1" ref={myBox}>
                <h1>Hello React</h1>
            </Box>

            <Button
                type="button"
                value="(폰트) orange"
                onClick={(e) => {
                    // 직접 CSS 속성 설정
                    myBox.current.style.color = "#f60";
                }}
            />

            <Button
                type="button"
                value="(폰트) sky"
                onClick={(e) => {
                    // setProperty 메서드를 사용하여 CSS 속성 설정
                    myBox.current.style.setProperty("color", "#06f");
                }}
            />

            <Button
                type="button"
                value="(배경) yellow"
                onClick={(e) => {
                    // 직접 CSS 속성을 설정할 경우 JavaScript property명으로 접근해야 한다
                    myBox.current.style.backgroundColor = "#ff0";
                }}
            />

            <Button
                type="button"
                value="(배경) pink"
                onClick={(e) => {
                    // setProperty 메서드를 사용할 경우 원래의 CSS 속성명을 사용할 수 있다
                    myBox.current.style.setProperty("background-color", "#f0f");
                }}
            />

            <Button
                type="button"
                value="box1 클래스 적용"
                onClick={(e) => {
                    myBox.current.classList.add("box1");
                    myBox.current.classList.remove("box2");
                }}
            />

            <Button
                type="button"
                value="box2 클래스 적용"
                onClick={(e) => {
                    myBox.current.classList.add("box2");
                    myBox.current.classList.remove("box1");
                }}
            />
        </div>
    );
});

export default StyleEx;
