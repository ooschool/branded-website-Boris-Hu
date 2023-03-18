import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Copyright from './pages/Copyright';
import Datas from './pages/Datas';
import Payment from './pages/Payment';
import Landing from './pages/Landing';
import Order from './pages/Order';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/data' element={<Datas />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/order' element={<Order />} />
            </Routes>
            <Copyright />
        </>
    );
}

export default App;
