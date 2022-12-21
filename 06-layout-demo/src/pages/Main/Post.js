import React from 'react';
import styled from 'styled-components';
import FakeImg from '../../common/FakeImg';
import mq from '../../MediaQuery';

// 컨테이너에 대한 스타일컴포넌트 구현
const PostContainer = styled.div`
    flex: 1;
`;

const PostItem = styled.section`
    flex: 0 1 auto;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;

    ${mq.maxWidth('sm')`
        flex: none;
        width: 100%;
    `}

    h2 {
        font-size: 24px;
        font-weight: 700;
        margin: 10px auto;
    }

    h3 {
        font-size: 18px;
        font-weight: 500;
        margin: 10px auto;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 7px;
    }
`;

const Post = () => {
    return (
        <PostContainer>
            {[0,1,2,3].map((v, i) => {
                return (
                    <PostItem key={i}>
                        <h2>TITLE HEADING</h2>
                        <h3>Title description</h3>
                        <FakeImg height='200'>Image</FakeImg>
                        <p>some text ...</p>
                        <p>some text some text some text ...</p>
                    </PostItem>
                )
            })}
        </PostContainer>
    );
};

export default Post;