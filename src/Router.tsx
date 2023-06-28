import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Example from './pages/example';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Example />} path="/:example" />
                <Route element={<>404</>} path="/*" />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
