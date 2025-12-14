import { useState, useEffect } from "react";
import { getFilteredLocations } from "../services/api/location-api";

const useLocations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageInfo, setPageInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    name: "",
    type: "",
    dimension: "",
  });

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);

        const activeFilters = {
          page: currentPage,
          ...(filters.name && { name: filters.name }),
          ...(filters.type && { type: filters.type }),
          ...(filters.dimension && { dimension: filters.dimension }),
        };

        const data = await getFilteredLocations(activeFilters);
        setLocations(data.results || []);
        setPageInfo(data.info || {});
        setError(null);
      } catch (err) {
        setError(err.message);
        setLocations([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLocations();
  }, [currentPage, filters]);

  return {
    locations,
    loading,
    error,
    pageInfo,
    currentPage,
    setCurrentPage,
    filters,
    setFilters,
  };
};

export default useLocations;
