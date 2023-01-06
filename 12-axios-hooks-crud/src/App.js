import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import MenuLink from "./components/MenuLink";

import GradeList from "./pages/GradeList";
import GradeAdd from "./pages/GradeAdd";
import GradeEdit from "./pages/GradeEdit";

import ProfessorList from "./pages/ProfessorList";
import ProfessorAdd from "./pages/ProfessorAdd";
import ProfessorEdit from "./pages/ProfessorEdit";

const App = memo(() => {
    return (
        <div>
            <h1>12-Axios-Hooks-CRUD</h1>
            <nav>
                <MenuLink to='/'>Grade</MenuLink>
                <MenuLink to='/professor'>Professor</MenuLink>
            </nav>

            <Routes>
                <Route path="/" exact={true} element={<GradeList />} />
                <Route path="/add" element={<GradeAdd />} />
                <Route path="/edit/:id" element={<GradeEdit />} />

                <Route path="/professor" element={<ProfessorList />} />
                <Route path="/professor/add" element={<ProfessorAdd />} />
                <Route path="/professor/edit/:id" element={<ProfessorEdit />} />
            </Routes>
        </div>
    );
});

export default App;
