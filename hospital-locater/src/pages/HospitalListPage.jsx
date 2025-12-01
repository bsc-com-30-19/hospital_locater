import BackButton from "../components/BackButton";
import HospitalList from "../components/HospitalList";
import Logo from "../components/Logo"

const HospitalListPage = () =>{
    const [hospitals, setHospitals] = useState([]);
    
    return(
    <div className="p-16">
        <BackButton />
       <Logo />
       <HospitalList />
    </div>
    );
}

export default HospitalListPage;