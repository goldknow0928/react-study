import React from "react";
import styled from "styled-components";
import breakpoints from "styled-components-breakpoints";

//반응형 웹 구현 기준 사이즈 정의
const sizes = {
    sm: 600,
    md: 768,
    lg: 992,
    xl: 1200,
};

//기준 사이즈를 활용하여 미디어쿼리 생성
const mq = breakpoints(sizes);

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
`;

const Column = styled.div`
    box-sizing: border-box;
    padding: 20px;
    border-color: ${(props) => props.bgColor || "black"};
    background-color: ${(props) => props.bgColor || "black"};
    width: 100%;

    ${mq.minWidth("sm")`
        width: 50%;
    `}

    ${mq.minWidth("md")`
        width: 33.3%;
    `}

    ${mq.minWidth("lg")`
        width: 25%;
    `}

    ${mq.minWidth("xl")`
        width: 20%;
    `}
`;

const Responsive = () => {
    const ContColor = ["#aaa", "#bbb", "#ccc", "#ddd", "#eee"];

    return (
        <div>
            <h2>Flex를 사용한 반응형 5열 레이아웃</h2>

            <Container>
                {ContColor.map((item, index) => {
                    return (
                        <Column key={index} bgColor={item}>
                            <h2>item {index + 1}</h2>
                            <p>some text... {index + 1}</p>
                        </Column>
                    );
                })}
            </Container>
        </div>
    );
};

export default Responsive;
