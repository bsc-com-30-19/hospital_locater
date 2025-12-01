import BackButton from "../components/BackButton";
import HospitalList from "../components/HospitalList";
import Logo from "../components/Logo";
import { useLocation } from "react-router-dom";

const HospitalListPage = () =>{
    const location = useLocation();
    const data = location.state;
    return(
    <div className="p-16">
        <BackButton />
       <Logo />
       <HospitalList  hospitalData={data.hospitalData} userLocation={data.userLocationData}/>
    </div>
    );
}

export default HospitalListPage;