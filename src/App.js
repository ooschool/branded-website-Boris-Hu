import { Routes, Route, Link } from 'react-router-dom';

import Datas from './pages/Datas';
import Payment from './pages/Payment';
import Landing from './pages/Landing';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/data' element={<Datas />} />
                <Route path='/payment' element={<Payment />} />
            </Routes>
        </>
    );
}

export default App;
