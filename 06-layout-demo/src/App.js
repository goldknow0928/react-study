import React from "react";
// 라우팅 처리
import { Routes, Route } from "react-router-dom";
// 모든 페이지 공용 컴포넌트
import Header from "./common/Header";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
// 페이지 -> import 대상 경로가 폴더 명일 경우 해당 폴ㄷ의 index.js를 가져온다.
import Main from "./pages/Main";
// 스타일 컴포넌트
import styled from "styled-components";

const LayoutContainer = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .inner {
        max-width: 1200px;
        width: 100%;
        margin: auto;

        h2 {
            padding: 20px;
            font-size: 22px;
            font-weight: 700;
        }
    }
    
    footer {
        margin-top: auto;
    }
`;

function App() {
    return (
        <LayoutContainer>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" exact={true} element={<Main />} />
            </Routes>
            <Footer />
        </LayoutContainer>
    );
}

export default App;
