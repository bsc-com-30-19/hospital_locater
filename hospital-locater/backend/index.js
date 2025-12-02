import express from "express";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
app.use(cors());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432
});

app.get("/api/nearby-hospitals", async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: "Latitude and longitude are required" });
  }

const query = `
  SELECT 
      facility AS name,
      district,
      ST_Y(ST_Centroid(ST_Transform(geom, 4326))) AS lat,
      ST_X(ST_Centroid(ST_Transform(geom, 4326))) AS lng,
      ST_Distance(
        ST_Transform(geom, 4326)::geography,
        ST_SetSRID(ST_Point($1, $2), 4326)::geography
      ) AS distance
  FROM vector_facility_publicfacilitiesnodist
  ORDER BY ST_Distance(
    ST_Transform(geom, 4326)::geography,
    ST_SetSRID(ST_Point($1, $2), 4326)::geography
  ) ASC
  LIMIT 5;
`;

  try {
    const result = await pool.query(query, [lng, lat]);
    res.json(result.rows);
  } catch (error) {
    console.error("Error querying database:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));