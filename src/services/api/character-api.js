const API_URL = "https://rickandmortyapi.com/api/character";

export const getCharacters = async (page = 1) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return { info: {}, results: [] };
  }
};

//id: character ID
export const getSingleCharacter = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching character with ID ${id}:`, error);
    return null;
  }
};

//ids: array of  character IDs
//returns array of character objects
export const getMultipleCharacters = async (ids) => {
  try {
    const response = await fetch(`${API_URL}/${ids.join(",")}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching characters with IDs ${ids}:`, error);
    return [];
  }
};

// For example, If you want to check how many alive Ricks exist, just add ?name=rick&status=alive to the URL.

// Available parameters:

// name: filter by the given name.
// status: filter by the given status (alive, dead or unknown).
// species: filter by the given species.
// type: filter by the given type.
// gender: filter by the given gender (female, male, genderless or unknown).

// URLSearchParams kullanımını buradan öğrendim.
//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
export const getFilteredCharacters = async (filters) => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_URL}/?${queryParams}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      `Error fetching filtered characters with filters ${JSON.stringify(
        filters
      )}:`,
      error
    );
    return { info: {}, results: [] };
  }
};
