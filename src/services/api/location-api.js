const API_URL = "https://rickandmortyapi.com/api/location";

export const getLocations = async (page = 1) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return { info: {}, results: [] };
  }
};

//id: location ID
export const getSingleLocation = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching location with ID ${id}:`, error);
    return null;
  }
};

//ids: array of location IDs
//returns array of location objects
export const getMultipleLocations = async (ids) => {
  try {
    const response = await fetch(`${API_URL}/${ids.join(",")}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching locations with IDs ${ids}:`, error);
    return [];
  }
};

// Available parameters:

// name: filter by the given name.
// type: filter by the given type.
// dimension: filter by the given dimension.

// URLSearchParams kullanımını buradan öğrendim.
//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
export const getFilteredLocations = async (filters) => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_URL}/?${queryParams}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      `Error fetching filtered locations with filters ${JSON.stringify(
        filters
      )}:`,
      error
    );
    return { info: {}, results: [] };
  }
};
