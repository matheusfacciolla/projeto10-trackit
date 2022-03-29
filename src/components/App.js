import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Login'; 
import Register from './Register';
import Habits from './Habits';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Register />} />
                </Routes>
                <Routes>
                    <Route path='/habitos' element={<Habits />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;