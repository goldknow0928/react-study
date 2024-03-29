import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

import DepartmentList from "./pages/DepartmentList";
import DepartmentAdd from "./pages/DepartmentAdd";
import DepartmentView from "./pages/DepartmentView";
import DepartmentEdit from "./pages/DepartmentEdit";

const App = memo(() => {
    return (
        <div>
            <h1>14-redux-crud</h1>
            
            <hr />

            <Routes>
                <Route path="/" exact={true} element={<DepartmentList />} />
                <Route path="/department_add" element={<DepartmentAdd />} />
                <Route path="/department_view/:id" element={<DepartmentView />} />
                <Route path="/department_edit/:id" element={<DepartmentEdit />} />
            </Routes>
        </div>
    );
});

export default App;
