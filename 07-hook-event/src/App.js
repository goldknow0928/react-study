import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import MenuLink from "./components/MenuLink";
import MyState from "./pages/MyState";
import DateRange1 from "./pages/DateRange1";
import MyReducer from "./pages/MyReducer";
import DateRange2 from "./pages/DateRange2";
import MyEffect from "./pages/MyEffect";
import MyRef from "./pages/MyRef";
import MyCallback from "./pages/MyCallback";
import MyMemo from "./pages/MyMemo";
import MyWidth from "./pages/MyWidth";

const AppContainer = styled.main`
    h1 {
        padding-bottom: 30px;
        font-size: 24px;
    }

    > div {
        padding: 30px;
    }

    hr {
        margin: 30px 0;
    }
`;

function App() {
    return (
        <AppContainer>
            <div>
                <h1>07-hook-event</h1>
                <nav>
                    {/* 1) useState 관련 예제 */}
                    <MenuLink to="/mystate">MyState</MenuLink>
                    <MenuLink to="/daterange1">DateRange1</MenuLink>

                    {/* 2) useEffect 관련 예제 */}
                    <MenuLink to="/myeffect">MyEffect</MenuLink>

                    {/* 3) useRef 관련 예제 */}
                    <MenuLink to="/myref">MyRef</MenuLink>

                    {/* 4) useReducer 관련 예제 */}
                    <MenuLink to="/myreducer">MyReducer</MenuLink>
                    <MenuLink to="/daterange2">DateRange2</MenuLink>

                    {/* 5) useMemo 관련 예제 */}
                    <MenuLink to="/mymemo">MyMemo</MenuLink>

                    {/* 6) useCallback 관련 예제 */}
                    <MenuLink to="/mycallback">MyCallback</MenuLink>

                    {/* 7) 커스텀 훅 관련 예제 */}
                    <MenuLink to="/mywidth">MyWidth</MenuLink>
                </nav>
            </div>

            <hr />

            <Routes>
                {/* 1) useState 관련 예제 */}
                <Route path="/mystate" element={<MyState />} />
                <Route path="/daterange1" element={<DateRange1 />} />

                {/* 2) useEffect 관련 예제 */}
                <Route path="/myeffect" element={<MyEffect />} />

                {/* 3) useRef 관련 예제 */}
                <Route path="/myref" element={<MyRef />} />

                {/* 4) useReducer 관련 예제 */}
                <Route path="/myreducer" element={<MyReducer />} />
                <Route path="/daterange2" element={<DateRange2 />} />

                {/* 5) useMemo 관련 예제 */}
                <Route path="/mymemo" element={<MyMemo />} />

                {/* 6) useCallback 관련 예제 */}
                <Route path="/mycallback" element={<MyCallback />} />

                {/* 7) 커스텀 훅 관련 예제 */}
                <Route path="/mywidth" element={<MyWidth />} />
            </Routes>
        </AppContainer>
    );
}

export default App;
