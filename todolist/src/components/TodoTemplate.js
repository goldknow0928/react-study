import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 421px;
    max-height: calc(100vh - 100px);
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    transform: translate(-50%, -50%);
`;

const TodoTemplate = ({ children }) => {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;
