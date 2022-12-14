import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Main from './pages/Main';
import DepartmentGet from './pages/DepartmentGet';
import DepartmentPath from './pages/DepartmentPath';
import Error404 from './pages/Error404';

function App() {
    return (
        <div>
            <h1>02. Simple SPA๐</h1>
            <hr />

            {/* ๋งํฌ ๊ตฌ์ฑ ๋ถ๋ถ */}
            <nav>
                <Link to="/">[Home]</Link>
                <Link to="/about">[About]</Link>
                <Link to="/main">[Main]</Link>
                {/* HTTP GET ํ๋ผ๋ฏธํฐ๋ฅผ ํฌํจํ๋ ๋งํฌ ๊ตฌ์ฑ */}
                <Link to="/department_get?id=101&msg=hello">[์ปดํจํฐ๊ณตํ๊ณผ]</Link>
                <Link to="/department_get?id=102&msg=world">[๋ฉํฐ๋ฏธ๋์ดํ๊ณผ]</Link>
                {/* PATH ํ๋ผ๋ฏธํฐ๋ฅผ ํฌํจํ๋ ๋งํฌ ๊ตฌ์ฑ */}
                <Link to="department_path/201/hello">[์ ์๊ณตํ๊ณผ]</Link>
                <Link to="department_path/202/world">[๊ธฐ๊ณ๊ณตํ๊ณผ]</Link>
            </nav>
            <hr />

            {/* ํ์ด์ง ์ญํ ์ ํ  ์ปดํฌ๋ํธ๋ฅผ ๋ช์ */}
            <Routes>
                {/* ์ฒซ ํ์ด์ง๋ก ์ฌ์ฉ๋๋ ์ปดํฌ๋ํธ์ ๊ฒฝ์ฐ exact={true} ๋ช์ */}
                {/* ์ฒซ ํ์ด์ง๋ก ์ฌ์ฉ๋๋ ์ปดํฌ๋ํธ๋ path์ '/' ๊ถ์ฅ */}
                <Route path="/" element={<Home />} exact={true} />
                <Route path="/about" element={<About />} />
                {/* ์๋ธ๋ผ์ดํ ์ฌ์ฉ */}
                <Route path="/main/*" element={<Main />} />
                {/* GET ํ๋ผ๋ฏธํฐ ์ฌ์ฉ */}
                <Route path="/department_get" element={<DepartmentGet />} />
                {/* Path ํ๋ผ๋ฏธํฐ๋ URL ํ์์ ๋ณ์์ ์์น์ ์ด๋ฆ์ ์ ํด์ค์ผ ํ๋ค. */}
                {/* Link์ ๊ฑธ์ด๋์ /201/hello/ ์  /:id/:msg/ ๊ฐ ๊ฐ๋ค */}
                <Route path="/department_path/:id/:msg" element={<DepartmentPath/>} />
                {/* path ์์ฑ ์์ด Route ์ง์  -> ์ง์ ๋์ง ์์ ๋ชจ๋  ์์ฒญ์ ๋ฐ์. ๋จ Routes๋ธ๋ก์ ๋งจ ๋ง์ง๋ง์ ๋ฐฐ์นํด์ผ ํจ */}
                <Route path="/*" element={<Error404/>} />
            </Routes>
        </div>
    );
}

export default App;
