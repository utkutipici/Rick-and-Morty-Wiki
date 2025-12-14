import { useState, useEffect } from "react";
import { getFilteredEpisodes } from "../services/api/episode-api";

const useEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageInfo, setPageInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    name: "",
    episode: "",
  });

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true);

        const activeFilters = {
          page: currentPage,
          ...(filters.name && { name: filters.name }),
          ...(filters.episode && { episode: filters.episode }),
        };

        const data = await getFilteredEpisodes(activeFilters);
        setEpisodes(data.results || []);
        setPageInfo(data.info || {});
        setError(null);
      } catch (err) {
        setError(err.message);
        setEpisodes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchEpisodes();
  }, [currentPage, filters]);

  return {
    episodes,
    loading,
    error,
    pageInfo,
    currentPage,
    setCurrentPage,
    filters,
    setFilters,
  };
};

export default useEpisodes;
