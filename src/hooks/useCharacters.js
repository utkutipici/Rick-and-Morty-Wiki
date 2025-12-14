import { useState, useEffect } from "react";
import { getFilteredCharacters } from "../services/api/character-api";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageInfo, setPageInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);

        const activeFilters = {
          page: currentPage,
          ...(filters.name && { name: filters.name }),
          ...(filters.status && { status: filters.status }),
          ...(filters.species && { species: filters.species }),
          ...(filters.type && { type: filters.type }),
          ...(filters.gender && { gender: filters.gender }),
        };

        const data = await getFilteredCharacters(activeFilters);
        setCharacters(data.results || []);
        setPageInfo(data.info || {});
        setError(null);
      } catch (err) {
        setError(err.message);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [currentPage, filters]);

  return {
    characters,
    loading,
    error,
    pageInfo,
    currentPage,
    setCurrentPage,
    filters,
    setFilters,
  };
};

export default useCharacters;
