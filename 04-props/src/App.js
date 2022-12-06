import React from 'react';
import { Link, Routes, Route } from "react-router-dom";

import MyProps from './pages/MyProps';
import MyPropTypes from './pages/MyPropTypes';
import MyChildren from './pages/MyChildren';
import GradeTable from './pages/GradeTable';
import GradeTable2 from './pages/GradeTable2';

function App() {
    return (
      <div>
        <h1>04-Props</h1>
        <nav>
          <Link to="/myprops">MyProps</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="/mypropstypes">MyPropTypes</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="/mychildren">MyChildren</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="/grade_table">GradeTable</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
          <hr />
          {/* 연습문제 */}
          <Link to="/grade_table2/1">1학년</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="/grade_table2/2">2학년</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="/grade_table2/3">3학년</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="/grade_table2/4">4학년</Link>
        </nav>

        <hr />

        {/* Route 처리할 컴포넌트 정의 */}
        <Routes>
          <Route path="/myprops" element={<MyProps/>} />
          <Route path="/mypropstypes" element={<MyPropTypes/>} />
          <Route path="/mychildren" element={<MyChildren/>} />
          <Route path="/grade_table" element={<GradeTable/>} />
          {/* 연습문제 */}
          <Route path="/grade_table2/:level" element={<GradeTable2/>} />
        </Routes>
      </div>
    );
}

export default App;
