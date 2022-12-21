import React from 'react';
import styled from 'styled-components';
import FakeImg from '../../common/FakeImg';
import mq from '../../MediaQuery';

const SideContainer = styled.div`
    box-sizing: border-box;
    width: 360px;
    flex: none;
    border-right: 1px solid #d5d5d5;
    background-color: #eee;
    padding: 20px;

    h2 {
        font-size: 20px;
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

    ${mq.maxWidth('sm')`
        width: 100%;
    `}
`;

const Side = () => {
    return (
        <SideContainer>
            <h2>About ME</h2>
            <h3>Photo of me : </h3>
            <FakeImg height='200' bgColor='#b4cde0'>Image</FakeImg>
            <p>some ...</p>
            <hr />
            <h2>More Text</h2>
            <p>some ...</p>
            <FakeImg height='60' bgColor='#b4cde0'>Image</FakeImg>
            <br />
            <FakeImg height='60' bgColor='#b4cde0'>Image</FakeImg>
            <br />
            <FakeImg height='60' bgColor='#b4cde0'>Image</FakeImg>
        </SideContainer>
    );
};

export default Side;