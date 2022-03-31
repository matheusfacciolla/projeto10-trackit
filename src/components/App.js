import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import UserContext from '../contexts/UserContext';
import Login from './Login';
import Register from './Register';
import Today from './Today';
import MyHabits from './Habits/MyHabits';
import Historic from './Historic';

function App() {
    const [token, setToken] = useState(null);
    const [imgPerfil, setImgPerfil] = useState(null);
    const [newHabit, setNewHabit] = useState(false);
    const [habitCreated, setHabitCreated] = useState([]);

    const contextValue = { token, setToken, imgPerfil, setImgPerfil, newHabit, setNewHabit, habitCreated, setHabitCreated };

    return (
        <UserContext.Provider value={contextValue}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Register />} />
                    <Route path='/Hoje' element={<Today />} />
                    <Route path='/habitos' element={<MyHabits />} />
                    <Route path='/historico' element={<Historic />} />
                </Routes>         
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;