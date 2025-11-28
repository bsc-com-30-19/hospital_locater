import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

export default function HospitalList() {
  const [hospitals, setHospitals] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Fetch hospitals from backend
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
          setFiltered(data);
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

  // Apply filters
  useEffect(() => {
    let results = hospitals;

    if (search.trim() !== "") {
      results = results.filter((h) =>
        h.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (region !== "") {
      results = results.filter((h) => h.region === region);
    }

    if (district !== "") {
      results = results.filter((h) => h.district === district);
    }

    setFiltered(results);
  }, [search, region, district, hospitals]);

  // Extract Region/District options
  const regions = [...new Set(hospitals.map((h) => h.region))];
  const districts = [...new Set(
    hospitals.filter((h) => (region ? h.region === region : true))
             .map((h) => h.district)
  )];

  return (
    <div className="min-h-screen p-5 bg-[#D1FAFF]">

      <h1 className="text-2xl font-bold mb-4 text-gray-800">Nearest Hospitals</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search hospitals..."
        className="w-full p-3 rounded-lg mb-4 border"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Region Filter */}
      <select
        className="w-full p-3 rounded-lg mb-4 border"
        value={region}
        onChange={(e) => {
          setRegion(e.target.value);
          setDistrict("");
        }}
      >
        <option value="">All Regions</option>
        {regions.map((reg) => (
          <option key={reg} value={reg}>
            {reg}
          </option>
        ))}
      </select>

      {/* District Filter */}
      <select
        className="w-full p-3 rounded-lg mb-4 border"
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
        disabled={!region}
      >
        <option value="">All Districts</option>
        {districts.map((dist) => (
          <option key={dist} value={dist}>
            {dist}
          </option>
        ))}
      </select>

      {/* Loading */}
      {loading && <p className="text-gray-700">Loading hospitals...</p>}

      {/* Error */}
      {error && <p className="text-red-600">{error}</p>}

      {/* Results */}
      <div className="space-y-4">
        {filtered.map((h) => (
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
