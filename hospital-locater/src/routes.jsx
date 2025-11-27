import { Routes, Route } from 'react-router-dom';
import HospitalList from './pages/HospitalList';
import MainPage from './pages/MainPage';

const Routing = () => {
    return(
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/hospitallist" element={<HospitalList />} />
        </Routes>
    );
}

export default Routing;