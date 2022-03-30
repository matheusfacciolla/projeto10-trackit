import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import UserContext from '../contexts/UserContext';
import Login from './Login';
import Register from './Register';
import Habits from './Habits';
import Today from './Today';

function App() {
    const [token, setToken] = useState(null);
    const [imgPerfil, setImgPerfil] = useState(null);
    
    const contextValue = { token, setToken, imgPerfil, setImgPerfil };

    return (
        <UserContext.Provider value={contextValue}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Register />} />
                    <Route path='/habitos' element={<Habits />} />
                    <Route path='/Today' element={<Today />} />
                </Routes>         
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;