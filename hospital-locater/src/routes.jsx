import { Routes, Route } from 'react-router-dom';
import HospitalListPage from './pages/HospitalListPage';
import MainPage from './pages/MainPage';

const Routing = () => {
    return(
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/hospitallist" element={<HospitalListPage />} />
        </Routes>
    );
}

export default Routing;