import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// 메뉴링크 --> NavLink: 현재 머물고 있는 페이지와 관련된 링크에 CSS적용
const MenuLinkContainer = styled(NavLink)`
    display: inline-block;
    line-height: 1.5;
    color: #222;
    cursor: pointer;

    &:hover {
        color: #22b8cf;
    }

    & + a {
        margin-left: 15px;
    }

    // URL이 현재 메뉴를 가르키는 경우 (콜론이 아닌 점에 주의)
    // 활성 메뉴에 적용되는 기본 클래스 이름이 'active' 이다.
    &.active {
        text-decoration: underline;
        text-underline-offset: 3px;
        color: #22b8cf;
    }
`;

const MenuLink = ({ to, children }) => <MenuLinkContainer to={to}>{children}</MenuLinkContainer>;

export default MenuLink;