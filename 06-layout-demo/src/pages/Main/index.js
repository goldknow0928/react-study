import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import Side from './Side';
import Post from './Post'

// 컨텐츠 영역 컨테이너에 대한 스타일
const MainContainer = styled.section`
    background-color: #fff;
    border-left: 1px solid #d5d5d5;
    border-right: 1px solid #d5d5d5;
    display: flex;

    ${mq.maxWidth('sm')`
        flex-direction: column-reverse;
    `}
`;

const Main = () => {
    return (
        <MainContainer className='inner'>
            <Side />
            <Post />
        </MainContainer>
    );
};

export default Main;