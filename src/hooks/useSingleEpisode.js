import { useState, useEffect } from "react";
import { getSingleEpisode } from "../services/api/episode-api";
import { getMultipleCharacters } from "../services/api/character-api";

const useSingleEpisode = (id) => {
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        setLoading(true);
        const data = await getSingleEpisode(id);
        setEpisode(data);

        if (data.characters && data.characters.length > 0) {
          const characterIds = data.characters.map((url) => {
            const parts = url.split("/");
            return parts[parts.length - 1];
          });

          const characterData = await getMultipleCharacters(characterIds);
          setCharacters(
            Array.isArray(characterData) ? characterData : [characterData]
          );
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchEpisode();
    }
  }, [id]);

  return { episode, characters, loading, error };
};

export default useSingleEpisode;
