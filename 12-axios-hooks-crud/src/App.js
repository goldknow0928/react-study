import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import GradeList from "./pages/GradeList";
import GradeAdd from "./pages/GradeAdd";
import GradeEdit from "./pages/GradeEdit";

const App = memo(() => {
    return (
        <div>
            <h1>12-Axios-Hooks-CRUD</h1>
            <hr />
            <Routes>
                <Route path="/" exact={true} element={<GradeList />} />
                <Route path="/add" exact={true} element={<GradeAdd />} />
                <Route path="/edit/:id" exact={true} element={<GradeEdit />} />
            </Routes>
        </div>
    );
});

export default App;
