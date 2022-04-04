import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import UserContext from '../contexts/UserContext';
import Login from './Login';
import Register from './Register';
import Today from './Today';
import MyHabits from './Habits/MyHabits';
import Historic from './Historic';

function App() {
    const tokenStorage = JSON.parse(localStorage.getItem('token')); 
    
    const [imgPerfil, setImgPerfil] = useState(null);
    const [newHabit, setNewHabit] = useState(false);
    const [habitCreated, setHabitCreated] = useState([]);
    const [listHabits, setListHabits] = useState([]);
    const [progress, setProgress] = useState(0);
    const [att, setAtt] = useState(false);
    const [userInformation, setUserInformation] = useState(tokenStorage);

    const contextValue = { imgPerfil, setImgPerfil, newHabit, setNewHabit, habitCreated, setHabitCreated, progress, setProgress, listHabits, setListHabits, att, setAtt, userInformation, setUserInformation };

    
    useEffect(() => {
        if(tokenStorage){
            setUserInformation(tokenStorage);
        } 
    }, []); 
    

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