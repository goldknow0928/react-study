import React, { memo } from "react";
import Titanic from "./pages/Titanic";

const App = memo(() => {
    return (
        <div>
            <h1>11-Axios-Hooks</h1>
            <hr />
            <Titanic />
        </div>
    );
});

export default App;
