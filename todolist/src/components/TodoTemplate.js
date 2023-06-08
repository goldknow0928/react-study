import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 512px;
    height: 768px;
    margin: 96px auto 32px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

const TodoTemplate = ({ children }) => {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
