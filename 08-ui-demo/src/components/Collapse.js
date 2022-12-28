import React, { memo, useCallback } from "react";
import styled from "styled-components";

const CollapseContainer = styled.div`
    .collapse {
        &-title {
            background-color: #777;
            color: #fff;
            cursor: pointer;
            padding: 22px;
            width: 100%;
            box-sizing: border-box;
            border: none;
            font-weight: 700;
            margin: 0;
            text-align: left;
            outline: none;
            font-size: 16px;

            &.active,
            &:hover {
                background-color: #555;
            }
        }

        &-content {
            padding: 0 20px;
            background-color: #f1f1f1;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
        }
    }
`;

const Collapse = memo(({ title, content }) => {
    const onCollapseTitleClick = useCallback((e) => {
        // 클릭된 자기 자신
        const current = e.currentTarget;
        // 스스로에게 active클래스에 대한 적용 여부 변경
        current.classList.toggle("active");

        // 제어할 대상을 탐색
        const content = current.parentElement.querySelector(".collapse-content");

        // content에 maxHeight 속성이 있다면 (혹은 0이 아니라면)
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }, []);

    return (
        <CollapseContainer>
            <h1 className="collapse-title" onClick={onCollapseTitleClick}>
                {title}
            </h1>
            <div className="collapse-content">
                <p>{content}</p>
            </div>
        </CollapseContainer>
    );
});

export default Collapse;
