import { Routes, Route } from 'react-router-dom';
import HospitalList from './pages/HospitalList';
import MainPage from './pages/MainPage';

const Routing = () => {
    return(
        <Routes>
            <Route path = "/" element = {<Layout />}>
                <Route index element={<MainPage/>} />
                <Route path = "hospitallist" element ={<HospitalList/>}/>
            </Route>
        </Routes>
    )
}

export default Routing;