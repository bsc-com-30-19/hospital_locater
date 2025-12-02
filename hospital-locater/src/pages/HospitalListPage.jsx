import BackButton from "../components/BackButton";
import HospitalList from "../components/HospitalList";
import Logo from "../components/Logo";
import { useLocation } from "react-router-dom";

const HospitalListPage = () => {
    const location = useLocation();
    const data = location.state;
    if (data == null) return (
        <div className=" items-center justify-center h-[80vh] gap-4 px-[18rem]">
            <Logo />
            <p>Something went wrong please try again</p>
            <BackButton />
        </div>
    )
    else return (
        <div className=" items-center justify-center h-[80vh] gap-4 px-[18rem]">
            <Logo />
            <HospitalList hospitalData={data.hospitalData} userLocation={data.userLocationData} />
            <BackButton />
        </div>
    );
}

export default HospitalListPage;