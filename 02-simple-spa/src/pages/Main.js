import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import MainSub1 from './MainSub1';
import MainSub2 from './MainSub2';

const Main = () => {
    return (
        <div>
            <h2>Main😉</h2>
            <p>SubRoute에 대한 경로 구성은 './' 없이 상대경로만 가능(절대경로 불가)</p>
            <hr />
            
            {/* 링크 구성 부분 */}
            <nav>
                <Link to="sub1">[MainSub1]</Link>
                <Link to="sub2">[MainSub2]</Link>
            </nav>

            {/* 페이지 역할을 할 컴포넌트 명시 */}
            <Routes>
                <Route path="sub1" element={<MainSub1/>} exact={true} />
                <Route path="sub2" element={<MainSub2/>} />
            </Routes>
        </div>
    );
};

export default Main;