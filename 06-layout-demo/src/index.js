// 패키지 참조
import React from "react";
import ReactDOM from "react-dom/client";
// 라우팅 범위 설정
import { BrowserRouter } from "react-router-dom";
// SEO 구현
import Meta from "./Meta";
// 전역 스타일 정의
import GlobalStyles from "./GlobalStyles";
// 프로그램 시작
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Meta />
        <GlobalStyles />
        <App />
    </BrowserRouter>
);
