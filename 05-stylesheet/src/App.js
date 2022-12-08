import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import News from './pages/News';

function App() {
    return (
        <div>
            <Link to='/news'>News</Link>
            <hr />
            <Routes>
                <Route path='/news/*' element={<News />}></Route>
            </Routes>
        </div>
    );
}

export default App;
