import { useState, useEffect } from "react";
import { getSingleCharacter } from "../services/api/character-api";
import { getMultipleEpisodes } from "../services/api/episode-api";

const useSingleCharacter = (id) => {
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        const data = await getSingleCharacter(id);
        setCharacter(data);

        const episodeIds = data.episode.map((url) => {
          const parts = url.split("/");
          return parts[parts.length - 1];
        });

        if (episodeIds.length > 0) {
          const episodeData = await getMultipleEpisodes(episodeIds);
          setEpisodes(Array.isArray(episodeData) ? episodeData : [episodeData]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCharacter();
    }
  }, [id]);

  return { character, episodes, loading, error };
};

export default useSingleCharacter;
