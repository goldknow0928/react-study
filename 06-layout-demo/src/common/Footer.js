import React from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';

// 페이지 하단 컴포넌트 스타일 정의
const FooterContainer = styled.footer`
    padding: 20px;
    font-size: 20px;
    text-align: center;
    background: #ddd;
    font-weight: 700;

    ${mq.maxWidth('sm')`
        padding: 20px;
        font-size: 14px;
    `}
`;

const Footer = () => {
    return (
        <FooterContainer>
            <h2>Footer</h2>
        </FooterContainer>
    );
};

export default Footer;