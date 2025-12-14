import { useState, useEffect } from "react";
import { getSingleLocation } from "../services/api/location-api";
import { getMultipleCharacters } from "../services/api/character-api";

const useSingleLocation = (id) => {
  const [location, setLocation] = useState(null);
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        setLoading(true);
        const data = await getSingleLocation(id);
        setLocation(data);

        if (data.residents && data.residents.length > 0) {
          const residentIds = data.residents.map((url) => {
            const parts = url.split("/");
            return parts[parts.length - 1];
          });

          const residentData = await getMultipleCharacters(residentIds);
          setResidents(
            Array.isArray(residentData) ? residentData : [residentData]
          );
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchLocation();
    }
  }, [id]);

  return { location, residents, loading, error };
};

export default useSingleLocation;
