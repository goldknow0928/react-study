import React from 'react';
import styled from 'styled-components';
import { NavLink, Routes, Route  } from 'react-router-dom';
import mq from '../MediaQuery';

import Page01 from '../pages/Sub/Page01';
import Page02 from '../pages/Sub/Page02';
import Page03 from '../pages/Sub/Page03';

// 메뉴바 컴포넌트 스타일 정의
const NavbarContainer = styled.nav`
    overflow: hidden;
    background-color: #333;
    position: sticky;
    top: 0;

    div {
        max-width: 1200px;
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;

        a {
            display: block;
            color: #fff;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
            font-size: 16px;

            ${mq.maxWidth('sm')`
                font-size: 14px;
            `}

            &:hover {
                background-color: #ddd;
                color: #000;
            }

            &.active {
                background-color: #666;
                color: #fff;
            }

            &.right {
                ${mq.maxWidth('sm')`
                    margin-left: auto;
                `}
            }
        }
    }
`;

const Navbar = () => {
    return (
        <div>
            <NavbarContainer>
                <div>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/link1'>Link1</NavLink>
                    <NavLink to='/link2'>Link2</NavLink>
                    <NavLink to='/link3' className='right'>Link3</NavLink>
                </div>
            </NavbarContainer>         

            <Routes>
                <Route path='/link1' element={<Page01 />} />
                <Route path='/link2' element={<Page02 />} />
                <Route path='/link3' element={<Page03 />} />
            </Routes>
        </div>
    );
};

export default Navbar;