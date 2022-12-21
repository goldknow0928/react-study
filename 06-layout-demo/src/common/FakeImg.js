import React from 'react';
import styled from 'styled-components';

// 가상 이미지 컴포넌트 스타일 정의
const FakeImgContainer = styled.div`
    /* background-color: #aaa; */
    width: auto;
    padding: 20px;
    margin: 10px auto;
    height: ${props => `${props.height}px`};
    background-color: ${(props) => props.bgColor || '#aaa'};
`;

/**
 * 가상 이미지 컴포넌트 구현
 * 이미지의 높이와 내용으로 출력할 문자열을 props로 전달받는다
 * @param props.height - 이미지 높이
 * @param props.children - 내용
 * @return {JSX.Element}
 */
const FakeImg = ({height, bgColor, children}) => {
    return (
        <FakeImgContainer height={height} bgColor={bgColor}>
            {children}            
        </FakeImgContainer>
    );
};

export default FakeImg;