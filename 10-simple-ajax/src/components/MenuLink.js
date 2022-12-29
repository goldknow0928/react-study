import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// 메뉴링크 --> NavLink: 현재 머물고 있는 페이지와 링크에 CSS 적용
const MenuLinkContainer = styled(NavLink)`
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 2px;
    color: #222;

    &:hover {
        color: #22b8cf;
    }

    &:after {
        content: "|";
        display: inline-block;
        padding: 0 7px;
        color: #ccc;
    }

    &:last-child {
        &:after {
            color: #fff;
        }
    }

    // url이 현재 메뉴를 가르키는 경우 (콜론이 아닌 점에 주의)
    // 활성 메뉴에 적용되는 기본 클래스 이름이 'active'이다
    &.active {
        text-decoration: underline;
        color: #22b8cf;
    }
`;

const MenuLink = ({ to, children }) => <MenuLinkContainer to={to}>{children}</MenuLinkContainer>;

export default MenuLink;
