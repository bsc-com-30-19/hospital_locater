import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";

export default function HospitalList({hospitalData, userLocation}) {
 
  return (
    <div style={{ marginTop: "20px" }}>
      {hospitalData.map((h, index) => (
        <div
          key={index}
          className="p-[15px] bg-[#D1FAFF] rounded-[8px] mb-[15px] "
          style={{
            color : "#062135",
            textAlign: "left",
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
                background: "#9BD1E5",
                color: "#062135",
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
