import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";

export default function HospitalList({hospitalData, userLocation}) {
  const [hospitals, setHospitals] = useState([]);
  setHospitals(hospitalData)
  return (
    <div style={{ marginTop: "20px" }}>
      {hospitals.map((h, index) => (
        <div
          key={index}
          style={{
            padding: "15px",
            border: "1px solid #2e2a2aff",
            borderRadius: "8px",
            marginBottom: "15px",
            textAlign: "left",
            background: "#f9f9f9",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "5px" }}>{h.name}</p>
          <p style={{ margin: "3px 0" }}>District: {h.district}</p>
          <p style={{ margin: "3px 0" }}>Distance: {(h.distance / 1000).toFixed(2)} km</p>

          {/* Get Directions Button aligned right */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
            <button
              style={{
                background: "#00897b",
                color: "#fff",
                border: "none",
                padding: "10px 16px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background 0.3s",
              }}
              onMouseOver={e => (e.target.style.background = "#00695c")}
              onMouseOut={e => (e.target.style.background = "#00897b")}
              onClick={() => {
                if (!userLocation || !userLocation.lat || !userLocation.lng) {
                  alert("User location not available yet!");
                  return;
                }

                if (!h.lat || !h.lng) {
                  alert("Hospital coordinates not available!");
                  return;
                }

                const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${h.lat},${h.lng}`;
                window.open(googleMapsUrl, "_blank");
              }}
            >
              Get Directions
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
