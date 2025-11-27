// HospitalList.jsx
import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";

export default function HospitalList() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        try {
          const response = await fetch(`/api/hospitals?lat=${lat}&lng=${lng}`);
          if (!response.ok) throw new Error("Failed to fetch hospitals");
          const data = await response.json();
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
    <div className="min-h-screen p-5" style={{ backgroundColor: "#D1FAFF" }}>
      <BackButton />

      <h1 className="text-2xl font-bold mb-4 text-gray-800">Nearest Hospitals</h1>

      {loading && <p className="text-gray-700">Loading hospitals...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="space-y-4">
        {hospitals.map((hospital) => (
          <div
            key={hospital.id}
            className="p-4 rounded-lg shadow cursor-pointer transition"
            style={{ backgroundColor: "#9BD1E5" }}
            onClick={() => alert(`View details for ${hospital.name}`)}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6A8EAE")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#9BD1E5")}
          >
            <h2 className="text-lg font-semibold text-gray-100">{hospital.name}</h2>
            <p className="text-gray-100 text-sm">{hospital.district}, {hospital.region}</p>
            {hospital.distance && (
              <p className="text-gray-200 font-medium mt-1">Distance: {hospital.distance} km</p>
            )}

            <div className="mt-2 flex gap-2">
              <button
                className="px-3 py-1 rounded text-white"
                style={{ backgroundColor: "#315E41" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#062315")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#315E41")}
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Call ${hospital.name}`);
                }}
              >
                Call
              </button>

              <button
                className="px-3 py-1 rounded text-white"
                style={{ backgroundColor: "#315E41" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#062315")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#315E41")}
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Get directions to ${hospital.name}`);
                }}
              >
                Directions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
