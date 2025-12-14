const API_URL = "https://rickandmortyapi.com/api/episode";

export const getEpisodes = async (page = 1) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching episodes:", error);
    return { info: {}, results: [] };
  }
};

//id: episode ID
export const getSingleEpisode = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching episode with ID ${id}:`, error);
    return null;
  }
};

//ids: array of  episode IDs
//returns array of episode objects
export const getMultipleEpisodes = async (ids) => {
  try {
    const response = await fetch(`${API_URL}/${ids.join(",")}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching episodes with IDs ${ids}:`, error);
    return [];
  }
};

// Available parameters:

// name: filter by the given name.
// episode: filter by the given episode code.

// URLSearchParams kullanımını buradan öğrendim.
//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
export const getFilteredEpisodes = async (filters) => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_URL}/?${queryParams}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      `Error fetching filtered episodes with filters ${JSON.stringify(
        filters
      )}:`,
      error
    );
    return { info: {}, results: [] };
  }
};
