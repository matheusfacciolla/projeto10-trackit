import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import UserContext from '../contexts/UserContext';
import Login from './Login';
import Register from './Register';
import Today from './Today';
import Habits from './Habits';
import Historic from './Historic';

function App() {
    const [token, setToken] = useState(null);
    const [imgPerfil, setImgPerfil] = useState(null);
    const [newHabit, setNewHabit] = useState(true);

    const contextValue = { token, setToken, imgPerfil, setImgPerfil, newHabit, setNewHabit };

    return (
        <UserContext.Provider value={contextValue}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Register />} />
                    <Route path='/Hoje' element={<Today />} />
                    <Route path='/habitos' element={<Habits />} />
                    <Route path='/historico' element={<Historic />} />
                </Routes>         
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;