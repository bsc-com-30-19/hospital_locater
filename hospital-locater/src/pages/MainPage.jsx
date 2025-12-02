import Logo from "../components/Logo";
import Description from "../components/Description";
import LocaterButton from "../components/LocaterButton";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userLocation, setUserLocation] = useState({ lat: null, lng: null });
    const navigate = useNavigate();

    const fetchHospitals = async () => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        console.log("User coordinates:", lat, lng);
        setUserLocation({ lat, lng });

        try {
          const res = await fetch(
            `http://localhost:5000/api/nearby-hospitals?lat=${lat}&lng=${lng}`
          );
          const data = await res.json();
          setHospitals(data);
          navigate("/hospitallist", { state: {hospitalData: data, userLocationData: {lat, lng}}})
        } catch (error) {
          console.error("Error fetching hospitals:", error);
          alert("Failed to fetch hospitals. Try again later.");
        }

        setLoading(false);
      },
      (err) => {
        console.error("Geolocation error:", err);
        setLoading(false);
        alert("Unable to get your location. Please allow location access.");
      }
    );
  };

    return (
        <div className="items-center justify-center h-[80vh] gap-4 px-[18rem]">
           <Logo />
           <Description />
           <LocaterButton onButtonClick={fetchHospitals}/>
        </div>

    );
};

export default MainPage;
