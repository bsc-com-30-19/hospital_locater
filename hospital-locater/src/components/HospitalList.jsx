import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

export default function HospitalList() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        try {
          const res = await fetch(`/api/hospitals?lat=${lat}&lng=${lng}`);
          if (!res.ok) throw new Error("Failed to fetch hospitals");
          const data = await res.json();
          setHospitals(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Unable to retrieve your location");
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="min-h-screen p-5 bg-[#D1FAFF]">
      <BackButton />

      <h1 className="text-2xl font-bold mb-4 text-gray-800">Nearest Hospitals</h1>

      {loading && <p className="text-gray-700">Loading hospitals...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="space-y-4">
        {hospitals.map((h) => (
          <div
            key={h.id}
            className="p-4 rounded-lg shadow cursor-pointer transition"
            style={{ backgroundColor: "#9BD1E5" }}
            onClick={() => navigate(`/details/${h.id}`, { state: { hospital: h } })}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6A8EAE")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#9BD1E5")}
          >
            <h2 className="text-lg font-semibold text-gray-100">{h.name}</h2>
            <p className="text-gray-100 text-sm">{h.district}, {h.region}</p>
            {h.distance && (
              <p className="text-gray-200 font-medium mt-1">Distance: {h.distance} km</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
