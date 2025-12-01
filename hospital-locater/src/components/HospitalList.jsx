import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

export default function HospitalList({hospitalData, userLocation}) {
  const [hospitals, setHospitals] = useState([]);
  setHospitals(hospitalData)
  return (
    <div className="min-h-screen p-5 bg-[#D1FAFF]">

      <h1 className="text-2xl font-bold mb-4 text-gray-800">Nearest Hospitals</h1>

      <div className="space-y-4">
        {hospitals.map((h) => (
          <div
            key={h.id}
            className="p-4 rounded-lg shadow cursor-pointer transition"
            style={{ backgroundColor: "#9BD1E5" }}
            onClick={() =>
              navigate(`/details/${h.id}`, { state: { hospital: h } })
            }
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#6A8EAE")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#9BD1E5")
            }
          >
            <h2 className="text-lg font-semibold text-gray-100">{h.name}</h2>
            <p className="text-gray-100 text-sm">
              {h.district}, {h.region}
            </p>
            {h.distance && (
              <p className="text-gray-200 mt-1">
                Distance: {h.distance} km
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
