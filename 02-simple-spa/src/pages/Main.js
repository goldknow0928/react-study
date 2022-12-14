import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import MainSub1 from './MainSub1';
import MainSub2 from './MainSub2';

const Main = () => {
    return (
        <div>
            <h2>Main๐</h2>
            <p>SubRoute์ ๋ํ ๊ฒฝ๋ก ๊ตฌ์ฑ์ './' ์์ด ์๋๊ฒฝ๋ก๋ง ๊ฐ๋ฅ(์ ๋๊ฒฝ๋ก ๋ถ๊ฐ)</p>
            <hr />
            
            {/* ๋งํฌ ๊ตฌ์ฑ ๋ถ๋ถ */}
            <nav>
                <Link to="sub1">[MainSub1]</Link>
                <Link to="sub2">[MainSub2]</Link>
            </nav>

            {/* ํ์ด์ง ์ญํ ์ ํ  ์ปดํฌ๋ํธ ๋ช์ */}
            <Routes>
                <Route path="sub1" element={<MainSub1/>} exact={true} />
                <Route path="sub2" element={<MainSub2/>} />
            </Routes>
        </div>
    );
};

export default Main;